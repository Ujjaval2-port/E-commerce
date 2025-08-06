import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up for NewsLetters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="normal">Sign Up</button>
      </form>
    </section>
  );
};

export default Newsletter;