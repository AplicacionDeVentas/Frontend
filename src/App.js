import {HashRouter, Route, Switch} from "react-router-dom";
import routes from "./config/Router";

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {routes.map((route, index) => (console.log(route) ))}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
