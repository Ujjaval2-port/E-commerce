import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../context/AppContext';

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useApp();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick(product);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        style={{
          color: index < rating ? 'rgb(243, 181, 25)' : '#ddd',
          fontSize: '12px',
          marginRight: '2px'
        }}
      />
    ));
  };

  return (
    <div className="pro" onClick={handleCardClick}>
      <img 
        src={product.image} 
        alt={product.name}
        onError={(e) => {
          e.target.src = '/images/placeholder.jpg';
        }}
      />
      <div className="des">
        <span>{product.brand}</span>
        <h5>{product.name}</h5>
        <div className="star">
          {renderStars(product.rating)}
        </div>
        <h4>${product.price}</h4>
      </div>
      <button 
        className="cart"
        onClick={handleAddToCart}
        title="Add to Cart"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default ProductCard;