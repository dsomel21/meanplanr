import axios from 'axios';
export const GET_FOOD = 'GET_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';
export const DO_THING = 'DO_THING';

/* Basic Search Method */
const _app_id = 'cdbd4c42';
const _app_key = '786fe91ea92653a0bd25b3dd9639a664';

export function getFood(inputFood) {	
const URL = `http://api.yummly.com/v1/api/recipes?_app_id=${_app_id}&_app_key=${_app_key}&q=${inputFood}`;

	const request = axios.get(URL);
	/* thunk allows you to return a plane JS object */
	return (dispatch) => {
		request.then(function(response) {
			dispatch({
				type: GET_FOOD,
				payload: response
			})
		});
	}
}

/* TESTING PURPOSES... REMOVE LATER */
export function doThing(thingy){
	return {
		type: DO_THING,
		payload: thingy
	}
}