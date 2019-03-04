import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CampgroundParkDetails from "../Components/CampgroundParkDetails"
import CampgroundParkList from "./CampgroundParkList"
import { connect } from "react-redux"

class CampgroundDetailsContainer extends Component {

  // renderMoreDetails = (routerProps) => {
  //   const { id } = parseInt(routerProps.match.params)
  //   console.log(id)

  //   let campground = this.props.campgrounds.find(
  //     campgroundObj => campgroundObj.id === id
  //    );

  //     return <CampgroundParkDetails
  //        campground={this.props.selectedCampground}
  //     />
  // }

  render() {
  	console.log("cpdetailsc are", this.props)
  	console.log("---")



  return(
    <div>
    {this.props.selectedCampground
    &&
    <CampgroundParkDetails
    />
     }
            <Route
               exact path="/main/parks/:name"
               render={(routerProps)=> {
               console.log('here2')
               return(
                 <React.Fragment>
                    <h4> Campgrounds: </h4>
                    <CampgroundParkList campgrounds={this.props.campgrounds}    />
             </React.Fragment>
                )
               }}
             />


        </div>
    )
  }
}

  const mapStateToProps = (state) => {
    console.log("NEW STATE:", state)
    return {
      selectedCampground: state.selectedCampground
    }

  }



export default connect(mapStateToProps)(CampgroundDetailsContainer);


// <Switch>


//             <Route
//                 path="/campground/:id"
//                 render={(routerProps) => {
//                   return(
//                     <div>
//                       <p>CampgroundContainer</p>
//                   {this.props.selectedCampground.id
//                       &&
//                       (this.renderMoreDetails(routerProps))
//                   }
//                   </div>
//                   )
//                  }}
//             />
