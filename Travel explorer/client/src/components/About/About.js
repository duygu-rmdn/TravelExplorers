import { Link } from 'react-router-dom';

export const About = () => {
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
                            //ToDo: Here you can find traver hacks.....
                        </p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-hotel fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="mb-0">Hacks</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="mb-0">Users</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2" />
                                        <h2 className="mb-1" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="mb-0">Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={"/hacks"} className="btn btn-primary py-3 px-5 mt-2" >
                            View hacks
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img
                                    className="img-fluid rounded w-75 wow zoomIn"
                                    data-wow-delay="0.1s"
                                    src="img/about-1.jpg"
                                    style={{ marginTop: "25%" }}
                                />
                            </div>
                            <div className="col-6 text-start">
                                <img
                                    className="img-fluid rounded w-100 wow zoomIn"
                                    data-wow-delay="0.3s"
                                    src="img/about-2.jpg"
                                />
                            </div>
                            <div className="col-6 text-end">
                                <img
                                    className="img-fluid rounded w-50 wow zoomIn"
                                    data-wow-delay="0.5s"
                                    src="img/about-3.jpg"
                                />
                            </div>
                            <div className="col-6 text-start">
                                <img
                                    className="img-fluid rounded w-75 wow zoomIn"
                                    data-wow-delay="0.7s"
                                    src="img/about-4.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};