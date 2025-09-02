import React, {Component, useEffect} from 'react';

import RootApp from './src/Navigation/index';
// import {Platform, StatusBar, SafeAreaView, Text, View} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';
import Axios from 'axios';
import colors from './src/component/colors';

//let Colordata='';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    //this.fetchDevice()
  }
  render() {
    return (
      <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.orange}}>
        <Provider store={Store}>
          <RootApp />
        </Provider>
      </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
