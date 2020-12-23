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
    <PublicRoute
      exact
      path={[routes.public.login, routes.public.index]}
      component={Login}
    />
    <PublicRoute
      exact
      path={[routes.public.registration, routes.public.index]}
      component={Registration}
    />
    <PrivateRoute
      exact
      path={[routes.private.blog, routes.private.index]}
      component={PageWrapper}
    />

    <PrivateRoute exact path={routes.private.view} component={PageWrapper} />
  </Switch>
);

export default Pages;
