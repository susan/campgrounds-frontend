import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"

class ParkCard extends Component {

  render() {
  	//console.log("pcard props are", this.props)
  	//const {img1_url, full_name} = this.props.park

    return (

      <div>
      <Card.Header className= "card">
       <img className = "img" alt="" src={"parkimage"} />
       <p> {"parkname"} </p>
     </Card.Header >
      </div>

    );
  }
}

export default ParkCard;

