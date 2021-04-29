import { Collapse, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";


function DataTree() {
  const [dataTree, setDataTree] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const searchItem = async () => {
        setLoading(true);
        const fetchItem = await fetch(`/api/dataTree`);
        const item = await fetchItem.json();
        setDataTree(item);
        setLoading(false);
        console.log(dataTree);
      };
      searchItem();
  }, []);

  


  const MenuItem = ({ item }) => {
    const Component = item.has_child ? MultiLevel : SingleLevel;
    return <Component item={item} />;
  };
  
  const SingleLevel = ({ item }) => {
    return (
      <ListItem button>
        
        <ListItemText primary={item.node_name} />
      </ListItem>
    );
  };
  
  const MultiLevel = ({ item }) => {
    const { childs: children } = item;
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    return (
      <React.Fragment>
        <ListItem button onClick={handleClick}>
          
          <ListItemText primary={item.node_name} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <MenuItem key={key} item={child} />
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
