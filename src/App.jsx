import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Login/LoginPage"; // Import LoginPage
import BirthRecordEntry from "./components/certificates/BirthRecordEntry"; // Import BirthRecordEntry component
import CertificateDetails from "./components/certificates/CertificateDetails";
import CertificateList from "./components/certificates/CertificateList";
import LabReportDetails from "./components/certificates/LabReportDetails"; // Import LabReportDetails component
import VaccinationCertificateDetails from "./components/certificates/VaccinationCertificateDetails"; // Import VaccinationCertificateDetails component
import Dashboard from "./components/Dashboard/Dashboard";
import Enrollment from "./components/Enrollment"; // Import Enrollment component
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import PatientDetails from "./components/PatientDetails"; // Import PatientDetails component
import PatientList from "./components/PatientList"; // Import PatientList component
import { Template } from "./components/Template";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route element={<Template />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/certificates" element={<CertificateList />} />
                    <Route path="/enrollment" element={<Enrollment />} />{" "}
                    {/* Add Enrollment route */}
                    <Route path="/patients" element={<PatientList />} />{" "}
                    {/* Add PatientList route */}
                    <Route
                        path="/birth-record-entry"
                        element={<BirthRecordEntry />}
                    />{" "}
                    {/* Add BirthRecordEntry route */}
                    <Route
                        path="/patients/:id"
                        element={<PatientDetails />}
                    />{" "}
                    {/* Add PatientDetails route */}
                    {/* Add LabReportEntry route */}
                    <Route
                        path="/certificates/:certificateId"
                        element={<CertificateDetails />}
                    />
                    <Route
                        path="/lab-report-details"
                        element={<LabReportDetails />}
                    />{" "}
                    {/* Add LabReportDetails route */}
                    <Route
                        path="/vaccination-certificate-details"
                        element={<VaccinationCertificateDetails />}
                    />{" "}
                    {/* Add VaccinationCertificateDetails route */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
