import {
	FILTER,
} from '../actions/list'

export default function(state = {}, action){
	switch(action.type){
		case FILTER:
			return {
				...state,
				filter: action.filter
			};
		default:
		 return state;
	}
}