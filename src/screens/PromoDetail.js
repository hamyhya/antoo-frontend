import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions,
        TouchableOpacity, StatusBar, ScrollView}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import slide from '../assets/img/promo/slide.jpg'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class PromoDetail extends Component {
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
              <View style={style.imgWrapper}>
                <Image source={slide} style={style.promoImg} />
              </View>
              <Text style={style.headerTitle} >Cashback Special Buat Kamu s.d 20% !</Text>
            </View>
            <View style={style.contentWrapper}>
              <ScrollView>
                <Text>
                Siapa sih yang nggak pengen hatinya jadi berbunga-bunga? Semua pasti pengen kan? 
                Nah, pas banget OVO balik lagi dengan promo CLBK yang bisa bikin hati kamu berbunga-bunga!
                
                Eits, bukan CLBK sembarangan nih! CLBK yang ini artinya Cashback Lagi Buat Kamu! 
                Jadi kamu bisa dapetin Cashback 20% buat ajak temen, gebetan, atau mantan buat makan 
                di merchant partner OVO yang oke banget! Pokoknya mau makan sama siapa aja, mau makan di tempat,
                atau delivery order semuanya dijamin lebih enak kalo pake Cashback 20% di CLBK (Cashback Lagi Buat Kamu)
                OVO!
                
                </Text>
              </ScrollView>
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
  imgWrapper: {
    width: 274,
    height: 115,
    borderRadius: 10
  },
  promoImg: {
    resizeMode: 'cover',
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 10
  },
  headerTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 10
  },
  contentWrapper: {
    width: deviceWidth,
    height: 270,
    backgroundColor: 'white',
    padding: 20
  },
  btnTopUpWrapper: {
    marginTop: 30,
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