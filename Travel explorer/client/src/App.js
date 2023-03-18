import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import * as tipsService from './service/tipsService';

import { baseUrl } from './constants';
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

function App() {
    const navigate = useNavigate();
    const [tips, setTips] = useState([]);

    useEffect(() => {
        tipsService.getAll()
        .then(result => setTips(result));
    }, []);


    const onTipAddSubmit = async (values) => {
    const tip = await tipsService.create({values});

        navigate('/tips');
        setTips(state => [...state, tip]);
    };

    const contextValue = {
        onTipAddSubmit,
        tips,
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
                </Routes>
            </div>
            <Testimonial />
            <Footer />
            <Up />
        </TipContext.Provider>
    );
};

export default App;
