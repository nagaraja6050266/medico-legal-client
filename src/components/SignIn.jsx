import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn() {
    return (
        <div className="container">
            <h2>Sign In</h2>
            <form>
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
                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
