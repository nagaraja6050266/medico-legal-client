import React, { useState } from "react";

function VaccinationRecordEntry() {
    const [formData, setFormData] = useState({
        vaccineName: "",
        doseNumber: "",
        nextDueDate: "",
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
        console.log("Vaccination Record Submitted:", formData);
    };

    return (
        <div className="container mt-5">
            <h2>Vaccination Record Entry</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Vaccine Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="vaccineName"
                        value={formData.vaccineName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Dose Number</label>
                    <input
                        type="number"
                        className="form-control"
                        name="doseNumber"
                        value={formData.doseNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Next Due Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="nextDueDate"
                        value={formData.nextDueDate}
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

export default VaccinationRecordEntry;
