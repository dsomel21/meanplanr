import { GET_FOOD } from '../actions/index';

export default function(state = [], action) {
	switch(action.type){
		case GET_FOOD:
			debugger;
			return [...state, 
				Object.assign({}, action.payload)
			];
		default:
			return state;
	}
}
