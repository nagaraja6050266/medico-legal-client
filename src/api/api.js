export let baseUrl = "http://localhost:8086/api";

export async function post({ reqUri = "", body = {} }) {
    const response = await fetch(reqUri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    console.log(response.json());

    if (!response.ok) {

    }
    // return response;
    return response.json();
}

export async function get({ reqUri = "", params = {} }) {
    const response = await fetch(reqUri, {
        method: "GET",
        headers: { ContentType: "application/json" },
        params: params,
    });

    if (!response.ok) {
        console.log(response);
        throw new Error("Request not succeded");
    }

    return response.json();
}
