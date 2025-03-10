import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css"; // Import custom CSS

function Dashboard() {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const value = event.target.value;
        if (value === "entry") {
            navigate("/entry");
        } else if (value === "search") {
            navigate("/search");
        }
    };

    return (
        <div className="container-fluid dashboard-background" style={{height: "100vh", width: "100vw"}}>
            <div className="d-flex justify-content-between align-items-center my-4">
                <h1 className="dashboard-title">Dashboard</h1>
                <div className="input-group birth-record-entry">
                    <label className="mr-2">Birth Record Entry:</label>
                    <select
                        className="form-control"
                        onChange={handleSelectChange}
                    >
                        <option value="">Select Option</option>
                        <option value="entry">New Entry</option>
                        <option value="search">Search</option>
                    </select>
                </div>
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
        </div>
    );
}

export default Dashboard;
