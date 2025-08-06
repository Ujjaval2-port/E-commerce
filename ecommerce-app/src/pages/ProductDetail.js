import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { useApp } from '../context/AppContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useApp();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');

  // Find the product
  const product = products.find(p => p.id === parseInt(id));

  // Get related products (first 3 different products)
  const relatedProducts = products.filter(p => p.id !== parseInt(id)).slice(0, 3);

  // Sample additional images for the product (in a real app, these would come from the product data)
  const productImages = [
    product?.image,
    '/images/cl3.jpeg',
    '/images/cl4.jpeg',
    '/images/cl2.jpeg'
  ];

  React.useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="section-p1" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2>Product not found</h2>
        <button className="normal" onClick={() => navigate('/shop')}>
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart({ ...product, selectedSize });
    }
    
    alert(`${quantity} item(s) added to cart!`);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div>
      {/* Product Details Section */}
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img 
            src={mainImage} 
            width="100%" 
            height="500px" 
            id="MainImg" 
            alt={product.name}
            style={{ objectFit: 'cover' }}
          />
          <div className="small-img-group">
            {productImages.map((img, index) => (
              <div 
                key={index} 
                className="small-img-col"
                onClick={() => setMainImage(img)}
              >
                <img 
                  src={img} 
                  width="100%" 
                  className="small-img" 
                  alt={`${product.name} view ${index + 1}`}
                  style={{ 
                    cursor: 'pointer',
                    border: mainImage === img ? '2px solid #088178' : '1px solid #ddd'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / Sports-Shoes</h6>
          <h4>{product.name}</h4>
          <h2>${product.price.toFixed(2)}</h2>
          
          <select 
            value={selectedSize} 
            onChange={(e) => setSelectedSize(e.target.value)}
            required
          >
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          
          <input 
            type="number" 
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            max="10"
          />
          
          <button className="normal" onClick={handleAddToCart}>
            Add To Cart
          </button>
          
          <h4>Product Details</h4>
          <span>{product.description}</span>
        </div>
      </section>

      {/* Related Products Section */}
      <section id="product1" className="section-p1">
        <h2>Related Products</h2>
        <p>You might also like these products</p>
        <div className="pro-container">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              product={relatedProduct}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default ProductDetail;