import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

class Register extends Component {
  render(){
    return(
      <>
        <View style={style.form}>
          <Text style={style.header}>Terimakasih telah bergabung kami akan mengirimkan kode SMS dan Email untuk verfikasi proses registrasi</Text>
          <TextInput style={style.textInput} placeholder='Nama Lengkap' underlineColorAndroid={'transparent'} color="black" ></TextInput>
          <TextInput style={style.textInput} placeholder='Nomor Ponsel' underlineColorAndroid={'transparent'} color="black" ></TextInput>
          <TextInput style={style.textInput} placeholder='Email' underlineColorAndroid={'transparent'} color='black' ></TextInput>
          <TextInput style={style.textInput} placeholder='Kode Promosi (Optional)' underlineColorAndroid={'transparent'} color="black" ></TextInput>
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>BERIKUTNYA</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

export default Register

const style = StyleSheet.create({
  form: {
    alignSelf: 'stretch',
    margin: 35
  },
  header: {
    fontSize: 15,
    color: 'black',
    paddingBottom: 30,
    borderBottomColor: '#199187',
  },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 1
  },
  button: {
    alignSelf: 'stretch',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 290,
    backgroundColor: '#80DADA',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  }
})