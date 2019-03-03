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
         {this.props.campgrounds
           &&
         this.props.campgrounds.map(campground => {
          return (
            <div>
                 <ul className= "nav_list" >
                 <Link to={`/campgroundPark/${campground.name}`} >
                 <li> {campground.name} </li>
                 </Link>
                 </ul>
                 </div>
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


