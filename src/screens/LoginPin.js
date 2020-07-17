import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, Alert, ScrollView}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class LoginPin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.route.params.email,
      pin: ''
    }
  }
  login  = () => {
    const dataSubmit = {
      password: this.state.pin,
      email: this.state.email
    }
    const {pin} = this.state
    if (pin == ""){
      Alert.alert('Please Enter Your PIN')
    } else {
      this.props.loginUser(dataSubmit).then((response) => {
        Alert.alert('Holaa!! Login Success Welcome :)')
        this.props.navigation.navigate('mainmenu')
      }).catch(function (error) {
        Alert.alert('Wrong Email or Password!')
      })
    }
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Masukkan Security Code Anda</Text>
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
              value={this.state.pin}
              onTextChange={pin => this.setState({ pin })}
              />
              <TouchableOpacity>
                <Text style={style.forgetText}>LUPA SECURITY CODE?</Text>
              </TouchableOpacity>
              <View style={style.btnTopUpWrapper}>
                <TouchableOpacity style={style.btnTopUp} onPress={this.login}>
                  <Text style={style.btnTopUpText}>SIGNIN</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </>
    );
  }
}

const mapDispatchToProps = {loginUser}

export default connect(null, mapDispatchToProps)(LoginPin)

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
    marginTop: 250,
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