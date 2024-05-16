import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../page/Produto";
import { Home } from "../page/Home";
import ComponenteCarrosel from "../componentes/ComponenteCarrosel";
import { Login } from "../page/Login";
import { Carrinho } from "../page/Carrinho";


function RouteApp () {
    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
             <Route path="/produto" element={< Produto/>} />
              <Route path="/login" element={<Login/>}/>     
              <Route path="/carrinho" element={<Carrinho/>}/>      
        </Routes>
        </BrowserRouter>
    );
}

export { RouteApp };