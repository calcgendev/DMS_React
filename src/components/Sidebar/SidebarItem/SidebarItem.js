import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from 'react-router-dom';
// import ListItemLink from '@material-ui/core/ListItemLink';
import Icon from '@material-ui/core/Icon';

const SidebarItem = (props) => {
  let name = props.name;
  name = name?name.toLowerCase(): null;

  return (
    <ListItem button>
      <ListItemIcon>
        <Icon>{props.iconName}</Icon>
      </ListItemIcon>
      <NavLink to={'/admin/'+ name} style={{ textDecoration: 'none' }}>
        <ListItemText primary={props.name} />
        </NavLink>
    </ListItem>
  );
}

export default SidebarItem;