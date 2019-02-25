import { ADD_USER, LOAD_PARKS } from "./types"


export const addUserAction = (user) => {
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
