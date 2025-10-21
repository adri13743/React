import { useState } from "react";

export const Contador = ({valor}) => { // valor lo pasa el padre
    const[contado, setContador] = useState(valor);//se llama con valor estado inical de contado
    // devuelve contado: La variable de estado actual y setContador función para actualizar 'contado'
    const cuenta=()=>{
        setContador(contado+1)//programa una actualizacion (re-renderizado)
        //No actualizamos valor ya que es una const del padre
    }
    return(
    <>
        <h1>boton: </h1>
        <p>{contado} </p>
        <button onClick={cuenta}>Presioname</button>
    </>
    ) 
}
