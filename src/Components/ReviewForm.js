import React, { Component } from 'react';
import { connect } from "react-redux"
import { createReview } from "../redux/campgroundThunks.js"
import { Redirect } from 'react-router-dom'

class ReviewForm extends Component {

 state = {
 	  user_id: 1,
 	  campground_id: "1",
    rating: "",
    content: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    const review= this.state
    this.props.createReview(review)
    this.props.history.push('/main/parks');
  }



  render() {
  	if (localStorage.getItem("token")){

    return (
    	<React.Fragment>
    	{console.log("reviewform props are", this.props)}

    	<p> {this.props.selectedCampground.name}</p>
    	<br></br>
    	<div className="form-center">
      <div className="form-card">
    	<form onSubmit={this.handleSubmit} >
      <h1> Add Review </h1>
      <h3> Select Rating: </h3>

      <select className="form-item" name="rating" onChange={this.handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>


      <textarea rows="12" cols="80"

            name="content"
            placeholder="Add your review here"
            onChange={this.handleChange}

          />

       <button type="submit" className= "form-submit">
       Add Review</button>

      </form>
      </div>
      </div>
      </React.Fragment>
    )
  } else {
    return (

       <Redirect to="/login" />

    	)
  }
  }
}

const mapStateToProps = (state) => {
    console.log("NEW STATE:", state)
    return {
      selectedCampground: state.selectedCampground
    }

  }

  const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review))
  })


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
