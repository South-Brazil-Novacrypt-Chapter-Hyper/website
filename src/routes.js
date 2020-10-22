import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/index";
import LaunchingPad from "./pages/LaunchingPad/index";
import Hello from "./pages/Hello";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/projects" component={LaunchingPad}></Route>
        <Route path='/hello' component={Hello}/>
      </Switch>
    </BrowserRouter>
  );
}
