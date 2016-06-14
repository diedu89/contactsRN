'use strict';

import { connect } from 'react-redux';
import List from '../components/list';
import { filter } from '../actions/list';
import { edit, new_contact } from '../actions/contact';
import { Actions } from 'react-native-flux-router';

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

		},
		edit: (contact) => {
			dispatch()
		}
	}
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;