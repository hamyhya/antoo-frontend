import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, Alert, ActivityIndicator}
        from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class ForgotToken extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
    }
  }
  forgotPin = () => {
    const {token} = this.state

    if (token !== ''){
      this.props.navigation.navigate('forgot-pin', {token: this.state.token})
    }else {
      Alert.alert('Ooops!', 'Please enter valid token :(')
    }
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Masukkan Token</Text>
            </View>
            <TextInput 
              placeholder='Token' 
              style={style.email}
              onChangeText={(e) => {this.setState({token: e})}}  
            />
              <View style={style.btnTopUpWrapper}>
                <TouchableOpacity style={style.btnTopUp} onPress={this.forgotPin}>
                    <Text style={style.btnTopUpText}>BERIKUTNYA</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </>
    );
  }
}


export default ForgotToken

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
  email: {
    width: deviceWidth-70,
    alignSelf: 'center',
    height: 50,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#F4F4F4'
  },
  btnTopUpWrapper: {
    marginTop: 280,
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