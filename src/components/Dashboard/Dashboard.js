import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "../Chat";
import Header from "../Header";
import WidgetList from "../WidgetList";
import Costumers from "../Widgets/Costumers";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Header />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Route exact path="/dashboard/">
            <WidgetList />
          </Route>
          <Route path="/dashboard/costumers">
            <Costumers />
          </Route>
          
        </main>
        <Chat></Chat>
      </div>
    </Router>
  );
}
