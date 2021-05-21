import { Container, makeStyles } from "@material-ui/core";
import  Dashboard  from "./components/Dashboard/Dashboard";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from "./components/Home/Blog";
import MobileMenu from "./components/MobileMenu";
import SignInSide from "./components/SignInSide";
import StickyFooter from "./components/StickyFooter";
import TableDemo from "./components/TableDemo";

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
  return (
    <Router>
      <header>
        <MobileMenu></MobileMenu>

      </header>
      <main>
        <Route path="/" exact component={Blog}></Route> 
        <Route path="/login" component={SignInSide}></Route> 
        <Route path="/dashboard" component={Dashboard}></Route> 
      </main>
    </Router>
  );
}

export default App;
