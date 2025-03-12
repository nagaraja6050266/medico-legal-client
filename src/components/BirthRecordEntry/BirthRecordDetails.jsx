import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BirthRecordDetails({ details }) {
    return (
        <div className="container mt-5">
            <h2>Birth Record Details</h2>
            <div className="card">
                <div className="card-body">
                    <p>
                        <strong>Name:</strong> {details.name}
                    </p>
                    <p>
                        <strong>Date of Birth:</strong> {details.dob}
                    </p>
                    <p>
                        <strong>Gender:</strong> {details.gender}
                    </p>
                    <p>
                        <strong>Mother's Name:</strong> {details.motherName}
                    </p>
                    <p>
                        <strong>Father's Name:</strong> {details.fatherName}
                    </p>
                    <p>
                        <strong>Address:</strong> {details.address}
                    </p>
                    <p>
                        <strong>Parent Mobile Number:</strong>{" "}
                        {details.parentMobileNumber}
                    </p>
                    <p>
                        <strong>Baby Weight:</strong> {details.babyWeight} kg
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BirthRecordDetails;
