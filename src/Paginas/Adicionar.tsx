import { Button, Input, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../Paginas/Adicionar.css";


const Adicionarpt = () => {
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
            <TextField
              onChange={(event) => console.log(event.target.value)}
              label={'Nome do Produto'}
              variant="outlined" />
          </div>
          <div className="forms">
            <TextField
              onChange={(event) => console.log(event.target.value)}
              label={'Marca do Produto'}
              variant="outlined" />
          </div>
          <div className="cash">
            <TextField
              onChange={(event) => console.log(event.target.value)}
              label={'Valor R$'}
              variant="outlined" />
          </div>
          <div className="date">
            <TextField
              onChange={(event) => console.log(event.target.value)}
              label={'Data'}
              variant="outlined" />
          </div>
        </div>
      </div>
      <div>
        <div className="botton">
          <Button variant={'contained'}>
            <h3>
              Adicionar Produto
            </h3>
          </Button>
        </div>
      </div>
      {/* <footer className="footer">
        <button className="botao"> <h1>Adicionar Produto</h1> </button>
      </footer> */}

      falta data de cadastro
    </div>
  );
};

export default Adicionarpt;
