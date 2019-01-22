/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import codePush from "react-native-code-push";

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
const myver = "1.0";

class App extends Component {

  onButtonPress() {
    Alert.alert('info', 'check update: ' + myver);
    
      codePush.sync({
          updateDialog: true,
          installMode: codePush.InstallMode.IMMEDIATE
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Code Push Sample: {myver}!</Text>
        <TouchableOpacity onPress={this.onButtonPress}>
            <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
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

export default codePush(codePushOptions)(App);
