import React from "react";
import { Route, Switch} from "react-router-dom";


export default function LayoutAdmin(props){
    const {routes} = props;
    return(
        <>
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