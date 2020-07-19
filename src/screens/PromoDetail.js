import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions,
        TouchableOpacity, StatusBar, ScrollView}
        from 'react-native'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class PromoDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.route.params.title,
      image: this.props.route.params.image,
      description: this.props.route.params.description,
    }
  }
  home = () => {
    this.props.navigation.navigate('mainmenu')
  }
  render() {
    const {title, image, description} = this.state

    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <View style={style.imgWrapper}>
                <Image source={{uri: image}} style={style.promoImg} />
              </View>
              <Text style={style.headerTitle} >{title}</Text>
            </View>
            <View style={style.contentWrapper}>
              <ScrollView>
                <Text>{description}</Text>
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
    marginTop: deviceHeight-680,
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