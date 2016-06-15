import { FILTER } from '../actions/list'
import { SAVE_CONTACT } from '../actions/contact'

export default function(state = {}, action){
	switch(action.type){
		case SAVE_CONTACT:
			if(!action.contact.id){
				if(state.contacts.length == 0)
					action.contact.id = 1;
				else
					action.contact.id = state.contacts[state.contacts.length - 1].id + 1;

				contacts = [...state.contacts, action.contact];
			}else{
				contacts = state.contacts.map( (contact) => (contact.id == action.contact.id) ? action.contact : contact );
			}

			return {
				...state,
				contacts
			}
		case FILTER:
			return {
				...state,
				filter: action.filter
			};
		default:
		 return state;
	}
}