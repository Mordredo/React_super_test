import React from "react";
import { Switch, Route } from "react-router-dom";

import Blog from "./blog/Blog";
import CreateView from "./createView/CreateView";
import Login from "./login/Login";

import PageBlock from "./PageBlock";

const Pages = () => {
  const token = sessionStorage.getItem("token");

  return (
    <Switch>
      <Route exact path="/createView">
        <PageBlock page={CreateView} />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/sign-in"></Route>
      <Route exact path="/">
        {token === undefined || token === null ? (
          <Login />
        ) : (
          <PageBlock page={Blog} />
        )}
      </Route>
    </Switch>
  );
};

export default Pages;
