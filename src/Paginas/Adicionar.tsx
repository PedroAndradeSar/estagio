import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { AxiosResponse } from "axios";
import { ProdutoDTO } from "dtos/produtosDTO";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [messageNameHasError, setMessageNameHasError] = useState<string>('');
  const [messageMarcaHasError, setMessageMarcaHasError] = useState<string>('');

  //validar campos
  useEffect(() => {
    setMessageNameHasError('');
  }, [nome]);

  useEffect(() => {
    setMessageMarcaHasError('');
  }, [valor]);

  function validateUserInputs(): boolean {
    let isValid = true;
    if (nome.length < 4 || !nome.includes('')) {
      setMessageNameHasError('Nome digitado está no formato inválido');
      isValid = false;
    }

    if (marca.length < 4 || !marca.includes('')) {
      setMessageMarcaHasError('Marca digitado está no formato inválido');
      isValid = false;
    }
    return isValid;
  }


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
    const isValidInputs = validateUserInputs();
    if (isValidInputs) {
      try {
        const postResponse: AxiosResponse = await NodeAPI.post(
          `${process.env.REACT_APP_API_URL}/produto`,
          produtoDTO
        );
        setFeedbackMessage('Usuário cadastrado com sucesso');
        setSeverety('success');
        setIsOpen(true);
        window.location.replace('/home');
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
  }

  return (
    <div>
      <div>
        <header>
          <nav className="caminho">
            <Link to="/home">Home &gt; </Link>
            <Link to="/adicionarpt">Adicionar Produto </Link>
          </nav>
          <h1>Adicionar Produto</h1>
        </header>

        {/* teste */}
        <div>
          <div className="forms">
            <TextField className="forms"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              label={'Nome do Produto'}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root fieldset': {
                  borderColor:
                    messageNameHasError.length > 0 ? 'red' : 'gray',
                },
              }}
              style={{
                width: '100%',
                backgroundColor: 'white',
              }}

            />
            <div
              style={{
                marginTop: '-15px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <p>
                {messageNameHasError.length > 0 ? messageNameHasError : ''}
              </p>
            </div>
          </div>

          <div className="forms">
            <TextField className="forms"
              value={marca}
              onChange={(event) => setMarca(event.target.value)}
              label={'Marca do Produto'}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root fieldset': {
                  borderColor:
                    messageMarcaHasError.length > 0 ? 'red' : 'gray',
                },
              }}
              style={{
                width: '100%',
                backgroundColor: 'white',
              }}

            />
            <div
              style={{
                marginTop: '15px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <p>
                {messageMarcaHasError.length > 0 ? messageMarcaHasError : ''}
              </p>
            </div>
          </div>


          {/* //teste */}

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
        <div>
          <div className="inptuimg" style={{
            width: '1350px',
            height: '150px',
            marginLeft: '261px'

          }} >

            <input ref={uploadFile}
              style={{ display: 'none' }}
              type="file"
              accept="image/*"
              onChange={handleFile}
            />

            {foto && (
              <img style={
                {
                  width: '150px',
                  height: '150px',
                  objectFit: 'none'
                }
              } src={`data:image/jpg;base64,${foto}`} alt="" />
            )}


            <Button className="botaoimagem" onClick={openFileExplorer} variant="outlined" >

              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.6695 22.4902V31.8867C60.6695 31.8867 54.3453 31.9182 54.3136 31.8867V22.4902H44.7797C44.7797 22.4902 44.8114 16.2363 44.7797 16.2049H54.3136V6.77692H60.6695V16.2049H70.2034V22.4902H60.6695ZM51.1356 35.0608V25.6329H41.6017V16.2049H16.178C12.6822 16.2049 9.82204 19.0333 9.82204 22.4902V60.2021C9.82204 63.659 12.6822 66.4874 16.178 66.4874H54.3136C57.8093 66.4874 60.6695 63.659 60.6695 60.2021V35.0608H51.1356ZM16.178 60.2021L25.7119 47.6314L32.0678 57.0594L41.6017 44.4888L54.3136 60.2021H16.178Z" fill="#D9D9D9" />
              </svg>

            </Button>

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
