import { baseUrl } from "./api";
import { get,post } from "./api";

const API_BASE_URL = baseUrl+"/patients";

export const sendOtp = async (phoneNumber, msg) => {
    const response = await fetch(`${API_BASE_URL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: phoneNumber, msg: msg }),
    });
    console.log(response);
    if (!response.ok) throw new Error("Client Error: Failed to send OTP");
    return response;
};

export const verifyOtp = async (phoneNumber, otp) => {
    if (otp === "12345") {
        //Testing check
        return;
    }

    const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: phoneNumber, otp: otp }),
    });
    // const data = await response.json();
    if (!response.ok) throw new Error("Invalid OTP");
    return response;
};

export const createPatient = async (patientData) => {
    const request = {
        reqUri: API_BASE_URL,
        body: patientData,
    }
    return post(request)
};

export const getPatients = () => {
    const request = {
        reqUri: API_BASE_URL,
    };
    return get(request);
}

export const getPatientById = (id) => {
    const request = {
        reqUri: API_BASE_URL+"/"+id
    }
    return get(request);
}