import React, { Component } from 'react';
import ParkList from "../Components/ParkList"
import ParkDetails from "../Components/ParkDetails"
import { Grid} from 'semantic-ui-react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CampgroundParkList from "./CampgroundParkList"
import { connect } from "react-redux"


class ParkContainer extends Component {

  // state= {
  //   selectedPark: {},

  // }

  // createCampgrounds = (selectedPark) => {
  //     //console.log("does this work")
  //     return this.setState({
  //       selectedPark: selectedPark
  //     })
  //    }
  // componentDidMount(){
  // fetch("http://localhost:3000/api/v1/users")
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  // componentDidMount(){
  //  fetch("http://localhost:3000/api/v1/users/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accepts: "application/json"
  //   },
  //   body: JSON.stringify({
  //     user: {
  //     user_name: "testing",
  //     email: "testing@yang.com",
  //     password: "yangville"
  //     }
  //   })
  //  })
  //   .then(resp => resp.json())
  //   .then(resp => {
  //     console.log("is this the guy", resp)
  //      localStorage.setItem("token", resp.jwt)
  //      this.setState({
  //        user: resp.user
  //      })

  //   })
  // }
  //
    // }

  renderMoreDetails = (routerProps) => {
    const { name } = routerProps.match.params
    let park = this.props.parks.find(
      parkObj => parkObj.name === name
     )
    return (
      <ParkDetails
         park={park}
      /> )
  }

  render() {
    console.log("Parkc state are", this.state)

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
             <ParkList parks={this.props.parks}    />
          </React.Fragment>
          )
           }}

           />
           </Switch>
                 </div>
         );
    }
}



export default ParkContainer;

