// import React, { useEffect, useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { NodeAPI } from 'services/Services';
// import '../Paginas/Carrinho.css'
// import { ProdutoDTO } from 'dtos/produtosDTO';
// import { AxiosResponse } from 'axios';


export function Carrinho() { }
//   const [nome, setNome] = useState<string>('');
//   const [valor, setValor] = useState<number>(0);
//   const [foto, setFoto] = useState<string>('');
//   const [marca, setMarca] = useState<string>('');
//   const [cor, setCor] = useState<string>('');
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [severity, setSeverety] = useState<'success' | 'info' | 'warning' | 'error'>('success');
//   const navigate = useNavigate();
//   const [feedbackMessage, setFeedbackMessage] = useState<string>('');

//   async function closeSnackbar() {
//     setIsOpen(false)
//   }
//   const uploadFile: any = useRef();
//   // const [image, setImage] = useState<string>();//tipar como string a imagem

//   function openFileExplorer() {
//     uploadFile.current.click(); // comando usado para abrir o navegador
//   }

//   function handleFile(event: any) {
//     parseFileToBase64(event.target.files[0])
//   }

//   try {
//     const putResponse: AxiosResponse = await NodeAPI.get(
//       `${process.env.REACT_APP_API_URL}/produto/${id_produto}`,


//     );

//     setFeedbackMessage('Usuário cadastrado com sucesso');
//     setSeverety('success');
//     setIsOpen(true);
//     navigate('/home')
//     setNome('');
//     setValor(0);
//     setCor('');
//     setFoto('');
//     setMarca('');
//     // if (nome === '') {//para nao criar campo vazio
//     //   alert("nomevazil")
//     // }
//     console.log(putResponse);
//   } catch (error) {
//     setFeedbackMessage('Usuário cadastrado não foi cadastrado');
//     setSeverety('error');
//     setIsOpen(true);
//     console.log(error);
//   }


//   useEffect(() => {
//     const getProduto = async () => {

//       try {
//         const getResponse = await NodeAPI.get(
//           `${process.env.REACT_APP_API_URL}/produto/${id_produto}`
//         );
//         console.log(getResponse)
//         setNome(getResponse.data.nome);
//         setValor(getResponse.data.valor);
//         setCor(getResponse.data.cor);
//         setFoto(getResponse.data.foto);
//         setMarca(getResponse.data.marca);

//       } catch (error) {

//       }
//     }
//     getProduto()
//   }, [])




//   return (
//     <div>
//       <header>
//         <nav className='caminho'>
//           <Link to="/home">Home &gt; {" "}</Link>
//           <Link to="/adicionarpt">Adicionar &gt; {" "}</Link>
//           <Link to="/editar">Editar &gt; {" "}</Link>
//         </nav>
//         <h1>
//           Carrinho
//         </h1>
//       </header>
//       <div>


//       </div>

//     </div>
//   )

// }

// function parseFileToBase64(arg0: any) {
//   throw new Error('Function not implemented.');
// }
