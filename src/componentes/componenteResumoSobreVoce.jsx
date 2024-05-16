
import { useEffect } from "react";

function ComponetnteResumoSobreVoce (props) {

useEffect ( () =>{
    alert ('Olá, esse é um resumo sobre mim :)')
}, [])

    return (
        <div>
            <div>Resumo</div>
       <p>{props.children}</p>
        </div>
    );
    }

    export { ComponetnteResumoSobreVoce };

