import { Link } from "react-router-dom";
import { Navigation } from "./Navigation.js/Navigation";

export const Header = () => {
    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <Link to={'/'} className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h3 className="m-0 text-primary text-uppercase">Travel explorer</h3>
                    </Link>
                </div>
                <div className="col-lg-9">
                    <Navigation />

                </div>
            </div>
        </div>
    );
};
