import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css"; // Import custom CSS

function SignIn() {
    return (
        <div className="auth-container" style={{width: "100vw", height: "100vh"}}>
            <div className="auth-image">
                <img src="../src/assets/signin.jpg" alt="Sign In" />
            </div>
            <div className="auth-form">
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
        </div>
    );
}

export default SignIn;
