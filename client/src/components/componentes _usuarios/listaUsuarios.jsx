import { useFetchData } from "./hooks/useFetchData"
export const ListaUsuarios = ({endPoint}) =>{
    const {data,isLoading} =useFetchData(endPoint);
    return(
        <>
            <h1>Lista de usuarios:</h1>
            <ul>
                {isLoading 
                    ? <p>Cargabdo ....</p> 
                    : endPoint == 'users' 
                        ? data.map(item=> <li key={item.id}>{item.name}</li>) 
                        : data.map(item=> <li key={item.id}>{item.body}</li>) 
                }
            </ul>
        </>
    )
}

