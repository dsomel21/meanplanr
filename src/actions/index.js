import axios from 'axios';
export const GET_FOOD = 'GET_FOOD';
export const DO_THING = 'DO_THING';

export function getFood(inputFood) {

	/* API Key */
	const config = {
	  headers: {'X-Mashape-Key' : '0NMsRWg2a7mshwRuUPIgpnvPX0kgp18nikRjsntWtWPwdJcfcG'}
	};

	/* Basic Search Method */
	const URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=${inputFood}`;
	axios.get(URL, config)
		.then(function(response){
			return {
				type: GET_FOOD,
				payload: response
			}
  })
}

/* TESTING PURPOSES... REMOVE LATER */
export function doThing(thingy){
	return {
		type: DO_THING,
		payload: thingy
	}
}