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
import ImagePicker from 'react-native-image-picker'
import {logout} from '../redux/actions/auth'
import {patchUser} from '../redux/actions/users'
import { connect } from 'react-redux'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class EditProfile extends Component {
  constructor(props){
    super(props)
    console.log('ini props', props)
    this.state = {
      token: this.props.auth.dataLogin.token,
      name: '',
      fullName: this.props.user.dataUser.fullName
    }
  }
  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  render() {
    const { photo } = this.state
    const { token } = this.state
    const { fullName } = this.state
    console.log('initoken', token)
    console.log('inifullname', fullName)
    return (
      <>
        <StatusBar backgroundColor='#583A8E' />
        <View style={style.fill}>
          <View style={style.content}>
            <View style={style.contentProfile}>
              <View style={style.imageWrapper}>
                {photo && (
                  <Image
                    source={{ uri: photo.uri }}
                    style={{ width: 300, height: 300 }}
                  />
                )}
              </View>
              <TouchableOpacity onPress={this.handleChoosePhoto} style={style.btnEditImage}>
                <Text style={style.btnEditText}>Perbarui Foto Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={style.content2}>
              <Text style={style.textContent}>Nama Lengkap</Text>
              <TextInput style={style.textInput} placeholder='antoo' />
              <Text style={style.textContent}>Nomor Ponsel</Text>
              <TextInput style={style.textInput} placeholder='0808080808' />
              <Text style={style.textContent}>Email</Text>
              <TextInput style={style.textInput} placeholder='banisholih23@gmail.com' />
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

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
})

const mapDispatchToProps = { logout, patchUser }

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)


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
    marginTop: 100,
    backgroundColor: '#01B0B7',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
})