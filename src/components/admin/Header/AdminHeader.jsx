import React from "react"
import {Layout, Menu} from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons"

import "./AdminHeader.scss"

export default function AdminHeader() {
    return (
        <Layout.Header className="adminheader" >
            <h2 className="adminheader__title">General</h2>
            <Menu className="adminheader__menu" mode="horizontal" >
                <Menu.Item className="adminheader__menu__notification" key="1" >
                    <FontAwesomeIcon icon={faBell} />
                    <span className="number">0</span>
                </Menu.Item>
                <div className="adminheader__menu__separador"></div>
                <Menu.Item className="adminheader__menu__user" key="2" >
                    <div>
                        <p>Juan Peréz</p>                        
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </Menu.Item>
            </Menu>            
        </Layout.Header>
    )
}