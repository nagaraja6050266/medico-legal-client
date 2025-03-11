import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BirthCertificateSearch from "./BirthCertificateSearch";
import "./Search.css"; // Import custom CSS

function Search() {
    const [documentType, setDocumentType] = useState("");

    return (
        <div className="container mt-4 search-container" style={{ height: "100%" }}>
            <h2>Search Documents</h2>
            <div className="p-4 border rounded shadow-sm bg-light">
                <div className="form-group row">
                    <label
                        htmlFor="documentType"
                        className="col-sm-2 col-form-label"
                    >
                        Document Type
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            id="documentType"
                            value={documentType}
                            onChange={(e) => setDocumentType(e.target.value)}
                        >
                            <option value="">Select Document Type</option>
                            <option value="birthCertificate">
                                Birth Certificate
                            </option>
                            <option value="autopsyReport">
                                Autopsy Report
                            </option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>
                {documentType === "birthCertificate" && (
                    <BirthCertificateSearch />
                )}
            </div>
        </div>
    );
}

export default Search;
