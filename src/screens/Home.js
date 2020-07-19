import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, ActivityIndicator, 
        TouchableOpacity, StatusBar, FlatList}
        from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import topupicon from '../assets/icon/top.png'
import transfericon from '../assets/icon/transfer.png'
import plnicon from '../assets/icon/thunder.png'

import {connect} from 'react-redux'
import {getPromo} from '../redux/actions/promo'
import {dataUser} from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: this.props.auth.token,
      id: this.props.auth.dataLogin.id,
      sort: '',
      search: '',
      page: 1
    }
  }
  register = () => {
    this.props.navigation.navigate('register')
  }
  topUp = () => {
    this.props.navigation.navigate('top-up')
  }
  transfer = () => {
    this.props.navigation.navigate('transfer')
  }
  promo = () => {
    this.props.navigation.navigate('promo-all')
  }
  listrik = () => {
    this.props.navigation.navigate('listrik')
  }
  promo = () => {
    const {token, search, sort, page} = this.state
    this.props.getPromo(token, search, sort, page)
  }
  getUser = () => {
    const token = this.state.token
    const id = this.state.id
    this.props.dataUser(id, token)
  }

  componentDidMount() {
    this.promo()
    this.getUser()
  }
  render() {
    const {dataPromo} = this.props.promo
    const {balance} = this.props.auth
    const loading = {
      loadingPromo: this.props.promo.isLoading,
      loadingBalance: this.props.auth.isLoading
    }

    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            {loading.loadingPromo && loading.loadingBalance ? (
              <View style={style.loadingWrapper}>
                <ActivityIndicator size='large' color='#4C2B86' />
              </View>
            ):(
              <>
                <View style={style.header}>
                  <View style={style.headerWrapper}>
                    <Text style={style.title}>Antoo.</Text>
                    <Text style={style.subTitle}>Your balances</Text>
                    <View style={style.balanceWrapper}>
                      <Text style={style.balanceTextRp}>Rp</Text>
                      <Text style={style.balanceText}>{balance}</Text>
                    </View>
                  </View>
                </View>
                <View style={style.menuWrapper}>
                  <TouchableOpacity style={style.iconWrapper} onPress={this.topUp}>
                    <Image source={topupicon} style={style.iconImg} />
                    <Text style={style.iconText}>Top Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.iconWrapper} onPress={this.transfer}>
                    <Image source={transfericon} style={style.iconImg} />
                    <Text style={style.iconText}>Transfer</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.iconWrapper} onPress={this.listrik}>
                    <Image source={plnicon} style={style.iconImg} />
                    <Text style={style.iconText}>Listrik</Text>
                  </TouchableOpacity>
                </View>
                <View style={style.promo}>
                  <View style={style.headerPromo}>
                    <Text style={style.headerPromoTitle}>Info dan Promo Spesial</Text>
                    {/* <TouchableOpacity onPress={this.promo}>
                      <Text style={style.headerPromoTitleBtn}>Lihat Semua</Text>
                    </TouchableOpacity> */}
                  </View>
                  <View style={style.contentPromo}>
                    <FlatList
                      style={style.flatlist}
                      data={dataPromo}
                      renderItem={({item}) =>
                      <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate('promo-detail',
                        {title: item.title, image: item.image, description: item.description})}}
                      >
                        <Promo
                          image={item.image}
                        />
                      </TouchableOpacity>
                    }
                    keyExtractor={item => item.id.toString()}
                    refreshing={loading.loadingPromo}
                    onRefresh={this.promo}
                    />
                  </View>
                </View>
              </>
            )}
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
        <View style={style.bannerBtn}>
          <Image source={{uri: this.props.image}} style={style.bannerImg}/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  promo: state.promo,
})
const mapDispatchToProps = {getPromo, dataUser}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

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
  loadingWrapper: {
    marginTop: 50,
    justifyContent: 'center',
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
    fontSize: 30,
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
  iconImg: {
    width: 20, 
    height: 20
  },
  iconText: {
    color: '#4C2B86',
    fontWeight: 'bold'
  },
  flatlist: {
    width: deviceWidth,
    height: deviceHeight-435
  },
  promo: {
    width: deviceWidth,
    height: deviceHeight,
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