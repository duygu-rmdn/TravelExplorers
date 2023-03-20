import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import * as tipsService from './service/tipsService';

import { Up } from "./components/Up/Up";
import { Home } from "./components/Home/Home";
import { About } from './components/About/About';
import { Header } from "./components/Header/Header";
import { Spiner } from "./components/Spiner/Spiner";
import { Create } from './components/Create/Create';
import { Footer } from './components/Footer/Footer';
import { TipList } from './components/TipList/TipList';
import { Categories } from './components/Categories/Categories';
import { Testimonial } from "./components/Testimonial/Testimonial";
import { TipContext } from './contexts/tipContext';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';

function App() {
    const navigate = useNavigate();
    const [tips, setTips] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        tipsService.getAll()
            .then(result => setTips(result));
    }, []);


    const onTipAddSubmit = async (values) => {
        const tip = await tipsService.create({ values });

        navigate(`/tips/${tip._id}`);
        setTips(state => [...state, tip]);
    };

    const onDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const onTipDeleteClose = () => {
        setShowDeleteModal(false);
    };

    const onTipDeleteSumit = async (e, tipId) => {
        e.preventDefault();

        const tip = await tipsService.remove(tipId);
        setTips(state => state.filter(x => x._id !== tipId));

        setShowDeleteModal(false);
        navigate('/tips');
    };

    const onTipUpdateSubmit = async (formValues, tipId) => {
        const updatedTip = await tipsService.update(tipId, formValues);
        setTips(state => state.map(x => x._id === tipId ? updatedTip : x));

        navigate(`/tips/${tipId}`);
    };


    const contextValue = {
        onTipAddSubmit,
        tips,
        onDeleteClick,
        onTipDeleteClose,
        onTipDeleteSumit,
        showDeleteModal,
        onTipUpdateSubmit
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
                </Routes>
            </div>
            <Testimonial />
            <Footer />
            <Up />
        </TipContext.Provider>
    );
};

export default App;
