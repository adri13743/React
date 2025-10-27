import {useState } from "react";
import { ListaUsuarios } from "../components/basicos/componentes _usuarios/listaUsuarios";
export const Usuarios = () =>{
    // Inicialmente, se establece para pedir los datos de 'users'.
    const [endPoint,setendPoint] =useState('users');
    // Ejecuta la función fecthUsuarios después del renderizado inicial del componente.

    // Función que se llama al hacer clic en el botón.
    const handleFetch=()=>{
        // Al cambiar el estado 'endPoint' a 'comments', React re-renderiza este componente.
        // La nueva prop 'comments' se pasa al hijo (<ListaUsuarios>).
        setendPoint('comments')
    }
    return(
        <>
            <h1>Contendido cargado {endPoint}:</h1>
            <ListaUsuarios endPoint={endPoint}> </ListaUsuarios>
            {/* 4. CONTROL: Botón que dispara el cambio de estado 'endPoint'. */}
            <button onClick={handleFetch}>Llamado a la API</button>
            <ul>
            </ul>
        </>
    )
}

