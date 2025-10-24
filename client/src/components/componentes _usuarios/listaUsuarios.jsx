import { useEffect, useState } from "react";
export const ListaUsuarios = ({endPoint}) =>{
    // Define el estado donde se almacenarán los datos (usuarios o comentarios).
    const [usuarios, setUsarios] = useState([]);
    // Función asíncrona para obtener los datos de la API.
    const fecthUsuarios= async()=>{
        try{
            // Usa una plantilla literal (backticks ``) para insertar la prop 'endPoint'
            // en la URL, haciéndola dinámica.
            const respuesta = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
            const datos = await respuesta.json();
            // Actualiza con los datos obtenidos. Esto provoca un re-renderizado.
            setUsarios(datos);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(()=>{
        fecthUsuarios()
        // El array de dependencias ([endPoint]) es CRUCIAL:
        // El efecto se ejecuta la primera vez Y CADA VEZ que el valor de 'endPoint' CAMBIA.
        // Esto permite recargar datos al hacer clic en el botón del componente padre.
    },[endPoint])
    return(
        <>
            <h1>Lista de usuarios:</h1>
            <ul>
                {endPoint == 'users' ? usuarios.map(usuario=> <li key={usuario.id}>{usuario.name}</li>) :
                    usuarios.map(item=> <li key={item.id}>{item.body}</li>) }
            </ul>
        </>
    )
}

