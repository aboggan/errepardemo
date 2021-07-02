import { Link, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";

export default function MainMenu() {
  


  /*const goto = (e) => {
    console.log("pressed", e);
    history.push("/dashboard/costumers");
  };*/

  /*useEffect(() => {
    goto(page);
  }, [page]);*/


  const mainListItems = (
    <div>
      <Link href="/dashboard/" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Bandeja de entrada" />
      </ListItem>

      </Link>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Chats" />
      </ListItem>
      <Link href="/dashboard/costumers" color="inherit" underline="none">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Gestor Documentos" />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Editar Web" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Herramientas" />
      </ListItem>
    </div>
  );

  return <List>{mainListItems}</List>;
}
