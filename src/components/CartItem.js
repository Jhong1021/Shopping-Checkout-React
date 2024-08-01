import React from 'react';
import Swal from 'sweetalert2';
import './CartItem.css'; // Import custom styles

const CartItem = ({ item, removeFromCart }) => {
  const handleRemove = () => {
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
        removeFromCart(item.id);
        Swal.fire(
          'Removed!',
          'The item has been removed from your cart.',
          'success'
        );
      }
    });
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center cart-item">
      <div className="d-flex align-items-center">
        <img src={item.image} alt={item.name} className="cart-item-image" />
        <div className="ml-3">
          <h5>{item.name}</h5>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </div>
      <button className="btn btn-danger" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
