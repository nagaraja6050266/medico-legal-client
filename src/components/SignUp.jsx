import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
    const [role, setRole] = useState("");

    return (
        <div className="container mt-4">
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="hospitalName">Hospital Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="hospitalName"
                        placeholder="Enter hospital name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hospitalAddress">Hospital Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="hospitalAddress"
                        placeholder="Enter hospital address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
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
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
