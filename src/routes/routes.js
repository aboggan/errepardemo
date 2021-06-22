import React from "react";
import { Redirect, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Blog from "../components/Home/Blog";
import SignInSide from "../components/SignInSide";
import TableDemo from "../components/TableDemo";
import Costumers from "../components/Widgets/Costumers";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return sessionStorage.getItem("isLogged") === "true" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

const routes = (
  <>
    <Route path="/" exact component={Blog}></Route>
    <Route path="/login">
      <SignInSide />
    </Route>
    <PrivateRoute path="/dashboard">
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute path="/tabla">
      <TableDemo />
    </PrivateRoute>
    <PrivateRoute path="/costumers">
      <Costumers />
    </PrivateRoute>


  </>
);

export default routes;
