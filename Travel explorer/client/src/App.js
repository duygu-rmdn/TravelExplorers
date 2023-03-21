import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { tipServiceFactory } from './services/tipService';
import { authServiceFactory } from './services/authService';

import { Up } from "./components/Up/Up";
import { Home } from "./components/Home/Home";
import { About } from './components/About/About';
import { Header } from "./components/Header/Header";
// import { Spiner } from "./components/Spiner/Spiner";
import { Create } from './components/Create/Create';
import { Footer } from './components/Footer/Footer';
import { TipList } from './components/TipList/TipList';
import { Categories } from './components/Categories/Categories';
import { Testimonial } from "./components/Testimonial/Testimonial";
import { TipContext } from './contexts/tipContext';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Login } from './components/Login/Login';
import { AuthContext } from './contexts/authContext';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const [tips, setTips] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const tipService = tipServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken)


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

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/tips');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/tips');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };


    const contextValue = {
        tips,
        onTipAddSubmit,
        onDeleteClick,
        onTipDeleteClose,
        onTipDeleteSumit,
        onLoginSubmit,
        showDeleteModal,
        onTipUpdateSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    const authContextValue = {
        onLogout,
        onLoginSubmit,
        onRegisterSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <TipContext.Provider value={contextValue}>
            <AuthContext.Provider value={authContextValue}>
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
                    </Routes>
                </div>
                <Testimonial />
                <Footer />
                <Up />
            </AuthContext.Provider>
        </TipContext.Provider>
    );
};

export default App;
