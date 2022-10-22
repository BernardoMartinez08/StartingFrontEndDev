import React from "react";
import '../hojas-de-estilos/Boton_Update.css';

function Boton(props) {
    return (
        <div className='boton'
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
            <div className="icon">
                🔃
            </div>
        </div>
    )
}

export default Boton;