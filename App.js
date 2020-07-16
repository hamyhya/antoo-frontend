import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Register from './src/screens/Register'
import Login from './src/screens/Login'
import Tab from './src/components/Tab'
import TopUp from './src/screens/TopUp'
import EditProfile from './src/screens/EditProfile'
import Transfer from './src/screens/Transfer'
import Promo from './src/screens/Promo'
import PLN from './src/screens/PLN'
import LoginPin from './src/screens/LoginPin'
import OTP from './src/screens/OTP'
import CreatePin from './src/screens/CreatePin'
import CreatePinConfirmation from './src/screens/CreatePinConfirmation'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
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
            <Stack.Screen component={Tab} name='mainmenu' options={{headerShown: false}} />
            <Stack.Screen 
              component={TopUp}
              name='top-up'
              options={{
                title: 'TOP UP',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
            <Stack.Screen 
              component={Transfer}
              name='transfer'
              options={{
                title: 'TRANSFER',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
            <Stack.Screen 
              component={Promo}
              name='promo-all'
              options={{
                title: 'PROMO',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
            <Stack.Screen 
              component={PLN}
              name='listrik'
              options={{
                title: 'LISTRIK',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
            <Stack.Screen 
              component={LoginPin}
              name='login-pin'
              options={{
                title: 'SIGN IN',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
            <Stack.Screen 
              component={OTP}
              name='otp'
              options={{
                title: 'VERIFIKASI EMAIL',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
            <Stack.Screen 
              component={CreatePin}
              name='create-pin'
              options={{
                title: 'BUAT PIN',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
            <Stack.Screen 
              component={CreatePinConfirmation}
              name='create-pin-confirmation'
              options={{
                title: 'VERIFIKASI PIN',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#583A8E'}
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}