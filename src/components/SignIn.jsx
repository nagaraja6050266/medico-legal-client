import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn() {
    return (
        <div className="container mt-4">
            <h2>Sign In</h2>
            <form className="p-4 border rounded shadow-sm bg-light">
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
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
                <div className="form-group row mt-4">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
