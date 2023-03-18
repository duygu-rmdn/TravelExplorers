import { Link } from "react-router-dom";
import { categories } from "../../../constants";

export const TipItem = ({
    id,
    category,
    title,
    conclusion,
    imageUrl
}) => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                    <img className="img-fluid" src={imageUrl} alt="tip image" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                        {category}
                    </small>
                </div>
                <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{title}</h5>
                    </div>
                    <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3">
                            <i className="fa fa-star text-primary" /> 3 Reviews
                        </small>
                    </div>
                    <p className="text-body mb-3">
                        {conclusion}
                    </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/tips/${id}`} className="btn btn-sm btn-dark rounded py-2 px-4">
                            View Detail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};