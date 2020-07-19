import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, Alert, KeyboardAvoidingView,
        ActivityIndicator}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import AnimatedSplash from 'react-native-animated-splash-screen'

import bg from '../assets/img/bg.png'
import usericon from '../assets/icon/user.png'

import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoaded: false
    }
  }
  register = () => {
    this.props.navigation.navigate('register')
  }
  loginUser = () => {
    const {email} = this.state
    if (email === ""){
      Alert.alert('Ooops!', 'Please input email first :(')
    } else {
      this.props.navigation.navigate('login-pin', {email: this.state.email})
    }
  }
  otp = () => {
    this.props.navigation.navigate('otp')
  }
  loading = () => {
    this.setState({isLoaded: true})
  }
  componentDidMount() {
    setTimeout(this.loading, 3000)
  }

  render() {
    const {isLoaded} = this.state

    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        {isLoaded ? (
          <KeyboardAvoidingView behavior={'position'} style={loginStyle.fill}>
            <Image source={bg} style={loginStyle.accent1}/>
            <View style={loginStyle.accent1} />
            <View style={loginStyle.accent2}>
              <View style={loginStyle.titleWrapper}>
                <Text style={loginStyle.title}>Antoo.</Text>
              </View>
                <View style={loginStyle.formWrapper}>
                  <View style={loginStyle.inputWrapper}>
                    <View style={loginStyle.iconWrapper}>
                      <Image source={usericon} style={loginStyle.usericon} />
                    </View>
                    <TextInput 
                      onChangeText={(e) => {this.setState({email: e})}}
                      style={loginStyle.textInput}
                      placeholder='Email'
                      placeholderTextColor='white'
                    />
                  </View>
                  <TouchableOpacity style={loginStyle.btnSignin} onPress={this.loginUser}>
                    <Text style={loginStyle.btnText}>SIGN IN</Text>
                  </TouchableOpacity>
                  <View style={loginStyle.divider}>
                    <View style={loginStyle.line}/>
                    <Text style={loginStyle.textDivider}>ATAU</Text>
                    <View style={loginStyle.line}/>
                  </View>
                  <TouchableOpacity style={loginStyle.btnJoin} onPress={this.register}>
                    <Text style={loginStyle.btnText}>JOIN NOW</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={loginStyle.btnHelp}>
                    <Text style={loginStyle.btnHelpText}>Butuh bantuan?</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </KeyboardAvoidingView>
        ):(
          <AnimatedSplash
            translucent={true}
            isLoaded={this.state.isLoaded}
            logoImage={require("../assets/img/splash.png")}
            backgroundColor={"#4C2B86"}
            logoHeight={150}
            logoWidht={150}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {loginUser}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const loginStyle = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 0,
  },
  accent2: {
    width: 200,
    height: 80,
    width: deviceWidth,
    height: deviceHeight,
    alignItems: "center",
    paddingTop: 50,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'space-between'
  },
  titleWrapper: {
    marginTop: 50
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    letterSpacing: 5
  },
  formWrapper: {
    width: deviceWidth-100,
    marginBottom: 100
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  usericon: {
    width: 18,
    height: 18
  },
  iconWrapper: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    color: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: deviceWidth-145,
    paddingTop: -1
  },
  btnSignin: {
    marginTop: 20,
    width: deviceWidth-100,
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: 'white',
    letterSpacing: 2
  },
  divider: {
    marginTop: 20,
    width: deviceWidth-100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
  width: deviceWidth-282,
  height: 2,
  backgroundColor: 'white'
  },
  textDivider: {
    color: 'white',
    marginRight: 10,
    marginLeft: 10
  },
  btnJoin: {
    marginTop: 20,
    width: deviceWidth-100,
    height: 40,
    backgroundColor: '#06B3BA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  btnHelp: {
    marginTop: 35,
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnHelpText: {
    color: '#06B3BA',
    letterSpacing: 2
  }
});
