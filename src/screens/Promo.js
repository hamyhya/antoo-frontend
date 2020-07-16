import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, FlatList}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import slide from '../assets/img/promo/slide.jpg'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class Promo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nominal: ''
    }
  }
  detail = () => {
    this.props.navigation.navigate('promo-detail')
  }
  render() {
    const data = [
      {
        id: 1,
        title: 'Cashback Special Buat Kamu s.d 20% !'
      },
      {
        id: 2,
        title: 'Gara-gara CLBK, Hati Jadi Berbunga-bunga'
      },
      {
        id: 3,
        title: 'Voucher 100.000 Discount 25% Semua Menu'
      },
      {
        id: 4,
        title: 'Saatnya Kita Berbagi dalam Keterbatasan'
      },
      {
        id: 5,
        title: 'Pakai Maskernya, Sebar Kebaikannya'
      },
    ]
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.searchWrapper}>
              <TextInput 
                placeholder='cari promo menarik...' 
                style={style.searchInput}
                placeholderTextColor='white'
              />
              <TouchableOpacity style={style.searchBtn}>
                <Text style={style.searchBtnText}>search</Text>
              </TouchableOpacity>
            </View>
            <View style={style.flatlistWrapper}>
              <FlatList
                  style={style.flatlist}
                  data={data}
                  renderItem={({item}) =>
                  <TouchableOpacity style={style.promoBtn} onPress={this.detail}>
                    <List
                      title={item.title}
                    />
                  </TouchableOpacity>
                }
                keyExtractor={item => item.id.toString()}
                />
            </View>
          </View>
        </View>
      </>
    );
  }
}

class List extends Component {
  render(){
    return(
      <>
        <View style={style.imgWrapper}>
          <Image source={slide} style={style.promoImg} />
        </View>
        <Text style={style.promoTitle}>{this.props.title}</Text>
      </>
    )
  }
}

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
  searchWrapper: {
    width: deviceWidth,
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  searchInput: {
    width: 200,
    height: 40,
    backgroundColor: '#8771AE',
    borderRadius: 10,
    padding: 10,
    color: 'white'
  },
  searchBtn: {
    width: 70,
    height: 40,
    backgroundColor: '#8771AE',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  searchBtnText: {
    color: 'white'
  },
  flatlistWrapper: {
    marginTop: 30,
    marginBottom: 205
  },
  flatlist: {
    width: deviceWidth,
  },
  promoBtn: {
    width: 280,
    height: 170,
    marginTop: 15,
    borderWidth: 3,
    borderColor: '#4C2B86',
    borderRadius: 13,
    alignSelf: 'center'
  },
  imgWrapper: {
    width: 274,
    height: 115,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  promoImg: {
    resizeMode: 'cover',
    flex: 1,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  promoTitle: {
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});