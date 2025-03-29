const API_BASE_URL = "http://localhost:8086/api";

export const sendOtp = async (phoneNumber) => {
    const response = await fetch(`${API_BASE_URL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
    });
    if (!response.ok) throw new Error("Failed to send OTP");
    return response;
};

export const verifyOtp = async (phoneNumber, otp) => {
    const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, otp }),
    });
    const data = await response.json();
    if (!response.ok || !data.verified) throw new Error("Invalid OTP");
    return data;
};

export const createPatient = async (patientData) => {
    const response = await fetch(`${API_BASE_URL}/patients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
    });
    if (!response.ok) throw new Error("Failed to create patient");
    return response;
};
