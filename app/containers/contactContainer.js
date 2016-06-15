'use strict';

import { connect } from 'react-redux';
import ContactForm from '../components/contactForm';
import { filter } from '../actions/list';
import { saveAndGoBack } from '../actions/contact';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
	return {
		...state.contact,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		save: (contact) => {
			dispatch(saveAndGoBack(contact))
		}
	}
}

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(ContactForm);

export default ContactContainer;