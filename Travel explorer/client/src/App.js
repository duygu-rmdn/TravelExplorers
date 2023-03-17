import { Route, Routes } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Spiner } from "./components/Spiner/Spiner";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Footer } from "./components/Footer/Footer";
import { Up } from "./components/Up/Up";
import { Home } from "./components/Home/Home";
import { About } from './components/About/About';
import { HackList } from './components/HackList/HackList';
import { Categories } from './components/Categories/Categories';
import { Create } from './components/Create/Create';

function App() {

    return (
        <>
            <Header />
            <div className="container-xxl bg-white p-0">
                {/* <Spiner /> */}
                <Routes> 
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/hacks' element={<HackList/>} />
                    <Route path='/categories' element={<Categories/>} />
                    <Route path='/create' element={<Create/>} />
                </Routes>
            </div>
            <Testimonial />
            <Footer />
            <Up />
        </>
    );
}

export default App;
