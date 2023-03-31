import { Route, Routes } from 'react-router-dom';

import { TipProvider } from './contexts/TipContext';
import { AuthProvider } from './contexts/AuthContext';

import { Up } from './components/Up/Up';
import { Edit } from './components/Edit/Edit';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { Logout } from './components/Logout/Logout';
import { Create } from './components/Create/Create';
import { Footer } from './components/Footer/Footer';
import { Details } from './components/Details/Details';
// import { Spiner } from './components/Spiner/Spiner';
import { TipList } from './components/TipList/TipList';
import { NotFound } from './components/NoFound/NotFound';
import { Register } from './components/Register/Register';
import { RouteGuard } from './components/common/RouteGuard';
import { Categories } from './components/Categories/Categories';
import { Testimonial } from './components/Testimonial/Testimonial';

function App() {
    return (
        <AuthProvider>
            <TipProvider>
                <Header />
                <div className="container-xxl bg-white p-0">
                    {/* <Spiner /> */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/tips' element={<TipList />} />
                        <Route path='/categories' element={<Categories />} />
                        <Route element={<RouteGuard />}>
                            <Route path='/create' element={<Create />} />
                            <Route path='/edit/:tipId' element={<Edit />} />
                            <Route path='/logout' element={<Logout />} />
                        </Route>
                        <Route path='/tips/:tipId' element={<Details />} />
                        <Route path='/categories/:categoryId' element={<TipList />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
                <Testimonial />
                <Footer />
                <Up />
            </TipProvider>
        </AuthProvider>
    );
};

export default App;
