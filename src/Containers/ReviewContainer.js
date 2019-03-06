import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route, Switch } from "react-router-dom"
import ReviewCard from "../Components/ReviewCard"


class ReviewContainer extends Component {

   findCampgroundReviews = () => {
    //console.log(this.props.campgrounds)
     const reviewList = this.props.reviews.filter(
        reviewObj => reviewObj.campground_id === this.props.selectedCampground.id
      );

     return reviewList
   }

	render() {
     console.log("reviewCprops are", this.props)
    const reviews = this.findCampgroundReviews().map(review =>{
       return <ReviewCard key={review.id} review={review} />
    })

    return (
      <React.Fragment>
      <Route render={({history}) =>(
      <p><Link to='/main/reviewform'
      onClick= {() => {
              console.log(history)
              return (
              <div>
           { history.push(`/main/reviewform`) }
           </div>
           )
           }}
           >
           Write a Review</Link></p>
    	     )}
        />
      {reviews}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
    	campgrounds: state.campgrounds,
    	selectedCampground: state.selectedCampground,
      selectedPark: state.selectedPark,
      reviews: state.reviews,
      parks: state.parks,
    })



export default connect(mapStateToProps)(ReviewContainer);
