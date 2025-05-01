import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPatients } from "../../api/patientApi";
import { getAllCertificates } from "../../api/certificateApi";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [patientCount, setPatientCount] = useState(0);
    const [certificateCount, setCertificateCount] = useState(0);
    const [recentPatients, setRecentPatients] = useState([]);
    const [recentCertificates, setRecentCertificates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const patients = await getPatients();
                setPatientCount(patients.length);
                setRecentPatients(patients.slice(0, 4)); // Max 4 recent patients

                const certificates = await getAllCertificates();
                setCertificateCount(certificates.length);
                setRecentCertificates(certificates.slice(0, 4)); // Max 4 recent certificates
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container-fluid dashboard-background">
            <div className="text-center my-4">
                <h1 className="dashboard-title">Dashboard</h1>
            </div>
            <div className="row mx-5 px-5 gx-5 gy-4">
                <div className="col-md-6 mb-4">
                    <div className="card text-center h-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Total Patients</h2>
                            <p className="card-text">{patientCount}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card text-center h-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Total Certificates</h2>
                            <p className="card-text">{certificateCount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="section-title">Recently Added Patients</h2>
                    <button
                        className="btn btn-link"
                        style={{ color: "black", fontWeight: "bold" }}
                        onClick={() => navigate("/patients")}
                    >
                        View More
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover shadow-sm">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Admission Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentPatients.map((patient) => (
                                <tr key={patient.patientId}>
                                    <td>{patient.patientId}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.admissionDate || "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="section-title">
                        Recently Added Certificates
                    </h2>
                    <button
                        className="btn btn-link"
                        style={{ color: "black", fontWeight: "bold" }}
                        onClick={() => navigate("/certificates")}
                    >
                        View More
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover shadow-sm">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Type</th>
                                <th scope="col">Issued Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentCertificates.map((certificate) => (
                                <tr key={certificate.certificateId}>
                                    <td>{certificate.certificateId}</td>
                                    <td>
                                        {certificate.certificateType.typeName}
                                    </td>
                                    <td>{certificate.issuedDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
