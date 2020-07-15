import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Register from './src/screens/Register'
import Login from './src/screens/Login'
<<<<<<< HEAD
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile'
=======
import Home from './src/screens/Home'
>>>>>>> origin/developp

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
<<<<<<< HEAD
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
=======
            <Stack.Screen component={Login} name='login' options={{headerShown: false}} />
            <Stack.Screen component={Register} name='register' options={{headerShown: false}} />
            <Stack.Screen component={Home} name='home' options={{headerShown: false}} />
>>>>>>> origin/developp
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}