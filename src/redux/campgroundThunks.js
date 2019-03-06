import { loadParks, loadCampgrounds, loadReviews, addReview, removeReview, addUser, loginUser } from "./action.js"

export const getParks = () => {
	return function thunk(dispatch) {
		return fetch("http://localhost:3000/api/v1/parks")
		.then(resp => resp.json())
		.then(data => dispatch(loadParks(data)))
	}
}

export const getCampgrounds = () => {
  return function thunk(dispatch) {
    return fetch("http://localhost:3000/api/v1/campgrounds")
    .then(resp => resp.json())
    .then(data => dispatch(loadCampgrounds(data)))
  }
}

export const getReviews = () => {
  return function thunk(dispatch) {
    return fetch("http://localhost:3000/api/v1/reviews")
    .then(resp => resp.json())
    .then(data =>
      dispatch(loadReviews(data)))
  }
}



export const createReview = (review) => {
   return function thunk(dispatch) {
     return fetch("http://localhost:3000/api/v1/reviews", {
       method: "POST",
       headers: {

      "Content-Type": "application/json",
       Accepts: "application/json",
       Authorization: `Bearer ${localStorage.getItem("token")}`
     },
     body: JSON.stringify({
       review: {
         user_id: review.user_id,
         campground_id: review.campground_id,
         rating: parseInt(review.rating),
         content: review.content
       }
     })
  })
  .then(resp=> resp.json())
  .then(data => {
    console.log(data)
     dispatch(addReview(data))
    });

   }
}

export const deleteReview = (review) => {
   return function thunk(dispatch) {
     return fetch(`http://localhost:3000/api/v1/reviews/${review.id}`, {
       method: "DELETE",
       headers: {

      "Content-Type": "application/json",
       Accepts: "application/json",
       Authorization: `Bearer ${localStorage.getItem("token")}`
     },
     body: JSON.stringify({
       review: {
         user_id: review.user_id,
         campground_id: review.campground_id,
         rating: parseInt(review.rating),
         content: review.content
       }
     })
  })
  .then(resp=> resp.json())
  .then(data => {
     return dispatch(removeReview(data))
    });

   }
}


 export const createUser = (user) => {
   return function thunk(dispatch) {
     return fetch("http://localhost:3000/api/v1/users", {
       method: "POST",
       headers: {

      "Content-Type": "application/json",
       Accepts: "application/json",
     },
     body: JSON.stringify({
    	 user: {
    		 user_name: user.signupUserName,
    		 email: user.signupUserEmail,
    		 password: user.signupUserPassword
    	 }
     })
  })
  .then(resp=> resp.json())
  .then(data => {
    console.log(data)
  	 dispatch(addUser(data.user))
     localStorage.setItem("token", data.jwt)
    });
 }}



 export const getUser = (user) => {
   return function thunk(dispatch) {
     return fetch("http://localhost:3000/api/v1/login", {
       method: "POST",
       headers: {

      "Content-Type": "application/json",
       Accepts: "application/json",
      },
      body: JSON.stringify({
    	  user: {
    		  user_name: user.loginUserName,
    		  email: user.loginUserEmail,
    		  password: user.loginUserPassword
    	  }
     })
  })
  .then(resp=> resp.json())
  .then(data => {
    console.log(data)
    localStorage.setItem("token", data.jwt)
  	 dispatch(loginUser(data.user))

    });
 }};
