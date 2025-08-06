import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src="/images/g10.png" className="logo" alt="Logo" />
        <h4>Contact</h4>
        <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
        <p><strong>Hours:</strong> 10:00 - 18:00, Mon-Sat</p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} style={{ cursor: 'pointer', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faInstagram} style={{ cursor: 'pointer', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faTwitter} style={{ cursor: 'pointer', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faYoutube} style={{ cursor: 'pointer', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faLinkedin} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#about">About Us</a>
        <a href="#delivery">Delivery Information</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#contact">Contact us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#signin">Sign in</a>
        <a href="#cart">View Cart</a>
        <a href="#wishlist">My WishList</a>
        <a href="#track">Track My Order</a>
        <a href="#help">Help</a>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="/images/app-store.png" alt="App Store" style={{ width: '120px', margin: '5px' }} />
          <img src="/images/play-store.png" alt="Play Store" style={{ width: '120px', margin: '5px' }} />
        </div>
        <p>Secured Payment Gateways</p>
        <img src="/images/payment-gateways.png" alt="Payment Gateways" style={{ width: '200px' }} />
      </div>

      <div className="copyright">
        <p>© 2025, Tech2 etc - React Ecommerce Template</p>
      </div>
    </footer>
  );
};

export default Footer;