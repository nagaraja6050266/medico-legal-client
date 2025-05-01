import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OtpDialog from "./OtpDialog";
import { sendOtp, verifyOtp, createPatient } from "../api/patientApi"; // Import API functions
import { useNavigate } from "react-router-dom";

function Enrollment({ header = "Enrollment Form", patientData = {} }) {
    const [showOtpDialog, setShowOtpDialog] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const navigate = useNavigate();
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
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        console.log(id, " value set to ", value);
    };

    const getSMSMsg = async () => {
        return (
            "\n\nHi " +
            formData.name +
            "!\nThanks for registering...\nVerify your details below:\nGender: " +
            formData.gender +
            "\nParent / Husband's Name: " +
            formData.parentName +
            "\nDOB: " +
            formData.dob +
            "\nAge: " +
            formData.age +
            "\nAddress: " +
            formData.address +
            "\nAdmission Date: " +
            formData.admissionDate
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const msg = await getSMSMsg();
            await sendOtp(formData.phoneNumber, msg);
            alert("OTP sent to the patient's phone number.");
            setShowOtpDialog(true);
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Failed to send OTP. Please try again.");
        }
    };

    const handleOtpSubmit = async (otp) => {
        try {
            let phoneNumber = formData.phoneNumber;
            if (!phoneNumber.startsWith("+")) {
                phoneNumber = "+91" + phoneNumber;
            }
            await verifyOtp(phoneNumber, otp);
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
            navigate("/patients");
        } catch (error) {
            console.error("Error verifying OTP or creating patient:", error);
            alert("Failed to verify OTP or create patient. Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white">
                    <h1 className="text-center">{header}</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row align-items-center mb-4">
                            <label
                                htmlFor="name"
                                className="col-sm-3 col-form-label text-right"
                            >
                                Name
                            </label>
                            <div className="col-sm-9">
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
                        <div className="form-group row align-items-center mb-4">
                            <label
                                htmlFor="gender"
                                className="col-sm-3 col-form-label text-right"
                            >
                                Gender
                            </label>
                            <div className="col-sm-9">
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
                        <div className="form-group row align-items-center mb-4">
                            <label
                                htmlFor="parentName"
                                className="col-sm-3 col-form-label text-right"
                            >
                                Parent's/Husband's Name
                            </label>
                            <div className="col-sm-9">
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
                        <div className="form-group row align-items-center mb-4">
                            <label
                                htmlFor="age"
                                className="col-sm-3 col-form-label text-right"
                            >
                                Age
                            </label>
                            <div className="col-sm-9">
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
                        <div className="form-group row align-items-center mb-4">
                            <label
                                htmlFor="phoneNumber"
                                className="col-sm-3 col-form-label text-right"
                            >
                                Phone Number
                            </label>
                            <div className="col-sm-9">
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
                        <div className="form-group row align-items-center mb-4">
                            <label
                                htmlFor="dob"
                                className="col-sm-3 col-form-label text-right"
                            >
                                Date of Birth
                            </label>
                            <div className="col-sm-9">
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
                        <div className="form-group row align-items-center mb-4">
                            <label
                                htmlFor="address"
                                className="col-sm-3 col-form-label text-right"
                            >
                                Address
                            </label>
                            <div className="col-sm-9">
                                <textarea
                                    className="form-control"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row align-items-center mb-4">
                            <label
                                htmlFor="admissionDate"
                                className="col-sm-3 col-form-label text-right"
                            >
                                Admission Date
                            </label>
                            <div className="col-sm-9">
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
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary mt-3"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    {showOtpDialog && (
                        <OtpDialog
                            onClose={() => setShowOtpDialog(false)}
                            onOtpSubmit={handleOtpSubmit}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Enrollment;
