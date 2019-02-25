import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CampgroundCard from "../Components/CampgroundCard"
import { connect } from "react-redux"

class CampgroundParkList extends Component {

  render() {
  	console.log("groundprops are", this.props)
  	console.log("---")
      return (
      	<div>
         {this.props.selectedPark.campgrounds
           &&
         this.props.selectedPark.campgrounds.map(campground => {
          return (
                 <li key={campground.id}>{campground.name}</li>
            );
          })
         }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedPark: state.selectedPark
})

export default connect(mapStateToProps)(CampgroundParkList);


