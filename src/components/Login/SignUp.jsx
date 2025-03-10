import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css"; // Import custom CSS

function SignUp() {
    const [role, setRole] = useState("");

    return (
        <div className="auth-container" style={{width: "100vw", height: "100vh"}}>
            <div className="auth-image">
                <img src="../src/assets/signin.jpg" alt="Sign Up" />
            </div>
            <div className="auth-form">
                <h2>Sign Up</h2>
                <form className="p-4 border rounded shadow-sm bg-light">
                    <div className="form-group row">
                        <label
                            htmlFor="hospitalName"
                            className="col-sm-2 col-form-label"
                        >
                            Hospital Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="hospitalName"
                                placeholder="Enter hospital name"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="hospitalAddress"
                            className="col-sm-2 col-form-label"
                        >
                            Hospital Address
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="hospitalAddress"
                                placeholder="Enter hospital address"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="email"
                            className="col-sm-2 col-form-label"
                        >
                            Email address
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="password"
                            className="col-sm-2 col-form-label"
                        >
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="confirmPassword"
                            className="col-sm-2 col-form-label"
                        >
                            Confirm Password
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="role"
                            className="col-sm-2 col-form-label"
                        >
                            Role
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-control"
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="">Select Role</option>
                                <option value="doctor">Doctor</option>
                                <option value="nurse">Nurse</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="name"
                            className="col-sm-2 col-form-label"
                        >
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                    </div>
                    <div className="form-group row mt-4">
                        <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
