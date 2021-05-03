import React from "react";
import {Route, Switch} from "react-router-dom";
import PageHeader from "../components/Web/Header/PageHeader";
import PageFooter from "../components/Web/Footer/Footer";


export default function LayoutHome(props){
    const {routes} = props;
    return(
        <>
            <PageHeader />
            <main style={{minHeight: "97vh"}}>
                <LoadRoutes routes={routes} />
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