import React, {Component} from 'react'
import {StyleSheet, Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Promo from '../screens/Promo'
import History from '../screens/History'

import homeicon from '../assets/icon/home.png'
import tagicon from '../assets/icon/tag.png'
import historyicon from '../assets/icon/history.png'
import usericon from '../assets/icon/user.png'

const BottomTab = createBottomTabNavigator()

export default class Tab extends Component {
  render() {
    return (
      <BottomTab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#4C2B86'
          },
          activeTintColor: 'white'
        }}
      >
        <BottomTab.Screen
          options={{
            title: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image source={homeicon} style={{width: 15, height: 15}}/>
            ),
          }}
          component={Home}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'Promo',
            tabBarIcon: ({color, size}) => (
              <Image source={tagicon} style={{width: 15, height: 15}}/>
            ),
          }}
          component={Promo}
          name="promo"
        />
        <BottomTab.Screen
          options={{
            title: 'Histori',
            tabBarIcon: ({color, size}) => (
              <Image source={historyicon} style={{width: 15, height: 15}}/>
            ),
          }}
          component={History}
          name="history"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Image source={usericon} style={{width: 15, height: 15}}/>
            ),
          }}
          component={Profile}
          name="profile"
        />
      </BottomTab.Navigator>
    );
  }
}

const style = StyleSheet.create({
  navbar: {
    backgroundColor: 'black',
    borderRadius: 10
  }
})