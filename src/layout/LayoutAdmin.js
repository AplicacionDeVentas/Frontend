import React, {useState} from "react";
import { Route, Switch} from "react-router-dom";
import {Layout, Menu} from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faBoxes, faChartPie, faProjectDiagram } from "@fortawesome/free-solid-svg-icons"


export default function LayoutAdmin(props){
    const {routes} = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    }
    return(
        <Layout >
            <Layout.Sider theme="light" collapsible collapsed={collapsed} onCollapse={toggle} style={{ minHeight: '100vh' }}>
                <div>Logo</div>
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<FontAwesomeIcon icon={faChartPie} />} >General</Menu.Item>
                    <Menu.Item key="2" icon={<FontAwesomeIcon icon={faBoxes} />} >Pedidos</Menu.Item>
                    <Menu.Item key="3" icon={<FontAwesomeIcon icon={faProjectDiagram} />} >Productos</Menu.Item>
                    <Menu.Item key="4" icon={<FontAwesomeIcon icon={faCog} />} >Configuración</Menu.Item>
                </Menu>
            </Layout.Sider>

            <Layout>
                <Layout.Header style={{padding: 0}}>
                    <Menu mode="horizontal" >
                        <Menu.Item key="1" >
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="2" >
                        Option 2
                        </Menu.Item>
                    </Menu>
                    <Layout.Content style={{ margin: '2em 1.3em', padding: '2em' }}>
                        <LoadRoutes routes={routes} />
                    </Layout.Content>
                </Layout.Header>
            </Layout>

        </Layout>
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