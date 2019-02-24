import React, { Component } from 'react';
import ParkCard from "../Components/ParkCard.js"
import { Grid} from 'semantic-ui-react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CampgroundParkList from "./CampgroundParkList.js"

class ParkContainer extends Component {

  render() {
    return (
    	<div>
    	<h2> National Parks Home Page   </h2>
      <ul>
          {"All the Parks will get rendered here!"}
      </ul>
    	</div>
    )
  }
}

export default ParkContainer
