import React, {Component} from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Register from './src/screens/Register'
import Login from './src/screens/Login'
import Tab from './src/components/Tab'
import TopUp from './src/screens/TopUp'

const Stack = createStackNavigator()

export default class App extends Component {
  render(){
    return(
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Login} name='login' options={{headerShown: false}} />
            <Stack.Screen component={Register} name='register' options={{headerShown: false}} />
            <Stack.Screen component={Tab} name='mainmenu' options={{headerShown: false}} />
            <Stack.Screen 
              component={TopUp}
              name='top-up'
              options={{
                title: 'Top Up', headerTintColor: '#fff', headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}