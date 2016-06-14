'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class contactRow extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
      	<Text>{this.props.data.rowData.name}</Text>
      	<Text>{this.props.data.rowData.phone}</Text>
      	<TouchableOpacity onPress={()=>this.props.onCall(this.props.rowData)}>
      		<Icon name="phone" />
      	</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default contactRow;