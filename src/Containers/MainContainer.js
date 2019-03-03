import React, { Component } from 'react';
import NavBar from "../Components/NavBar"
//import {NavMainCss} from "../Components/NavCss"

import Home from "../Components/Home"
import ParkContainer from "./ParkContainer"
import CampgroundContainer from "./CampgroundContainer"
import { getParks } from "../redux/campgroundThunks"
import { connect } from 'react-redux'
import { Grid} from 'semantic-ui-react';
import { Route, Switch, withRouter} from "react-router-dom"

class MainContainer extends Component {


  componentDidMount(){
    this.props.getParks()
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
       <Switch>
       <Route path='/main/parks' render = {(props) => <ParkContainer parks={this.props.parks} />}/>
        <Route path='/main/campgrounds' component={CampgroundContainer} />
        <Route path='/main/Home' component={Home} />
        </Switch>

      </div>
    );
  }
}
  //these are all outside the component class
  const mapStateToProps = (state) => {
    console.log("NEW STATE:", state)
    return {
    	parks: state.parks
    }

  }

  const mapDispatchToProps = dispatch => ({
  	getParks: () => dispatch(getParks())
  })


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


  //{/*<div>{this.nestedParks(routerProps)}</div> */}


