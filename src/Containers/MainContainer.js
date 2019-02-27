import React, { Component } from 'react';
//import { Route, Switch } from "react-router-dom"
//import NavBar from "./Components/NavBar"
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

   nestedRoute = (routerProps) => {
      let parkList= this.props.parks
      if (routerProps.match.params.name === "parks") {
        return <ParkContainer parks={parkList} />
      }
       else if (routerProps.match.params.name === "campgrounds"){
        return <CampgroundContainer  />
      }
      else return <Home />
    }

  render() {
  	//console.log("mainC props are", this.props)

    return (
       <div>
       <h2> MainC: choices are home, ParkC, or CampgroundC    </h2>
       <Switch>
       <Route exact path="/main/:name"
       render={routerProps =>
        <div>{this.nestedRoute(routerProps)}</div>
       }
        />
       <Route exact path="/main/:name"
       render={routerProps =>
        <div>{this.nestedRoute(routerProps)}</div>
       }
        />
       <Route exact path="/main" render={Home} />

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


