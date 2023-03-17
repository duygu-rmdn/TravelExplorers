export const Search = () => {
    return (
        <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
    >
        <div className="container">
            <div className="bg-white shadow" style={{ padding: 35 }}>
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-3">
                                <div className="date" id="date1" data-target-input="nearest">
                                    <input
                                        type="text"
                                        className="form-control datetimepicker-input"
                                        placeholder="Country"
                                        data-target="#date1"
                                        data-toggle="datetimepicker"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="date" id="date2" data-target-input="nearest">
                                    <input
                                        type="text"
                                        className="form-control datetimepicker-input"
                                        placeholder="Min price"
                                        data-target="#date2"
                                        data-toggle="datetimepicker"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="date" id="date2" data-target-input="nearest">
                                    <input
                                        type="text"
                                        className="form-control datetimepicker-input"
                                        placeholder="Max price"
                                        data-target="#date2"
                                        data-toggle="datetimepicker"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="date" id="date2" data-target-input="nearest">
                                    <input
                                        type="text"
                                        className="form-control datetimepicker-input"
                                        placeholder="Nighs"
                                        data-target="#date2"
                                        data-toggle="datetimepicker"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};