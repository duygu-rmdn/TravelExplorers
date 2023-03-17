import { Link } from 'react-router-dom';

export const Navigation = () => {
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
                <Link to={'/hacks'} className="nav-item nav-link">
                    Hacks
                </Link>
                <Link to={'/categories'} className="nav-item nav-link">
                    Categories
                </Link>
                <Link to={'/create'} className="nav-item nav-link">
                    Create
                </Link>
                <Link to={'/about'} className="nav-item nav-link">
                    About
                </Link>
            </div>
        </div>
    </nav>
    );
};