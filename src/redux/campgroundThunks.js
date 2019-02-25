import { loadParks } from "./action.js"

export const getParks = () => {
	return function thunk(dispatch) {
		return fetch("http://localhost:3000/api/v1/parks")
		.then(resp => resp.json())
		.then(data => dispatch(loadParks(data)))
	}
}
