import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Route } from "react-router-dom";

function BreadcrumbCustom() {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        console.log(pathnames);
        return pathnames.length === 0 ? (
          ""
        ) : (
          <Breadcrumbs aria-label="Breadcrumb">
            <RouterLink color="inherit" to="/">
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
        );
      }}
    </Route>
  );
}
export default BreadcrumbCustom;
