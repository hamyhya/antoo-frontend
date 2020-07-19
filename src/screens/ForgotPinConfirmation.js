import React, { Component } from 'react';
import {
  Text, View, Alert, StyleSheet, Dimensions, TextInput,
  TouchableOpacity, StatusBar, ActivityIndicator, KeyboardAvoidingView
}
  from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

import { connect } from 'react-redux'
import { reset } from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class ForgotPinConfirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: this.props.route.params.token,
      pin: this.props.route.params.pin,
      pin_conf: '',
      error: this.props.auth.errorMsg
    }
  }
  verifPin = () => {
    const dataSubmit = {
      token: this.state.token,
      password: this.state.pin,
      confirm_password: this.state.pin_conf
    }
    const { error } = this.state

    if (dataSubmit.token !== '' && dataSubmit.pin !== '') {
      this.props.reset(dataSubmit).then(() => {
        this.props.navigation.navigate('login')
        Alert.alert('Success', 'Now login to your account')
      }).catch(function () {
        Alert.alert('Ooops!', error)
      })
    } else {
      Alert.alert('Oops!', 'Please fill the form')
    }

  }
  render() {
    const { isLoading } = this.props.auth

    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Masukkan PIN Sekali Lagi</Text>
            </View>
            <SmoothPinCodeInput
              codeLength={6}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: 'gray',
              }}
              cellStyleFocused={{
                borderColor: 'black',
              }}
              value={this.state.pin_conf}
              onTextChange={pin_conf => this.setState({ pin_conf })}
            />
            <KeyboardAvoidingView behavior={'position'}>
              <View style={style.btnTopUpWrapper}>
                <TouchableOpacity style={style.btnTopUp} onPress={this.verifPin}>
                  {isLoading ? (
                    <ActivityIndicator size='large' color='white' />
                  ) : (
                      <Text style={style.btnTopUpText}>BERIKUTNYA</Text>
                    )}
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = { reset }

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPinConfirmation)

const style = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white'
  },
  accent1: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 0,
  },
  accent2: {
    alignItems: "center",
    width: 200,
    height: 80,
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 1,
  },
  header: {
    width: deviceWidth,
    height: 150,
    backgroundColor: 'white',
    padding: 25,
    alignItems: 'center',
    marginTop: 10
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2,
    color: '#583A8E'
  },
  forgetText: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2,
    color: '#01B0B7',
    alignSelf: 'center',
    marginTop: 30
  },
  btnTopUpWrapper: {
    marginTop: deviceHeight - 380,
    alignItems: "center",
    marginBottom: 150
  },
  btnTopUp: {
    width: deviceWidth - 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#01B0B7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTopUpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2
  }
});