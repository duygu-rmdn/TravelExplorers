import { useForm } from '../../../hooks/useForm';

export const CreateReview = ({
    onReviewSubmit
}) => {
    const {values, changeHandler, onSubmit, showValidation } = useForm({
        review: ''
    }, onReviewSubmit);

    return (
        <div className="col-lg-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
            {showValidation !== '' && <p style={{ color: 'red' }}>{showValidation}</p>}
                <form onSubmit={onSubmit}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input
                                    name="review"
                                    type="text"
                                    className="form-control"
                                    id="review"
                                    placeholder="Review"
                                value={values.review}
                                onChange={changeHandler}
                                />
                                <label htmlFor="review">Add Review</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit" value="Create Tips">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}