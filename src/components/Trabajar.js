import {
  
  Button,
 
  List,
  ListItem,
 
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import { useHistory } from "react-router-dom";

function Trabajar() {
  let history = useHistory();
const goto = ()=> ( history.push('/conozca') )
  return (
    <>
      <Typography variant="h3" color="primary" gutterBottom="true">
        ¿Queres trabajar en Errepar?
      </Typography>
      <Typography variant="h5" gutterBottom="true">
        Somos una empresa joven, apasionada por lo que hace.
      </Typography>
      <Typography variant="body1" gutterBottom="true">
        Nuestra empresa se caracteriza, en su estructura y organización del
        trabajo, por su alta especialización: contadores, abogados, licenciados
        en Administración, Marketing, Sistemas, Relaciones Públicas,
        correctores, editores y estudiantes de múltiples disciplinas, confluyen
        generando la sinergia necesaria para ofrecer el mejor servicio del
        mercado.
      </Typography>
      <Typography variant="h6" gutterBottom="true">
        Las principales áreas de trabajo son:
      </Typography>
      <List>
        <ListItem disableGutters="true">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Desarrollo de contenidos en ciencias económicas y jurídidas."
            secondary=""
          />
        </ListItem>
        <ListItem disableGutters="true">
        <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Procesos editoriales"
            secondary="Libros, publicaciones en papel y digitales."
          />
        </ListItem>
        <ListItem disableGutters="true">
        <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Desarrollo de productos y servicios."
            secondary=""
          />
        </ListItem>
        <ListItem disableGutters="true">
        <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Marketing y servicios"
            secondary="Marketing digital e institucional, Centro de servicios."
          />
        </ListItem>
        <ListItem disableGutters="true">
        <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Sistemas"
            secondary="Soporte, desarrolladores .NET, SQL, Administradores y desarrolladores SharePoint, entre otros."
          />
        </ListItem>
        <ListItem disableGutters="true">
        <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Administración"
            secondary="Cuentas corrientes, control de gestión, tesorería, depósito y distribución."
          />
        </ListItem>
      </List>
      <Button color="primary" variant="contained" fullWidth="true" onClick={goto}>
        
        ¡Sumate a nuestro equipo!
      </Button>
    </>
  );
}
export default Trabajar;
