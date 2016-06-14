/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'

import { Actions, Router, Scene } from 'react-native-router-flux';

import Store from './app/store/configureStore'
import List from './app/containers/listContainer';


class dummyContacts extends Component {
  _newContact(){
    console.log("nuevo");
  }

  render() {
    return (
      <Provider store={Store}>
        <Router>
          <Scene key="root">
            <Scene key="list" title="Contactos" component={List} initial={true} rightTitle="Nuevo" onRight={this._newContact}/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('dummyContacts', () => dummyContacts);
