import React, { Component } from 'react';
import { Link } from "react-router-dom";


class CampgroundParkList extends Component {

  render() {
  	console.log("groundprops are", this.props)
  	console.log("---")

    return (

      <div>
      <ul> {"campgroundlist for a specific park get srendered here"}</ul>

      </div>
    );
  }
}

export default CampgroundParkList
