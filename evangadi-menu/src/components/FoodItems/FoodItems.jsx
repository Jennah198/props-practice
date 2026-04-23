import { Component } from 'react'
import style from './FoodItems.module.css'
import menu from '../../constants/data'
import SingleFoodItem from '../SingleFoodItem/SingleFoodItem'

export default class FoodItems extends Component {
  render() {
    return (
      <div className="food-item">
        {menu.map((item) => (
          <SingleFoodItem key={item.id} item={item} />
        ))}
      </div>
    )
  }
}
