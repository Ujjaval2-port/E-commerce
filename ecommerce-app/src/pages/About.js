import React from 'react';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Learn more about our company and mission</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src="/images/g6.webp" alt="About Us" />
        <div>
          <h2>Who we Are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptas tempore nostrum culpa nam laborum, suscipit, obcaecati harum modi ipsam aliquam! Maiores doloribus laboriosam omnis culpa suscipit dolore praesentium eum minus ullam distinctio illum illo architecto, blanditiis unde! Non dicta recusandae iste. Ratione nihil repellat et nesciunt molestias molestiae doloribus accusamus corrupti aperiam, dolores vero quas voluptate. Impedit eaque expedita necessitatibus officia laboriosam, laborum, consequuntur delectus suscipit commodi accusamus ut quaerat explicabo fugiat iste, ratione velit cum sapiente blanditiis excepturi!
          </p>
          <abbr title="Create stunning images with us">
            Create stunning images with us much or as little control as you
            like thanks to a choice of Basic and Creative modes.
          </abbr>
          <br /><br />
          <div 
            style={{
              backgroundColor: '#ccc',
              padding: '10px',
              animation: 'scroll-left 15s linear infinite',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            Create stunning images with us much or as little control as you
            like thanks to a choice of Basic and Creative modes.
          </div>
        </div>
      </section>

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

      <Newsletter />

      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;