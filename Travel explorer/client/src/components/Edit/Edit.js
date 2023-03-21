import { useParams } from "react-router-dom"
import { PhotoGrid } from "../PhotoGrid/PhotoGrid"
import { EditForm } from "./EditForm/EditForm"

export const Edit = () => {
    const { tipId } = useParams();

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">
                        Edit
                    </h6>
                    <h1 className="mb-5">
                        Update your <span className="text-primary text-uppercase">Travel tip</span>
                    </h1>
                </div>
                <div className="row g-5">
                    <PhotoGrid />
                    <EditForm tipId={tipId} />
                </div>
            </div>
        </div>
    )
}