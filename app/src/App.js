import React from "react";
import "../style/index.scss";
import { Activity, NotFound }  from "./Pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/results">
            <div>Results</div>
          </Route>
          <Route exact path="/">
            <Activity />
          </Route>
          <Route >
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}
export default App;
