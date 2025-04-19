import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    getAllCertificates,
    getCertificatesByType,
    getCertificateById,
    getCertificateByTypeKeyword,
    getCertificatesByPatientId,
    getCertificateTypes,
} from "../api/certificateApi";
import "bootstrap/dist/css/bootstrap.min.css";

function CertificateList() {
    const [certificates, setCertificates] = useState([]);
    const [certificateTypes, setCertificateTypes] = useState([]);
    const [searchType, setSearchType] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCertificateTypes = async () => {
            const types = await getCertificateTypes();
            setCertificateTypes(types);
        };
        fetchCertificateTypes();
    }, []);

    const fetchCertificates = async () => {
        let result = [];
        if (searchType === "all") {
            result = await getAllCertificates();
        } else if (searchType === "certificateId" && searchValue) {
            try {
                const certificate = await getCertificateById(searchValue);
                result = certificate ? [certificate] : [];
            } catch (error) {
                console.error("Error fetching certificate by ID:", error);
            }
        } else if (searchType === "certificateType" && selectedType) {
            result = await getCertificatesByType(selectedType);
        } else if (searchType === "keyword" && searchValue) {
            result = await getCertificateByTypeKeyword(searchValue);
        } else if (searchType === "patientId" && searchValue) {
            result = await getCertificatesByPatientId(searchValue);
        }
        setCertificates(result);
    };

    useEffect(() => {
        fetchCertificates();
    }, [searchType, selectedType]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchCertificates();
    };

    const handleCertificateClick = (certificateId) => {
        navigate(`/certificates/${certificateId}`);
    };

    const handlePatientClick = (patientId) => {
        navigate(`/patients/${patientId}`);
    };

    const handleAddCertificate = (typeId) => {
        if (typeId === "5") {
            navigate("/lab-report-details");
        } else if (typeId === "6") {
            navigate("/vaccination-record-details");
        } else if (typeId === "birth") {
            navigate("/birth-record-details");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Certificate List</h2>
            <div className="d-flex justify-content-between mb-4">
                <form onSubmit={handleSearch} className="w-75">
                    <div className="form-group row">
                        <label
                            htmlFor="searchType"
                            className="col-sm-2 col-form-label"
                        >
                            Search By
                        </label>
                        <div className="col-sm-4">
                            <select
                                id="searchType"
                                className="form-control"
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                            >
                                <option value="all">All Certificates</option>
                                <option value="certificateId">
                                    Certificate ID
                                </option>
                                <option value="certificateType">
                                    Certificate Type
                                </option>
                                <option value="keyword">Keyword</option>
                                <option value="patientId">Patient ID</option>
                            </select>
                        </div>
                        {searchType === "certificateType" && (
                            <div className="col-sm-4">
                                <select
                                    id="certificateType"
                                    className="form-control"
                                    value={selectedType}
                                    onChange={(e) =>
                                        setSelectedType(e.target.value)
                                    }
                                >
                                    <option value="">Select Type</option>
                                    {certificateTypes.map((type) => (
                                        <option
                                            key={type.certificateTypeId}
                                            value={type.certificateTypeId}
                                        >
                                            {type.typeName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {searchType !== "certificateType" &&
                            searchType !== "all" && (
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter search value"
                                        value={searchValue}
                                        onChange={(e) =>
                                            setSearchValue(e.target.value)
                                        }
                                    />
                                </div>
                            )}
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                <div>
                    <select
                        className="form-control"
                        onChange={(e) => handleAddCertificate(e.target.value)}
                    >
                        <option value="">Add Certificate</option>
                        <option value="5">Lab Report</option>
                        <option value="6">Vaccination Certificate</option>
                        <option value="birth">Birth Record</option>
                    </select>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Patient</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certificates.map((certificate) => (
                            <tr key={certificate.certificateId}>
                                <td>{certificate.certificateId}</td>
                                <td>{certificate.certificateType.typeName}</td>
                                <td>
                                    <button
                                        className="btn btn-link p-0"
                                        onClick={() =>
                                            handlePatientClick(
                                                certificate.patient.patientId
                                            )
                                        }
                                    >
                                        {certificate.patient.name}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() =>
                                            handleCertificateClick(
                                                certificate.certificateId
                                            )
                                        }
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CertificateList;
