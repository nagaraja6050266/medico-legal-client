import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OtpDialog from "./OtpDialog"; // Import OtpDialog component

function Enrollment() {
    const [showOtpDialog, setShowOtpDialog] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowOtpDialog(true);
    };

    return (
        <div className="container mt-5">
            <h1 style={{textAlign:"left", marginTop: "100px !important"}} className="m-2">Enrollment Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">
                        Gender
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control" id="gender" required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="parentName"
                        className="col-sm-2 col-form-label"
                    >
                        Parent's/Husband's Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="parentName"
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="age" className="col-sm-2 col-form-label">
                        Age
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="phoneNumber"
                        className="col-sm-2 col-form-label"
                    >
                        Phone Number
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="tel"
                            className="form-control"
                            id="phoneNumber"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {showOtpDialog && (
                <OtpDialog onClose={() => setShowOtpDialog(false)} />
            )}
        </div>
    );
}

export default Enrollment;
