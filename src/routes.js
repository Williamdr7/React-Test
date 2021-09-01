import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Lists from "./pages/lists/Lists";
import Names from "./pages/names/Names";

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/lists">
          <Lists />
        </Route>
        <Route exact path="/">
          <Names />
        </Route>
      </Switch>
    </Router>
  );
}
