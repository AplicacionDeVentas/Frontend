import React from 'react'
import {useAuth} from "../Providers/AuthProviders"
import AnchorButton from "../Utils/AnchorButton/AnchorButton"

import "./SuccessBuy.scss"

export default function SuccessBuy() {
    const {userData} = useAuth()
    console.log(userData)
    return (
        <div className="container">
            <div className="success-buy">
                <h1>Felicidades {userData && userData.nickname ? userData.nickname : ""} !!</h1>
                <p>Tu compa ha sido exitosa</p>
                <div className="success-buy__resume">
                    <h2>Resumen de tu compra</h2>
                    <a>Enviar resumen al correo eléctronico</a>
                </div>
                <AnchorButton href="/" value="Regresar a tienda" />
            </div>
        </div>
    )
}
