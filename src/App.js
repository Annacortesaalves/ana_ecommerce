
import './App.css';

import "font-awesome/css/font-awesome.css";

import { ComponenteNome } from './componentes/componentes';
import { ComponetnteResumoSobreVoce } from './componentes/componenteResumoSobreVoce';
import { ComponenteCompetencia } from './componentes/ComponenteCompetencia';
import { ComponenteNome2 } from './componentes/ComponenteNome2';
import { RouteApp } from './route';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import CarrinhoContextProvider, { CarrinhoContext } from './hooks/CarrinhoContext';


function App() {
  return (
    <>
   <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>
    </>
  );
}

export default App;
