import { useState } from "react"
export const Formulario = ({agregarTarea}) => { //nos pasa el padre el metodo para agreagr una tarea
    const [inputValor,setInput] = useState('');
    const Cambio=(event)=>{
        setInput(event.target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        agregarTarea(inputValor);
    }
    return(
    <>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="ingresar nueva tarea" value={inputValor} onChange={Cambio}></input>
        </form>
        
    </>
    ); 
}