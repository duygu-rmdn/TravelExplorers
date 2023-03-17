import {HackItem} from './HackItem/HackItem';

export const HackList = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">
                        Hacks
                    </h6>
                    <h1 className="mb-5">
                        Explore Our <span className="text-primary text-uppercase">Travel hacks</span>
                    </h1>
                </div>
                <div className="row g-4">
                    <HackItem />
                    <HackItem />
                    <HackItem />
                    <HackItem />
                    <HackItem />
                </div>
            </div>
        </div>
    );
};
