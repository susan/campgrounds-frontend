import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteReview } from "../redux/campgroundThunks"
import { patchReview } from "../redux/campgroundThunks"
import { Link, Route } from "react-router-dom"
import  ReviewForm from "./ReviewForm"


class ReviewCard extends Component {

  handleClick= () => {
  	this.props.deleteReview(this.props.review)
  }

  editReview = (event, state) => {
    const id = this.props.selectedCampground.id
    console.log (typeof id)
    event.preventDefault()
    console.log(this.state)
    const review= this.state
    this.props.patchReview(review)
    this.props.history.push(`/main/campgrounds/${id}`);
  }


  render() {
  	console.log("reviewc props are", this.props.review.id)
    return (
      <div className="box2">
       <h4 className="h4"> Rating:  {this.props.review.rating}</h4>
       <h4 className="h4">Comment: {this.props.review.content}</h4>
       <Route render={({history}) =>(
      <p><Link to='/main/reviewform'
      onClick= {() => {
              console.log(history)
              return (
              <div>
              <ReviewForm   handleSubmit={this.editReview} />
           { history.push(`/main/reviewform`) }
           </div>
           )
           }}
           >
            Edit Review</Link></p>
           )}
        />
      <i className="inverted orange trash alternate outline icon"  onClick={this.handleClick}> </i>
      </div>
    )
  }

}
const mapStateToProps = (state) => ({
      reviews: state.reviews,
      parks: state.parks,
      campgrounds: state.campgrounds,
      selectedCampground: state.selectedCampground
    })



  const mapDispatchToProps = dispatch => ({
    deleteReview: (review) => dispatch(deleteReview(review)),
    patchReview: (review) => dispatch(patchReview(review))
  })


export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard);
