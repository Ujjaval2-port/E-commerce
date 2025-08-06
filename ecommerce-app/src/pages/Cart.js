import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { useApp } from '../context/AppContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useApp();
  const [couponCode, setCouponCode] = useState('');

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity));
  };

  const handleCouponApply = (e) => {
    e.preventDefault();
    if (couponCode.toLowerCase() === 'save10') {
      alert('Coupon applied! 10% discount added.');
    } else if (couponCode.toLowerCase() === 'welcome20') {
      alert('Coupon applied! 20% discount added.');
    } else if (couponCode) {
      alert('Invalid coupon code.');
    }
  };

  const subtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const total = subtotal;

  if (cart.length === 0) {
    return (
      <div>
        <section id="page-header" className="about-header">
          <h2>#Cart</h2>
          <p>Your shopping cart</p>
        </section>
        
        <div className="section-p1" style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <button 
            className="normal" 
            onClick={() => window.location.href = '/shop'}
            style={{ marginTop: '20px' }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#Cart</h2>
        <p>Your shopping cart</p>
      </section>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={`${item.id}-${item.selectedSize || 'default'}`}>
                <td>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer',
                      color: '#e74c3c',
                      fontSize: '18px'
                    }}
                  >
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </button>
                </td>
                <td>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                  />
                </td>
                <td>
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <small>{item.brand}</small>
                    {item.selectedSize && (
                      <>
                        <br />
                        <small>Size: {item.selectedSize}</small>
                      </>
                    )}
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    max="10"
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    style={{ width: '60px', padding: '5px' }}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <form onSubmit={handleCouponApply}>
            <input 
              type="text" 
              placeholder="Enter Your Coupon (try: SAVE10 or WELCOME20)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button type="submit" className="normal">Apply</button>
          </form>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${total.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </table>
          <button 
            className="normal"
            onClick={() => alert('Checkout functionality would be implemented here!')}
          >
            Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;