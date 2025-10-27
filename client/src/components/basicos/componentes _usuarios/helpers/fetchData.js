export const fecthData= async(endPoint)=>{
    try{
        // Usa una plantilla literal (backticks ``) para insertar la prop 'endPoint'
        // en la URL, haciéndola dinámica.
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
        const data = await respuesta.json();
        return{
            data
            // NO manejamos isLoading aquí
        }
    }catch(error){
        console.error("Error en fetchData:", error);
        // Retornamos un objeto vacío en caso de error para evitar fallos.
        return { data: [] };
    }
}