import React from 'react';
import { NavLink } from "react-router-dom"
import { Menu } from 'semantic-ui-react';

const NavBar = (props) => {
  return (
    <ul>
      <Menu attached='top' color='green' inverted>
        <Menu.Item as={ NavLink } name="Parks" to="/main/parks">
        </Menu.Item>
        <Menu.Item position=""as={ NavLink } name="Login" to="/login">
        </Menu.Item>
        <Menu.Item position=""as={ NavLink } name="Logout" to="/logout">
        </Menu.Item>
        <Menu.Item position=""as={ NavLink } name="Register" to="/register">
        </Menu.Item>
         <Menu.Item as={ NavLink } name="Home" to="/">
        </Menu.Item>
      </Menu>
    </ul>
  )
}

export default NavBar;
