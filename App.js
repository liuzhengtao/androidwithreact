/*
* @Author: Administrator
* @Date:   2020-01-21 13:54:36
* @Last Modified by:   Administrator
* @Last Modified time: 2020-01-21 14:38:31
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import ToolBar  from './jspages/component/ToolBar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ToolBar
      hide={true}
      title="ReactNativeView"
      style={{backgroundColor: 'red'}}
      />
      <View style={styles.subContainer}>
      <Text>这是原生app里面嵌套react-native Activity</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    subContainer:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
    }
});
