import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BirthRecordDetails from "./components/BirthRecordDetails/BirthRecordDetails"; // Import BirthRecordDetails component
import BirthRecordEntry from "./components/BirthRecordEntry/BirthRecordEntry"; // Import BirthRecordEntry component
import Dashboard from "./components/Dashboard/Dashboard";
import Enrollment from "./components/Enrollment"; // Import Enrollment component
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import PatientDetails from "./components/PatientDetails"; // Import PatientDetails component
import PatientList from "./components/PatientList"; // Import PatientList component
import Search from "./components/Search/Search";
import { Template } from "./components/Template";
import VaccinationRecordEntry from "./components/VaccinationRecordEntry/VaccinationRecordEntry"; // Import VaccinationRecordEntry
import LabReportEntry from "./components/LabReportEntry/LabReportEntry"; // Import LabReportEntry

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route element={<Template />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/search" element={<Search />} />
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
                    <Route
                        path="/birth-record-details"
                        element={<BirthRecordDetails />}
                    />{" "}
                    {/* Add BirthRecordDetails route */}
                    <Route
                        path="/vaccination-record-entry"
                        element={<VaccinationRecordEntry />}
                    />{" "}
                    {/* Add VaccinationRecordEntry route */}
                    <Route
                        path="/lab-report-entry"
                        element={<LabReportEntry />}
                    />{" "}
                    {/* Add LabReportEntry route */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
