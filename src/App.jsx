import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Common/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/Login/SignUp";
import SignIn from "./components/Login/SignIn";
import Search from "./components/Search/Search";
import Enrollment from "./components/Enrollment"; // Import Enrollment component
import PatientList from "./components/PatientList"; // Import PatientList component
import BirthRecordEntry from "./components/BirthRecordEntry/BirthRecordEntry"; // Import BirthRecordEntry component
import PatientDetails from "./components/PatientDetails"; // Import PatientDetails component

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();
    const showNavBar = !["/signup", "/signin"].includes(location.pathname);

    return (
        <div style={{ width: "100hw", height: "100vh" }} className="m-0 p-0">
            {showNavBar && <NavBar />}
            <div style={{ marginTop: showNavBar ? "100px" : "0" }}>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
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
                </Routes>
            </div>
        </div>
    );
}

export default App;
