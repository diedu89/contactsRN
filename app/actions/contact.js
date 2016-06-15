import { Actions } from 'react-native-router-flux';

export const SAVE_CONTACT = 'SAVE_CONTACT';
export function save(contact){
	return {
		type: SAVE_CONTACT,
		contact
	}
}

export const NEW_CONTACT = 'NEW_CONTACT';
export function newContact(){
	return {
		type: NEW_CONTACT
	}
}

export const EDIT_CONTACT = 'EDIT_CONTACT';
export function editContact(contact){
	return {
		type: EDIT_CONTACT,
		contact,
	};
}

export function saveAndGoBack(contact){
	return function(dispatch){
		dispatch(save(contact));
		Actions.list();
	}
}