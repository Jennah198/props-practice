import React, { Component } from 'react'
import Header from './components/Header/Header'
import FoodItems from './components/FoodItems/FoodItems'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FoodItems />
      </div>
    )
  }
}
