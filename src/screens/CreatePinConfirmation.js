import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, 
        TouchableOpacity, StatusBar, ActivityIndicator, Alert}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

import {connect} from 'react-redux'
import {registerUser} from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class CreatePinConfirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.route.params.email,
      pin: this.props.route.params.pin,
      conf_pin: '' 
    }
  }
  otp  = () => {
    const dataSubmit = {
      email: this.state.email,
      password: this.state.pin,
      confirm_password: this.state.conf_pin
    }

    if(dataSubmit.password === dataSubmit.confirm_password) {
      this.props.registerUser(dataSubmit).then(() =>{
        this.props.navigation.navigate('otp', {email: dataSubmit.email})
      }).catch(function () {
        Alert.alert('Register Failed')
      })
    } else{
      Alert.Alert("PIN does'nt match")
    }
  }
  render() {
    const {isLoading} = this.props.auth
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Masukkin Sekali Lagi PIN-nya</Text>
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
              value={this.state.conf_pin}
              onTextChange={conf_pin => this.setState({ conf_pin })}
              />
              <View style={style.btnTopUpWrapper}>
                <TouchableOpacity style={style.btnTopUp} onPress={this.otp}>
                  {isLoading ? (
                    <ActivityIndicator size="large" color="white" />
                  ):(
                    <Text style={style.btnTopUpText}>SIGN UP</Text>
                  )}
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {registerUser}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinConfirmation)

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
    marginTop: 300,
    alignItems: "center",
    marginBottom: 150
  },
  btnTopUp: {
    width: deviceWidth-50,
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