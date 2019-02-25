import React, { Component } from 'react';
import ParkCard from "../Components/ParkCard.js"
import { Grid} from 'semantic-ui-react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CampgroundParkList from "./CampgroundParkList.js"

class ParkContainer extends Component {

  state= {
    selectedPark: {},

  }

  createCampgrounds = (selectedPark) => {
      //console.log("does this work")
      return this.setState({
        selectedPark: selectedPark
      })
     }


  render() {
    console.log("Parkc props are", this.props)

    const parkList = this.props.parks.map(park => {
      return <ParkCard key={park.id} park = {park} createCampgrounds={this.createCampgrounds} />
    })
    return (
      <div>


    	<h2>  National Parks Home Page </h2>
      <Grid className="categories-wrapper" celled='internally' container stackable centered columns='equal'>
      {parkList}
      </Grid>


       <CampgroundParkList park={this.state.selectedPark} />
     </div>
    )
  }
}

export default ParkContainer
