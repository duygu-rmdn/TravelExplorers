import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import { TipContext } from '../../contexts/TipContext';
import { DeleteModal } from './DeleteModal/DeleteModal';
import * as reviewService from '../../services/reviewService'
import { tipServiceFactory } from '../../services/tipService';
import { AuthContext, useAuthContext } from '../../contexts/AuthContext';

import { CreateReview } from './CreateReview/CreateReview';

export const Details = () => {
    const { tipId } = useParams();
    const [tip, setTip] = useState({});
    //const [reviews, setReviews] = useState('');
    const { onDeleteClick } = useContext(TipContext);
    const { isAuthenticated, userId, username, email } = useAuthContext(AuthContext);
    const tipService = useService(tipServiceFactory);

    const isOwner = tip.ownerId === userId;

    useEffect(() => {
        Promise.all([
            tipService.getOne(tipId),
            reviewService.getAll(tipId)
        ]).then(([tipData, reviews]) => {
            setTip({
                ...tipData,
                reviews
            });
        });
    }, [tipId]);


    const onReviewSubmit = async (values) => {
        const response = await reviewService.create(tipId, values.review);

        setTip(state => ({
            ...state,
            reviews: [
                ...state.reviews,
                {
                    ...response,
                    author: {
                        username,
                        email
                    }
                }
            ]
        }));
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">
                            Details
                        </h6>

                        <h1 className="mb-4">{tip.title} </h1>

                        <p>Category: </p>
                        <h3 className="mb-4">{tip.category} </h3>

                        <p>Country: </p>
                        <h3 className="mb-4">{tip.country} </h3>

                        <p>Max price: </p>
                        <h3 className="mb-4">{tip.maxPrice} </h3>

                        <p>Nights: </p>
                        <h3 className="mb-4">{tip.nights} </h3>
                    </div>
                    <div className="col-lg-6">
                        <img
                            className="img-fluid rounded w-75 wow zoomIn"
                            data-wow-delay="0.7s"
                            src={tip.imageUrl && tip.imageUrl}
                        />

                    </div>
                    <div className="col-lg-12">
                        <div className="row g-3 pb-4">
                            <p>Description:</p>
                            <div className="col-sm-12 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded  p-4">
                                        <p className="mb-0">{tip.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Conclusion: </p>
                        <h6 className="mb-4">{tip.conclusion} </h6>

                        <hr style={{ height: 3, borderWidth: 0, color: "orange", backgroundColor: "orange" }} />

                        <p>Reviews:</p>
                        <ul>
                            {tip.reviews && tip.reviews.map(x => {
                                return (
                                    <li key={x._id}>
                                        <div className="border rounded p-1 m-1">
                                            <p><b>{x.author.username ?? x.author.email}</b>: {x.review}</p>
                                        </div>
                                    </li>
                                )
                            })}

                            {!tip.reviews?.length && <h5> There is no reviews!</h5>}
                        </ul>
                        <Link to={"/tips"} className="btn btn-primary py-3 px-5 mt-2" >
                            Back to tips
                        </Link> {" "}
                        {isAuthenticated && isOwner && <>
                            <Link to={`/edit/${tipId}`} className="btn btn-secondary py-3 px-5 mt-2">
                                Update tip
                            </Link >
                            {" "}
                            <></>
                            <button className="btn btn-danger py-3 px-5 mt-2" onClick={() => onDeleteClick(tip._id)}>
                                Delete tip
                            </button >
                        </>
                        }
                    </div>
                    <DeleteModal tipId={tipId} />


                    {isAuthenticated && <CreateReview onReviewSubmit={onReviewSubmit} />}
                </div>
            </div>
        </div>
    );
};