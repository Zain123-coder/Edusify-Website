import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: '2bf1f18b-11e6-4247-a4e8-99217d369a72'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>CONTACT US</h2>
      <h3>Get in Touch</h3>
      
      <div className="contact-container">
        <div className="contact-info">
          <p>Feel free to reach out through contact form or find our contact information below.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <img src={process.env.PUBLIC_URL + "/Images/mail-icon.png" }alt="Email" />
              <span>Contact@GreatStock.dev</span>
            </div>
            <div className="contact-item">
              <img src={process.env.PUBLIC_URL + "/Images/phone-icon.png"} alt="Phone" />
              <span>+123-456-7890</span>
            </div>
            <div className="contact-item">
              <img src={process.env.PUBLIC_URL + "/Images/location-icon.png" }alt="Location" />
              <span>77 Massachusetts Ave, Cambridge MA 02139, United States</span>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <h4>Send us a message</h4>
          
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <textarea
            name="message"
            placeholder="Write your messages here"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          <div className="captcha">
            <input type="checkbox" id="human" required />
            <label htmlFor="human">I am human</label>
          </div>
          
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit now →'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="status-message success">
              Submitted successfully!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error">
              Submission failed. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;