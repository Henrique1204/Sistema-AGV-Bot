export interface StatusRequest {
    status: boolean;
    velocidade: string;
}

export interface SensoresRequest {
    nome: string;
    status: boolean;
    conidcao: boolean;
}

export interface OptionsPostFetch {
    method: string;
    headers: any;
    body: string;
}

export interface APIConfig {
    url: string,
    options: OptionsPostFetch
}
