import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GenericTable from "./GenericTable";

const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    // Add more patients as needed
];

function PatientList() {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/patients/${id}`);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Registered Patients</h1>
            <div className="table-responsive">
                <table className="table table-bordered table-hover shadow-sm">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="text-center">
                                ID
                            </th>
                            <th scope="col" className="text-center">
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr
                                key={patient.id}
                                onClick={() => handleRowClick(patient.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <td className="text-center">{patient.id}</td>
                                <td className="text-center">{patient.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PatientList;
