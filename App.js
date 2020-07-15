import React, {Component} from 'react'
import Register from './src/screens/Register'
import Login from './src/screens/Login'

export default class App extends Component {
  render(){
    return(
      <>
        <Register />
        <Login/>
      </>
    )
  }
}