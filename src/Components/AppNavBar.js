import React from 'react';
import { NavLink } from "react-router-dom"
import { Menu } from 'semantic-ui-react';

const AppNavBar = (props) => {
  return (
    <ul>
      <Menu attached='top' color='green' inverted>
        <Menu.Item as={ NavLink } name="Home" to="/">
        </Menu.Item>
        <Menu.Item as={ NavLink } name="Go to Parks and Campgrounds" to="/main" >
        </Menu.Item>
        <Menu.Item position="right"as={ NavLink } name="Login" to="/login">
        </Menu.Item>
        <Menu.Item position="right"as={ NavLink } name="Logout" to="/logout">
        </Menu.Item>

        <Menu.Item position="right"as={ NavLink } name="Register" to="/register">
        </Menu.Item>
      </Menu>
    </ul>
  )
}

export default AppNavBar;
