import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CampgroundCard from "../Components/CampgroundCard"

class CampgroundParkList extends Component {

  render() {
  	console.log("groundprops are", this.props)
  	console.log("---")
      return (
      	<div>
      	{this.props.park.campgrounds
      		&&
        this.props.park.campgrounds.map((campground,i) => {
            return (
                <li key={i}>{campground.name}</li>
            );
          })
         }
      </div>
    );
  }
}

export default CampgroundParkList
