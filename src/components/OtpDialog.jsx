import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function OtpDialog({ onClose }) {
    const [otp, setOtp] = useState("");

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Handle OTP submission logic here
        alert("OTP Submitted: " + otp);
        onClose();
    };

    return (
        <div
            className="modal"
            style={{ display: "block" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Enter OTP</h5>
                        <button
                            type="button"
                            className="close"
                            onClick={onClose}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleOtpSubmit}>
                            <div className="form-group">
                                <label htmlFor="otp">OTP</label>
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
                            <button type="submit" className="btn btn-primary">
                                Submit OTP
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtpDialog;
