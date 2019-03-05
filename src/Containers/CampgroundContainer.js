import React, { Component } from 'react';
import { connect } from 'react-redux'

class CampgroundContainer extends Component {


  render() {
    return (
       <div>
       <h4> CampgroundC--CgroundsList ALL Parks, gets shown instead of all Parks   </h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log("NEW STATE:", state)
    return {
    	campgrounds: state.campgrounds
    }
  }


export default connect(mapStateToProps)(CampgroundContainer);
