import React from "react";
import IconButton from '../../../../Utils/IconButton';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import "./MenuButtons.scss";

export default function MenuButtons(props) {
    const { change } = props;

    return (
        <div className={`navbar__buttons ${change ? "navbar__buttons__responsive" : ""}`} >              
            <ul className={`navbar__buttons__button ${change ? "navbar__buttons__responsive__button" : ""}`}>
                <li>Inicio</li>
                <li>
                    Categorias 
                    <IconButton icon={faCaretDown} /> 
                    {/* <div className="dropdown">
                        <ul>
                            <li className="dropdown__link">Link1</li>
                            <li className="dropdown__link">
                                Link2 
                                <IconButton icon={faCaretDown} />
                                <div className="dropdown second">
                                    <ul>
                                        <li className="dropdown__link">Link1</li>
                                        <li className="dropdown__link">Link2 <IconButton icon={faCaretDown} /> </li>
                                        <li className="dropdown__link">Link3</li>
                                        <div className="dropdown__arrow"></div>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown__link">Link3</li>
                            <div className="dropdown__arrow"></div>
                        </ul>
                    </div> */}
                </li> 
                <li>PQRS</li>          
            </ul>
        </div>
    )
}