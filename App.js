import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Register from './src/screens/Register'
import Login from './src/screens/Login'
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Profile} name='profile' options={{ headerShown: false }} />
            <Stack.Screen component={Login} name='login' options={{ headerShown: false }} />
            <Stack.Screen
              options={{ title: 'JOIN ANTOO', 
              headerTintColor: '#fff',  
              headerStyle: {
                backgroundColor: '#583A8E',
              }, }}
              component={Register}
              name={'register'}
            />
            <Stack.Screen
              options={{ title: 'EDIT PROFILE', 
              headerTintColor: '#fff',  
              headerStyle: {
                backgroundColor: '#583A8E',
              }, }}
              component={EditProfile}
              name={'editProfile'}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}