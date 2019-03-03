import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { selectPark} from "../redux/action"

class ParkCard extends Component {

  //  campgroundHandler = () => {
  //   return this.props.createCampgrounds(this.props.park)
  // }

  render() {
  	//console.log("pcard props are", this.props)
  	const {img1_url, full_name, park} = this.props
    this.props.selectPark(park)

    return (
      <div>
      <br/>
       <img className = "park-img" alt="" src={park.img1_url} />
       <div>

       <p> {park.full_name} </p>
       <Button  onClick= { () => this.props.selectPark(park) }>  More Details </Button>
       </div>
     </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) =>  ({
//   selected: state.selectedPark.id === ownProps.park.id
// })

const mapDispatchToProps = (dispatch) => ({
  selectPark: (parkObj) => dispatch(selectPark(parkObj))
})


export default connect(null, mapDispatchToProps)(ParkCard)

//console.log(ownProps) ||
  //({chosenPark: state.chosenPark  })
