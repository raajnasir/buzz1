import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigation} from 'react-navigation-tabs'
import fb from'./screens/fb'
import In from './screens/In'

export default class App extends components() {
  render(){
  return (
    <AppContainer/>
  )
  }
}
const tabNavigation  = createBottomTabNavigation({
  fb : {screen:fb},
  in : {screen:In}
})

const AppContainer = creaeAppContainer(tabNavigation)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
