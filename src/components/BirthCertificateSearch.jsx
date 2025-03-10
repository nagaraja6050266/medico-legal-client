import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css"; // Import custom CSS

function BirthCertificateSearch() {
    const [rchid, setRchid] = useState("");
    const [gender, setGender] = useState("");
    const [district, setDistrict] = useState("");
    const [placeOfBirth, setPlaceOfBirth] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [captcha, setCaptcha] = useState("");

    return (
        <div className="mt-4 p-4 border rounded shadow-sm bg-light search-container">
            <div className="form-group row">
                <label htmlFor="rchid" className="col-sm-2 col-form-label">
                    RCHID
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="rchid"
                        value={rchid}
                        onChange={(e) => setRchid(e.target.value)}
                        placeholder="Enter RCHID"
                    />
                </div>
            </div>
            <p className="text-center">OR</p>
            <div className="form-group row">
                <label htmlFor="gender" className="col-sm-2 col-form-label">
                    Gender
                </label>
                <div className="col-sm-10">
                    <select
                        className="form-control"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">
                    District
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="district"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="Enter district"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    htmlFor="placeOfBirth"
                    className="col-sm-2 col-form-label"
                >
                    Place of Birth
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="placeOfBirth"
                        value={placeOfBirth}
                        onChange={(e) => setPlaceOfBirth(e.target.value)}
                        placeholder="Enter place of birth"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    htmlFor="dateOfBirth"
                    className="col-sm-2 col-form-label"
                >
                    Date of Birth
                </label>
                <div className="col-sm-10">
                    <input
                        type="date"
                        className="form-control"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    htmlFor="mobileNumber"
                    className="col-sm-2 col-form-label"
                >
                    Mobile Number
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="Enter mobile number"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="captcha" className="col-sm-2 col-form-label">
                    Captcha
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="captcha"
                        value={captcha}
                        onChange={(e) => setCaptcha(e.target.value)}
                        placeholder="Enter captcha"
                    />
                </div>
            </div>
        </div>
    );
}

export default BirthCertificateSearch;
