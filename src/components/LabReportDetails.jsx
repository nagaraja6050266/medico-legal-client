import React, { useState } from "react";
import { createCertificate } from "../api/certificateApi";

function LabReportDetails() {
    const [testType, setTestType] = useState("");
    const [testResults, setTestResults] = useState("");
    const [issuedDate, setIssuedDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [patientId, setPatientId] = useState("");
    const [filePath, setFilePath] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFilePath(`/path/to/uploads/${file.name}`); // Simulate file upload path
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const certificateData = {
            certificateType: { certificateTypeId: 5 }, // Lab Report
            certificateDetails: { testType, testResults },
            issuedDate,
            expiryDate,
            filePath,
            patient: { patientId: parseInt(patientId) },
        };
        await createCertificate(certificateData);
        alert("Lab Report Certificate Created Successfully!");
    };

    return (
        <div className="container mt-4">
            <h2>Create Lab Report Certificate</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Test Type</label>
                    <input
                        type="text"
                        className="form-control"
                        value={testType}
                        onChange={(e) => setTestType(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Test Results</label>
                    <input
                        type="text"
                        className="form-control"
                        value={testResults}
                        onChange={(e) => setTestResults(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Issued Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={issuedDate}
                        onChange={(e) => setIssuedDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Expiry Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Patient ID</label>
                    <input
                        type="number"
                        className="form-control"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Attach File</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default LabReportDetails;
