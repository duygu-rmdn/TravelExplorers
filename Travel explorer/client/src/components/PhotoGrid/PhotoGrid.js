export const PhotoGrid = () => {
    return (
        <div className="col-lg-6">
            <div className="row g-3">
                <div className="col-6 text-end">
                    <img
                        className="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.1s"
                        src="img/about-1.jpg"
                        style={{ marginTop: "25%" }}
                    />
                </div>
                <div className="col-6 text-start">
                    <img
                        className="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.3s"
                        src="img/about-2.jpg"
                    />
                </div>
                <div className="col-6 text-end">
                    <img
                        className="img-fluid rounded w-50 wow zoomIn"
                        data-wow-delay="0.5s"
                        src="img/about-3.jpg"
                    />
                </div>
                <div className="col-6 text-start">
                    <img
                        className="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.7s"
                        src="img/about-4.jpg"
                    />
                </div>
            </div>
        </div>
    );
};