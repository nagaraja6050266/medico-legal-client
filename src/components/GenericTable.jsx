import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const labels = [
    "Name",
    "Date of Birth",
    "Gender",
    "Weight",
    "Mother's Name",
    "Father's Name",
    "Address",
    "Parent Mobile Number",
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
                                        <th scope="row">{label}</th>
                                        <td>
                                            {
                                                item[
                                                    label
                                                        .toLowerCase()
                                                        .replace(/ /g, "")
                                                ]
                                            }
                                        </td>
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
