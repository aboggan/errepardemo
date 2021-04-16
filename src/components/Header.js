import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Hidden } from "@material-ui/core";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      "& header": {
        backgroundColor: "#575757",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      display: "none",
    },
    title: {
      flexGrow: 1,
      textAlign: "left",
    },
  }));

  const classes = useStyles();
  return (
    <Hidden mdDown="true">
        <div className={classes.root}>
        <AppBar position="static" align="center">
            <Toolbar>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
            <Typography className={classes.title}>
                Centro de Atención al Cliente | (011) 4370-2002
            </Typography>
            <Button color="primary" variant="contained">
                Ingresar al Área de Suscriptores{" "}
            </Button>
            </Toolbar>
        </AppBar>
        </div>

    </Hidden>
  );
}

export default Header;
