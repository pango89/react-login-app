import React, { Suspense, lazy } from "react";
import { BrowserRouter  as Router, Route, Redirect, Switch } from "react-router-dom";
import { AppLoading } from "../loaders/loaders";
// import LoginForm from "../components/login/loginForm";
const LoginForm = lazy(() => import("../components/login/loginForm"));

const RoutesMapper = props => (
  <Router>
    <Suspense fallback={<AppLoading />}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <LoginForm />;
          }}
        />
        <Route
          path="/login"
          render={() => {
            return <LoginForm />;
          }}
        />
        <Route render={() => <Redirect to="/pageNotFound" />} />
      </Switch>
    </Suspense>
  </Router>
);
export default RoutesMapper;
