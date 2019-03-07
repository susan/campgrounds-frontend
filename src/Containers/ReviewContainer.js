import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route, Switch } from "react-router-dom"
import ReviewCard from "../Components/ReviewCard"
import { createReview } from "../redux/campgroundThunks"

class ReviewContainer extends Component {

   findCampgroundReviews = () => {
    //console.log(this.props.campgrounds)
     const reviewList = this.props.reviews.filter(
        reviewObj => reviewObj.campground_id === this.props.selectedCampground.id
      );

     return reviewList
   }



   AddReview = (event, state) => {
    const id = this.props.selectedCampground.id
    console.log (typeof id)
    event.preventDefault()
    console.log(this.state)
    const review= this.state
    this.props.createReview(review)
    this.props.history.push(`/main/campgrounds/${id}`);
  }



	render() {
     console.log("reviewCprops are", this.props)
    const reviews = this.findCampgroundReviews().map(review =>{
       return <ReviewCard key={review.id} review={review} handleSubmit={this.addReview}/>
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

const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review))
  })


export default connect(mapStateToProps)(ReviewContainer);
