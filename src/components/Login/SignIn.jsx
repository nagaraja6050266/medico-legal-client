import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css"; // Import custom CSS
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // const email = event.target.form.email.value;
        // const password = event.target.form.password.value;

        if (email === "doctor@gmail.com" && password === "password") {
            alert("Sign in successful!");
            navigate("/dashboard");
        } else {
            alert("Invalid username or password.");
        }
    };

    return (
        <div
            className="auth-container"
            style={{ width: "100vw", height: "100vh" }}
        >
            <div className="auth-image">
                <img src="../src/assets/signin.jpg" alt="Sign In" />
            </div>
            <div className="auth-form">
                <h2>Sign In</h2>
                <form onSubmit={handleSignIn} className="p-4 border rounded shadow-sm bg-light" style={{gap: "20px"}}>
                    <div className="form-group row pb-4">
                        <label
                            htmlFor="email"
                            className="col-sm-2 col-form-label"
                        >
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>
                    <div className="form-group row pb-4">
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
                                name="password"
                                placeholder="Password"
                            />
                        </div>
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
