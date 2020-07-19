import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {connect} from 'react-redux'
import {logout} from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Profile extends Component {

  editProfile = () => {
    this.props.navigation.navigate('editProfile')
  }
  logoutModal = () => {
    Alert.alert(
      'Are you sure?',
      "You'll leave me alone :(",
      [
        {
          text: '',
          // onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          // onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Logout', 
          onPress: this.logout 
      }
      ],
      { cancelable: false }
    )
  }
  logout = () => {
    this.props.logout()
    this.props.navigation.navigate('login')
  }

  editSecurityCode = () => {
    this.props.navigation.navigate('editSecurity')
  }

  render() {
    const {full_name, phone_number, image} = this.props.auth.userDetail
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.content}>
            <View style={style.profile}>
              <Text style={style.header}>Profil</Text>
              <View style={style.contentProfile}>
                <View style={style.imageWrapper}>
                  <Image source={{uri: image}} style={style.image} />
                </View>
                <View style={style.textProfile}>
                  <Text style={style.name}>{full_name}</Text>
                  <Text style={style.phone}>{phone_number}</Text>
                </View>
              </View>
            </View>
            <View style={style.contentBadge}>
              <View style={style.account}>
                <Text style={style.textBadge}>Account</Text>
                <TouchableOpacity onPress={this.editProfile} style={style.list}>
                  <Text style={style.title}>Ubah Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <View style={style.contentBadge}>
              <View style={style.account}>
                <Text style={style.textBadge}>Security</Text>
                <TouchableOpacity onPress={this.editSecurityCode} style={style.list}>
                  <Text style={style.title}>Ubah Security Code</Text>
                </TouchableOpacity>
              </View>
            </View> */}
            <View style={style.contentBadge}>
              <View style={style.account}>
                <Text style={style.textBadge}>About</Text>
                <TouchableOpacity style={style.list}>
                  <Text style={style.title}>Syarat Dan Ketentuan</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={this.logoutModal} style={style.button}>
              <Text style={style.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const style = StyleSheet.create({
  fill: {
    alignSelf: 'stretch',
    height: deviceHeight,
    backgroundColor: '#ECE9F6'
  },  
  content: {
    alignSelf: 'stretch',
    margin: 20,
    marginTop: 70,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  contentProfile: {
    marginTop: 20,
    // padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textProfile: {
    flex: 1,
    fontSize: 14,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20
  },
  phone: {
    color: '#AAAAAA',
    fontSize: 20
  },
  contentBadge: {
    margin: -5,
    marginTop: 20,
    paddingLeft: 10,
    backgroundColor: "#fff",
    width: deviceWidth - 33,
    // height: deviceHeight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  account: {
    marginTop: 10,
    marginBottom: 15,
  },
  textBadge: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  list: {
    alignSelf: 'stretch',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  button: {
    alignSelf: 'stretch',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    backgroundColor: '#d32f2f',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
})

