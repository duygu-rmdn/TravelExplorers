import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as tipServise from '../../service/tipsService';

export const Details = () => {
    const { tipId } = useParams();
    const [tip, setTip] = useState({});
    //const [reviews, setReviews] = useState('');

    useEffect(() => {
        tipServise.getOne(tipId)
            .then(result => {
                setTip(result);
            });
    }, [tipId]);


    // const { tips } = useContext(TipContext);
    // const result = tips.filter(x => x._id === tipId);
    // const tip = result[0];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">
                            Details
                        </h6>

                        {tip?.values?.title && (<h1 className="mb-4">{tip.values.title} </h1>)}

                        <p>Category: </p>
                        {tip?.values?.category && (<h3 className="mb-4">{tip.values.category} </h3>)}

                        <p>Country: </p>
                        {tip?.values?.country && (<h3 className="mb-4">{tip.values.country} </h3>)}

                        <p>Max price: </p>
                        {tip?.values?.maxPrice && (<h3 className="mb-4">{tip.values.maxPrice} </h3>)}

                        <div className="row g-3 pb-4">
                            <p>Description:</p>
                            <div className="col-sm-12 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded  p-4">
                                        {tip?.values?.description && (<p className="mb-0">{tip.values.description}</p>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Conclusion: </p>
                        {tip?.values?.conclusion && (<h6 className="mb-4">{tip.values.conclusion} </h6>)}
                        <Link to={"/tips"} className="btn btn-primary py-3 px-5 mt-2" >
                            Bact to tips
                        </Link>
                    </div>

                    <div className="col-lg-6">
                        <img
                            className="img-fluid rounded w-75 wow zoomIn"
                            data-wow-delay="0.7s"
                            src={tip?.values?.imageUrl && tip.values.imageUrl}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};