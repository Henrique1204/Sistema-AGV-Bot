import GerarDados from '@util/gerarDados';
import fetch from 'node-fetch';
import { postSensores, postStatus } from './api';
import { APIConfig, SensoresRequest, StatusRequest } from './interfaces';

export default class Requests {
    private static async fetch(config: APIConfig) {
        try {
            const { url, options } = config;
            const res = await fetch(url, options);
            const json = await res.json();

            if (res.status !== 201) throw new Error(json.mensagem);

            console.log('Novo status enviado com sucesso!');
        } catch({ message }) {
            console.log(`Erro ao enviar novo status: ${message}`);
        }
    }

    public static postStatus() {
        const body: StatusRequest = {
            status: GerarDados.booleano,
            velocidade: GerarDados.velocidade
        };

        this.fetch(postStatus(body));
    }

    public static postSensores() {
        const body: SensoresRequest = {
            nome: GerarDados.nome,
            status: GerarDados.booleano,
            condicao: GerarDados.booleano
        };

        this.fetch(postSensores(body));
    }
}
