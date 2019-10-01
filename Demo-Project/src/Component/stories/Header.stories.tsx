import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../Home";
import Login from "../../Login";
import Header from "../../Header";
import Register from "../../Register";
storiesOf("Header", module).add("Header", () => (
  <Router>
    <Header loginFlage={false}></Header>
    <Route exact path="/" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
  </Router>
));
