import { APIConfig } from './interfaces';

const urlBase = 'http://localhost:8000';

export const post = <T>(endpoint: string, body: T): APIConfig => ({
    url: `${urlBase}${endpoint}`,
    options: {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    }
});
