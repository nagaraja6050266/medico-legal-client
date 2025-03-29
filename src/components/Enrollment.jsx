import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OtpDialog from "./OtpDialog";
import { sendOtp, verifyOtp, createPatient } from "../api/patientApi"; // Import API functions

function Enrollment({ header = "Enrollment Form", patientData = {} }) {
    const [showOtpDialog, setShowOtpDialog] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        parentName: "",
        age: "",
        phoneNumber: "",
        dob: "",
        address: "",
        admissionDate: "",
        ...patientData,
    });

    useEffect(() => {
        setFormData({ ...formData, ...patientData });
    }, [patientData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendOtp(formData.phoneNumber);
            alert("OTP sent to the patient's phone number.");
            setShowOtpDialog(true);
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Failed to send OTP. Please try again.");
        }
    };

    const handleOtpSubmit = async (otp) => {
        try {
            await verifyOtp(formData.phoneNumber, otp);
            setOtpVerified(true);
            alert("OTP verified successfully!");

            const requestBody = {
                name: formData.name,
                dob: formData.dob,
                gender: formData.gender,
                contact: formData.phoneNumber,
                husbandName:
                    formData.gender === "female" ? formData.parentName : null,
                fatherName:
                    formData.gender !== "female" ? formData.parentName : null,
                address: formData.address,
                admissionDate: formData.admissionDate,
            };
            await createPatient(requestBody);
            alert("Patient created successfully!");
            setShowOtpDialog(false);
        } catch (error) {
            console.error("Error verifying OTP or creating patient:", error);
            alert("Failed to verify OTP or create patient. Please try again.");
        }
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
                <div className="form-group row">
                    <label htmlFor="dob" className="col-sm-2 col-form-label">
                        Date of Birth
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className="form-control"
                            id="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="address"
                        className="col-sm-2 col-form-label"
                    >
                        Address
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="admissionDate"
                        className="col-sm-2 col-form-label"
                    >
                        Admission Date
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className="form-control"
                            id="admissionDate"
                            value={formData.admissionDate}
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
                <OtpDialog
                    onClose={() => setShowOtpDialog(false)}
                    onOtpSubmit={handleOtpSubmit}
                />
            )}
        </div>
    );
}

export default Enrollment;
