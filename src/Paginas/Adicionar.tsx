import { valueToPercent } from "@mui/base";
import { Alert, Button, Input, Snackbar, TextField } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { UploadImage } from "componentes/UploadImage";
import { ProdutoDTO } from "dtos/produtosDTO";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NodeAPI } from "services/Services";
import "../Paginas/Adicionar.css";


export function Adicionarpt() {
  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<number>(0);
  const [foto, setFoto] = useState<string>('');
  const [marca, setMarca] = useState<string>('');
  const [cor, setCor] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [severity, setSeverety] = useState<'success' | 'info' | 'warning' | 'error'>('success');

  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  async function closeSnackbar() {
    setIsOpen(false)
  }
  const uploadFile: any = useRef();
  // const [image, setImage] = useState<string>();//tipar como string a imagem

  function openFileExplorer() {
    uploadFile.current.click(); // comando usado para abrir o navegador
  }

  function handleFile(event: any) {
    parseFileToBase64(event.target.files[0])
  }

  function parseFileToBase64(file: File) {
    file.text().then(() => {
      let reader: FileReader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const document: string | ArrayBuffer | null = reader.result //conversão de valores 
        if (typeof document === 'string') {

          //para aceitar apenas string
          setFoto(document.slice(document.lastIndexOf(',') + 1, document.length));
          console.log(document.slice(document.lastIndexOf(',') + 1, document.length));
        }
      }
    })
  }



  async function criarProduto() {
    const produtoDTO = new ProdutoDTO(nome,
      valor,
      foto,
      cor,
      marca)
    console.log(foto)
    try {
      const postResponse: AxiosResponse = await NodeAPI.post(
        `${process.env.REACT_APP_API_URL}/produto`,
        produtoDTO
      );
      setFeedbackMessage('Usuário cadastrado com sucesso');
      setSeverety('success');
      setIsOpen(true);

      setNome('');
      setValor(0);
      setCor('');
      setFoto('');
      setMarca('');
      console.log(postResponse);
    } catch (error) {
      setFeedbackMessage('Usuário cadastrado não foi cadastrado');
      setSeverety('error');
      setIsOpen(true);
      console.log(error);
    }
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


        <div>
          <div className="forms">
            <TextField className="forms"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              label={'Nome do Produto'}
              variant="outlined" />
          </div>
          <div className="forms">
            <TextField
              value={marca}
              onChange={(event) => setMarca(event.target.value)}
              label={'Marca do Produto'}
              variant="outlined" />
          </div>
          <div className="cash">
            <TextField
              value={valor}
              onChange={(event) => setValor(parseFloat(event.target.value))}
              label={'Valor R$'}
              variant="outlined" />
          </div>
          <div className="forms">
            <TextField
              value={cor}
              onChange={(event) => setCor(event.target.value)}
              label={'Cor'}
              variant="outlined" />
          </div>
          <div className="date">
            <TextField className="date"
              type={"date"}
              onChange={(event) => console.log(event.target.value)}
              label={'Data'}

              variant="outlined" />
          </div>
        </div>
      </div>
      <div>
        <div style={{
          width: '150px',
          height: '150px',

        }} >
          <input ref={uploadFile}
            style={{ display: 'none' }}
            type="file"
            onChange={handleFile}
          />
          <img style={
            {
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }
          } src={`data:image/jpg;base64,${foto}`} alt="" />
          <Button onClick={openFileExplorer} variant="outlined" />
          abrir explorer
        </div>
        );
      </div>
      <div>
        <div className="botton">
          <Button
            variant={'contained'}
            onClick={() => criarProduto()}
          >
            <h3>
              Adicionar Produto
            </h3>
          </Button>
        </div>
        <div>
          {/* <footer className="footer">
           <button className="botao"> <h1>Adicionar Produto</h1> </button>
            </footer> */}
        </div>
      </div>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpen}
        autoHideDuration={2000}
        onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar}
          severity={severity}
          sx={{ width: '100%' }}>

          {feedbackMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}