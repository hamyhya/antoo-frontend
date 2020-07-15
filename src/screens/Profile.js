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

class Profile extends Component {

  editProfile = () => {
    this.props.navigation.navigate('editProfile')
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor='#fff' />
        <View style={style.fill}>
          <View style={style.content}>
            <View style={style.profile}>
              <Text style={style.header}>Profile</Text>
              <View style={style.contentProfile}>
                <View style={style.imageWrapper}>
                  <Icon name='user' color='black' size={18} />
                </View>
                <View style={style.textProfile}>
                  <Text style={style.name}>Antoo Profile</Text>
                  <Text style={style.phone}>0821-1272-0993</Text>
                </View>
              </View>
            </View>
            <View style={style.contentBadge}>
              <View style={style.account}>
                <Text style={style.textBadge}>Account</Text>
                <TouchableOpacity onPress={this.editProfile} style={style.list}>
                  <Icon name='user' color='black' size={18}></Icon>
                  <Text style={style.title}>Ubah Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.contentBadge}>
              <View style={style.account}>
                <Text style={style.textBadge}>Security</Text>
                <TouchableOpacity style={style.list}>
                  <Icon name='user' color='black' size={18}></Icon>
                  <Text style={style.title}>Ubah Security Code</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.contentBadge}>
              <View style={style.account}>
                <Text style={style.textBadge}>About</Text>
                <TouchableOpacity style={style.list}>
                  <Icon name='user' color='black' size={18}></Icon>
                  <Text style={style.title}>Syarat Dan Ketentuan</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={style.button}>
              <Text style={style.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

export default Profile

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
  textProfile: {
    flex: 1,
    fontSize: 14,
  },
  name: {
    fontWeight: 'bold'
  },
  phone: {
    color: '#AAAAAA'
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
    marginTop: 180,
    backgroundColor: '#583A8E',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
})

