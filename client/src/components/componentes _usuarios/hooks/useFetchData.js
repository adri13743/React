import { useEffect,useState } from "react";
import{fecthData} from "../helpers/fetchData";
export const useFetchData=(endPoint)=>{
    // Define el estado donde se almacenarán los datos (usuarios o comentarios).
    const [data, setData] = useState([]);
    // Define el estado donde se indica si esta cargando los datos
    const [isLoading, setIsLoading] = useState(true);
    // Función asíncrona para obtener los datos de la API.
    const getData = async()=>{
        // 1. REINICIAMOS EL ESTADO: Indicamos que la carga ha comenzado.
        setIsLoading(true);
        // 2. LLAMADA AL HELPER: Obtenemos solo la data.
        const {data: newData} = await fecthData(endPoint);
        setData(newData); // actualizamos los datos
        setIsLoading(false); // Indicamos que la carga ha terminado.
    }
    useEffect(()=>{
        getData()
        // El array de dependencias ([endPoint]) es CRUCIAL:
        // El efecto se ejecuta la primera vez Y CADA VEZ que el valor de 'endPoint' CAMBIA.
        // Esto permite recargar datos al hacer clic en el botón del componente padre.
    },[endPoint])
    return{
        data,
        isLoading
    }
}
