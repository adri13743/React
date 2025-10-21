const texto = 'texto formato string';
const numeros = 12345;
const lista = ['Adrian Rubio', 1998];
const funcion= (x=1,y=0) => {return x+y};
const objeto = {nombre:'Variables en JSX'} // EN LOS OBJETOS REACT NO SABE COMO COVERTIRLOS
const fecha = new Date();// EN LOS OBJETOS REACT NO SABE COMO COVERTIRLOS
export const Variables = () => {
    return(
        <div>
            <p>{texto}</p>
            <p>{numeros}</p>
            <p>{lista}</p>
            <p>{funcion()}</p>
            <p>{JSON.stringify(objeto)}</p> {/* Convierte el objeto en una cadena de texto formato JSON.*/}
            <p>{JSON.stringify(fecha)}</p> {/* Convierte el objeto en una cadena de texto formato JSON.*/}   
        </div>
    ) // solo puede devolver un objeto, por eso se agrupa en el div
}

