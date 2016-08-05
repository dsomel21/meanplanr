import axios from 'axios';
export const GET_FOOD = 'GET_FOOD';
export const DO_THING = 'DO_THING';

export function getFood(inputFood) {

	/* API Key */
	const config = {
	  headers: {'X-Mashape-Key' : '0NMsRWg2a7mshwRuUPIgpnvPX0kgp18nikRjsntWtWPwdJcfcG'}
	};

	/* Basic Search Method */
	let URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=${inputFood}`;
	return function (dispatch) {
		axios.get(URL, config)
		.then((response) => { dispatch ({
			type: GET_FOOD,
			payload: response
		})
  })
};