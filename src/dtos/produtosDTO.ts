export class ProdutoDTO{
    nome:string;
    valor:string;
    imagem:string;
    cor:number;
    marca:number;


    constructor(nome:string,valor:string,imagem:string,cor:number,marca:number){
        this.nome = nome;
        this.valor = valor;
        this.imagem = imagem;
        this.cor = cor;
        this.marca = marca;
    }
}