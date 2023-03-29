import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ item }) => {
    const title = (title = "") => {
        return title.length > 50 ? title.slice(0,50) + '...' : title;
    }

    let cost;
        if (item.currency_code === 'USD') {
            cost = '$' + item.price;
        }
        if (item.currency_code === 'EUR'){
            cost = '€'+ item.price;
        } 
        cost = item.price + ' ' + item.currency_code;

    let level;
        if (item.quantity <= 10) {
            level = 'level-low';
        } else if (item.quantity <= 20) {
            level = 'level-medium';
        } else if (item.quantity > 20) {
            level = 'level-high';
        }

  return (
    <div className="item">
    <div className="item-image">
      <a href={item.url}>
        <img src={item.MainImage && item.MainImage.url_570xN} alt={item.listing_id}/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{title(item.title)}</p>
      <p className="item-price">{cost}</p>
      <p className={"item-quantity " + level}>{item.quantity} left</p>
    </div>
  </div>
  )
}

Item.propTypes = {
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.string,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity:PropTypes.number
}

export default Item;
