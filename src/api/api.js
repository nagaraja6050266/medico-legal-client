export let baseUrl = "http://localhost:8086/api";

export async function get(inputJson) {
    return apiCall(inputJson,"GET");
}

export async function post(inputJson) {
    return apiCall(inputJson,"POST")
}

export async function apiCall({ reqUri = "", params = {}, body = {} },method = "GET") {
    const response = await fetch(reqUri, {
        method: method,
        headers: { ContentType: "application/json" },
        params: params,
    });

    if(!response.ok){
        console.log(response);
        throw new Error("Request not succeded");
    }

    return response.json();
}


