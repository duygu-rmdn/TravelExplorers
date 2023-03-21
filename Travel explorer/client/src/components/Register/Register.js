import { PhotoGrid } from "../PhotoGrid/PhotoGrid";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export const Register = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">
                            Register
                        </h6>
                        <h1 className="mb-4">
                            Register to{" "}
                            <span className="text-primary text-uppercase">Travel explorer</span>
                        </h1>
                        <RegisterForm />
                    </div>
                    <PhotoGrid />
                </div>
            </div>
        </div >
    );
};