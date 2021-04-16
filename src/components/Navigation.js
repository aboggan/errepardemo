import Button from "@material-ui/core/Button";
import {
  ButtonGroup,
  Container,
  Grid,
  Hidden,
  Link,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState("");
  const [menuValues, setMenuValues] = React.useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchItem();
  }, []);

  const searchItem = async () => {
    setLoading(true);
    const fetchItem = await fetch(`http://localhost:5000/menudata/`);
    const item = await fetchItem.json();
    setMenuValues(item);
    setLoading(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
      "& img": {
        maxWidth: "100%",
      },
    },
    buttonText: {
      marginLeft: "15px",
      "& button": {
        fontSize: "15px",
      },
    },
  }));

  function prevent(event) {
    //event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const classes = useStyles();
  const names = loading ? (
    ""
  ) : (
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
      className={classes.buttonText}
    >
      {menuValues.topLevel.map((menuValue) => (
        <Button
          id={`menu-${menuValue.id}`}
          aria-controls={`menu-control-${menuValue.id}`}
          aria-haspopup="true"
          onClick={handleClick}
        >
          {menuValue.name}
        </Button>
      ))}
    </ButtonGroup>
  );

  const menus = loading
    ? ""
    : menuValues.topLevel.map((menuValue) => (
        <Menu
          id={`simple-menu-${menuValue.id}`}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(
            anchorEl != null && anchorEl.id === `menu-${menuValue.id}`
              ? true
              : false
          )}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {menuValue.children.map((child) => (
            <MenuItem onClick={handleClose}>
              <Link color="inherit" href={`/${child.link}`} onClick={prevent}>
                    {child.name}
              </Link>
              
            </MenuItem>
          ))}
        </Menu>
      ));

  return (
    <Hidden mdDown="true">
        <Grid container>
          <Grid item md={2}>
            <img
              src="https://www.errepar.com/images/logosmarcas/logoerrepar.png?v=1"
              alt=""
            />
          </Grid>
          <Grid item md={8}>
            {names}
            {menus}
          </Grid>
        </Grid>

    </Hidden>
  );
}
export default Navigation;
