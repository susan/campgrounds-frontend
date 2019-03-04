import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom"
import { selectCampground} from "../redux/action"
import { connect } from "react-redux"

class CampgroundCard extends Component {

  render() {
  	console.log("Ccard props are", this.props)

    return (
      <div>
      <Card className= "card">
      <Route render={({history}) =>(

            <Link to={`main/campgrounds/${this.props.campground.id}`}
             onClick= {() => {
              console.log(history)
              return (
              <div>
           { history.push(`/${this.props.campground.id}`) }
           {this.props.selectCampground(this.props.campground)}

           </div>
           )
           }}
            >
            {this.props.campground.name} </Link>
            )}
       />
    </Card>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   selectedCampground: state.selectedCampground
// })

const mapDispatchToProps = (dispatch) => ({
  selectCampground: (campgroundObj) => dispatch(selectCampground(campgroundObj))
})


export default connect(null, mapDispatchToProps)(CampgroundCard);

