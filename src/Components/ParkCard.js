import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"

class ParkCard extends Component {

   campgroundHandler = () =>{
    return this.props.createCampgrounds(this.props.park)
  }


  render() {
  	console.log("pcard props are", this.props)
  	const {img1_url, full_name} = this.props.park

    return (

      <div>
      <Card.Header className= "card">
      <br/>{/*puts a larger space between the rows*/}
       <img className = "park-img" alt="" src={img1_url} />
       <p> {full_name} </p>
       <Button onClick={this.campgroundHandler}>  Show Campgrounds </Button>
     </Card.Header >
      </div>

    );
  }
}

export default ParkCard;

