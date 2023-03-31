import { Link } from 'react-router-dom';

import { categories } from '../../constants';

export const Footer = () => {
    return (
        <div
            className="container-fluid bg-dark text-light footer wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container pb-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-primary rounded p-4">
                            <a href="index.html">
                                <h1 className="text-white text-uppercase mb-3">Travel Explorer</h1>
                            </a>
                            <p className="text-white mb-0">
                            This website has been created solely for educational purposes.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row gy-5 g-4">
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                    Pages
                                </h6>
                                <Link className="btn btn-link" to={"/"}>
                                    Home
                                </Link>
                                <Link className="btn btn-link" to={"/about"}>
                                    About Us
                                </Link>
                                <Link className="btn btn-link" to={"/tips"}>
                                    Tips
                                </Link>
                                <Link className="btn btn-link" to={"/create"}>
                                    Create
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                    Categories
                                </h6>
                                {categories.map(x => <Link key={x.id} className="btn btn-link" to={`/categories/${x.id}`}>
                                    {x.name}
                                </Link>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            ©{" "}
                            <a className="border-bottom" href="#">
                                Travel explorer
                            </a>
                            , All Right Reserved.
                            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                            Designed By{" "}
                            <a className="border-bottom" href="https://htmlcodex.com">
                                HTML Codex
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};