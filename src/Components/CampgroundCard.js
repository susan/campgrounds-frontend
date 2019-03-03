import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"

class CampgroundCard extends Component {

  render() {
  	console.log("Ccard props are", this.props)

    return (
      <div>
      <Card.Header className= "card">
       <Link to={`/campgrounds/${this.props.campgroundname}`} > {this.props.campground.name} </Link>
     </Card.Header >
      </div>

    );
  }
}

export default CampgroundCard;
