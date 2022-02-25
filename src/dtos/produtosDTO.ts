export class ProdutoDTO {
    id_produto?: number;
    nome: string;
    valor: number;
    foto: string;
    cor: string;
    marca: string;



    constructor(nome: string, valor: number, foto: string, cor: string, marca: string, id_produto?: number) {
        this.nome = nome;
        this.valor = valor;
        this.foto = foto;
        this.cor = cor;
        this.marca = marca;
        this.id_produto = id_produto;
    }
}