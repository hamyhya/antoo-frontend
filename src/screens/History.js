import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar
} from 'react-native'

import {connect} from 'react-redux'
import {history} from '../redux/actions/transaction'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: this.props.auth.token
    }
  }
  history = () => {
    const {token} = this.state

    this.props.history(token)
  }

  componentDidMount() {
    this.history()
  }
  render() {

    const {dataHistory, isLoading} = this.props.transaction

    return (
      <>
        <StatusBar backgroundColor='#583A8E' />
        <View style={style.fill}>
          <Text style={style.historyTitle}>Histori Transaksi</Text>
          <FlatList
            style={style.content}
            data={dataHistory}
            renderItem={({ item }) => (
              <TouchableOpacity 
                onPress={() => {this.props.navigation.navigate('history-detail', 
                {type: item.type, amount: item.amount, id: item.id, date: item.date})}}
              >
                <View style={style.transactionsList}>
                  {item.type === 'Transfer' ? (
                    <Text 
                      style={style.bookTitle}>{item.type} sebesar Rp.
                      {item.amount.toString().replace('-','')} kepada &nbsp;
                      {item.concerned}
                    </Text>
                  ):(
                    <Text 
                      style={style.bookTitle}>{item.type=== 'Payment' ? 'Payment PLN' : 'Topup'} sebesar Rp.
                      {item.amount.toString().replace('-','')}
                    </Text>
                  )}
                </View>
                <View style={style.line} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isLoading}
            onRefresh={this.history}
          />
        </View>
      </>
    )
  }
}

const mapStateToProps = state => ({
  transaction: state.transaction,
  auth: state.auth
})
const mapDispatchToProps = {history}

export default connect(mapStateToProps, mapDispatchToProps)(History)

const style = StyleSheet.create({
  fill: {
    alignSelf: 'stretch',
    height: deviceHeight,
    backgroundColor: 'white'
  },
  content: {
    alignSelf: 'stretch',
    margin: 20,
    marginTop: 20,
  },
  transactionsList: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  historyTitle: {
    color: '#73BD00',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30
  },
  line: {
    width: deviceWidth - 30,
    alignSelf: 'center',
    height: 1,
    width: 300,
    backgroundColor: '#4C2B86'
  }
})
