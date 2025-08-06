import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { useApp } from '../context/AppContext';

const Home = () => {
  const navigate = useNavigate();
  const { products } = useApp();

  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);
  // Get new arrivals (next 8 products)
  const newArrivals = products.slice(8, 16);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <h4>Trade-In-Offer</h4>
        <h2 style={{ color: 'whitesmoke' }}>Super Value Deals</h2>
        <h1>On All Products</h1>
        <p style={{ color: 'whitesmoke' }}>Save more with Coupons ₹ up to 70% off</p>
        <button onClick={() => navigate('/shop')}>Shop Now</button>
      </section>

      {/* Features Section */}
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="/images/s8.jpeg" alt="Free Shipping" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="/images/s11.jpeg" alt="Online Order" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="/images/s12.jpeg" alt="Promotions" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="/images/s13.jpeg" alt="Happy Sale" />
          <h6>Happy Sale</h6>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% Off</span> -- All sports Shoes & Accessories</h2>
        <button className="normal" onClick={() => navigate('/shop')}>
          Explore More
        </button>
      </section>

      {/* New Arrivals Section */}
      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </section>

      {/* Small Banner Section */}
      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy Deals...</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The Best Classic Design is on sale at Shop</span>
          <button className="white" onClick={() => navigate('/shop')}>
            Learn More
          </button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Crazy Deals...</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The Best Classic Design is on sale at Shop</span>
          <button className="white" onClick={() => navigate('/shop')}>
            Learn More
          </button>
        </div>
      </section>

      {/* Banner 3 Section */}
      <section id="banner3">
        <div className="banner-box">
          <h2>Upcoming Season</h2>
          <h3>Winter Collection -50% Off</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>Upcoming Season</h2>
          <h3>Winter Collection -50% Off</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>Upcoming Season</h2>
          <h3>Winter Collection -50% Off</h3>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;