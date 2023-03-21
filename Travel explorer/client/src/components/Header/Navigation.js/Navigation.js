import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authContext';

export const Navigation = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            <Link to={'/'} className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-primary text-uppercase">Travel explorer</h1>
            </Link>
            <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
            >
                <div className="navbar-nav mr-auto py-0">
                    <Link to={'/'} className="nav-item nav-link active">
                        Home
                    </Link>
                    <Link to={'/tips'} className="nav-item nav-link">
                        Tips
                    </Link>
                    <Link to={'/categories'} className="nav-item nav-link">
                        Categories
                    </Link>
                    {isAuthenticated && (
                        <>
                            <Link to={'/create'} className="nav-item nav-link">
                                Create
                            </Link>
                            <Link to={'/logout'} className="nav-item nav-link">
                                Logout
                            </Link>
                        </>
                    )}
                    {!isAuthenticated && (
                        <>
                            <Link to={'/login'} className="nav-item nav-link">
                                Login
                            </Link>
                            <Link to={'/register'} className="nav-item nav-link">
                                Register
                            </Link>
                        </>
                    )}
                    <Link to={'/about'} className="nav-item nav-link">
                        About
                    </Link>
                    {isAuthenticated && (<span className="nav-item nav-link">Hello, {userEmail}</span>)}
                </div>
            </div>
        </nav >
    );
};