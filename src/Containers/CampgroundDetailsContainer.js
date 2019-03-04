import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CampgroundParkDetails from "../Components/CampgroundParkDetails"
import CampgroundParkList from "./CampgroundParkList"
import { connect } from "react-redux"

class CampgroundDetailsContainer extends Component {

  renderMoreDetails = (routerProps) => {
    const { id } = parseInt(routerProps.match.params)

    let campground = this.props.campgrounds.find(
      campgroundObj => campgroundObj.id === id
     );

      return <CampgroundParkDetails
         campground={campground}
      />
  }

  render() {
  	console.log("cpdetailsc are", this.props)
  	console.log("---")



  return(
    <div>
    <Switch>
            <Route
              path="/campgrounds/:id"
                 render={ routerProps =>
                    <div className= "box">
                    {this.props.campgrounds.length > 0
                      &&
                      (this.renderMoreDetails(routerProps))
                    }
                     </div>
                   }
                    />
                    <Route
        path="/main/parks/:name"
        render={(routerProps)=> {
          return(
            <React.Fragment>
            <h4> Campgrounds: </h4>
             <CampgroundParkList campgrounds={this.props.campgrounds}    />
          </React.Fragment>
          )
           }}
         />
     </Switch>
     </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedCampground: state.selectedCampground
})



export default connect(mapStateToProps)(CampgroundDetailsContainer);


