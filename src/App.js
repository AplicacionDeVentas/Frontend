import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import routes from "./config/Router";
import {AuthProvider} from "./Providers/AuthProviders";

import './App.scss';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Switch>
          {routes.map((route, index) => (<RouteWithSubRoutes key={index} {...route} /> ))}
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;

function RouteWithSubRoutes(route){
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}