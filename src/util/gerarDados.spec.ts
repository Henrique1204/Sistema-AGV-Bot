import GerarDados from "./gerarDados";

describe('Testando geração de dados', () => {
    it('Deveria me retornar um booleano', () => {
        expect(typeof GerarDados.booleano).toEqual('boolean');
    });

    it('Deveria me retornar uma string', () => {
        expect(typeof GerarDados.velocidade).toEqual('string');
    });

    it('Deveria me retornar uma string', () => {
        expect(typeof GerarDados.nome).toEqual('string');
    });
});
