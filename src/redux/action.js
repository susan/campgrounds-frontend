import { LOAD_PARKS, SELECT_PARK, LOAD_CAMPGROUNDS, SELECT_CAMPGROUND, LOAD_REVIEWS, ADD_REVIEW, REMOVE_REVIEW, ADD_USER, LOGIN_USER, LOGOUT_USER } from "./types"


export const addUser = (user) => {
	return {
		type: "ADD_USER",
		payload: user
	}
}

export const loginUser = (user) => {
	return {
		type: "LOGIN_USER",
		payload: user
	}
}

export const logoutUser = (user) => {
	return {
		type: "LOGOUT_USER",
		payload: user
	}
}


export const loadParks = (parks) => {
	return {
		type: "LOAD_PARKS",
		payload: parks
	}
}

export const selectPark = (parkObj) => {
	return {
		type: "SELECT_PARK",
    payload: parkObj
	}
}


export const loadCampgrounds = (campgrounds) => {
	return {
		type: "LOAD_CAMPGROUNDS",
		payload: campgrounds
	}
}


export const selectCampground = (campgroundObj) => {
	return {
		type: "SELECT_CAMPGROUND",
    payload: campgroundObj
	}
}

export const loadReviews = (reviews) => {
	return {
		type: "LOAD_REVIEWS",
		payload: reviews
	}
}



export const addReview = (review) => {
	return {
		type: "ADD_REVIEW",
		payload: review
	}
}
export const removeReview = (review) => {
	return {
		type: "REMOVE_REVIEW",
		payload: review
	}
}
