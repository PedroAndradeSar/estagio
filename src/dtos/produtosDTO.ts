export class ProdutoDTO {
    nome: string;
    valor: number;
    foto: string;
    cor: string;
    marca: string;


    constructor(nome: string, valor: number, foto: string, cor: string, marca: string) {
        this.nome = nome;
        this.valor = valor;
        this.foto = foto;
        this.cor = cor;
        this.marca = marca;
    }
}