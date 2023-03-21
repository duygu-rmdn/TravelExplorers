import { PhotoGrid } from "../PhotoGrid/PhotoGrid";
import { LoginForm } from "./LoginForm/LoginForm";

export const Login = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">
                            Login
                        </h6>
                        <h1 className="mb-4">
                            Login to{" "}
                            <span className="text-primary text-uppercase">Travel explorer</span>
                        </h1>
                       <LoginForm />
                    </div>
                    <PhotoGrid />
                </div>
            </div>
        </div >
    );
};