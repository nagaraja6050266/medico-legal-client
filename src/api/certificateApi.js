import { baseUrl, get } from "./api";

const API_BASE_URL = baseUrl + "/certificates";

export function getCertificateById(id) {
    const request = {
        reqUri: `${API_BASE_URL}/${id}`,
    };
    return get(request);
}

export function getAllCertificates() {
    const request = {
        reqUri: `${API_BASE_URL}`,
    };
    return get(request);
}

export function getCertificatesByType(certificateTypeId) {
    const request = {
        reqUri: `${API_BASE_URL}/type?type=${certificateTypeId}`,
    };
    return get(request);
}

export function getCertificatesByPatientId(patientId) {
    const request = {
        reqUri: `${API_BASE_URL}/patient/${patientId}`,
    };
    return get(request);
}

export function getCertificateByTypeKeyword(keyword) {
    const request = {
        reqUri: `${API_BASE_URL}/search?keyword=${keyword}`,
    };
    return get(request);
}

export function getCertificateTypes() {
    const request = {
        reqUri: `${API_BASE_URL}/types`,
    };
    return get(request);
}

export function createCertificate(certificateData) {
    const request = {
        reqUri: `${API_BASE_URL}`,
        body: certificateData,
    };
    return post(request);
}