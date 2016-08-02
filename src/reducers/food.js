import { GET_FOOD } from '../actions/index';

const INITIAL_STATE = { food : null };

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_FOOD:
			return { ...state, food : action.payload }
		default:
			return state;
	}
}