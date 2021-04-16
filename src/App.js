import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Conozca from "./components/Conozca";
import { Container, makeStyles } from "@material-ui/core";
import BreadcrumbCustom from "./components/BreadcrumbCustom";
import Trabajar from "./components/Trabajar";
import MobileMenu from "./components/MobileMenu";

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
      <Header></Header>
      <main>
        <Container maxWidth="md" className={classes.heroContent}>
          <MobileMenu></MobileMenu>
          <Navigation></Navigation>
          <BreadcrumbCustom></BreadcrumbCustom>
          <Route path="/conozca" component={Conozca} />
          <Route path="/trabajar" component={Trabajar} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
