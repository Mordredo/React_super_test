import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./login/Login";
import Registration from "./registration/Registration";

import PageWrapper from "./PageWrapper";
import PublicRoute from "../../Routes/PublicRoute";
import PrivateRoute from "../../Routes/PrivateRoute";

import routes from "../../Routes";

const Pages = () => (
  <Switch>
    {/* <Route */}
    {/*  exact */}
    {/*  path={[routes.public.login, routes.public.index]} */}
    {/*  component={Login} */}
    {/* /> */}
    <Route
      exact
      path={[routes.public.registration, routes.public.index]}
      component={Registration}
    />
    <Route
      exact
      path={[routes.private.blog, routes.private.index]}
      component={PageWrapper}
    />
    {/* <PrivateRoute component={PageWrapper} /> */}

    {/* <PublicRoute */}
    {/*  exact */}
    {/*  path={[routes.public.login, routes.public.index]} */}
    {/*  component={Login} */}
    {/* /> */}
  </Switch>
);

export default Pages;
