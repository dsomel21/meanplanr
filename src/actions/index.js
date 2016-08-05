import axios from 'axios';
export const GET_FOOD = 'GET_FOOD';

export function getFood(inputFood){
  const API_KEY = '0NMsRWg2a7mshwRuUPIgpnvPX0kgp18nikRjsntWtWPwdJcfcG';
	const URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=burger';
	axios.get({
		url: URL,
		headers: {
			'X-Mashape-Key' : API_KEY
		}
	}).then(function(response){
			debugger;
    console.log(response.data);
  })

	return {
		type: GET_FOOD,
		payload: inputFood
	}
}