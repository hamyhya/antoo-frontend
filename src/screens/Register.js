import React, {Component} from 'react'
import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: ''
    }
  }
  createPin = () => {
    const {email} = this.state

    if(email !== '') {
      this.props.navigation.navigate('create-pin', {email: email})
    }else {
      Alert.alert('Oops!', 'Please fill the form')
    }
  }
  render(){
    return(
      <>
        <View style={style.form}>
          <Text style={style.header}>Terimakasih telah bergabung! kami akan mengirimkan kode OTP melalui Email untuk verfikasi proses registrasi</Text>
          {/* <TextInput style={style.textInput} placeholder='Nama Lengkap' underlineColorAndroid={'transparent'} color="black" ></TextInput>
          <TextInput style={style.textInput} placeholder='Nomor Ponsel' underlineColorAndroid={'transparent'} color="black" ></TextInput> */}
          <TextInput 
            style={style.textInput} 
            placeholder='Email' 
            underlineColorAndroid={'transparent'} 
            color='black' 
            onChangeText={(e) => {this.setState({email: e})}}  
          ></TextInput>
          {/* <TextInput style={style.textInput} placeholder='Kode Promosi (Optional)' underlineColorAndroid={'transparent'} color="black" ></TextInput>
          <View style={style.checkboxContainer}>
            <CheckBox style={style.checkbox}></CheckBox>
            <Text style={style.textCheckbox}>Saya setuju dengan kesepakatan dan persetujuan aplikasi</Text>
          </View> */}
          <TouchableOpacity style={style.button} onPress={this.createPin}>
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
    marginTop: deviceHeight-370,
    backgroundColor: '#01B0B7',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  textCheckbox: {
    marginTop: 10,
    fontSize: 15,
    color: '#AAAAAA'
  }
})