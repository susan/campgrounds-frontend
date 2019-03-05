import React, { Component } from 'react';



class ReviewForm extends Component {

  render() {

    return (
    	<React.Fragment>
    	<p> campgroundid</p>
    	<form className="reviewform" onSubmit={null} >
      <p> Select Rating: </p>

      <select  onChange={null}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>


      <textarea rows="12" cols="80"
            name="content"
            placeholder="Add your review here"
            onChange={null}

          />
       <button id="submit" type="submit" className= "btn">
       Add Review</button>

      </form>
      </React.Fragment>
    )
  }
}

export default ReviewForm;
