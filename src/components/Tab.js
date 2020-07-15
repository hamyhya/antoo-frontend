import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Promo from '../screens/Promo'

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
              <Icon name="home" color={color} size={size} />
            ),
          }}
          component={Home}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'Promo',
            tabBarIcon: ({color, size}) => (
              <Icon name="history" color={color} size={size} />
            ),
          }}
          component={Promo}
          name="promo"
        />
        <BottomTab.Screen
          options={{
            title: 'History',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
          component={Home}
          name="history"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" solid color={color} size={size} />
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