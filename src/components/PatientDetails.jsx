import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GenericTable from "./GenericTable";
import Enrollment from "./Enrollment"; // Import Enrollment component

const mockPatientData = {
    1: {
        name: "John Doe",
        dob: "1990-01-01",
        gender: "Male",
        placeOfBirth: "City Hospital",
        motherName: "Jane Doe",
        fatherName: "John Smith",
        address: "123 Main St",
        parentMobileNumber: "1234567890",
    },
    2: {
        name: "Jane Smith",
        dob: "1992-02-02",
        gender: "Female",
        placeOfBirth: "City Hospital",
        motherName: "Mary Smith",
        fatherName: "John Smith",
        address: "456 Elm St",
        parentMobileNumber: "0987654321",
    },
    // Add more mock data as needed
};

function PatientDetails() {
    const { id } = useParams();
    const [patientData, setPatientData] = useState(null);
    const [status, setStatus] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch patient data based on ID
        const data = mockPatientData[id];
        setPatientData(data);
        setStatus(data.status);
    }, [id]);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleSaveStatus = () => {
        // Save the updated status
        setPatientData({ ...patientData, status });
        console.log("Status updated:", status);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    if (!patientData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            {isEditing ? (
                <Enrollment header="Edit Details" patientData={patientData} />
            ) : (
                <>
                    <GenericTable
                        subheader={"Patient ID: " + id}
                        header={"Patient Details"}
                        data={[patientData]}
                    />
                    <div
                        className="d-flex justify-content-end align-items-center mt-3"
                        style={{
                            maxWidth: "300px",
                            marginLeft: "auto",
                            gap: "20px",
                        }}
                    >
                        <select
                            className="form-control"
                            value={status}
                            onChange={handleStatusChange}
                        >
                            <option value="Admitted for delivery">
                                Admitted for delivery
                            </option>
                            <option value="Baby born">Baby born</option>
                        </select>
                        <button
                            className="btn btn-primary ml-2"
                            onClick={handleSaveStatus}
                            style={{ width: "200px" }}
                        >
                            Save Status
                        </button>
                        <button
                            className="btn btn-secondary ml-2"
                            onClick={handleEditClick}
                            style={{ width: "200px" }}
                        >
                            Edit Details
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default PatientDetails;
