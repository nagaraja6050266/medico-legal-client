import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Search from "./components/Search";

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
        <div>
            {showNavBar && <NavBar />}
            <div className={showNavBar ? "container mt-4" : ""}>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
