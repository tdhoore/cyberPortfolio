import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" />
      <Route path="/work" />
      <Route path="/work/:id" />
      <Route path="/about" />
      <Route path="/contact" />
      <Route />
    </Switch>
  </BrowserRouter>
);
