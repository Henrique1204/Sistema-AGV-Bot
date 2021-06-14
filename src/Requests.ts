import GerarDados from './util/gerarDados';
import fetch from 'node-fetch';
import { post } from './api';
import { SensoresRequest, StatusRequest } from './interfaces';

export default class Requests {
    private static async fetch<T>(endpoint: string, body: T) {
        try {
            const { url, options } = post<T>(endpoint, body);
            const res = await fetch(url, options);
            const json = await res.json();

            if (res.status !== 201) throw new Error(json.mensagem);

            console.log(`Dado enviado para ${endpoint} com sucesso!`);
        } catch({ message }) {
            console.log(`Erro ao enviar dado para ${endpoint}: ${message}`);
        }
    }

    public static postStatus() {
        const body: StatusRequest = {
            status: GerarDados.booleano,
            velocidade: GerarDados.velocidade
        };

        this.fetch<StatusRequest>('/status', body);
    }

    public static postSensores() {
        const body: SensoresRequest = {
            nome: GerarDados.nome,
            status: GerarDados.booleano,
            condicao: GerarDados.booleano
        };

        this.fetch<SensoresRequest>('/sensores', body);
    }
}
