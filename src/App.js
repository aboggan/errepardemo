import { Container, makeStyles } from "@material-ui/core";
import Dashboard from "./components/Dashboard/Dashboard";
import React from "react";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Blog from "./components/Home/Blog";
import MobileMenu from "./components/MobileMenu";
import SignInSide from "./components/SignInSide";
import StickyFooter from "./components/StickyFooter";
import TableDemo from "./components/TableDemo";
import { fakeAuth } from "./utils/fakeAuth";

function App() {
  const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
      "& img": {
        maxWidth: "100%",
      },
    },
  }));
  const classes = useStyles();





  function PrivateRoute({ children, ...rest }) {
    const isLogged = sessionStorage.getItem("isLogged");
    console.log("s", isLogged)
    return (
      <Route {...rest} render={( { location } ) => {
        return isLogged === "true"
          ? children
          : <Redirect to={{
            pathname: '/login',
            state: {from: location}
          }} />
      }} />
    )
  }


  return (
    <Router>
      <header>
        <MobileMenu></MobileMenu>

      </header>
      <main>
        <Route path="/" exact component={Blog}></Route>
        <Route path="/login">
          <SignInSide />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      </main>
    </Router>
  );
}

export default App;
