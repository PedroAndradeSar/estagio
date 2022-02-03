import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Carrinho from "../Paginas/Carrinho";
import Editar from "../Paginas/Editar";
import Adicionarpt from "../Paginas/Adicionar";

import Home from "../Paginas/Home";
//import Carrinho from "./Paginas/Carrinho";
//import Adicionar from "./Paginas/Adicionar";
//import Editar from "./Paginas/Editar";

const Rota = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route exact path="/home" element = {<Home />} />
            <Route exact path="/carrinho" element = {<Carrinho   />} />
            <Route exact path="/editar" element = {<Editar />} />
            <Route exact path="/adicionarpt" element ={<Adicionarpt/>}/>
            <Route index element={<Home/>}/>
        </Routes>
       </BrowserRouter>
   )
}

export default Rota;