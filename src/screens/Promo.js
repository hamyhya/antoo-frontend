import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, FlatList}
        from 'react-native';

import {connect} from 'react-redux'
import {getPromo} from '../redux/actions/promo'

import slide from '../assets/img/promo/slide.jpg'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Promo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: this.props.auth.token,
      sort: 1
    }
  }
  promo = () => {
    const {token} = this.state
    this.props.getPromo(token)
  }
  
  componentDidMount() {
    this.promo()
  }
  render() {
    const {dataPromo, isLoading} = this.props.promo
    const {sort} = this.state
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
            <View style={style.sortWrapper}>
              <TouchableOpacity style={style.btnPage}>
                <Text style={style.btnSortText}>prev</Text>
              </TouchableOpacity>
              {sort === 1 ? (
                <View style={style.btnSortWrapper}>
                <TouchableOpacity style={style.btnNew}>
                  <Text style={style.btnSortText}>new</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={style.btnOld}
                  onPress={() => {this.setState({sort: 0})}}
                >
                  <Text style={style.btnSortText2}>old</Text>
                </TouchableOpacity>
              </View>
              ):(
                <View style={style.btnSortWrapper}>
                  <TouchableOpacity 
                    style={style.btnNew2}
                    onPress={() => {this.setState({sort: 1})}}
                  >
                    <Text style={style.btnSortText2}>new</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.btnOld2}>
                    <Text style={style.btnSortText}>old</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity style={style.btnPage}>
                <Text style={style.btnSortText}>next</Text>
              </TouchableOpacity>
            </View>
            <View style={style.flatlistWrapper}>
              <FlatList
                  style={style.flatlist}
                  data={dataPromo}
                  renderItem={({item}) =>
                  <TouchableOpacity 
                    style={style.promoBtn}
                    onPress={() => {this.props.navigation.navigate('promo-detail', 
                    {title: item.title, image: item.image, description: item.description})}}
                  >
                    <List
                      title={item.title}
                      image={item.image}
                      description={item.description}
                    />
                  </TouchableOpacity>
                }
                keyExtractor={item => item.id.toString()}
                refreshing={isLoading}
                onRefresh={this.promo}
                />
            </View>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  promo: state.promo,
  auth: state.auth
})
const mapDispatchToProps = {getPromo}

export default connect(mapStateToProps, mapDispatchToProps)(Promo)

class List extends Component {
  render(){
    return(
      <>
        <View style={style.imgWrapper}>
          <Image source={{uri: this.props.image}} style={style.promoImg} />
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
    backgroundColor: '#4C2B86',
    borderRadius: 10,
    padding: 10,
    color: 'white'
  },
  searchBtn: {
    width: 70,
    height: 40,
    backgroundColor: '#4C2B86',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  searchBtnText: {
    color: 'white'
  },
  sortWrapper: {
    width: 274,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  btnSortWrapper: {
    flexDirection: 'row',
  },
  btnPage: {
    width: 50,
    height: 25,
    backgroundColor: '#4C2B86',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnNew: {
    width: 40,
    height: 25,
    backgroundColor: '#4C2B86',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnNew2: {
    width: 40,
    height: 25,
    borderWidth: 2,
    borderColor: '#4C2B86',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnOld: {
    width: 40,
    height: 25,
    borderWidth: 2,
    borderColor: '#4C2B86',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnOld2: {
    width: 40,
    height: 25,
    backgroundColor: '#4C2B86',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSortText: {
    color: 'white'
  },
  btnSortText2: {
    color: '#4C2B86'
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