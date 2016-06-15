'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class contactForm extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
      	<View style={styles.row}>
      		<Text style={styles.label}>Name</Text>
      		<TextInput style={styles.control} defaultValue={this.props.name} />
      	</View>
      	<View style={styles.row}>
      		<Text style={styles.label}>Phone</Text>
      		<TextInput style={styles.control} defaultValue={this.props.phone.toString()} />
      	</View>
      	<TouchableOpacity onPress={this.props.save}>
      		<Text>Guardar</Text>
      	</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	},
	label:{
		flex: 1,
	},
	control:{
		flex: 4,
	}
});


export default contactForm;