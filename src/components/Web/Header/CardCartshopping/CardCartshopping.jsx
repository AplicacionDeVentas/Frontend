import React, {useState} from "react"
import {Link} from "react-router-dom";
import {InputNumber} from "antd"
import InputButton from "../../../../Utils/InputButton/InputButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"

import "./CardCartshopping.scss"

export default function CardCartshopping(props){
    const {setBagHidden} = props

    return (
        <div className="cardcartshopping" onMouseLeave={() => setBagHidden(false)}>
            <div className="cardcartshopping__header">
                <span>1 Productos</span>
                <Link to={"/bag"}>Ver carrito</Link>
            </div>
            <ProductBag />
            <div className="cardcartshopping__price">
                <div>
                    <span>Subtotal:</span>
                    <span>20k</span>
                </div>
                <div>
                    <span>Envio:</span>
                    <span>5.750$</span>
                </div>
                <div>
                    <span>Total:</span>
                    <span>25.750$</span>
                </div>
            </div>
            <InputButton value="Realizar pago" />
        </div>
    )
}

function ProductBag() {
    return(
        <div className="cardcartshopping__product">
            <div className="cardcartshopping__product__delete">
                <img src="https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg"></img>
                <span>Description of product about macetas</span>
                <div>
                    <FontAwesomeIcon icon={faTimes} />
                    <p>Borrar producto</p>
                </div>
            </div>
            <InputNumber min={1} defaultValue={1}></InputNumber>
            <span>20k</span>
        </div>
    )
}