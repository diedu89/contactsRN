'use strict';

import { connect } from 'react-redux';
import List from '../components/list';
import { filter } from '../actions/list';
import { editContact, newContact } from '../actions/contact';
import { Actions } from 'react-native-router-flux';

const getFiltered = (data, text) => {
	var regex = new RegExp(text, 'i');
  var filter = (contact) => regex.test(contact.name);
  return data.filter(filter);
}

const mapStateToProps = (state) => {
	return {
		filter: state.list.filter,
		contacts: getFiltered(state.list.contacts, state.list.filter),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFilter: (text)=>{
			dispatch(filter(text));
		},
		new_contact: () => {
			Actions.contact();
			dispatch(newContact());
		},
		edit: (contact) => {
			Actions.contact();
			dispatch(editContact(contact));
		}
	}
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;