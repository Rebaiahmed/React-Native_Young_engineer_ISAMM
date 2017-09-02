import React, { Component } from "react";
 import {  Platform, ScrollView, StyleSheet,AppRegistry,View } from 'react-native';
import { Container, Content, Picker, Button, Text } from "native-base";


import HomeScreen from "./src/HomeScreen/index.js";

import SimpleStack from './src/AppNavigation' ;

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
   return (
   <SimpleStack />
   );
}


}

AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);
