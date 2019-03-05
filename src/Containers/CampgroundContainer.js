import React, { Component } from 'react';
import { getCampgrounds } from "../redux/campgroundThunks"
import { connect } from 'react-redux'

class CampgroundContainer extends Component {

  componentDidMount(){
    this.props.getCampgrounds()
  }

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

const mapDispatchToProps = dispatch => ({
  	getCampgrounds: () => dispatch(getCampgrounds())
  })

export default connect(mapStateToProps, mapDispatchToProps)(CampgroundContainer);
