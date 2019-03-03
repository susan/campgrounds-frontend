import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"


class ParkDetails extends Component {

	render() {
     console.log("pdetail props are", this.props)
		return (
      <h1>  {this.props.park.full_name}     </h1>
		);
  }
}



export default ParkDetails;
