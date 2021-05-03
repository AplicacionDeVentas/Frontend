import React from "react";

import "./MenuButtons.scss";

export default function MenuButtons(props) {
    const { change } = props;

    return (
        <div className={`navbar__buttons ${change ? "navbar__buttons__responsive" : ""}`} >              
            <ul className={`navbar__buttons__button ${change ? "navbar__buttons__responsive__button" : ""}`}>
                <li>Inicio</li>
                <li>Categorias</li> 
                <li>PQRS</li>          
            </ul>
        </div>
    )
}