import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import LoginScreen from './src/screens/LoginScreen';

import store from './src/store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const Login = StackNavigator(
      {
        login: { screen: LoginScreen }
      },
      {
        headerMode: 'none'
      }
    );
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}
