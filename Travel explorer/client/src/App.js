import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useService } from './hooks/useService';
import { AuthProvider } from './contexts/AuthContext';
import { tipServiceFactory } from './services/tipService';

import { Up } from './components/Up/Up';
import { Edit } from './components/Edit/Edit';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { About } from './components/About/About';
import { TipContext } from './contexts/tipContext';
import { Header } from './components/Header/Header';
import { Logout } from './components/Logout/Logout';
import { Create } from './components/Create/Create';
import { Footer } from './components/Footer/Footer';
import { Details } from './components/Details/Details';
// import { Spiner } from './components/Spiner/Spiner';
import { TipList } from './components/TipList/TipList';
import { Register } from './components/Register/Register';
import { Categories } from './components/Categories/Categories';
import { Testimonial } from './components/Testimonial/Testimonial';
import { NotFound } from './components/NoFound/NotFound';

function App() {
    const navigate = useNavigate();
    const [tips, setTips] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const tipService = tipServiceFactory(); 


    useEffect(() => {
        tipService.getAll()
            .then(result => setTips(result));
    }, []);


    const onTipAddSubmit = async (values) => {
        const tip = await tipService.create(values);

        setTips(state => [...state, tip]);

        navigate(`/tips/${tip._id}`);
    };

    const onDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const onTipDeleteClose = () => {
        setShowDeleteModal(false);
    };

    const onTipDeleteSumit = async (e, tipId) => {
        e.preventDefault();

        const tip = await tipService.remove(tipId);
        setTips(state => state.filter(x => x._id !== tipId));

        setShowDeleteModal(false);
        navigate('/tips');
    };

    const onTipUpdateSubmit = async (values) => {
        const updatedTip = await tipService.update(values._id, values);
        setTips(state => state.map(x => x._id === values._id ? updatedTip : x));

        navigate(`/tips/${values._id}`);
    };



    const contextValue = {
        tips,
        showDeleteModal,
        onDeleteClick,
        onTipAddSubmit,
        onTipDeleteClose,
        onTipDeleteSumit,
        onTipUpdateSubmit,
    };



    return (
            <TipContext.Provider value={contextValue}>
                <Header />
                <div className="container-xxl bg-white p-0">
                    {/* <Spiner /> */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/tips' element={<TipList />} />
                        <Route path='/categories' element={<Categories />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/edit/:tipId' element={<Edit />} />
                        <Route path='/tips/:tipId' element={<Details />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
                <Testimonial />
                <Footer />
                <Up />
            </TipContext.Provider>
    );
};

export default App;
