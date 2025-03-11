import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GenericTable from "../GenericTable";
import "./Dashboard.css"; // Import custom CSS

const recentPatients = [
    {
        id: 1,
        name: "John Doe",
        admissionDate: "2023-01-01",
    },
    {
        id: 2,
        name: "Jane Smith",
        admissionDate: "2023-02-01",
    },
    // Add more recent patients as needed
];

function Dashboard() {
    return (
        <div
            className="container-fluid dashboard-background"
            style={{ height: "100vh", width: "100vw", marginTop: "-40px" }}
        >
            <br />
            <br />
            <div
                className="d-flex justify-content-center align-items-center my-4"
                style={{ marginTop: "100px !important" }}
            >
                <h1 className="dashboard-title">Dashboard</h1>
            </div>
            <div className="row mx-5 px-5 gx-5 gy-4">
                <div className="col-md-6 mb-4">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <h2 className="card-title">Total Inpatients</h2>
                            <p className="card-text">120</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <h2 className="card-title">Total Outpatients</h2>
                            <p className="card-text">300</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <h2 className="card-title">Total Birth Records</h2>
                            <p className="card-text">50</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <h2 className="card-title">Average Birth Rate</h2>
                            <p className="card-text">5%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h2
                    style={{
                        width: "100%",
                        textAlign: "left",
                        marginLeft: "20px",
                    }}
                >
                    Recently Added Patients
                </h2>
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
                            {recentPatients.map((patient) => (
                                <tr
                                    key={patient.id}
                                    style={{ cursor: "default" }}
                                >
                                    <td className="text-left">{patient.id}</td>
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
        </div>
    );
}

export default Dashboard;
