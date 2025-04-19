import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GenericTable from "./GenericTable";
import { getPatients } from "../api/patientApi";

function PatientList() {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const patientsList = await getPatients();
            console.log("Patients List", patientsList);
            setPatients(patientsList);
        };
        fetchPatients();
    }, []); // Empty dependency array ensures this runs only once on mount.

    const handleRowClick = (patientId) => {
        navigate(`/patients/${patientId}`);
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
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(patients) &&
                            patients.map((patient) => (
                                <tr
                                    key={patient.patientId}
                                    onClick={() =>
                                        handleRowClick(patient.patientId)
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    <td className="text-left">
                                        {patient.patientId}
                                    </td>
                                    <td className="text-left">
                                        {patient.name}
                                    </td>
                                    <td className="text-left">
                                        {patient.admissionDate}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PatientList;
