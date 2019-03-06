import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link, Route } from "react-router-dom"
import { connect } from "react-redux"
import { selectPark} from "../redux/action"
//import ParkDetails from "./ParkDetails"

class ParkCard extends Component {




  render() {
  	//console.log("pcard props are", this.props)

    const {img1_url, full_name, park} = this.props
    return (
      <div>
      <br/>
       <img className = "park-img" alt="" src={park.img1_url} />
       <p> {park.full_name} </p>

       <Route render={({history}) => (
         <Button  onClick= {() => {
          return (
            <div>
           { history.push(`parks/${park.name}`) }
           {this.props.selectPark(park)}
           </div>
           )
         }}
        >
        More Details
        </Button>
        )} />
       </div>

    );
  }
}


const mapStateToProps = (state) => ({
  selectedPark: state.selectedPark
})

const mapDispatchToProps = (dispatch) => ({
  selectPark: (parkObj) => dispatch(selectPark(parkObj))
})


export default connect(mapStateToProps, mapDispatchToProps)(ParkCard);

//console.log(ownProps) ||
  //({chosenPark: state.chosenPark  })
