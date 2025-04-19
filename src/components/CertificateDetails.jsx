import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCertificateById } from "../api/certificateApi";
import "bootstrap/dist/css/bootstrap.min.css";

function CertificateDetails() {
    const { certificateId } = useParams();
    const navigate = useNavigate();
    const [certificate, setCertificate] = useState(null);

    useEffect(() => {
        const fetchCertificate = async () => {
            const data = await getCertificateById(certificateId);
            setCertificate(data);
        };
        fetchCertificate();
    }, [certificateId]);

    if (!certificate) {
        return <div>Loading...</div>;
    }

    const renderCertificateDetails = () => {
        return Object.entries(certificate.certificateDetails).map(
            ([key, value]) => (
                <p key={key}>
                    <strong>
                        {key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        :
                    </strong>{" "}
                    {value}
                </p>
            )
        );
    };

    return (
        <div className="container mt-4">
            <h2>Certificate Details</h2>
            <div className="card p-4">
                <p>
                    <strong>ID:</strong> {certificate.certificateId}
                </p>
                <p>
                    <strong>Type:</strong>{" "}
                    {certificate.certificateType.typeName}
                </p>
                <p>
                    <strong>Description:</strong>{" "}
                    {certificate.certificateType.description}
                </p>
                <p>
                    <strong>Issued Date:</strong> {certificate.issuedDate}
                </p>
                <p>
                    <strong>Expiry Date:</strong> {certificate.expiryDate}
                </p>
                <p>
                    <strong>Patient:</strong>{" "}
                    <button
                        className="btn btn-link p-0"
                        onClick={() =>
                            navigate(
                                `/patients/${certificate.patient.patientId}`
                            )
                        }
                    >
                        {certificate.patient.name}
                    </button>
                </p>
                <p>
                    <strong>Contact:</strong> {certificate.patient.contact}
                </p>
                <p>
                    <strong>Address:</strong> {certificate.patient.address}
                </p>
                {renderCertificateDetails()}
                <p>
                    <strong>Download Certificate:</strong>{" "}
                    <a
                        href={certificate.filePath}
                        className="btn btn-primary"
                        download
                    >
                        Download
                    </a>
                </p>
            </div>
        </div>
    );
}

export default CertificateDetails;
