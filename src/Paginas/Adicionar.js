import React from "react";
import { Link } from "react-router-dom";
import "../Paginas/Adicionar.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
      </div>

      <div class="container">
        <fieldset class="fieldset-border">
          <legend class="legend-border">Nome do Produto</legend>
        </fieldset>
        <fieldset class="fieldset-border">
          <legend class="legend-border">Marca</legend>
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
       
      </div>
      {/* <div>
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
      </div> */}

      <button className="botao"> Adicionar Produto </button>
      falta data de cadastro
    </div>
  );
};

export default Adicionarpt;
