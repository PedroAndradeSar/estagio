// import { Button, TextField } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../Paginas/Editar.css";

// const Editar = () => {

//   const [nome, setNome] = useState<string>('');
//   const [valor, setValor] = useState<string>('');
//   const [foto, setFoto] = useState<string>('');
//   const [marca, setMarca] = useState<string>('');
//   const [cor, setCor] = useState<string>('');


//   //function Adicionar() {  /*use states*/
//   // const [valor, this.valor] = useState<string>('');
//   // const [foto, this.foto] = useState<string>('');
//   // const [cor, this.cor] = useState<string>('');
//   // const [marca, this.marca] = useState<string>('');

//   useEffect(() => {//print no cosole navegador
//     console.log('Nome do Produto:', nome)
//     console.log('Marca do Produto:', marca)
//     console.log('Valor R$', valor)
//     console.log('Cor', cor)
//     // console.log('Marca do Produto: ${marca}')
//     // console.log('Valor R$: ${valor}')
//     // console.log('Cor: ${cor}')
//     // console.log('Marca R$: ${Marca}')
//   }, [nome, marca, valor, cor])

//   const editarproduto = () => {
//     axios.put('http://localhost:3001/produto/', {
//       nome: nome,
//       valor: valor,
//       foto: foto,
//       marca: marca,
//       cor: cor,

//     }).then((res) => {
//       console.log("Deu certo")
//     }).catch((ex) => {
//       console.error(ex)
//     })
//   }


//   return (
//     <div>
//       <header>
//         <nav className="caminho">
//           <Link to="/home">Home &gt; </Link>
//           <Link to="/carrinho">Carrinho &gt; </Link>
//           <Link to="/adicionarpt">Adicionar &gt; </Link>
//         </nav>
//         <h1>Editar Produto</h1>
//       </header>
//       {/* <div>
//         <div className="container">
//           <fieldset className="fieldset-border">
//             <legend className="legend-border">Nome do Produto</legend>
//           </fieldset>
//           <fieldset className="fieldset-border">
//             <legend className="legend-border">Marca</legend>
//           </fieldset>

//           <div className="formulario_menor">
//             <fieldset className="formulario-border">
//               <legend className="border">Valor</legend>
//             </fieldset>
//             <fieldset className="formulario-border">
//               <legend className="border">Cor</legend>
//             </fieldset>
//           </div>
//         </div>
//       </div>
//       <div>
//         <footer className="footer">
//           <button className="botao">
//             {" "}
//             <h1>Salvar Produto</h1>{" "}
//           </button>
//         </footer>
//       </div> */}

//       <div>
//         <div>
//           <div className="forms">
//             <TextField

//               onChange={(event) => setNome(event.target.value)}
//               label={'Nome do Produto'}
//               variant="outlined" />
//           </div>
//           <div className="forms">
//             <TextField
//               onChange={(event) => setMarca(event.target.value)}
//               label={'Marca do Produto'}
//               variant="outlined" />
//           </div>
//           <div className="cash">
//             <TextField
//               onChange={(event) => setValor(event.target.value)}
//               label={'Valor R$'}
//               variant="outlined" />
//           </div>
//           <div className="forms">
//             <TextField

//               onChange={(event) => setCor(event.target.value)}
//               label={'Cor'}
//               variant="outlined" />
//           </div>
//           <div className="date">
//             <TextField
//               type={"date"}
//               onChange={(event) => console.log(event.target.value)}
//               label={'Data'}
//               variant="outlined" />
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="botton">
//           <Button
//             variant={'contained'}
//             onClick={() => editarproduto()}
//           >
//             <h3>
//               Editar Produto
//             </h3>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Editar;


import { valueToPercent } from "@mui/base";
import { Alert, Button, Input, Snackbar, TextField } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { UploadImage } from "componentes/UploadImage";
import { ProdutoDTO } from "dtos/produtosDTO";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NodeAPI } from "services/Services";
import "../Paginas/Editar.css";


export function Editar() {
  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<number>(0);
  const [foto, setFoto] = useState<string>('');
  const [marca, setMarca] = useState<string>('');
  const [cor, setCor] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [severity, setSeverety] = useState<'success' | 'info' | 'warning' | 'error'>('success');
  const { id_produto } = useParams();

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



  async function editarProduto() {
    const produtoDTO = new ProdutoDTO(nome,
      valor,
      foto,
      cor,
      marca)
    console.log(foto)
    try {
      const putResponse: AxiosResponse = await NodeAPI.put(
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
      console.log(putResponse);
    } catch (error) {
      setFeedbackMessage('Usuário cadastrado não foi cadastrado');
      setSeverety('error');
      setIsOpen(true);
      console.log(error);
    }
  }

  useEffect(() => {
    const getProduto = async () => {
      try {
        const getResponse = await NodeAPI.get(
          `${process.env.REACT_APP_API_URL}/produto/${id_produto}`
        );
        console.log(getResponse)
        setNome(getResponse.data.nome);
        setValor(getResponse.data.valor);
        setCor(getResponse.data.cor);
        setFoto(getResponse.data.foto);
        setMarca(getResponse.data.marca);
      } catch (error) {

      }
    }
    getProduto()
  }, [])

  return (
    <div>
      <div>
        <header>
          <nav className="caminho">
            <Link to="/home">Home &gt; </Link>
            <Link to="/carrinho">Carrinho &gt; </Link>
            <Link to="/editar">Editar &gt; </Link>
          </nav>
          <h1>Editar Produto</h1>
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
              // label={'Data'}

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
            onClick={() => editarProduto()}
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