import axios from 'axios';
export const GET_FOOD = 'GET_FOOD';
export const DO_THING = 'DO_THING';
export const SELECT_FOOD = 'SELECT_FOOD';


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

/* ACTION FOR SELECTING FOOD ITEM */
export function selectFood(item){

	item = item.split('$')[1];
	const URL = `http://api.yummly.com/v1/api/recipe/${item}?_app_id=${_app_id}&_app_key=${_app_key}`;

	const request = axios.get(URL);
	return (dispatch) => {
		request.then(function(response) {
			debugger;
			dispatch({
				type: SELECT_FOOD,
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