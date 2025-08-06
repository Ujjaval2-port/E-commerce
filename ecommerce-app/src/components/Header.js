import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../context/AppContext';

const Header = () => {
  const location = useLocation();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu, getCartItemsCount } = useApp();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    closeMobileMenu();
  };

  return (
    <section id="header">
      <Link to="/">
        <img src="/images/g10.png" className="logo" alt="Logo" />
      </Link>

      <div>
        <ul id="navbar" className={mobileMenuOpen ? 'active' : ''}>
          <li>
            <Link 
              className={isActive('/') ? 'active' : ''} 
              to="/"
              onClick={handleNavClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              className={isActive('/shop') ? 'active' : ''} 
              to="/shop"
              onClick={handleNavClick}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link 
              className={isActive('/about') ? 'active' : ''} 
              to="/about"
              onClick={handleNavClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              className={isActive('/contact') ? 'active' : ''} 
              to="/contact"
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </li>
          <li id="lg-bag">
            <Link 
              className={isActive('/cart') ? 'active' : ''} 
              to="/cart"
              onClick={handleNavClick}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              {getCartItemsCount() > 0 && (
                <span 
                  style={{
                    background: '#088178',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px',
                    marginLeft: '5px'
                  }}
                >
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </li>
          <button 
            id="close" 
            onClick={closeMobileMenu}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </ul>
      </div>

      <div id="mobile">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          {getCartItemsCount() > 0 && (
            <span 
              style={{
                background: '#088178',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
                marginLeft: '5px'
              }}
            >
              {getCartItemsCount()}
            </span>
          )}
        </Link>
        <button 
          id="bar" 
          onClick={toggleMobileMenu}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </section>
  );
};

export default Header;