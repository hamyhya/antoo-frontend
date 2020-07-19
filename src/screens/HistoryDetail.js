import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, ScrollView}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class HistoryDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.route.params.id,
      amount: this.props.route.params.amount,
      type: this.props.route.params.type,
      date: this.props.route.params.date,
    }
  }
  home = () => {
    this.props.navigation.navigate('mainmenu')
  }
  render() {
    const {id, type, amount, date} = this.state
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Histori Transaksi</Text>
              <Text>{date.replace('T', '  ').slice(0, 20)}</Text>
            </View>
            <View style={style.contentWrapper}>
              <Text>Tipe Transaksi :</Text>
              <View style={style.plnIdWrapper}>
                <Text style={style.plnId}>{type}</Text>
              </View>
              <Text>Nominal :</Text>
              <Text style={style.token}>Rp. {amount.toString().replace('-', '')}</Text>
              <View style={style.infoWrapper}>
                <Text>ID Transaksi :</Text>
                <Text style={style.balance}>{id}</Text>
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
    color: '#4C2B86',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 3,
    marginBottom: 5,
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
    textTransform: 'uppercase',
    letterSpacing: 3
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
    marginTop: deviceHeight-540,
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