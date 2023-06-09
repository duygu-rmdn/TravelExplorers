import { useContext } from 'react';

import { useForm } from '../../../hooks/useForm';
import { NotFound } from '../../NotFound/NotFound';
import { AuthContext } from '../../../contexts/AuthContext';

export const RegisterForm = () => {
    const { onRegisterSubmit, isAuthenticated } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    if(isAuthenticated){
        return <NotFound />
    }
    
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
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Username"
                                    value={values.username}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Username</label>
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
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={values.confirmPassword}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Confirm Password</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit" value="Create Tips">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};