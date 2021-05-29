import React, {useState} from "react";
import { Route, Switch, Link, Redirect} from "react-router-dom";
import {Layout, Menu} from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faBoxes, faChartPie, faProjectDiagram } from "@fortawesome/free-solid-svg-icons"
import AdminHeader from "../components/admin/Header/AdminHeader.jsx"
import {useAuth} from "../Providers/AuthProviders"

import "./LayoutAdmin.scss"


export default function LayoutAdmin(props){
    const {routes, location} = props;
    const [collapsed, setCollapsed] = useState(false);
    var userAdmin = false

    const {userData} = useAuth()

    if(userData){
        if(userData.isAdmin){
            userAdmin = true
        }else{
            userAdmin = false
        }
    }
    
    const toggle = () => {
        setCollapsed(!collapsed);
    }
    

    return(
        userAdmin ?
        <Layout >
            <Layout.Sider theme="light" collapsible collapsed={collapsed} onCollapse={toggle}>
                <Link to={"/"}>
                    <div className="logoAdmin">Logo</div>
                </Link>
                <Menu defaultSelectedKeys={[location.pathname]} mode="inline">
                    <Menu.Item key="/admin" icon={<FontAwesomeIcon icon={faChartPie} />} >
                        <Link to={"/admin"}>General</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/pedidos" icon={<FontAwesomeIcon icon={faBoxes} />} >
                        <Link to={"/admin/pedidos"}>Pedidos</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/product" icon={<FontAwesomeIcon icon={faProjectDiagram} />} >
                        <Link to={"/admin/product"}>Productos</Link>
                    </Menu.Item>
                    <div className="separador"></div>
                    <Menu.Item key="/admin/setting" icon={<FontAwesomeIcon icon={faCog} />} >
                        <Link to={"/admin/setting"}>Configuración</Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>

            <Layout>
                <AdminHeader />
                <Layout.Content className="admin__main">
                    <LoadRoutes routes={routes} />
                </Layout.Content>
            </Layout>

        </Layout>
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