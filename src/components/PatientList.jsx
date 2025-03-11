import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GenericTable from "./GenericTable";

const patients = [
    {
        id: 1,
        name: "John Doe",
        admissionDate: "2023-01-01",
        status: "Admitted",
        weight: "3.5 kg",
    },
    {
        id: 2,
        name: "Jane Smith",
        admissionDate: "2023-02-01",
        status: "Discharged",
        weight: "3.2 kg",
    },
    {
        id: 3,
        name: "Alice Johnson",
        admissionDate: "2023-03-01",
        status: "Admitted",
        weight: "3.4 kg",
    },
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
                            <th scope="col" className="text-left">
                                ID
                            </th>
                            <th scope="col" className="text-left">
                                Name
                            </th>
                            <th scope="col" className="text-left">
                                Admission Date
                            </th>
                            <th scope="col" className="text-left">
                                Status
                            </th>
                            <th scope="col" className="text-left">
                                Weight
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
                                <td className="text-left">{patient.id}</td>
                                <td className="text-left">{patient.name}</td>
                                <td className="text-left">
                                    {patient.admissionDate}
                                </td>
                                <td className="text-left">{patient.status}</td>
                                <td className="text-left">{patient.weight}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PatientList;
