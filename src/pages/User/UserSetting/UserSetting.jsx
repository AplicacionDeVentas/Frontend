import React from 'react'
import {Menu} from "antd"

import "./UserSetting.scss"

export default function UserSetting() {
    return (
        <div className="container user-setting">
            
            <div className="user-setting__menu">
                <Menu>
                    <Menu.Item>General</Menu.Item>
                    <Menu.Item>Pedidos</Menu.Item>
                    <Menu.Item>Dirección</Menu.Item>
                    <Menu.Item>Configuración de la cuenta</Menu.Item>
                    <Menu.Item>Cerrar sesion</Menu.Item>
                </Menu>
            </div>
            <div className="user-setting__main">
                <p>contenido</p>
            </div>
        </div>        
    )
}
