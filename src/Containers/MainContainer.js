import React, { Component } from 'react';
//import { Route, Switch } from "react-router-dom"
import Home from "../Components/Home"
import ParkContainer from "./ParkContainer.js"
import CampgroundContainer from "./CampgroundContainer.js"


class MainContainer extends Component {


  render() {
    return (
       <div>
       <h2> MainC: choices are home, ParkC, or CampgroundC    </h2>
      </div>
    );
  }
}

export default MainContainer;
