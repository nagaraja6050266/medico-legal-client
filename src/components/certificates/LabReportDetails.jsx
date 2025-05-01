import React, { useState, useEffect } from "react";
import { createCertificate } from "../../api/certificateApi";
import { getPatients } from "../../api/patientApi";
import { useNavigate } from "react-router-dom";

function LabReportDetails() {
    const [testType, setTestType] = useState("");
    const [testResults, setTestResults] = useState("");
    const [issuedDate, setIssuedDate] = useState("");
    const [filePath, setFilePath] = useState("");
    const [patients, setPatients] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState("");
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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFilePath(`/path/to/uploads/${file.name}`); // Simulate file upload path
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const certificateData = {
            certificateType: { certificateTypeId: 3 }, // Lab Report
            certificateDetails: {
                testType,
                testResults,
            },
            issuedDate,
            expiryDate: "", 
            filePath,
            patient: { patientId: parseInt(selectedPatientId) },
        };
        try {
            await createCertificate(certificateData);
            alert("Lab Report Certificate Created Successfully!");
            navigate("/certificates"); // Redirect to certificates list
        } catch (error) {
            console.error("Error creating certificate:", error);
            alert("Failed to create certificate. Please try again.");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Create Lab Report Certificate</h2>
            <form className="text-start" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="form-label">Test Type</label>
                    <input
                        type="text"
                        className="form-control"
                        value={testType}
                        onChange={(e) => setTestType(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label">Test Results</label>
                    <input
                        type="text"
                        className="form-control"
                        value={testResults}
                        onChange={(e) => setTestResults(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label">Issued Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={issuedDate}
                        onChange={(e) => setIssuedDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label">Select Patient</label>
                    <select
                        className="form-control"
                        value={selectedPatientId}
                        onChange={(e) => setSelectedPatientId(e.target.value)}
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
                <div className="mb-4">
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
