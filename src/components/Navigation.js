import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Register from '../screens/Register'
import Login from '../screens/Login'
import Tab from '../components/Tab'
import TopUp from '../screens/TopUp'
import EditProfile from '../screens/EditProfile'
import Transfer from '../screens/Transfer'
import Promo from '../screens/Promo'
import PLN from '../screens/PLN'
import LoginPin from '../screens/LoginPin'
import OTP from '../screens/OTP'
import CreatePin from '../screens/CreatePin'
import CreatePinConfirmation from '../screens/CreatePinConfirmation'
import EditSecurityCode from '../screens/EditSecurityCode'
import PLNSuccess from '../screens/PLNSuccess'
import TransferSuccess from '../screens/TransferSuccess'

const Stack = createStackNavigator()

export default class Navigation extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Login} name='login' options={{ headerShown: false }} />
            <Stack.Screen
              options={{
                title: 'JOIN ANTOO',
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#583A8E',
                },
              }}
              component={Register}
              name={'register'}
            />
            <Stack.Screen
              options={{
                title: 'EDIT PROFILE',
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#583A8E',
                },
              }}
              component={EditProfile}
              name={'editProfile'}
            />
            <Stack.Screen
              options={{
                title: 'EDIT SECURITY CODE',
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#583A8E',
                },
              }}
              component={EditSecurityCode}
              name={'editSecurity'}
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
            <Stack.Screen 
              component={PLNSuccess}
              name='pln-success'
              options={{headerShown: false }}
            />
            <Stack.Screen 
              component={TransferSuccess}
              name='transfer-success'
              options={{headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}