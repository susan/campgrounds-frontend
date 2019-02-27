import React from 'react';
import { NavLink } from "react-router-dom"
import { Menu } from 'semantic-ui-react';

const NavBar = (props) => {
  return (
    <ul>
      <Menu attached='top' color='green' inverted>
        <Menu.Item as={ NavLink } name="Home" to="/">
        </Menu.Item>
        <Menu.Item as={ NavLink } name="Parks" to="/parks">
        </Menu.Item>
        <Menu.Item as={ NavLink } name="Campgrounds" to="/campgrounds" >
        </Menu.Item>
        <Menu.Item position="right"as={ NavLink } name="Login" to="/login">
        </Menu.Item>
        <Menu.Item position="right"as={ NavLink } name="Register" to="/register">
        </Menu.Item>
      </Menu>
    </ul>
  )
}

export default NavBar;