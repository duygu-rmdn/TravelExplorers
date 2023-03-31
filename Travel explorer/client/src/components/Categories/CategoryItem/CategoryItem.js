import { Link } from "react-router-dom";

export const CategoryItem = ({
    id,
    name,
    description,
    className
}) => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <Link to={`/categories/${id}`} className="service-item rounded">
                    <div className="service-icon bg-transparent border rounded p-1">
                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                            <i className={className} />
                        </div>
                    </div>
                    <h5 className="mb-3">{name}</h5>
                    <p className="text-body mb-0">
                        {description}
                    </p>
            </Link>
        </div>
    );
};