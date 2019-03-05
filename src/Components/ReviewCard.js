import React, { Component } from 'react';



class ReviewCard extends Component {

  render() {
  	console.log("reviewc props are", this.props)
    return (
      <React.Fragment>
       <h4> Rating:  {this.props.review.rating}     Comment: {this.props.review.content}</h4>
      </React.Fragment>
    )
  }

}
export default ReviewCard;
