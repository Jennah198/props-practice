import { Component } from 'react'
import style from './SingleFoodItem.module.css'

export default class SingleFoodItem extends Component {
  render() {
    const { item } = this.props

    return (
      <div className={style['single-food']}>
        <div className={style['img']}>
          <img src={item.img} alt={item.title} />
        </div>

        <div className={style['title-price']}>
          <h3>{item.title}</h3>
          <p>${item.price.toFixed(2)}</p>
        </div>

        <div className={style['food-desc']}>{item.desc}</div>
      </div>
    )
  }
}
