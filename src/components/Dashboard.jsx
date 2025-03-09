import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
    return (
        <div className="container-fluid">
            <h1 className="my-4">Dashboard</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 className="card-title">
                                Number of Patients in Wards
                            </h2>
                            <p className="card-text">50</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 className="card-title">Number of Documents</h2>
                            <p className="card-text">200</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 className="card-title">Type of Documents</h2>
                            <p className="card-text">
                                Medical, Legal, Financial
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
