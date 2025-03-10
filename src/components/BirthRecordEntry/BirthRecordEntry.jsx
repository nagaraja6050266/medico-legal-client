import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BirthRecordEntry() {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        gender: "",
        placeOfBirth: "",
        motherName: "",
        fatherName: "",
        address: "",
        parentMobileNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <h2>Birth Record Entry</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Date of Birth
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className="form-control"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Place of Birth
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="placeOfBirth"
                            value={formData.placeOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Mother's Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Father's Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Parent Mobile Number
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="parentMobileNumber"
                            value={formData.parentMobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BirthRecordEntry;
