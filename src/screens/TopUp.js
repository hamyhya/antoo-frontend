import React, {Component} from 'react';
import {Text, View, Alert, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, ScrollView, ActivityIndicator}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import {connect} from 'react-redux'
import {topup} from '../redux/actions/transaction'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class TopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: '',
      token: this.props.auth.token,
      card: '',
      cvv: '',
      exp: ''
    }
  }
  topup = () => {
    const {token, card, cvv, exp} = this.state
    const dataSubmit = {
      amount: this.state.amount,
    }

    if (card !== '' && cvv !== '' && exp !== '') {
      this.props.topup(dataSubmit, token).then(() => {
        this.props.navigation.navigate('topup-success', {card: card})
      }).catch(function () {
        Alert.alert('Oops!', 'Failed top up :(')
      })
    } else{
      Alert.alert('Ooops!', 'Please fill all the form')
    }
  }
  render() {
    const {isLoading} = this.props.transaction

    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <ScrollView>
              <View style={style.header}>
                <Text style={style.headerTitle}>Top Up ke</Text>
                <View style={style.headerSubWrapper}>
                  <Text style={style.subWrapperTitle}>Antoo Cash</Text>
                  <Text>Balance: Rp 100.000</Text>
                </View>
              </View>
              <View style={style.nominal}>
                <Text style={style.headerTitle}>Pilih Nominal</Text>
                <View style={style.nominalWrapper}>
                  <TouchableOpacity 
                    style={style.nominalBtn}
                    onPress={() => {this.setState({amount: '100000'})}}
                  >
                    <Text style={style.nominalBtnText}>Rp 100.000</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={style.nominalBtn}
                    onPress={() => {this.setState({amount: '200000'})}}
                  >
                    <Text style={style.nominalBtnText}>Rp 200.000</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={style.nominalBtn}
                    onPress={() => {this.setState({amount: '500000'})}}
                  >
                    <Text style={style.nominalBtnText}>Rp 500.000</Text>
                  </TouchableOpacity>
                </View>
                <TextInput 
                  placeholder='Ketik Nominal'
                  style={style.nominalInput} 
                  value={this.state.amount}
                  onChangeText={(e) => {this.setState({amount: e})}}
                />
              </View>
              <View style={style.card}>
                <Text style={style.headerTitle}>Kartu Debit/Kredit</Text>
                <TextInput 
                  placeholder='Nomor Kartu' 
                  style={style.nominalInput} 
                  value={this.state.card}
                  onChangeText={(e) => {this.setState({card: e})}}
                />
                <View style={style.smallInputWrapper}>
                  <TextInput 
                    placeholder='Exp. Date (06/24)' 
                    style={style.smallInput} 
                    value={this.state.exp}
                    onChangeText={(e) => {this.setState({exp: e})}}
                  />
                  <TextInput 
                    placeholder='CVV' 
                    style={style.smallInput} 
                    value={this.state.cvv}
                    onChangeText={(e) => {this.setState({cvv: e})}}
                  />
                </View>
              </View>
              <View style={style.btnTopUpWrapper}>
                <TouchableOpacity style={style.btnTopUp} onPress={this.topup}>
                  {isLoading ? (
                    <ActivityIndicator size='large' color='white' />
                  ):(
                    <Text style={style.btnTopUpText}>TOP UP</Text>
                  )}
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  transaction: state.transaction
})
const mapDispatchToProps = {topup}

export default connect(mapStateToProps, mapDispatchToProps)(TopUp)

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
    height: 180,
    backgroundColor: 'white',
    padding: 25
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2
  },
  headerSubWrapper: {
    width: deviceWidth-50,
    height: 80,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#F1F1F1',
    borderRadius: 10,
    padding: 10
  },
  subWrapperTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2
  },
  nominal: {
    marginTop: 15,
    width: deviceWidth,
    height: 200,
    backgroundColor: 'white',
    padding: 25
  },
  nominalWrapper: {
    flexDirection: 'row',
    marginTop: 10
  },
  nominalBtn: {
    width: 110,
    height: 45,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  nominalBtnText: {
    fontWeight: 'bold'
  },
  nominalInput: {
    width: deviceWidth-50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    padding: 10,
    marginTop: 10,
    fontWeight: 'bold'
  },
  card: {
    marginTop: 15,
    width: deviceWidth,
    height: 200,
    backgroundColor: 'white',
    padding: 25,
  },
  smallInputWrapper: {
    flexDirection: 'row',
    width: deviceWidth-50,
    justifyContent: 'space-between'
  },
  smallInput: {
    width: deviceWidth-250,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    padding: 10,
    marginTop: 10,
    fontWeight: 'bold'
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