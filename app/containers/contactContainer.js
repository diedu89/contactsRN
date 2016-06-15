'use strict';

import { connect } from 'react-redux';
import ContactForm from '../components/contactForm';
import { filter } from '../actions/list';
import { edit, new_contact } from '../actions/contact';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
	return {
		...state.contact,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		save: () => {
			console.log('save')
		}
	}
}

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(ContactForm);

export default ContactContainer;