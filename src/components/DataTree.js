import { Collapse, List, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";


function DataTree() {
  const [dataTree, setDataTree] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchItem();
  }, []);

  const searchItem = async () => {
    setLoading(true);
    const fetchItem = await fetch(`https://next-mysql-olive.vercel.app/api/dataTree`);
    const item = await fetchItem.json();
    setDataTree(item);
    setLoading(false);
  };

  const useStyles = makeStyles((theme) => ({
    childItem: {
      paddingLeft: 20, 
      fontWeight: 600 
    },
    bold: {
        fontWeight: 600
    },
  }));


const classes = useStyles()

  const MenuItem = ({ item, hasParent }) => {
    const Component = item.has_child ? MultiLevel : SingleLevel;
    return <Component item={item} hasParent={hasParent}/>;
  };
  
  const SingleLevel = ({ item, hasParent }) => {
    
    
    return (
      <ListItem button>
        
        <ListItemText primary={item.node_name} classes={ !hasParent? ({ primary: classes.bold } ): "" } />
      </ListItem>
    );
  };
  
  const MultiLevel = ({ item, hasParent }) => {
    const { childs: children } = item;
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    
    return (
      <React.Fragment>
        <ListItem button onClick={handleClick} >
          
          <ListItemText primary={item.node_name}  classes={ item.has_child? ({ primary: classes.bold } ): "" }/>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={classes.childItem} >
            {children.map((child, key) => (
              <MenuItem key={key} item={child} hasParent={true}/>
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  };
  return loading
    ? ""
    : (
        <>  
            <Typography variant="body1">{dataTree.root_node}</Typography>
            {dataTree.childs.map((item, key) => <MenuItem key={key} item={item} />)}
        </>
        )
}

export default DataTree;
