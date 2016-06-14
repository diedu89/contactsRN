'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
} from 'react-native';

import Filter from './filter'
import ContactRow from './contactRow'

class list extends Component {

	constructor(props) {
	  super(props);

	  this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	}

	onCall(data){
		
	}

  static rightTitle = "New";

  static onRight(){
    
  }

	renderContactRow(rowData, sectionID, rowID, highlightRow){
		return (<ContactRow data={{rowData, sectionID, rowID, highlightRow}} onCall={this.onCall} />);
	}

  render() {
    return (
    	<View style={{marginTop: 100}}>
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