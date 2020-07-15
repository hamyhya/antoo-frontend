import React, {Component} from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Register from './src/screens/Register'
import Login from './src/screens/Login'
import Home from './src/screens/Home'

const Stack = createStackNavigator()

export default class App extends Component {
  render(){
    return(
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Login} name='login' options={{headerShown: false}} />
            <Stack.Screen component={Register} name='register' options={{headerShown: false}} />
            <Stack.Screen component={Home} name='home' options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}