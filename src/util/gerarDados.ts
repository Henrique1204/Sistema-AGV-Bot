export default class GerarDados {
    private static gerarNumeroAleatorio = (max: number, min: number): number => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    };

    public static get booleano(): boolean {
        const random = this.gerarNumeroAleatorio(2, 1);

        return random % 2 === 0;
    }

    public static get velocidade(): string {
        const random = this.gerarNumeroAleatorio(20, 2);

        return `${random}m/s`;
    }

    public static get nome(): string {
        const opcoes = 'ABC';
        const random = this.gerarNumeroAleatorio(2, 0);

        return `sensor ${opcoes[random]}`;
    }
}
