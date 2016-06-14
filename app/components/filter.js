'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class filter extends Component {
  render() {
    return (
    	<View>
	    	<TextInput onChangeText={this.props.onFilter} value={this.props.filter}/>
    	</View>
    );
  }
}

const styles = StyleSheet.create({

});


export default filter;