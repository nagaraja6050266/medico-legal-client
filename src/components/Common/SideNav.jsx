import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SideNav() {
    return (
        <nav className="d-flex flex-column bg-light vh-100 p-3">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#dashboard">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#documents">
                        Documents
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#patients">
                        Patients
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SideNav;
