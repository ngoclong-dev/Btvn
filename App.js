/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignlnScreen from './src/sreens/SignlnScreen';
import SignUpScreen from './src/sreens/SignUpScreen/SignUpScreen';
import Navigation from './src/navigation';

const App = () => {


  return (
    <SafeAreaView  style={styles.root}>
    <Navigation/>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#f9fbfc',
  },
 
});

export default App;
