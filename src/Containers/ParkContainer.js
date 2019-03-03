import React, { Component } from 'react';
import ParkCard from "../Components/ParkCard"
import ParkDetails from "../Components/ParkDetails"
import { Grid} from 'semantic-ui-react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CampgroundParkList from "./CampgroundParkList"

class ParkContainer extends Component {

  // state= {
  //   selectedPark: {},

  // }

  // createCampgrounds = (selectedPark) => {
  //     //console.log("does this work")
  //     return this.setState({
  //       selectedPark: selectedPark
  //     })
  //    }
  // componentDidMount(){
  // fetch("http://localhost:3000/api/v1/users")
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  // componentDidMount(){
  //  fetch("http://localhost:3000/api/v1/users/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accepts: "application/json"
  //   },
  //   body: JSON.stringify({
  //     user: {
  //     user_name: "testing",
  //     email: "testing@yang.com",
  //     password: "yangville"
  //     }
  //   })
  //  })
  //   .then(resp => resp.json())
  //   .then(resp => {
  //     console.log("is this the guy", resp)
  //      localStorage.setItem("token", resp.jwt)
  //      this.setState({
  //        user: resp.user
  //      })

  //   })
  // }
  //
  whichThingtoShow() {
    if (this.props.selectedPark) {
      return <ParkDetails  park={this.props.selectedPark} />
    }
    else {
      const parkList = this.props.parks.map(park => {
         return <ParkCard key={park.id} park = {park} />
         });
      return parkList
    }
  }

  render() {
    console.log("Parkc state are", this.state)
    const parkList = this.props.parks.map(park => {
      return <ParkCard key={park.id} park = {park} />
    });
    return (
      <div>

    	<h2>  National Parks Home Page </h2>
      <Grid className="categories-wrapper" celled='internally' container stackable centered columns='equal'>
      {this.whichThingtoShow()}
      </Grid>

       <CampgroundParkList  />
     </div>
    );
  }
}

export default ParkContainer
//{/*createCampgrounds={this.createCampgrounds} */}
//park={this.state.selectedPark}
