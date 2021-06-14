import { APIConfig, SensoresRequest, StatusRequest } from "./interfaces";

const urlBase = 'http://localhost:8000';

export const postStatus = (body: StatusRequest): APIConfig => ({
    url: `${urlBase}/status`,
    options: {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const postSensores = (body: SensoresRequest): APIConfig => ({
    url: `${urlBase}/sensores`,
    options: {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    }
});
