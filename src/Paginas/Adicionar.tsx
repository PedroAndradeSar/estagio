import { valueToPercent } from "@mui/base";
import { Button, Input, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Paginas/Adicionar.css";


const Adicionarpt = () => {
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

    const adicionaproduto= () => {
      axios.post('http://localhost:3001/produto', {
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
        <div>
          <header>
            <nav className="caminho">
              <Link to="/home">Home &gt; </Link>
              <Link to="/carrinho">Carrinho &gt; </Link>
              <Link to="/editar">Editar &gt; </Link>
            </nav>
            <h1>Adicionar Produto</h1>
          </header>
          {/* </div>
      <div className="container">
        <fieldset className="fieldset-border">
          <legend className="legend-border">Nome do Produto</legend>
        </fieldset>
        <fieldset className="fieldset-border">
          <legend className="legend-border">Marca</legend>
        </fieldset>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
        <TextField
          id="outlined-read-only-input"
          label="Data"
          defaultValue={"  "}
          InputProps={{
            readOnly: true,
          }}
        ></TextField>

        <div className="formulario_menor">
          <fieldset className="formulario-border">
            <legend className="border">Valor</legend>
          </fieldset>
          <fieldset className="formulario-border">
            <legend className="border">Cor</legend>
          </fieldset>
        </div> */}


          <div>
            <div className="forms">
              <TextField className="forms"
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
              <TextField className="date"
                type={"date"}
                onChange={(event) => console.log( event.target.value ) }
                label={'Data'}
              
                variant="outlined" />
            </div>
          </div>
        </div>
        <div>
          <div className="botton">
            <Button 
            variant={'contained'}
            onClick={ () => adicionaproduto() }
            >
              <h3>
                Adicionar Produto
              </h3>
            </Button>
          </div>
        </div>
        {/* <footer className="footer">
        <button className="botao"> <h1>Adicionar Produto</h1> </button>
      </footer> */}

        falta coloar imagem

      </div>
    );
  };

  export default Adicionarpt;