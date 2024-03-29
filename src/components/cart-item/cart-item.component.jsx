import React from 'react';

/* Styling */
import './cart-item.styles.scss';

const CartItem = ({ item }) => {
  const { imageUrl, price, name ,quantity} = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} X ${price}</span>
      </div>
    </div>
  );
};


export default CartItem;