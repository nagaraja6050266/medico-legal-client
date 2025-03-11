import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function OtpDialog({ onClose }) {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Handle OTP submission logic here
        alert("OTP Submitted: " + otp);
        onClose();
        navigate("/patients/1");
    };

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Enter OTP</h5>
                        <button
                            type="button"
                            className="close"
                            onClick={onClose}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <span style={{ color: "black" }}>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleOtpSubmit}>
                            <div className="form-group row">
                                <label
                                    htmlFor="otp"
                                    className="col-sm-2 col-form-label"
                                >
                                    OTP
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="otp"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        maxLength="6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10 offset-sm-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit OTP
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtpDialog;
