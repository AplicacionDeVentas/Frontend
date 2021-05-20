import React from 'react'
import {Switch, Route, Link} from "react-router-dom"
import {Menu} from "antd"
import PageHeader from "../components/Web/Header/PageHeader.jsx"
import PageFooter from "../components/Web/Footer/Footer.jsx"

import "./LayoutUser.scss"

export default function LayoutUser(props) {
    const {routes, location} = props;

    const Logout = () => {
        console.log("sesion cerrada");
    }
    return (
        <>
            <PageHeader />
            <main className="container user">                        
                <Menu className="user__menu" defaultSelectedKeys={[location.pathname]}>
                    <Menu.Item key="/user">
                        <Link to={"/user"}>General</Link>
                    </Menu.Item>
                    <Menu.Item key="/user/pedidos">
                        <Link to={"/user/pedidos"}>Pedidos</Link>
                    </Menu.Item>
                    <Menu.Item key="/user/direccion">
                        <Link to={"/user/direccion"}>Dirección</Link>
                    </Menu.Item>
                    <Menu.Item key="/user/setting">
                        <Link to={"/user/setting"}>Configuración de la cuenta</Link>
                    </Menu.Item>
                    <Menu.Item key="5" onClick={() => Logout()}>
                        <Link to={"/"}>Cerrar sesion</Link>
                    </Menu.Item>
                </Menu>
                
                <div>
                    <LoadRoutes routes={routes} />
                </div>
            </main>
            <PageFooter />
        </>
    )
}

function LoadRoutes({routes}){
    
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route 
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                ))
            }
        </Switch>
    )
}