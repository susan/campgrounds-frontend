import React, { Component } from 'react';
import { Link } from "react-router-dom";


class CampgroundParkList extends Component {

  render() {
  	console.log("groundprops are", this.props)
  	console.log("---")

    return (

      <div>
      <p> sibling of ParkCard, i could be shown side by side with parkC on a differnt part of page
       but makes better sense to eventually only get shown if ParkCard is not shown  </p>
      <ul> {"campgroundlist for a specific park gets rendered here"}</ul>
      </div>
    );
  }
}

export default CampgroundParkList
