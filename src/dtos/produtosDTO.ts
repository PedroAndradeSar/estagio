export class ProdutoDTO{
    nome:string;
    valor:string;
    foto:string;
    cor:number;
    marca:string;


    constructor(nome:string,valor:string,foto:string,cor:number,marca:string){
        this.nome = nome;
        this.valor = valor;
        this.foto = foto;
        this.cor = cor;
        this.marca = marca;
    }
}