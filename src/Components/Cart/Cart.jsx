import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price * 82, 0);

  return (
    <div className="cart-container">
      <div className="cart-page">
        {/* Always visible close button */}
        <button className="close-btn" onClick={() => navigate(-1)}>✕</button>

        <h2>🛒 Your Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/" className="continue-shopping">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>₹ {(item.price * 82).toFixed(2)}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <hr />
            <button className="checkout-btn">
              ₹ {totalPrice.toFixed(2)} Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
