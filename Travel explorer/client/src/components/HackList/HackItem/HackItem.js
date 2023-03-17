export const HackItem = () => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                    <img className="img-fluid" src="img/room-1.jpg" alt="" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                        Category name
                    </small>
                </div>
                <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">Hack name</h5>
                    </div>
                    <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3">
                            <i className="fa fa-star text-primary" /> 3 Review
                        </small>
                    </div>
                    <p className="text-body mb-3">
                        Conclusion  Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                        sed diam st
                    </p>
                    <div className="d-flex justify-content-between">
                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                            View Detail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};