import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Conozca from "./components/Conozca";
import { Container, makeStyles } from "@material-ui/core";
import BreadcrumbCustom from "./components/BreadcrumbCustom";
import Trabajar from "./components/Trabajar";
import MobileMenu from "./components/MobileMenu";
import TextEditor from "./components/TextEditor";
import Footer from "./components/Footer";
import CalculadoraInflacionContable from "./components/CalculadoraInflacionContable";
import SimpleSelect from "./components/InputsDemo";
import DataTree from "./components/DataTree";

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
        <Header></Header>
        <MobileMenu></MobileMenu>

      </header>
      <main>
        <Container maxWidth="md" className={classes.heroContent} height="100%">
          <Navigation></Navigation>
          <BreadcrumbCustom></BreadcrumbCustom>
          
          <Route path="/" exact component={TextEditor}/>
          <Route path="/conozca" component={Conozca} />
          <Route path="/trabajar" component={Trabajar} />
          <Route path="/calculadora" component={CalculadoraInflacionContable} />
          <Route path="/inputsdemo" component={SimpleSelect} />
          <Route path="/dataTree" component={DataTree} />
          
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
