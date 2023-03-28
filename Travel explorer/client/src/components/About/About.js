import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { TipContext } from '../../contexts/TipContext';
import * as reviewService from '../../services/reviewService';

import { PhotoGrid } from '../PhotoGrid/PhotoGrid';

export const About = () => {
    const { tips } = useContext(TipContext);
    const [reviews, setReviews] = useState(0);

    useEffect(() => {
        reviewService.getCount()
        .then(reviews => {
            setReviews(reviews)
        })
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">
                            About Us
                        </h6>
                        <h1 className="mb-4">
                            Welcome to{" "}
                            <span className="text-primary text-uppercase">Travel explorer</span>
                        </h1>
                        <p className="mb-4">
                            Welcome to Travel Explorer, a site dedicated to inspiring and guiding travelers from around the world. Our mission is to provide useful information, insider tips, and unique perspectives on travel that you won't find anywhere else.
                            <br/>Our team of experienced travelers has explored every corner of the globe, from bustling cities to remote villages. We've slept under the stars in the Sahara Desert, tasted the best street food in Bangkok, and trekked through the lush rainforests of Costa Rica. Our passion for travel is what drives us to share our knowledge and expertise with you.
                            <br/>At Travel Explorer, we believe that travel is more than just visiting new places. It's about connecting with local cultures, making new friends, and discovering new perspectives. We hope to inspire you to step out of your comfort zone and explore the world around you.
                            <br/>We're proud to have received glowing feedback from our clients and readers. Here's what a few of them have to say:
                        </p>
                            <div className="border rounded text-center p-1 m-1"><br/>"Travel Explorer provided us with an unforgettable trip to Japan. Their personalized itinerary and expert advice made our trip smooth and hassle-free." <br/>- Sarah and John, Colorado</div>
                            <div className="border rounded text-center p-1 m-1"><br/>"I've been following Travel Explorer for years and their tips and recommendations have never failed me. Thanks to them, I've discovered some hidden gems that I never would have found on my own." <br/>- Lisa, New York</div>
                            <br/>We'd love to hear from you and answer any questions you may have. Let's explore the world together!
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-hotel fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            {tips.length}
                                        </h2>
                                        <p className="mb-0">Tips</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            6
                                        </h2>
                                        <p className="mb-0">Categories</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            {reviews}
                                        </h2>
                                        <p className="mb-0">Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={"/tips"} className="btn btn-primary py-3 px-5 mt-2" >
                            View tips
                        </Link>
                    </div>
                    <PhotoGrid />
                </div>
            </div>
        </div>
    );
};