import axios from 'axios';
export const GET_FOOD = 'GET_FOOD';

export function getFood(inputFood) {
	
	/* API Key */
	const config = {
	  headers: {'X-Mashape-Key' : '0NMsRWg2a7mshwRuUPIgpnvPX0kgp18nikRjsntWtWPwdJcfcG'}
	};

	/* Basic Search Method */
	const URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=burger';
	axios.get(URL, config)
		.then(function(response){
			return inputFood({
				type: GET_FOOD,
				payload: response
			})
  })
}