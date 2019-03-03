import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNavCss = () => {
  return (
   <nav class= "nav_block">
    <ul className="nav_list">
    {/*<div style={{borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}> */}
      <NavLink

        to="/"
      >
      <li className="nav_item"> Home </li>
      </NavLink>
      <NavLink

        to="/main"
        >
      <li className="nav_item"> See parks and campgrounds </li>
      </NavLink>

      <NavLink

        to="/login"
        >
      <li className="nav_item"> Login </li>
      </NavLink>

      <NavLink
        to="/register"
      >

      <li className="nav_item"> Register </li>
      </NavLink>

      <NavLink
        to="/logout"

      >
      <li className="nav_item"> Logout </li>
      </NavLink>
      </ul>
    </nav>
  );
}

export default AppNavCss;

//style={{ marginRight: '10px' }}
