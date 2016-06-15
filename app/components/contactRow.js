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
      <View style={{flexDirection: 'row', padding: 10}}>
      	<Text style={{flex:1}} >{this.props.data.rowData.name}</Text>
      	<Text style={{flex:4}}>{this.props.data.rowData.phone}</Text>
      	<TouchableOpacity onPress={()=>this.props.onCall(this.props.data.rowData)}>
      		<Icon flex={{flex: 1}} name="phone" />
      	</TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.onEdit(this.props.data.rowData)}>
          <Icon flex={{flex: 1}} name="edit" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default contactRow;