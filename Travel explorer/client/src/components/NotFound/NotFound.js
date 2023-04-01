import { Link } from 'react-router-dom';

import { PhotoGrid } from '../PhotoGrid/PhotoGrid';

export const NotFound = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h1 className="mb-4">
                            Page not found{" "}
                            <span className="text-primary text-uppercase">404</span>
                        </h1>
                        <p className="mb-4">
                            The page you were looking for does not exist... :(
                        </p>
                        <Link to={"/tips"} className="btn btn-primary py-3 px-5 mt-2" >
                            Back to tips
                        </Link>
                    </div>
                    <PhotoGrid />
                </div>
            </div>
        </div>
    );
};