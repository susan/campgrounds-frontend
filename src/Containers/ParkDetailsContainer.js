import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ParkDetails from "../Components/ParkDetails"

import { connect } from "react-redux"

class ParkDetailsContainer extends Component {

  // renderMoreDetails = (routerProps) => {
  //   const { id } = parseInt(routerProps.match.params)
  //   console.log(id)
  //   console.log(this.props.park.campgrounds)
  //   let campground = this.props.park.campgrounds.find(
  //     campgroundObj => campgroundObj.id === id
  //    );

  //     return <CampgroundParkDetails
  //        campground={campground} key={campground.id}
  //     />
  // }

  render() {
  	//console.log("pdetailsc are", this.props)
  	//console.log("---")



  return(
    <div>
    {/*<Switch>
            <Route
              path="main/parks/campgrounds/campgrounds/:id"
                 render={ routerProps =>
                    <div className= "box">
                     {this.props.parks.campgrounds.length > 0
                      &&
                      (this.renderMoreDetails(routerProps))
                    }
                     </div>
                    }
                    /> */}
                    {this.props.park
                      &&
                    <Route
        path="/main/parks/:name"
        render={(routerProps)=> {
          return(
            <ParkDetails key={this.props.park.id} park={this.props.park}  renderMoreDetails={this.renderMoreDetails} />
           )

           }}
         />
       }
    </div>
    )
  }
}

const mapStateToProps = (state) => {

    return {
      selectedPark: state.selectedPark,
      selectedCampground: state.selectedCampground
    }

  }



export default connect(mapStateToProps)(ParkDetailsContainer);


