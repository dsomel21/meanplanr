export const ADD_THING = 'ADD_THING';

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