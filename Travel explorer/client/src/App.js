import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { baseUrl } from './constants';
import { Up } from "./components/Up/Up";
import { Home } from "./components/Home/Home";
import { About } from './components/About/About';
import { Header } from "./components/Header/Header";
import { Spiner } from "./components/Spiner/Spiner";
import { Create } from './components/Create/Create';
import { Footer } from './components/Footer/Footer';
import { HackList } from './components/HackList/HackList';
import { Categories } from './components/Categories/Categories';
import { Testimonial } from "./components/Testimonial/Testimonial";
import { HackContext } from './contexts/hackContext';

function App() {
    const navigate = useNavigate();
    const [hacks, setHacks] = useState([]);

    // useEffect(() => {
    //     fetch(baseUrl)
    //         .then(res => res.json())
    //         .then(result => {
    //             setHacks(Object.values(result));
    //         });
    // }, []);

    const onHackAddSubmit = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'applicatin/json'
            },
            body: JSON.stringify(values)
        });
        const result = await response.json();
        console.log(result);
        navigate('/hacks');
        setHacks(state => [...state, result]);
    };

    const contextValue = {
        onHackAddSubmit,
    };

    
    
    return (
        <HackContext.Provider value={contextValue}>
            <Header />
            <div className="container-xxl bg-white p-0">
                {/* <Spiner /> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/hacks' element={<HackList />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/create' element={<Create />} />
                </Routes>
            </div>
            <Testimonial />
            <Footer />
            <Up />
        </HackContext.Provider>
    );
};

export default App;
