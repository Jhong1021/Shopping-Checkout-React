import React from 'react';
import CartItem from './CartItem';
import './Cart.css'; // Import custom styles

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="container mt-5">
      <h2><b>Your Cart</b></h2>
      <div className="list-group">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id + item.addedAt} // Ensure unique key by adding timestamp
              item={item}
              removeFromCart={handleRemove}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
