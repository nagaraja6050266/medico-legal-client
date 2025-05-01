import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import OtpDialog from "../OtpDialog"; // Import OtpDialog component
import { createCertificate } from "../../api/certificateApi";
import { getPatients } from "../../api/patientApi";

function BirthRecordEntry() {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        gender: "",
        motherName: "",
        fatherName: "",
        address: "",
        parentMobileNumber: "",
        babyWeight: "",
        timeOfBirth: "",
        filePath: "",
    });

    const [patients, setPatients] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState("");
    const [showOtpDialog, setShowOtpDialog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPatients() {
            try {
                const response = await getPatients();
                setPatients(response);
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        }
        fetchPatients();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                filePath: `/path/to/uploads/${file.name}`, // Simulate file upload path
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const certificateData = {
            certificateType: { certificateTypeId: 1 }, // Birth Certificate
            certificateDetails: {
                birthWeight: formData.babyWeight,
                timeOfBirth: formData.timeOfBirth,
                fatherName: formData.fatherName,
                motherName: formData.motherName,
            },
            issuedDate: formData.issuedDate,
            expiryDate: formData.expiryDate || "",
            filePath: formData.filePath,
            patient: { patientId: parseInt(selectedPatientId) },
        };
        try {
            await createCertificate(certificateData);
            alert("Birth Certificate Created Successfully!");
            navigate("/certificates");
        } catch (error) {
            console.error("Error creating certificate:", error);
            alert("Failed to create certificate. Please try again.");
        }
    };

    const handleOtpSubmit = (otp) => {
        alert("OTP Submitted: " + otp);
        setShowOtpDialog(false);
        navigate("/birth-record-entry", { state: { formData } });
    };

    return (
        <div className="container mt-5">
            <h2>Birth Record Entry</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row mb-4">
                    <label className="col-sm-2 col-form-label">
                        Select Patient
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            value={selectedPatientId}
                            onChange={(e) =>
                                setSelectedPatientId(e.target.value)
                            }
                            required
                        >
                            <option value="">Select a Patient</option>
                            {patients.map((patient) => (
                                <option
                                    key={patient.patientId}
                                    value={patient.patientId}
                                >
                                    {patient.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
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
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <label className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            name="gender"
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
                <div className="form-group row mb-4">
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
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
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
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
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
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
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
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <label className="col-sm-2 col-form-label">
                        Time of Birth
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="time"
                            className="form-control"
                            name="timeOfBirth"
                            value={formData.timeOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <label className="col-sm-2 col-form-label">
                        Issue Date
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className="form-control"
                            name="issuedDate"
                            value={formData.issuedDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <label className="col-sm-2 col-form-label">
                        Attach File
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="file"
                            className="form-control"
                            onChange={handleFileChange}
                            required
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
