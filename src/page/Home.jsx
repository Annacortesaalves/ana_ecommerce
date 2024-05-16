

import { Container } from "react-bootstrap";
import { NavBar }  from "../componentes/NavBar";
import { ComponenteCarrosel } from "../componentes/ComponenteCarrosel";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Footer } from "../componentes/Footer";


function Home() {
  return (
    <Container>
      <NavBar />
      <ComponenteCarrosel />
      <ListaProdutos />
      <Footer />


    </Container>
  );
}

export { Home };