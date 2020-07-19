import React, {Component} from 'react';
import {Text, View, Alert, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, ActivityIndicator}
        from 'react-native';
        
import {connect} from 'react-redux'
import {pln} from '../redux/actions/transaction'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class PLN extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: '',
      token: this.props.auth.token,
      error: this.props.transaction.errorMsg,
      customer: ''
    }
  }
  topup = () => {
    const {token, error, customer} = this.state
    const dataSubmit = {
      amount: this.state.amount,
    }

    this.props.pln(dataSubmit, token).then(() => {
      this.props.navigation.navigate('pln-success', {customer: customer})
    }).catch(function () {
      Alert.alert('Ooops!', error)
    })
  }
  render() {
    const {isLoading} = this.props.transaction

    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Listrik Prabayar</Text>
              <TextInput 
                style={style.nominalInput} 
                placeholder='Nomor Pelanggan PLN' 
                onChangeText={(e) => {this.setState({customer: e})}}
              />
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
            <View style={style.btnTopUpWrapper}>
              <TouchableOpacity style={style.btnTopUp} onPress={this.topup}>
                {isLoading ? (
                  <ActivityIndicator size='large' color='white' />
                ):(
                  <Text style={style.btnTopUpText}>TOP UP</Text>
                )}
              </TouchableOpacity>
            </View>
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
const mapDispatchToProps = {pln}

export default connect(mapStateToProps, mapDispatchToProps)(PLN)

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
    height: 150,
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