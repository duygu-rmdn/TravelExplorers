import { PhotoGrid } from '../PhotoGrid/PhotoGrid';
import { CreateForm } from './CreateForm/CreateForm';

export const Create = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">
                        Create
                    </h6>
                    <h1 className="mb-5">
                        Share your <span className="text-primary text-uppercase">Travel tips</span>
                    </h1>
                </div>
                <div className="row g-5">
                    <PhotoGrid />
                    <CreateForm />
                </div>
            </div>
        </div>

    );
};