import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"

class CampgroundParkDetails extends Component {

  render() {
  	console.log("CgroundParkDetails props are", this.props)


    return (

      <div>
      <Card.Header className= "card">
      <p> cground park details if clicked on   </p>
     </Card.Header >
      </div>

    );
  }
}

export default CampgroundParkDetails;
