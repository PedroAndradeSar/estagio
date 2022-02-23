import { ProdutoDTO } from 'dtos/produtosDTO';
import React from 'react';
import '../Paginas/Produto.css'
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AxiosResponse } from 'axios';
import { NodeAPI } from 'services/Services';
import { useNavigate } from 'react-router-dom';


async function deleteProduto(id_produto) {


    try {
        const putResponse: AxiosResponse = await NodeAPI.delete(
            `${process.env.REACT_APP_API_URL}/produto/${id_produto}`
        );

        console.log(putResponse);
        window.location.replace('/home');
    } catch (error) {

        console.log(error);
    }
}


type ProdutoProps = {
    produtoDTO: ProdutoDTO;
}



export default function Produto(props: ProdutoProps) {
    const { produtoDTO } = props


    return (
        <>
            <Grid style={{ margin: "10px solid blue" }}>

                <section style={{ border: "1px solid red" }} className='containerproduto'>
                    <div className="img" style={{ border: "1px solid green" }} >
                        <img src={`data:image/jpg;base64,${produtoDTO.foto}`} alt="" />
                    </div>
                    <div className="campos" style={{ border: "1px solid green" }}>
                        <h2 className='camera'>{produtoDTO.nome}</h2>
                        <p className='marca'>{produtoDTO.marca}</p>
                        <p className='valor'>R${produtoDTO.valor},00</p>
                        <p className='cor'>{produtoDTO.cor}</p>

                    </div>
                    <div className="icons" style={{ border: "1px solid green" }}>
                        <div>
                            <Button style={{ border: 'none' }} variant="outlined" onClick={() => { window.location.replace('/editar/' + produtoDTO.id_produto) }}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.1579" stroke="#0F4C81" stroke-width="1.68421" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.4883 20.2106C42.9618 20.2106 42.4568 20.4198 42.0844 20.7921L29.5868 33.2897L28.6509 37.0334L32.3946 36.0975L44.8922 23.5999C45.2645 23.2275 45.4737 22.7225 45.4737 22.196C45.4737 21.6694 45.2645 21.1644 44.8922 20.7921C44.5199 20.4198 44.0149 20.2106 43.4883 20.2106ZM40.8935 19.6012C41.5817 18.913 42.5151 18.5264 43.4883 18.5264C44.4616 18.5264 45.3949 18.913 46.0831 19.6012C46.7713 20.2894 47.1579 21.2227 47.1579 22.196C47.1579 23.1692 46.7713 24.1026 46.0831 24.7908L33.4206 37.4534C33.3126 37.5613 33.1774 37.6378 33.0294 37.6749L27.6977 39.0078C27.4108 39.0795 27.1072 38.9954 26.898 38.7863C26.6889 38.5771 26.6048 38.2735 26.6765 37.9866L28.0094 32.655C28.0465 32.5069 28.123 32.3717 28.2309 32.2637L40.8935 19.6012ZM19.6814 22.3813C20.3393 21.7234 21.2315 21.3538 22.1619 21.3538H31.4922C31.9573 21.3538 32.3343 21.7309 32.3343 22.1959C32.3343 22.661 31.9573 23.038 31.4922 23.038H22.1619C21.6782 23.038 21.2144 23.2302 20.8724 23.5722C20.5303 23.9142 20.3382 24.3781 20.3382 24.8617V43.5224C20.3382 44.006 20.5303 44.4699 20.8724 44.8119C21.2144 45.1539 21.6782 45.3461 22.1619 45.3461H40.8225C41.3062 45.3461 41.7701 45.1539 42.1121 44.8119C42.4541 44.4699 42.6462 44.006 42.6462 43.5224V34.1921C42.6462 33.727 43.0232 33.3499 43.4883 33.3499C43.9534 33.3499 44.3304 33.727 44.3304 34.1921V43.5224C44.3304 44.4527 43.9608 45.345 43.303 46.0028C42.6451 46.6607 41.7529 47.0303 40.8225 47.0303H22.1619C21.2315 47.0303 20.3393 46.6607 19.6814 46.0028C19.0236 45.345 18.654 44.4527 18.654 43.5224V24.8617C18.654 23.9314 19.0236 23.0391 19.6814 22.3813Z" fill="#0F4C81" />
                                </svg>


                            </Button>
                        </div>

                        <div>

                            <IconButton aria-label="carrinho"></IconButton>
                            <Button style={{ border: 'none' }} variant="outlined" onClick={() => { window.location.replace('/carrinho/' + produtoDTO.id_produto) }}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.181" stroke="#0F4C81" stroke-width="1.63791" />
                                    <path d="M44.691 33.9435L46.3347 24.6464C46.3559 24.5262 46.3512 24.4027 46.3209 24.2845C46.2906 24.1664 46.2355 24.0565 46.1593 23.9627C46.0832 23.8689 45.988 23.7934 45.8803 23.7416C45.7727 23.6898 45.6554 23.663 45.5365 23.663H23.4992L22.7985 19.6996C22.7193 19.2509 22.4895 18.8451 22.1492 18.553C21.8088 18.2608 21.3795 18.1009 20.9361 18.1011H18.4956C18.2804 18.1011 18.0741 18.189 17.9219 18.3454C17.7698 18.5019 17.6843 18.7141 17.6843 18.9354C17.6843 19.1566 17.7698 19.3688 17.9219 19.5253C18.0741 19.6817 18.2804 19.7696 18.4956 19.7696H20.936C20.9994 19.7695 21.0608 19.7924 21.1094 19.8341C21.1581 19.8758 21.1909 19.9338 21.2022 19.998L24.942 41.1523C24.4132 41.5905 24.0191 42.1769 23.8074 42.8405C23.5957 43.5042 23.5755 44.2167 23.7491 44.8919C23.9226 45.5671 24.2827 46.1762 24.7856 46.6455C25.2886 47.1148 25.913 47.4243 26.5833 47.5365C27.2536 47.6487 27.9411 47.5588 28.5629 47.2778C29.1846 46.9967 29.7139 46.5365 30.0867 45.9528C30.4596 45.369 30.6601 44.6867 30.6639 43.9883C30.6678 43.2899 30.4749 42.6053 30.1086 42.0172H38.2501C37.8301 42.6935 37.6409 43.4943 37.7124 44.2935C37.7839 45.0926 38.112 45.8445 38.645 46.4306C39.178 47.0167 39.8855 47.4037 40.656 47.5306C41.4265 47.6574 42.2162 47.5169 42.9005 47.1311C43.5847 46.7454 44.1247 46.1364 44.4351 45.4002C44.7456 44.664 44.809 43.8424 44.6153 43.065C44.4215 42.2877 43.9817 41.5988 43.3651 41.1069C42.7485 40.6151 41.9903 40.3483 41.21 40.3486H26.4491L25.7609 36.4553H41.7646C42.4612 36.4556 43.1359 36.2043 43.6707 35.7452C44.2055 35.2861 44.5666 34.6485 44.691 33.9435ZM29.0415 43.9638C29.0415 44.3488 28.9305 44.7252 28.7225 45.0453C28.5145 45.3655 28.2189 45.615 27.873 45.7623C27.5272 45.9096 27.1466 45.9482 26.7794 45.8731C26.4122 45.798 26.0749 45.6126 25.8102 45.3403C25.5455 45.0681 25.3652 44.7212 25.2922 44.3436C25.2191 43.966 25.2566 43.5746 25.3999 43.2189C25.5432 42.8632 25.7858 42.5591 26.097 42.3452C26.4083 42.1313 26.7743 42.0172 27.1487 42.0172C27.6505 42.0178 28.1316 42.223 28.4865 42.588C28.8414 42.9529 29.041 43.4477 29.0415 43.9638ZM43.1029 43.9638C43.1029 44.3488 42.9918 44.7252 42.7838 45.0453C42.5759 45.3655 42.2802 45.615 41.9344 45.7623C41.5885 45.9096 41.2079 45.9482 40.8407 45.8731C40.4735 45.798 40.1362 45.6126 39.8715 45.3403C39.6068 45.0681 39.4265 44.7212 39.3535 44.3436C39.2804 43.966 39.3179 43.5746 39.4612 43.2189C39.6045 42.8632 39.8471 42.5591 40.1584 42.3452C40.4696 42.1313 40.8356 42.0172 41.21 42.0172C41.7118 42.0178 42.193 42.223 42.5478 42.588C42.9027 42.9529 43.1023 43.4477 43.1029 43.9638ZM23.7942 25.3315H44.5644L43.0947 33.6451C43.0382 33.9655 42.8741 34.2554 42.631 34.464C42.3879 34.6726 42.0812 34.7869 41.7646 34.7867H25.4658L23.7942 25.3315Z" fill="#0F4C81" />
                                </svg>

                            </Button>
                        </div>
                        <div>

                            <IconButton aria-label="delete"></IconButton>
                            <Button style={{ border: 'none' }}
                                variant="outlined" onClick={() => deleteProduto(produtoDTO.id_produto)}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#DB0000" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2107 24.4211C20.2107 23.956 20.5877 23.579 21.0528 23.579H43.7896C44.2547 23.579 44.6317 23.956 44.6317 24.4211C44.6317 24.8862 44.2547 25.2632 43.7896 25.2632H21.0528C20.5877 25.2632 20.2107 24.8862 20.2107 24.4211Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8949 20.2106C29.4482 20.2106 29.0198 20.388 28.704 20.7039C28.3881 21.0197 28.2107 21.4481 28.2107 21.8948V23.579H36.6317V21.8948C36.6317 21.4481 36.4543 21.0197 36.1384 20.7039C35.8226 20.388 35.3942 20.2106 34.9475 20.2106H29.8949ZM38.3159 23.579V21.8948C38.3159 21.0014 37.961 20.1447 37.3293 19.513C36.6976 18.8813 35.8409 18.5264 34.9475 18.5264H29.8949C29.0015 18.5264 28.1447 18.8813 27.513 19.513C26.8813 20.1447 26.5265 21.0014 26.5265 21.8948V23.579H23.5791C23.114 23.579 22.737 23.956 22.737 24.4211V42.1053C22.737 42.9987 23.0919 43.8554 23.7236 44.4871C24.3553 45.1188 25.212 45.4737 26.1054 45.4737H38.737C39.6303 45.4737 40.4871 45.1188 41.1188 44.4871C41.7505 43.8554 42.1054 42.9987 42.1054 42.1053V24.4211C42.1054 23.956 41.7284 23.579 41.2633 23.579H38.3159ZM24.4212 25.2632V42.1053C24.4212 42.552 24.5986 42.9804 24.9145 43.2962C25.2303 43.6121 25.6587 43.7895 26.1054 43.7895H38.737C39.1837 43.7895 39.612 43.6121 39.9279 43.2962C40.2437 42.9804 40.4212 42.552 40.4212 42.1053V25.2632H24.4212Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8949 29.8948C30.36 29.8948 30.737 30.2718 30.737 30.7369V38.3158C30.737 38.7809 30.36 39.1579 29.8949 39.1579C29.4298 39.1579 29.0528 38.7809 29.0528 38.3158V30.7369C29.0528 30.2718 29.4298 29.8948 29.8949 29.8948Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.9475 29.8948C35.4126 29.8948 35.7896 30.2718 35.7896 30.7369V38.3158C35.7896 38.7809 35.4126 39.1579 34.9475 39.1579C34.4824 39.1579 34.1054 38.7809 34.1054 38.3158V30.7369C34.1054 30.2718 34.4824 29.8948 34.9475 29.8948Z" fill="white" />
                                </svg>

                            </Button>
                        </div>
                    </div>
                </section>
            </Grid>
        </>
    )
}



