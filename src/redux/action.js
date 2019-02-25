import { ADD_USER, LOAD_PARKS } from "./types"


export const addUser = (user) => {
	return {
		type: "ADD_USER",
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
