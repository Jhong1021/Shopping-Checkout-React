import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Checkout.css'; // Import custom styles

const Checkout = ({ cartItems = [], total = 0, onCheckout, removeFromCart }) => {
  const handleRemove = (itemId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to recover this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(itemId);
        Swal.fire(
          'Removed!',
          'The item has been removed from your cart.',
          'success'
        );
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id + item.addedAt} className="d-flex align-items-center checkout-item">
              <img src={item.image} alt={item.name} className="checkout-item-image" />
              <div className="ml-3">
                <h5 className="checkout-item-name">{item.name}</h5>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button className="btn btn-danger ml-auto" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <p className="mt-3"><strong>Total: ${total.toFixed(2)}</strong></p>
      <div className="button-group">
        <button className="btn btn-success" onClick={onCheckout}>
          Complete Purchase
        </button>
        <Link to="/" className="btn btn-secondary">
          Back to Main Page
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
