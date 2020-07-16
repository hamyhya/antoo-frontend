import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, ScrollView}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class PLNSuccess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nominal: ''
    }
  }
  home = () => {
    this.props.navigation.navigate('mainmenu')
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Berhasil</Text>
              <Text>2 Mei 2020, 06:38</Text>
            </View>
            <View style={style.contentWrapper}>
              <Text>Top Up PLN Prabayar :</Text>
              <View style={style.plnIdWrapper}>
                <Text style={style.plnId}>1237632876381</Text>
              </View>
              <Text>No. Token :</Text>
              <Text style={style.token}>8762-8237-9239-2301-1230</Text>
              <View style={style.infoWrapper}>
                <Text>Your Balance :</Text>
                <Text style={style.balance}>Rp. 100.000</Text>
              </View>
            </View>
            <View style={style.btnTopUpWrapper}>
              <TouchableOpacity style={style.btnTopUp} onPress={this.home}>
                <Text style={style.btnTopUpText}>OKE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
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
    padding: 25,
    alignItems: 'center',
    marginTop: 10
  },
  headerTitle: {
    color: '#73BD00',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 3,
    marginBottom: 5
  },
  contentWrapper: {
    width: deviceWidth,
    height: 250,
    backgroundColor: 'white',
    padding: 20
  },
  plnIdWrapper: {
    width: deviceWidth-120,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  plnId: {
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  token: {
    fontWeight: 'bold',
    alignSelf: 'center',
    letterSpacing: 2,
    marginTop: 10,
    fontSize: 17
  },
  infoWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  balance: {
    fontWeight: 'bold',
  },
  btnTopUpWrapper: {
    marginTop: 200,
    alignItems: "center",
    marginBottom: 150
  },
  btnTopUp: {
    width: deviceWidth-50,
    height: 50,
    borderRadius: 20,
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