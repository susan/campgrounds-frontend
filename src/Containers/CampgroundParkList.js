import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CampgroundCard from "../Components/CampgroundCard"
import { connect } from "react-redux"

class CampgroundParkList extends Component {

  render() {
  	console.log("groundprops are", this.props)
  	console.log("---")

    const campgroundList = this.props.campgrounds.map(campground => {
      return(
       <div>

      <CampgroundCard key={campground.id} campground = {campground} renderMoreDetails={this.renderMoreDetails} />

      </div>
      )
    });

  return(
    <div>
    <Grid.Column width={12}>
    {campgroundList}
    </Grid.Column>
    </div>
    )
  }
}


const mapStateToProps = (state) => ({
  selectedPark: state.selectedPark
})

export default connect(mapStateToProps)(CampgroundParkList);


