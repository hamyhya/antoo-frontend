import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  CheckBox
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class EditProfile extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor='#583A8E' />
        <View style={style.fill}>
          <View style={style.content}>
            <View style={style.contentProfile}>
              <View style={style.imageWrapper}>
                <Icon name='user' color='black' size={50} />
              </View>
              <TouchableOpacity style={style.btnEditImage}>
                <Text style={style.btnEditText}>Perbarui Foto Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={style.content2}>
              <Text style={style.textContent}>Nama Lengkap</Text>
              <Text style={style.textInput}>BaniSholih</Text>
              <Text style={style.textContent}>Nomor Ponsel</Text>
              <Text style={style.textFill}>082112720993</Text>
              <View style={style.contentFill1}>
                <TouchableOpacity style={style.btnEditImage}>
                  <Text style={style.btnEditText2}>Edit</Text>
                </TouchableOpacity>
              </View>
              <Text style={style.textContent}>Email</Text>
              <Text style={style.textFill}>banisholih23@gmail.com</Text>
              <View style={style.contentFill1}>
                <TouchableOpacity style={style.btnEditImage}>
                  <Text style={style.btnEditText2}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={style.button}>
              <Text style={style.buttonText}>SIMPAN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

export default EditProfile

const style = StyleSheet.create({
  fill: {
    alignSelf: 'stretch',
    height: deviceHeight,
  },
  content: {
    alignSelf: 'stretch',
    margin: 20,
    marginTop: 20,
  },
  contentProfile: {
    marginTop: 20,
    // padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnEditImage: {
    flex: 1
  },
  btnEditText: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    color: '#06B3BA',
  },
  btnEditText2: {
    marginTop: -20,
    marginRight: 20,
    color: '#06B3BA',
  },
  content2: {
    marginTop: 20,
  },
  textContent: {
    color: '#AAAAAA',
    marginTop: 10
  },
  textInput: {
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 1
  },
  contentFill1: {
    alignItems: 'flex-end'
  },
  button: {
    alignSelf: 'stretch',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 380,
    backgroundColor: '#80DADA',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
})