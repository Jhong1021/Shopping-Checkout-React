import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { showSuccessAlert } from './alertUtils'; // Import the alert utility
import './App.css';

const products = [
  { id: 1, name: 'iPhone 15 Promax', description: 'The iPhone 15 Pro Max features a stunning Super Retina XDR display, powerful A17 Pro chip, and advanced cameras. With its sleek design, it delivers top-notch performance, breathtaking photos, and lightning-fast 5G connectivity. Experience unmatched sophistication and power.', price: 1099, image: 'https://powermaccenter.com/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US_3295c924-7c21-417d-870c-32bee7f1e310.jpg?v=1695861436' },
  { id: 2, name: 'MacBook Pro', description: 'The MacBook Pro combines robust performance with sleek design. Featuring the latest M-series chip, a brilliant Retina display, and long battery life, it’s perfect for professionals who demand speed and precision. With advanced graphics and seamless multitasking.', price: 899, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mbp13touchbar-performance-silver-gallery-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591921673000' },
  { id: 3, name: 'Apple Lightning EarPods', description: 'Experience rich, high-quality audio with the Apple Lightning EarPods. Designed for comfort and clarity, they feature a sleek, ergonomic design and deliver immersive sound through the Lightning connector. Enjoy convenient controls for music and calls in a compact, stylish package.', price: 199, image: 'https://i5.walmartimages.com/seo/Apple-EarPods-with-Lightning-Connector_1c4de0e5-1f7f-49ee-9c1c-9f6824c13b7e_1.6e34f5916841ec457ea093899457883b.jpeg' },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [
      ...prevCart,
      { ...product, addedAt: new Date().toISOString() } // Add timestamp to differentiate instances
    ]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId || item.addedAt !== item.addedAt));
  };

  const handleCheckout = () => {
    showSuccessAlert('Checkout Successful', 'Your purchase has been completed.');
    setCart([]);
    setIsCheckout(false);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Router>
      <div className="App">
        <header className="bg-dark text-white text-center py-3">
          <h1>Shopping Cart</h1>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductList products={products} addToCart={addToCart} />
                <Cart cartItems={cart} removeFromCart={removeFromCart} />
                <div className="text-center mt-3">
                  {cart.length > 0 && (
                    <Link to="/checkout">
                      <button className="btn btn-primary">
                        Proceed to Checkout
                      </button>
                    </Link>
                  )}
                </div>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cart}
                total={total}
                onCheckout={handleCheckout}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
