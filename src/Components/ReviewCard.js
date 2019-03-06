import React, { Component } from 'react';
import { connect } from "react-redux"
import { removeReview } from "../redux/action"

class ReviewCard extends Component {

  handleClick= () => {
  	this.props.removeReview(this.props.review)
  }

  render() {
  	console.log("reviewc props are", this.props)
    return (
      <div>
       <h4> Rating:  {this.props.review.rating}     Comment: {this.props.review.content}</h4>
      <i class="trash alternate outline icon" onClick={this.handleClick}> </i>
      </div>
    )
  }

}
const mapStateToProps = (state) => ({
      reviews: state.reviews,
      parks: state.parks
    })



  const mapDispatchToProps = dispatch => ({
    removeReview: (review) => dispatch(removeReview(review))
  })


export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard);
