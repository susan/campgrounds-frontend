import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import CampgroundParkList from "../Containers/CampgroundParkList"
import CampgroundParkDetails from "./CampgroundParkDetails"
import CampgroundDetailsContainer from "../Containers/CampgroundDetailsContainer"

class ParkDetails extends Component {

  campgrounds = () => (
     <div>
      <CampgroundDetailsContainer  campgrounds={this.props.park.campgrounds}  />
      </div>
  )

	render() {
     console.log("pdetail props are", this.props)
     const {img1_url, full_name, description, directions_info,
     	url, weather_info, vehicle_fee, campgrounds} = this.props.park


		return (
			<div>

      <h1>  {full_name}     </h1>
      <img className = "park-img" alt="" src={this.props.park.photos[0].url2}     />
     <h4>  {description}     </h4>
     <h5 >Directions:    {directions_info} </h5>
     <h5 >Website:    {url} </h5>
     <h5 >Weather:    {weather_info} </h5>
     <h5>Daily Vehicle Fee:    {vehicle_fee}</h5>
      <ul>
      {this.campgrounds()}
      </ul>

		</div>
		);
  }
}



export default ParkDetails;
