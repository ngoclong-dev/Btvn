import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import SignlnScreen from '../sreens/SignlnScreen/SignlnScreen';
import SignUpScreen from './src/sreens/SignUpScreen/SignUpScreen';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>

        <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignlnScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation