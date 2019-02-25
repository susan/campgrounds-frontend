import React, { Component } from 'react';
//import { Route, Switch } from "react-router-dom"
//import NavBar from "./Components/NavBar"
import Home from "../Components/Home"
import ParkContainer from "./ParkContainer"
import CampgroundContainer from "./CampgroundContainer"
import { getParks } from "../redux/campgroundThunks"
import { connect } from 'react-redux'
import { Grid} from 'semantic-ui-react';

class MainContainer extends Component {


  componentDidMount(){
    this.props.getParks()
  }

  render() {
  	//console.log("mainC props are", this.props)
    return (
       <div>
       <h2> MainC: choices are home, ParkC, or CampgroundC    </h2>
       <Home />
       <Grid celled>
       <Grid.Column width={8} >
       <ParkContainer parks={this.props.parks}/>
       </Grid.Column>
       </Grid>
       <CampgroundContainer/>

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
