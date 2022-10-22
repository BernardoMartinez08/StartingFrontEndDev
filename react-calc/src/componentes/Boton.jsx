import React from "react";
import '../hojas-de-estilos/Boton.css';

function Boton(props) {
    const esOperador = () => {
        const valor = props.children;
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    return (
        <div className={`boton ${esOperador() ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton;