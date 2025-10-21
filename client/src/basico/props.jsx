import'./props.css';
import PropTypes from 'prop-types';
export const Props = ({titulo,informacion,numero = 0}) => { // desestructuramos demain.jsx y valores defecto si nulos
    console.log(titulo);
    return(
        <>
            <h1>Props1: {titulo} </h1>
            <h2>Props2: {informacion} </h2>
            <h2>Props2: {numero} </h2>
        </>
    ) 
}

Props.PropTypes={ // tipos requeridos de los datos
    titulo: PropTypes.string.isRequired,
    informacion: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
};

Props.defaultProps={ // si no me llegan los datos por defecto 2 manera mejor la primera qie no me va
    titulo: 'Titulo por defecto, no  llego nada al hijo',
    informacion: 'Informacion por defecto, no llego nada al hijo'
};