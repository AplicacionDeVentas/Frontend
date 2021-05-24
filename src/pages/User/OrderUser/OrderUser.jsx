import React from 'react'
import {Link} from "react-router-dom"
import AnchorButton from "../../../Utils/AnchorButton/AnchorButton"

import "./OrderUser.scss"

export default function PedidosUser() {
    return (
        <div className="order-user">
            <p>Actualmente no tienes ningun pedido</p>
            <AnchorButton href={"/"} value="Ir a tienda" />
        </div>
    )
}
