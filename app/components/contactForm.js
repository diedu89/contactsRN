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

	componentWillMount(){
		this.setState({
			id: this.props.id,
			name: this.props.name,
			phone: (this.props.phone && this.props.phone.toString()) || '',
		})
	}

	save(){
		this.props.save({
			id: this.state.id,
			name: this.state.name,
			phone: this.state.phone,
		});
	}

  render() {
    return (
      <View>
      	<View style={styles.row}>
      		<Text style={styles.label}>Name</Text>
      		<TextInput 
						style={styles.control} 
						value={this.state.name} 
						onChangeText={(text) => this.setState({name: text})}/>
      	</View>
      	<View style={styles.row}>
      		<Text style={styles.label}>Phone</Text>
      		<TextInput 
						style={styles.control} 
						value={this.state.phone} 
						onChangeText={(text) => this.setState({phone: text})}/>
      	</View>
      	<TouchableOpacity onPress={this.save.bind(this)}>
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