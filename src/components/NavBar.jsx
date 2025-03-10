import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"; // Import custom CSS
import logo from "../assets/logo.png"; // Import logo

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" className="navbar-logo" /> Health
                Care
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/enrollment">
                            Enrollment
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/patients">
                            Registered Patients
                        </Link>
                    </li>
                </ul>
                <div className="navbar-profile ml-auto">
                    <a className="nav-link" href="#">
                        <FontAwesomeIcon icon={faUser} /> Profile Name
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
