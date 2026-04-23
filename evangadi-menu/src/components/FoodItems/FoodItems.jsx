import React, { Component } from 'react'
import style from './FoodItems.module.css'

export default class FoodItems extends Component {
  render() {
    return (
      <>
        {/* food item start */}
        <div className="food-item">
          <div className="single-food">
            <div className="img">
              <img src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp" />
            </div>
            <div className="title-price">
              <h3>TIMATIM SELAXA (ቲማቲም ሰላጣ)</h3>
              <p>$5.99</p>
            </div>
            <div className="food-desc">
              Timatim Salata refers to a type of fresh Ethiopian tomato salad
              that’s also popular in Eritrea. It’s made with diced tomatoes,
              minced onions, and finely chopped peppers dressed with a mixture
              of berbere spices, olive oil, vinegar, and lemon juice.
            </div>
          </div>
        </div>
      </>
    )
  }
}
