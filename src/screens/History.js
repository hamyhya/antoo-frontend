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

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class History extends Component {
  detail = () => {
    this.props.navigation.navigate('history-detail')
  }
  render() {

    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Top Up sebesar 10.000",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Transfer sebesar 50.000",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Bayar listrik sebesar 100.000",
      },
    ];

    return (
      <>
        <StatusBar backgroundColor='#583A8E' />
        <View style={style.fill}>
          <FlatList
            style={style.content}
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={this.detail}>
                <View style={style.transactionsList}>
                  <Text style={style.bookTitle}>{item.title}</Text>
                  {/* <Text style={style.bookTitle}>{item.description}</Text> */}
                </View>
                <View style={style.line} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </>
    )
  }
}

export default History

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
  bookTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },
  line: {
    width: deviceWidth - 30,
    alignSelf: 'center',
    height: 1,
    width: 300,
    backgroundColor: 'black'
  }
})
