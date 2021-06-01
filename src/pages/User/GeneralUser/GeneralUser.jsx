import React from 'react'
import {Link} from "react-router-dom"
import {useAuth} from "../../../Providers/AuthProviders"

import "./GeneralUser.scss"

export default function GeneralUser() {
    const {userData} = useAuth()
    return (
        <div className="general-user">
            <div className="general-user__welcome">                
                {
                    userData && userData.name ? 
                    <p>Bienvenido <span className="general-user__welcome_name">{userData.name}</span></p>
                    :
                    <p>Bienvenido <span className="general-user__welcome_name">{userData.email}</span> <span>deseas</span> <Link to={"/user/setting"}>agregar tu nombre?</Link></p>
                }
            </div>
            <div className="general-user__info">
                <p>Desde está interfaz puedes revizar tus <Link to={"/user/pedidos"}>pedidos</Link>, configurar la <Link to={"/user/direccion"}>dirección</Link> donde recibes y <Link to={"/user/setting"}>configurar</Link> tu cuenta. Si tienes alguna queja, pregunta o reclamo has <Link to={"/pqrs"}>click aqui</Link></p>
            </div>
        </div>
    )
}
