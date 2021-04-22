import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";

function BreadcrumbCustom() {

  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: "-20px",
      marginBottom: "20px",

    },
  }));

  const classes = useStyles();

  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        return pathnames.length === 0 ? (
          ""
        ) : (
          <Container maxWidth="md">
            <Breadcrumbs aria-label="Breadcrumb" className={classes.container}>
              <RouterLink color="primary" to="/"> 
                Inicio
              </RouterLink>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                let display = "";
                if (value === "conozca") {
                  display = "Conozca Errepar";
                } else {
                  display = value;
                }
                return last ? (
                  <Typography color="textPrimary" key={to}>
                    {display}
                  </Typography>
                ) : (
                  <RouterLink color="inherit" to={to} key={to}>
                    {display}
                  </RouterLink>
                );
              })}
            </Breadcrumbs>

          </Container>
        );
      }}
    </Route>
  );
}
export default BreadcrumbCustom;
