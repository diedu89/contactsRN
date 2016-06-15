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
import Contact from './app/containers/contactContainer';

class dummyContacts extends Component {

  render() {
    return (
      <Provider store={Store}>
        <Router>
          <Scene key="root">
            <Scene key="list" title="Contacts" component={List} initial={true} hideNavBar={true}/>
            <Scene key="contact" title="Contact" component={Contact} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('dummyContacts', () => dummyContacts);
