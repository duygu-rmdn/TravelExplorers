import { About } from "../About/About";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Carousel } from "../Carousel/Carousel";
import { HackList } from "../HackList/HackList";

export const Home = () => {
    return (
        <>
            <Carousel />
            <Search />
            <About />
            <HackList />
            <Categories />
        </>
    );
};