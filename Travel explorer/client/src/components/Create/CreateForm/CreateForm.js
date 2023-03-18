import { useContext } from "react";
import React, { useState, useMemo } from 'react';
import { useForm } from '../../../hooks/useForm';
import { categories } from "../../../constants";
import countryList from 'react-select-country-list';
import { HackContext } from "../../../contexts/hackContext";

export const CreateForm = () => {
    const { onHackAddSubmit } = useContext(HackContext);
    const options = useMemo(() => countryList().getData(), []);

    const { formValues, onChangeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        imageUrl: '',
        description: '',
        conclusion: '',
        country: '',
        maxPrice: '',
        nights: '',
    }, onHackAddSubmit);

    

    return (
        <div className="col-lg-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={onSubmit}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input
                                    value={formValues.title}
                                    onChange={onChangeHandler}
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
                                value={formValues.category} 
                                    onChange={onChangeHandler}>
                                    {categories.map((x, index) => (
                                        <option key={index} value={x.id}>
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
                                    value={formValues.country}
                                    onChange={onChangeHandler}>
                                    {options.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="country">Country</label>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="form-floating">
                                <Select className="form-select"
                                    id="country"
                                    options={options}
                                    value={value}
                                    onChange={onChangeHandler}>
                                </Select>
                                <label htmlFor="country">Select country</label>
                            </div>
                        </div> */}
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    value={formValues.nights}
                                    onChange={onChangeHandler}
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
                                    value={formValues.maxPrice}
                                    onChange={onChangeHandler}
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
                                    value={formValues.imageUrl}
                                    onChange={onChangeHandler}
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
                                    value={formValues.description}
                                    onChange={onChangeHandler}
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
                                    value={formValues.conclusion}
                                    onChange={onChangeHandler}
                                />
                                <label htmlFor="conclusion">Conclusion</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit" value="Create Hack">
                                Share
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};