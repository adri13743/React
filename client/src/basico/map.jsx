import { useState } from "react"
import { Formulario } from "../components/componentes_basicos/formulario"

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
    const onAgregaTarea=(val)=>{
        if(val.trim()<1) return; // si no hay inf sale del metodo y no hace nada
        // .trim si pones espacios al principio que no los tenga en cuenta
        const envio ={nombre: val, vista:false};
        setMapa([...mapa, envio]);
    }
    return(
    <>
        <h1>Lista de objetos guardados</h1>
        <Formulario agregarTarea={onAgregaTarea}></Formulario>
        <ol>
            {mapa.map((objeto, index)=>(<Objetos key ={index} nombre={objeto.nombre} vista={objeto.vista}></Objetos>))}
        </ol>
    </>
    ) 
}