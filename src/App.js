import {HashRouter, Route, Switch} from "react-router-dom";
import routes from "./config/Router";

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {routes.map((route, index) => (<RouteWithSubRoutes key={index} {...route} /> ))}
        </Switch>
      </HashRouter>
    </div>
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