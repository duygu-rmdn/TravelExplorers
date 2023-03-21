import { useContext, useMemo } from 'react';
import { useForm } from '../../../hooks/useForm';
import countryList from 'react-select-country-list';

import { categories } from '../../../constants';
import { TipContext } from '../../../contexts/tipContext';
import { AuthContext } from '../../../contexts/authContext';

export const CreateForm = () => {
    const { userId } = useContext(AuthContext);
    const { onTipAddSubmit } = useContext(TipContext);
    const options = useMemo(() => countryList().getData(), []);

    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        imageUrl: '',
        description: '',
        conclusion: '',
        country: '',
        maxPrice: '',
        nights: '',
        ownerId: userId
    }, onTipAddSubmit);

    return (
        <div className="col-lg-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={onSubmit}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input
                                    value={values.title}
                                    onChange={changeHandler}
                                    name="title"
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Title"
                                />
                                <label htmlFor="title">Title</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select"
                                    id="category"
                                    name="category"
                                    value={values.category}
                                    onChange={changeHandler}>

                                    {categories.map((x) => (
                                        <option key={x.id} value={x.name}>
                                            {x.name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="category">Select Category</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select"
                                    id="country"
                                    name="country"
                                    value={values.country}
                                    onChange={changeHandler}>
                                    {options.map((option, index) => (
                                        <option key={index} value={option.label}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="country">Country</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    value={values.nights}
                                    onChange={changeHandler}
                                    min="1"
                                    name="nights"
                                    type="number"
                                    className="form-control"
                                    id="nights"
                                    placeholder="Nights"
                                />
                                <label htmlFor="nights">Nights</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    value={values.maxPrice}
                                    onChange={changeHandler}
                                    name="maxPrice"
                                    type="number"
                                    className="form-control"
                                    id="maxPrice"
                                    placeholder="Title"
                                />
                                <label htmlFor="maxPrice">Max Price</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div
                                className="form-floating date"
                                id="date3"
                                data-target-input="nearest"
                            >
                                <input
                                    value={values.imageUrl}
                                    onChange={changeHandler}
                                    name="imageUrl"
                                    type="text"
                                    className="form-control datetimepicker-input"
                                    id="imageUrl"
                                    placeholder="Image url"
                                />
                                <label htmlFor="imageUrl">Image url</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Description"
                                    id="description"
                                    style={{ height: 200 }}
                                    name="description"
                                    value={values.description}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="description">Description</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Conclusion"
                                    id="conclusion"
                                    style={{ height: 90 }}
                                    name="conclusion"
                                    value={values.conclusion}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="conclusion">Conclusion</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit" value="Create Tips">
                                Share
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};