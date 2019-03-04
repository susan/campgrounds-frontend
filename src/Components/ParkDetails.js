import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import CampgroundParkList from "../Containers/CampgroundParkList"
import CampgroundParkDetails from "./CampgroundParkDetails"


class ParkDetails extends Component {

	renderMoreDetails = (routerProps) => {
    const { id } = parseInt(routerProps.match.params)
    let campground = this.props.park.campgrounds.find(
      campgroundObj => campgroundObj.id === id
     );

    	console.log(campground)
      return <CampgroundParkDetails
         campground={campground}
      />
  }

	render() {
     console.log("pdetail props are", this.props)
     const {img1_url, full_name, description, directions_info,
     	url, weather_info, vehicle_fee, campgrounds} = this.props.park
		return (
			<div>

      <h1>  {full_name}     </h1>
      <img className = "park-img" alt="" src={this.props.park.photos[0].url2}     />
     <h4>  {description}     </h4>
     <h6 >Directions:    {directions_info} </h6>
     <h6 >Website:    {url} </h6>
     <h6 >Weather:    {weather_info} </h6>
     <h6 >Daily Vehicle Fee:    {vehicle_fee}</h6>

		<Switch>
            <Route
              path="/:id"
                 render={ routerProps =>
                    <div className= "box">
                    {campgrounds.length > 0
                      ?
                      (this.renderMoreDetails(routerProps))
                      :
                    (null)
                    }
                     </div>
                   }
                    />
                    <Route
        path="/main/parks/:name"
        render={(routerProps)=> {
          return(
            <React.Fragment>
            <h4> Campgrounds: </h4>
             <CampgroundParkList campgrounds={this.props.park.campgrounds}    />
          </React.Fragment>
          )
           }}
         />
     </Switch>
		</div>
		);
  }
}



export default ParkDetails;
