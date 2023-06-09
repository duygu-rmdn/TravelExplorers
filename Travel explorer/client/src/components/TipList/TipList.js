import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { TipItem } from './TipItem/TipItem';
import { TipContext } from '../../contexts/TipContext';
import { categories } from '../../constants';

export const TipList = () => {
    const {categoryId} = useParams();
    let { tips } = useContext(TipContext);

    if (categoryId) {
        const category = categories.filter(x => x.id == categoryId)[0].name;
        tips = tips.filter(x => x.category === category);
    }

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">
                        Tips
                    </h6>
                    <h1 className="mb-5">
                        Explore Our <span className="text-primary text-uppercase">Travel tips</span>
                    </h1>
                </div>
                <div className="row g-4">
                    {tips.map(x =>  <TipItem key={x._id} {...x}/> )}

                    {tips.length === 0 &&
                        (<>
                            <h3 className="no-articles">No articles yet</h3>
                            <Link to={"/create"} className="btn btn-primary py-3 px-5 mt-2 col-md-3" >
                                Share your tips
                            </Link>
                        </>)}
                </div>
            </div>
        </div>
    );
};
