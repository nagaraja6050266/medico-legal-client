import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OtpDialog from "./OtpDialog"; // Import OtpDialog component

function Enrollment({ header = "Enrollment Form", patientData = {} }) {
    const [showOtpDialog, setShowOtpDialog] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        parentName: "",
        age: "",
        weight: "",
        phoneNumber: "",
        ...patientData,
    });

    useEffect(() => {
        setFormData({ ...formData, ...patientData });
    }, [patientData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowOtpDialog(true);
    };

    return (
        <div className="container mt-5">
            <h1
                style={{ textAlign: "center", marginTop: "100px !important" }}
                className="m-2"
            >
                {header}
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">
                        Gender
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            id="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="parentName"
                        className="col-sm-2 col-form-label"
                    >
                        Parent's/Husband's Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="age" className="col-sm-2 col-form-label">
                        Age
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="weight" className="col-sm-2 col-form-label">
                        Weight
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="phoneNumber"
                        className="col-sm-2 col-form-label"
                    >
                        Phone Number
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="tel"
                            className="form-control"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {showOtpDialog && (
                <OtpDialog onClose={() => setShowOtpDialog(false)} />
            )}
        </div>
    );
}

export default Enrollment;
