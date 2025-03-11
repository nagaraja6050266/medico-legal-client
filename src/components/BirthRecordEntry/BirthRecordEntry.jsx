import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import OtpDialog from "../OtpDialog"; // Import OtpDialog component

function BirthRecordEntry() {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        gender: "",
        motherName: "",
        fatherName: "",
        address: "",
        parentMobileNumber: "",
        babyWeight: "", // Add babyWeight to formData
    });

    const [showOtpDialog, setShowOtpDialog] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowOtpDialog(true);
    };

    const handleOtpSubmit = (otp) => {
        alert("OTP Submitted: " + otp);
        setShowOtpDialog(false);
        navigate("/birth-record-details", { state: { formData } });
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
                    <label className="col-sm-2 col-form-label">
                        Baby Weight (kg)
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            name="babyWeight"
                            value={formData.babyWeight}
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
            {showOtpDialog && (
                <OtpDialog
                    onClose={() => setShowOtpDialog(false)}
                    onOtpSubmit={handleOtpSubmit}
                />
            )}
        </div>
    );
}

export default BirthRecordEntry;
