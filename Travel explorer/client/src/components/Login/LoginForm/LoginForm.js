import { useContext } from "react";

import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/authContext";

export const LoginForm = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);
    return (
        <div className="col-lg-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={onSubmit}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit" value="Create Tips">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};