import {
	NEW_CONTACT,
	EDIT_CONTACT,
} from '../actions/contact'

export default function(state = {}, action){
	switch(action.type){
		case NEW_CONTACT:
			return {
				...state,
				name: '',
				phone: '',
			};
		case EDIT_CONTACT:
			return {
				...state,
				name: action.name,
				phone: action.phone,
			};
		default:
		 return state;
	}
}