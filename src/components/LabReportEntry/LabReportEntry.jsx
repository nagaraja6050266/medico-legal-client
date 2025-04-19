import React, { useState } from "react";

function LabReportEntry() {
    const [formData, setFormData] = useState({
        testType: "",
        testResults: "",
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
        console.log("Lab Report Submitted:", formData);
    };

    return (
        <div className="container mt-5">
            <h2>Lab Report Entry</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Test Type</label>
                    <input
                        type="text"
                        className="form-control"
                        name="testType"
                        value={formData.testType}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Test Results</label>
                    <input
                        type="text"
                        className="form-control"
                        name="testResults"
                        value={formData.testResults}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default LabReportEntry;
