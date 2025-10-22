/* 
const Objetos =({nombre, vista})=>{ 
    if(vista){ 
        return <li>{nombre} {'✔'}</li> 
    } 
    return <li>{nombre} {'❗'}</li> 
} 

const Objetos =({nombre, vista})=>{ 
    return( 
        <li>{nombre} {vista && '✔' }</li> 
    ) 
} 
*/

const Objetos =({nombre, vista})=>{
    return(
        <li>{nombre} {vista ? '✔' : '❗'}</li>
    )
}

export const CondicionalesTernarios = () => {
    return(
    <>
        <h1>Lista de objetos guardados</h1>
        <o1>
            <Objetos nombre="no lo se" vista={false}></Objetos>
            <Objetos nombre="si lo se" vista={true}></Objetos>
        </o1>
        
    </>
    ) 
}
