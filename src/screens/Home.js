import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, FlatList}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

 import slide1 from '../assets/img/promo/slide.jpg'
// import slide2 from '../assets/img/promo/2.jpg'
// import slide3 from '../assets/img/promo/3.jpg'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoaded: false
    }
  }
  register = () => {
    this.props.navigation.navigate('register')
  }
  topUp = () => {
    this.props.navigation.navigate('top-up')
  }
  render() {
    const data = [
      {
        id: 1,
        title: 'Holaaa'
      },
      {
        id: 2,
        title: 'Holaaa'
      },
      {
        id: 3,
        title: 'Holaaa'
      },
    ]
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <View style={style.headerWrapper}>
                <Text style={style.title}>Antoo.</Text>
                <Text style={style.subTitle}>Your balances</Text>
                <View style={style.balanceWrapper}>
                  <Text style={style.balanceTextRp}>Rp</Text>
                  <Text style={style.balanceText}>100.000</Text>
                </View>
              </View>
            </View>
            <View style={style.menuWrapper}>
              <TouchableOpacity style={style.iconWrapper} onPress={this.topUp}>
                <Icon name='plus-circle' size={20} color='#4C2B86' />
                <Text style={style.iconText}>Top Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.iconWrapper}>
                <Icon name='plus-circle' size={20} color='#4C2B86' />
                <Text style={style.iconText}>Transfer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.iconWrapper}>
                <Icon name='plus-circle' size={20} color='#4C2B86' />
                <Text style={style.iconText}>Listrik</Text>
              </TouchableOpacity>
            </View>
            <View style={style.promo}>
              <View style={style.headerPromo}>
                <Text style={style.headerPromoTitle}>Info dan Promo Spesial</Text>
                <TouchableOpacity>
                  <Text style={style.headerPromoTitleBtn}>Lihat Semua</Text>
                </TouchableOpacity>
              </View>
              <View style={style.contentPromo}>
                <FlatList
                  style={style.flatlist}
                  data={data}
                  renderItem={({item}) =>
                  <Promo
                    title={item.title}
                  />
                }
                keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

class Promo extends Component {
  render(){
    return(
      <View style={style.bannerWrapper}>
        <TouchableOpacity style={style.bannerBtn}>
          <Image source={slide1} style={style.bannerImg}/>
        </TouchableOpacity>
      </View>
    )
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
    width: 200,
    height: 80,
    width: deviceWidth,
    height: deviceHeight,
    alignItems: "center",
    position: 'absolute',
    zIndex: 1,
  },
  header: {
    width: deviceWidth,
    height: 200,
    backgroundColor: '#4C2B86',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerWrapper: {
    width: deviceWidth-50,
    alignSelf: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 3,
    fontSize: 25,
    marginTop: 20
  },
  subTitle: {
    color: 'white',
    fontSize: 13,
    marginTop: 20
  },
  balanceWrapper: {
    flexDirection: 'row',
    marginTop: 5
  },
  balanceText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5
  },
  balanceTextRp: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  },
  menuWrapper: {
    width: deviceWidth-50,
    height: 100,
    marginTop: -50,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#4C2B86',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  iconWrapper: {
    marginRight: 25,
    marginRight: 25,
    alignItems: 'center'
  },
  iconText: {
    color: '#4C2B86',
    fontWeight: 'bold'
  },
  flatlist: {
    width: deviceWidth,
    height: 260
  },
  promo: {
    width: deviceWidth,
    height: 350,
    backgroundColor: 'white',
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerPromo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  headerPromoTitle: {
    fontWeight: 'bold',
    fontSize: 17
  },
  headerPromoTitleBtn: {
    fontWeight: 'bold',
    color: '#01C6CE'
  },
  contentPromo: {
    marginTop: 15,
    alignItems: 'center'
  },
  bannerWrapper: {
    marginTop: 10,
    alignSelf: 'center'
  },
  bannerBtn: {
    width: 270,
    height: 120,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  bannerImg : {
    resizeMode: 'cover',
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 10
  }
});