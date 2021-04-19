import React from "react";
import {Route, Switch} from "react-router-dom";
import PageHeader from "../components/Web/Header/PageHeader";


export default function LayoutHome(props){
    const {routes} = props;
    
    return(
        <>
            <PageHeader />
            <LoadRoutes routes={routes} />
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