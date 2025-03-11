import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GenericTable from "../GenericTable";

function BirthRecordDetails() {
    const location = useLocation();
    const { formData } = location.state;

    const handleDownload = () => {
        // Logic to download birth certificate
        alert(
            "Download birth certificate functionality is not implemented yet."
        );
    };

    const birthRecordData = [
        {
            name: formData.name || "N/A",
            dob: formData.dob || "N/A",
            gender: formData.gender || "N/A",
            weight: formData.weight || "N/A",
            motherName: formData.motherName || "N/A",
            fatherName: formData.fatherName || "N/A",
            address: formData.address || "N/A",
            parentMobileNumber: formData.parentMobileNumber || "N/A",
        },
    ];

    return (
        <div className="container mt-5">
            <GenericTable
                header="Birth Record Details"
                data={birthRecordData}
            />
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary" onClick={handleDownload}>
                    Download Birth Certificate
                </button>
            </div>
        </div>
    );
}

export default BirthRecordDetails;
