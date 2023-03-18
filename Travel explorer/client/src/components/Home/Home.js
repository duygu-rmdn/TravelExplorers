import { About } from '../About/About';
import { Categories } from '../Categories/Categories';
import { Search } from '../Search/Search';
import { Carousel } from '../Carousel/Carousel';
import { TipList } from '../TipList/TipList';

export const Home = () => {
    return (
        <>
            <Carousel />
            <Search />
            <About />
            <TipList />
            <Categories />
        </>
    );
};