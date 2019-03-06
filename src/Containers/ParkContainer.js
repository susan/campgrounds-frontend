import React, { Component } from 'react';
import ParkList from "../Components/ParkList"
import ParkDetailsContainer from "./ParkDetailsContainer"
import { Grid} from 'semantic-ui-react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CampgroundParkList from "./CampgroundParkList"
import { connect } from "react-redux"
import SearchBar from "../Components/SearchBar"
//import { getCampgrounds } from "../redux/campgroundThunks"



class ParkContainer extends Component {

// componentDidMount(){
//     this.props.getCampgrounds()
//   }

//for searchBar
   state = {
    searchTerm: "",
    searchedParks: [],
  }

   handleSearch = (event)=> {
    //set our searchTerm to event.target.value  here so we can use it in filter
     let searchTerm = event.target.value
     //console.log('is this working')
     let searchedArray = this.props.parks.filter(park => {
        return park.full_name.toLowerCase().includes(searchTerm.toLowerCase())
     });
     this.setState({
       searchTerm: searchTerm,
       searchedParks: searchedArray,
     })
   }

   whichArrayToSendDown = () => {
     let array = this.props.parks
     if (this.state.searchedParks.length) {
       array = this.state.searchedParks
      }
      else {
       array = this.props.parks
     }
      return array
   }

  renderMoreDetails = (routerProps) => {
    const { name } = routerProps.match.params
    let park = this.props.parks.find(
      parkObj => parkObj.name === name
     )
    return (
      <ParkDetailsContainer
         park={park}
      /> )
  }


  render() {
    //console.log("Parkc props are", this.props)

    return (
      <div>

       <Switch>
          <Route
              path="/main/parks/:name"
                 render={ routerProps =>
                    <div>
                    {this.props.parks.length > 0
                      ?
                      (this.renderMoreDetails(routerProps))
                      :
                    (null)
                    }
                     </div>
                   }
                    />

      <Route
        path="/main/parks"
        render={(routerProps)=> {
          return(
            <React.Fragment>
            <h2>  National Parks Home Page </h2>
             <SearchBar handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
             <ParkList parks={this.whichArrayToSendDown()}    />
          </React.Fragment>
          )
           }}

           />
           </Switch>
                 </div>
         );
    }
}

// const mapStateToProps = (state) => {
//     return {
//       campgrounds: state.campgrounds
//     }

//   }

// const mapDispatchToProps = dispatch => ({
//     getCampgrounds: () => dispatch(getCampgrounds())
//   })



export default ParkContainer;

