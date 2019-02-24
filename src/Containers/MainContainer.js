import React, { Component } from 'react';
//import { Route, Switch } from "react-router-dom"
//import NavBar from "./Components/NavBar"
import Home from "../Components/Home"
import ParkContainer from "./ParkContainer"
import CampgroundContainer from "./CampgroundContainer"


class MainContainer extends Component {


  render() {
    return (
       <div>
       <h2> MainC: choices are home, ParkC, or CampgroundC    </h2>
       <Home />
       <ParkContainer />
       <CampgroundContainer />
      </div>
    );
  }
}

export default MainContainer;
