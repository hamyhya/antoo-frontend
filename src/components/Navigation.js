import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {connect} from 'react-redux'

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
import CreateNewPin from '../screens/CreateNewPin'
import CreateNewPinConfirmation from '../screens/CreateNewPinConfirmation'
import EditSecurityCode from '../screens/EditSecurityCode'
import PLNSuccess from '../screens/PLNSuccess'
import TransferSuccess from '../screens/TransferSuccess'
import HistoryDetail from '../screens/HistoryDetail'
import PromoDetail from '../screens/PromoDetail'
import TopUpSuccess from '../screens/TopUpSuccess'
import ForgotPassword from '../screens/ForgotPassword'
import ForgotToken from '../screens/ForgotToken'
import ForgotPin from '../screens/ForgotPin'
import ForgotPinConfirmation from '../screens/ForgotPinConfirmation'

const Stack = createStackNavigator()

class Navigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      token: ''
    }
  }
  render() {
    const {token} = this.props.auth
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            {token === null ? (
              <>
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
                  component={ForgotPassword}
                  name='forgot-password'
                  options={{
                    title: 'LUPA PIN',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#583A8E'}
                  }}
                />
                <Stack.Screen 
                  component={ForgotToken}
                  name='forgot-token'
                  options={{
                    title: 'MASUKKAN TOKEN',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#583A8E'}
                  }}
                />
                <Stack.Screen 
                  component={ForgotPin}
                  name='forgot-pin'
                  options={{
                    title: 'BUAT PIN BARU',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#583A8E'}
                  }}
                />
                <Stack.Screen 
                  component={ForgotPinConfirmation}
                  name='forgot-pin-confirmation'
                  options={{
                    title: 'BUAT PIN BARU',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#583A8E'}
                  }}
                />
              </>
            ):(
              <>
                <Stack.Screen component={Tab} name='mainmenu' options={{headerShown: false}} />
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
                  component={PLNSuccess}
                  name='pln-success'
                  options={{headerShown: false }}
                />
                <Stack.Screen 
                  component={TransferSuccess}
                  name='transfer-success'
                  options={{headerShown: false }}
                />
                <Stack.Screen 
                  component={HistoryDetail}
                  name='history-detail'
                  options={{
                    title: 'HISTORY',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#583A8E'}
                  }}
                />
                <Stack.Screen 
                  component={PromoDetail}
                  name='promo-detail'
                  options={{
                    title: 'DETAIL PROMO',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#583A8E'}
                  }}
                />
                <Stack.Screen 
                  component={CreateNewPin}
                  name='create-new-pin'
                  options={{
                    title: 'BUAT PIN',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#583A8E'}
                  }}
                />
                <Stack.Screen 
                  component={CreateNewPinConfirmation}
                  name='create-new-pin-confirmation'
                  options={{
                    title: 'VERIFIKASI PIN',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#583A8E'}
                  }}
                />
                <Stack.Screen 
                  component={TopUpSuccess}
                  name='topup-success'
                  options={{headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth 
})

export default connect(mapStateToProps)(Navigation)