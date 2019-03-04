import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class CampgroundParkDetails extends Component {

  render() {
  	console.log("CgroundParkDetails props are", this.props)

    return (

      <div>
      <Card.Header className= "card">
      <p> {this.props.selectedCampground.name} </p>
     <p> {this.props.selectedCampground.description} </p>
     <p> {this.props.selectedCampground.directions_overview} </p>
     </Card.Header >
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  selectedCampground: state.selectedCampground
})

export default connect(mapStateToProps)(CampgroundParkDetails);
