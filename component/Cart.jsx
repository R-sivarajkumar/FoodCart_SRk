import React, { useState } from 'react';
import './cart.css';

function Cart({ cartItems, removeFromCart }) {
  let billamt = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Cart Items ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button className='btn delete' onClick={() => removeFromCart(item)}>X</button>
            </div>
          ))}
        </div>
      )}

      <button className='payment'>
        <p>Pay Bill ₹ {billamt}</p>
      </button>
    </div>
  );
}


export default Cart;
