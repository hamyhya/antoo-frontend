import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet, Dimensions, TextInput,
  TouchableOpacity, StatusBar, Alert, ActivityIndicator, KeyboardAvoidingView
}
  from 'react-native';

import { connect } from 'react-redux'
import { forgot } from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }
  forgotToken = () => {
    const dataSubmit = {
      email: this.state.email
    }

    if (dataSubmit.email !== '') {
      this.props.forgot(dataSubmit).then(() => {
        this.props.navigation.navigate('forgot-token')
      })
    } else {
      Alert.alert('Ooops!', 'Please input valid email :(')
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
              <Text style={style.headerTitle}>Masukkan Email Anda</Text>
            </View>
            <TextInput
              placeholder='Email'
              style={style.email}
              onChangeText={(e) => { this.setState({ email: e }) }}
            />
            <KeyboardAvoidingView behavior={'position'}>
              <View style={style.btnTopUpWrapper}>
                <TouchableOpacity style={style.btnTopUp} onPress={this.forgotToken}>
                  {isLoading ? (
                    <ActivityIndicator size="large" color="white" />
                  ) : (
                      <Text style={style.btnTopUpText}>KIRIM</Text>
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
const mapDispatchToProps = { forgot }

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)

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
    width: deviceWidth - 70,
    alignSelf: 'center',
    height: 50,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#F4F4F4'
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