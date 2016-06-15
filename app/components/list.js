'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableOpacity,
} from 'react-native';

import Filter from './filter'
import ContactRow from './contactRow'

class list extends Component {

	constructor(props) {
	  super(props);

	  this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	}

	onCall(data){
    console.log(data);
		//this.props.edit(data);
	}

	renderContactRow(rowData, sectionID, rowID, highlightRow){
		return (<ContactRow data={{rowData, sectionID, rowID, highlightRow}} onCall={this.onCall.bind(this)} onEdit={this.props.edit}/>);
	}

  render() {
    return (
    	<View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 5}}>Contacts</Text>
          <TouchableOpacity onPress={this.props.new_contact}>
            <Text style={{flex: 1}}>New</Text>
          </TouchableOpacity>
        </View>
    		<Filter onFilter={this.props.onFilter}/>
    		<ListView 
    		  enableEmptySections={true}
    			dataSource={this.dataSource.cloneWithRows(this.props.contacts)}
    			renderRow={this.renderContactRow.bind(this)}/>
    	</View>
    );
  }
}

const styles = StyleSheet.create({

});


export default list;