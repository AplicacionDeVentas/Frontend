import React,{useState, useEffect} from 'react'
import {Switch, Route, Link, Redirect} from "react-router-dom"
import {Menu} from "antd"
import PageHeader from "../components/Web/Header/PageHeader.jsx"
import PageFooter from "../components/Web/Footer/Footer.jsx"
import {auth} from "../config/FirebaseConfig"
import {useAuth} from "../Providers/AuthProviders"

import "./LayoutUser.scss"

export default function LayoutUser(props) {
    const {routes, location} = props;
    const [locationPathname, setLocationPathname] = useState(location.pathname)
    const {userData} = useAuth()

    useEffect(() => {
        setLocationPathname(location.pathname)
    }, [location.pathname])

    const Logout = () => {
        auth.signOut()
    }

    return (
        userData ?
        <>
            <PageHeader />
            <main className="container user">                        
                <Menu className="user__menu" selectedKeys={[locationPathname]}>
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
                <div className="info">
                    <LoadRoutes routes={routes} />
                </div>                
            </main>
            <PageFooter />
        </>
        :
        <Redirect to="/" />
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