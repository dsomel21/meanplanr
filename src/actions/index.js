export const ADD_THING = 'ADD_THING';
// export const GET_FOOD = 'GET_FOOD';

export function addThing(thing){
	return {
		type: ADD_THING,
		payload: thing
	}
};

// export function getFood(inputFood){
// 	return {
// 		type: GET_FOOD,
// 		payload: inputFood
// 	}
// }