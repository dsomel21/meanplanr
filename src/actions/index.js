import axios from 'axios';
export const GET_FOOD = 'GET_FOOD';
export const DO_THING = 'DO_THING';

export function getFood(inputFood) {

	/* API Key */
	// const config = {
	//   headers: {'X-Mashape-Key' : '0NMsRWg2a7mshwRuUPIgpnvPX0kgp18nikRjsntWtWPwdJcfcG'}
	// };

	/* Basic Search Method */
	// const URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=burger';
 const _app_id = 'cdbd4c42';
 const _app_key = '786fe91ea92653a0bd25b3dd9639a664';
 const URL = `http://api.yummly.com/v1/api/recipes?_app_id=${_app_id}&_app_key=${_app_key}&q=onion+soup`;
 debugger;
 axios.get(URL)
 .then(function(response){
 	return inputFood({
 		type: GET_FOOD,
		payload: response
	})
 })
}

/* TESTING PURPOSES... REMOVE LATER */
export function doThing(thingy){
	return {
		type: DO_THING,
		payload: thingy
	}
}