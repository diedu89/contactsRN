'use strict';

import { connect } from 'react-redux';
import List from '../components/list';
import { filter } from '../actions/list'

const getFiltered = (data, text) => {
	var regex = new RegExp(text, 'i');
  var filter = (contact) => regex.test(contact.name);
  return data.filter(filter);
}

const mapStateToProps = (state) => {
	return {
		contacts: getFiltered(state.list.contacts, state.list.filter),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFilter: (text)=>{
			dispatch(filter(text));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);