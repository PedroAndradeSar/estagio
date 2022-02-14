import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Paginas/Editar.css";

const Editar = () => {

  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [foto, setFoto] = useState<string>('');
  const [marca, setMarca] = useState<string>('');
  const [cor, setCor] = useState<string>('');
  

//function Adicionar() {  /*use states*/
    // const [valor, this.valor] = useState<string>('');
    // const [foto, this.foto] = useState<string>('');
    // const [cor, this.cor] = useState<string>('');
    // const [marca, this.marca] = useState<string>('');

    useEffect(() => {//print no cosole navegador
      console.log('Nome do Produto:',nome)
      console.log('Marca do Produto:',marca)
      console.log('Valor R$',valor)
      console.log('Cor',cor)
      // console.log('Marca do Produto: ${marca}')
      // console.log('Valor R$: ${valor}')
      // console.log('Cor: ${cor}')
      // console.log('Marca R$: ${Marca}')
    }, [nome, marca, valor, cor])

    const editarproduto= () => {
      axios.put('http://localhost:3001/produto/', {
        nome: nome,
        valor: valor,
        foto: foto,
        marca: marca,
        cor: cor,

      }).then((res)=>{
        console.log("Deu certo")
      }).catch((ex)=>{
        console.error(ex)
      })
    } 


  return (
    <div>
      <header>
        <nav className="caminho">
          <Link to="/home">Home &gt; </Link>
          <Link to="/carrinho">Carrinho &gt; </Link>
          <Link to="/adicionarpt">Adicionar &gt; </Link>
        </nav>
        <h1>Editar Produto</h1>
      </header>
      {/* <div>
        <div className="container">
          <fieldset className="fieldset-border">
            <legend className="legend-border">Nome do Produto</legend>
          </fieldset>
          <fieldset className="fieldset-border">
            <legend className="legend-border">Marca</legend>
          </fieldset>

          <div className="formulario_menor">
            <fieldset className="formulario-border">
              <legend className="border">Valor</legend>
            </fieldset>
            <fieldset className="formulario-border">
              <legend className="border">Cor</legend>
            </fieldset>
          </div>
        </div>
      </div>
      <div>
        <footer className="footer">
          <button className="botao">
            {" "}
            <h1>Salvar Produto</h1>{" "}
          </button>
        </footer>
      </div> */}

      <div>
        <div>
          <div className="forms">
            <TextField

              onChange={(event) => setNome(event.target.value)}
              label={'Nome do Produto'}
              variant="outlined" />
          </div>
          <div className="forms">
            <TextField
              onChange={(event) => setMarca(event.target.value)}
              label={'Marca do Produto'}
              variant="outlined" />
          </div>
          <div className="cash">
            <TextField
              onChange={(event) => setValor(event.target.value)}
              label={'Valor R$'}
              variant="outlined" />
          </div>
          <div className="forms">
            <TextField

              onChange={(event) => setCor(event.target.value)}
              label={'Cor'}
              variant="outlined" />
          </div>
          <div className="date">
            <TextField
              type={"date"}
              onChange={(event) => console.log(event.target.value)}
              label={'Data'}
              variant="outlined" />
          </div>
        </div>
      </div>
      <div>
        <div className="botton">
          <Button
            variant={'contained'}
            onClick={() => editarproduto()}
          >
            <h3>
              Editar Produto
            </h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Editar;
