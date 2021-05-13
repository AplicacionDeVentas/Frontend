import React from "react"
import {Link} from "react-router-dom";
import {InputNumber, Button} from "antd"

import "./CardCartshopping.scss"

export default function CardCartshopping(){
    return (
        <div className="cardcartshopping">
            <div className="cardcartshopping__header">
                <span>0 Productos</span>
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
                    <span>25.750$ COP</span>
                </div>
            </div>
            <div>
                <Button type="primary">Realizar pago</Button>
            </div>
        </div>
    )
}

function ProductBag() {
    return(
        <div className="cardcartshopping__product">
            <div>
                <img src="https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg"></img>
                <span>Description of product about macetas</span>
            </div>
            <InputNumber min={1} defaultValue={1}></InputNumber>
            <span>1 x 30k</span>
        </div>
    )
}