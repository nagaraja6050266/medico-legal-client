import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const labels = [
    { display: "Name", key: "name" },
    { display: "Date of Birth", key: "dob" },
    { display: "Gender", key: "gender" },
    { display: "Place of Birth", key: "placeOfBirth" },
    { display: "Mother's Name", key: "motherName" },
    { display: "Father's Name", key: "fatherName" },
    { display: "Address", key: "address" },
    { display: "Parent Mobile Number", key: "parentMobileNumber" },
];

function GenericTable({ header, data, onRowClick, subheader }) {
    return (
        <div className="container mt-5">
            <h2>{header}</h2>
            <h3>{subheader}</h3>
            <div className="mt-4">
                <table className="table table-bordered table-hover shadow-sm">
                    <tbody>
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                {labels.map((label, idx) => (
                                    <tr
                                        key={idx}
                                        onClick={() =>
                                            onRowClick && onRowClick(item.id)
                                        }
                                        style={{
                                            cursor: onRowClick
                                                ? "pointer"
                                                : "default",
                                        }}
                                    >
                                        <th scope="row">{label.display}</th>
                                        <td>{item[label.key]}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GenericTable;
