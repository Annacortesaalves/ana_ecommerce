import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Bounce, toast } from "react-toastify";
import api from "../service/api";
import { CardProduto } from "./CardProduto";

function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        buscarProdutos();
      }, []);
    
      async function buscarProdutos() {
        try {
          const response = await api.get("/productlistbyremark/home");
          setProdutos(response.data);
        } catch (error) {
          mensagemDeErro("Erro para buscar os produtos.");
        }
      }

    function mensagemDeErro(mensagem = "Mensagem de Erro") {

        toast.error(mensagem, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });


    }


    return (
        <>
            <Row className="justify-content-md-center">
                <Col md={2}>
                    <h1>Lista Produtos</h1>
                </Col>
            </Row>
            <Row>
        {produtos.map((produto, index) => {
          return (
            <Col className="m-2" key={index}>
              <CardProduto
                idProduto={produto.id}
                nome={produto.title}
                preco={produto.price}
                linkImagem={produto.image}
                descricao={produto.category}
              />
            </Col>
          );
        })}
      </Row>
        </>
    );
}

export { ListaProdutos };