import React, { Component } from 'react';
import NavBar from "../Components/NavBar"
//import {NavMainCss} from "../Components/NavCss"

import Home from "../Components/Home"
import ParkContainer from "./ParkContainer"
import CampgroundContainer from "./CampgroundContainer"
import { getParks } from "../redux/campgroundThunks"
import { getCampgrounds } from "../redux/campgroundThunks"
import { connect } from 'react-redux'
import { Grid} from 'semantic-ui-react';
import { Route, Switch, withRouter} from "react-router-dom"
import CampgroundParkDetails from '../Components/CampgroundParkDetails'
import ReviewForm from "../Components/ReviewForm"

class MainContainer extends Component {


  componentDidMount(){
    this.props.getParks()
    this.props.getCampgrounds()
  }

   // nestedRoute = (routerProps) => {
   //    let parkList= this.props.parks
   //    if (routerProps.match.params.name === "parks") {
   //      return <ParkContainer parks={parkList} />
   //    }
   //     else if (routerProps.match.params.name === "campgrounds"){
   //      return <CampgroundContainer  />
   //    }
   //    else return <Home />
   //  }

  render() {
  	//console.log("mainC props are", this.props)

    return (
       <div className="MainContainer">
       <Route path= '/main' component={NavBar} />
       <Route exact path='/main' component={Home} />
       <Switch>
       <Route path='/main/parks' render = {(props) => <ParkContainer parks={this.props.parks} />}/>
        <Route  path="/main/campgrounds/:id" component={CampgroundParkDetails}/>
        <Route exact path='/main/campgrounds' component={CampgroundContainer} />
        <Route exact path='/main/reviewform' component={ReviewForm} />
        </Switch>

      </div>
    );
  }
}
  //these are all outside the component class
  const mapStateToProps = (state) => {
    console.log("NEW STATE:", state)
    return {
    	parks: state.parks,
      campgrounds: state.campgrounds,
      selectedPark: state.selectedPark

    }
  }

  const mapDispatchToProps = dispatch => ({
  	getParks: () => dispatch(getParks()),
    getCampgrounds: () => dispatch(getCampgrounds())
    //this is func that returns an object so we could return two objects
  })


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


  //{/*<div>{this.nestedParks(routerProps)}</div> */}


