import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class CampgroundShow extends Component {

  render() {


     return(

       <h1> hi </h1>
  	  );
  }
}

const mapStateToProps = (state) => ({
  selectedCampground: state.selectedCampground
})

export default connect(mapStateToProps)(CampgroundShow);
