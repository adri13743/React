import { useState } from "react"

const Objetos =({nombre, vista})=>{
    return(
        <li className="lista">{nombre} {vista ? '✔' : '❗'}</li>
    )
}

export const Map = () => {
    let lista=[
        {nombre:"no lo se" , vista:false},
        {nombre:"si lo se" , vista:true},
        {nombre:"puede que lo sepa", vista:true},
        {nombre:"puede que no lo sepa", vista:false},
        {nombre:"lo sabre", vista:true},
        {nombre:"no lo sabre", vista:false}
    ]
    const [mapa, setMapa] = useState(lista)
    const Tarea=()=>{
        setMapa([...mapa, {nombre:"nueva tarea" , vista:true}])
    }
    return(
    <>
        <h1>Lista de objetos guardados</h1>
        <ol>
            {mapa.map((objeto, index)=>(<Objetos key ={index} nombre={objeto.nombre} vista={objeto.vista}></Objetos>))}
        </ol>
        <button onClick={()=> Tarea()}> Agregar tarea</button>
    </>
    ) 
}