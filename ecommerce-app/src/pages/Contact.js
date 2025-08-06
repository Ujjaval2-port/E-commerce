import React, { useState } from 'react';
import Newsletter from '../components/Newsletter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faEnvelope, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#ContactUs</h2>
        <p>Leave A Message. We love to hear from you!!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>Get In TOUCH</span>
          <h2>Visit one of our agency Locations or contact us Today</h2>
          <h3>Head Office</h3>
          <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                <FontAwesomeIcon icon={faMap} style={{ marginRight: '22px', fontSize: '14px' }} />
                <p style={{ margin: 0, fontSize: '14px' }}>56 Blassford Street Glasgow G1 1UL New York</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '22px', fontSize: '14px' }} />
                <p style={{ margin: 0, fontSize: '14px' }}>contact@example.com</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '22px', fontSize: '14px' }} />
                <p style={{ margin: 0, fontSize: '14px' }}>+1 (555) 123-4567</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                <FontAwesomeIcon icon={faClock} style={{ marginRight: '22px', fontSize: '14px' }} />
                <p style={{ margin: 0, fontSize: '14px' }}>Monday to Saturday 9.00am to 16.00pm</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.760141608137!2d72.59108467437034!3d23.105874713216163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e824e8881c0d5%3A0x3af2e0c7c2a19151!2sGujarat%20Technological%20University!5e0!3m2!1sen!2sin!4v1752250269981!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </section>

      <section id="form-details">
        <form onSubmit={handleSubmit}>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <textarea 
            name="message" 
            cols="30" 
            rows="10"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="normal">Submit</button>
        </form>

        <div className="people">
          <div style={{ paddingBottom: '25px', display: 'flex', alignItems: 'flex-start' }}>
            <img 
              style={{ 
                height: '65px',
                width: '65px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginRight: '15px'
              }} 
              src="/images/men2.jpeg" 
              alt="John Doe" 
            />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: '25px' }}>
              <span style={{ display: 'block', fontSize: '16px', fontWeight: '600', color: '#000' }}>
                John Doe
              </span>
              Senior Marketing Manager
              <br />
              Phone: +000 123 000 77 88
              <br />
              Email: contact@example.com
            </p>
          </div>
          
          <div style={{ paddingBottom: '25px', display: 'flex', alignItems: 'flex-start' }}>
            <img 
              style={{ 
                height: '65px',
                width: '65px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginRight: '15px'
              }} 
              src="/images/men1.webp" 
              alt="Jane Smith" 
            />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: '25px' }}>
              <span style={{ display: 'block', fontSize: '16px', fontWeight: '600', color: '#000' }}>
                Jane Smith
              </span>
              Customer Service Manager
              <br />
              Phone: +000 123 000 77 89
              <br />
              Email: support@example.com
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Contact;