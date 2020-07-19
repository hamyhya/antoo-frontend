import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, ScrollView}
        from 'react-native';
     
import {connect} from 'react-redux'
import {dataUser} from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class PLNSuccess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: this.props.auth.token,
      id_user: this.props.auth.dataLogin.id
    }
  }
  home = () => {
    const token = this.state.token
    const id = this.state.id_user
    this.props.dataUser(id, token)
    this.props.navigation.navigate('mainmenu')
  }
  render() {
    const {id, tokenPln, balance} = this.props.transaction.dataPln
    const {customer} = this.props.route.params

    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Pembelian Berhasil</Text>
              <Text>ID transaksi: {id}</Text>
            </View>
            <View style={style.contentWrapper}>
              <Text>Top Up PLN Prabayar :</Text>
              <View style={style.plnIdWrapper}>
                <Text style={style.plnId}>{customer}</Text>
              </View>
              <Text>No. Token :</Text>
              <Text style={style.token}>{tokenPln}</Text>
              <View style={style.infoWrapper}>
                <Text>Your Balance :</Text>
                <Text style={style.balance}>Rp. {balance}</Text>
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

const mapStateToProps = state => ({
  transaction: state.transaction,
  auth: state.auth
})
const mapDispatchToProps = {dataUser}

export default connect(mapStateToProps, mapDispatchToProps)(PLNSuccess)

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
    marginTop: deviceHeight-480,
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