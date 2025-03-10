import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GenericTable from "../GenericTable";
import "./Dashboard.css"; // Import custom CSS

const recentPatients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
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
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <h2 className="card-title">Total Inpatients</h2>
                            <p className="card-text">120</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <h2 className="card-title">Total Outpatients</h2>
                            <p className="card-text">300</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center h-100">
                        <div className="card-body">
                            <h2 className="card-title">Total Birth Records</h2>
                            <p className="card-text">50</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h2>Recently Added Patients</h2>
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
                            {recentPatients.map((patient) => (
                                <tr
                                    key={patient.id}
                                    style={{ cursor: "default" }}
                                >
                                    <td className="text-center">
                                        {patient.id}
                                    </td>
                                    <td className="text-center">
                                        {patient.name}
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
