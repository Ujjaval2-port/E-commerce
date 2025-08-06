import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../context/AppContext';

const Shop = () => {
  const navigate = useNavigate();
  const { products } = useApp();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            backgroundColor: currentPage === i ? '#088178' : 'transparent',
            color: currentPage === i ? '#fff' : '#088178',
            border: '1px solid #088178',
            padding: '10px 15px',
            margin: '0 5px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      {/* Page Header */}
      <section id="page-header">
        <h2>#StayHome</h2>
        <p>Save more with Coupons $ up to 70% off</p>
      </section>

      {/* Products Section */}
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </section>

      {/* Pagination Section */}
      <section id="pagination" className="section-p1">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {renderPaginationButtons()}
          {currentPage < totalPages && (
            <button
              onClick={handleNextPage}
              style={{
                backgroundColor: '#088178',
                color: '#fff',
                border: 'none',
                padding: '10px 15px',
                margin: '0 5px',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Shop;