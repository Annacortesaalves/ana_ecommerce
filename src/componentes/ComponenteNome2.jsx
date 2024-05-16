import { useEffect, useState } from "react";
 
function ComponenteNome2 () {
    const [nome, SetNome] =useState("Seu Nome");

    useEffect ( () =>{
        alert (`O nome trocou ${nome}`)
    }, [nome])

    return (
        <div>
            <button onClick={() => SetNome("Aninha")}> alterar para apelido</button>
            <button onClick={() => SetNome("Ana")}> alterar para Nome</button>
            <p> Nome: {nome}</p>
        </div>
    );

}

export {ComponenteNome2};

