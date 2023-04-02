import { About } from '../About/About';
import { Categories } from '../Categories/Categories';
import { Carousel } from '../Carousel/Carousel';
import { TipList } from '../TipList/TipList';

export const Home = () => {
    return (
        <>
            <Carousel />
            <About />
            <TipList />
            <Categories />
        </>
    );
};