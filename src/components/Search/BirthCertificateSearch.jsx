import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css"; // Import custom CSS

function BirthCertificateSearch() {
    const [birthId, setBirthId] = useState("");
    const [gender, setGender] = useState("");
    const [name, setName] = useState("");
    const [placeOfBirth, setPlaceOfBirth] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [captcha, setCaptcha] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const formData = {
            birthId,
            gender,
            district: name,
            placeOfBirth,
            dateOfBirth,
            mobileNumber,
            captcha,
        };
        navigate("/birth-record-entry", { state: { formData } });
    };

    return (
        <div className="my-4 p-4 border rounded shadow-sm bg-light search-container">
            <form onSubmit={handleSearch}>
                <div className="form-group row">
                    <label
                        htmlFor="birthId"
                        className="col-sm-2 col-form-label"
                    >
                        Birth ID
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="birthId"
                            value={birthId}
                            onChange={(e) => setBirthId(e.target.value)}
                            placeholder="Enter Birth ID"
                        />
                    </div>
                </div>
                <p className="text-center">OR</p>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                        />
                    </div>
                </div>
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
                <div className="form-group row mt-4">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BirthCertificateSearch;
