import React, { useState } from 'react';
import { CONTACT_DATA, SOCIAL_LINKS } from '../const/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Transmission sent successfully!');
    setTimeout(() => setFormStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Ambient Background Effects */}
      <div className="contact-bg-effects">
        <div className="contact-glow-orb"></div>
        <div className="contact-grid-pattern"></div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column: Hero Text & Info */}
          <div className="contact-info-column">
            <div className="contact-header">
              {/* System Online Badge */}
              <div className="system-online-badge">
                <span className="pulse-container">
                  <span className="pulse-ring"></span>
                  <span className="pulse-dot"></span>
                </span>
                System Online
              </div>

              {/* Main Heading */}
              <h2 className="contact-title">
                INITIATE <br />
                PROTOCOL: <br />
                <span className="gradient-text-contact">CONTACT</span>
              </h2>

              {/* Description */}
              <p className="contact-description">
                {CONTACT_DATA.description}
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="contact-details-card">
              <div className="radar-icon">
                <span className="material-symbols-outlined">radar</span>
              </div>

              <h3 className="card-section-title">Secure Frequency</h3>
              <div className="email-row">
                <div className="email-icon-container">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="email-info">
                  <span className="email-label">Direct Uplink</span>
                  <span className="email-value">{CONTACT_DATA.email}</span>
                </div>
                <button className="copy-btn" onClick={copyEmail} title="Copy to Clipboard">
                  <span className="material-symbols-outlined">content_copy</span>
                </button>
              </div>

              <div className="card-divider"></div>

              <h3 className="card-section-title">Alliance Network</h3>
              <div className="social-network">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <span className="material-symbols-outlined">code</span>
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <span className="material-symbols-outlined">connect_without_contact</span>
                </a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="contact-form-column">
            {/* Decorative Elements */}
            <div className="form-glow-orb form-glow-1"></div>
            <div className="form-glow-orb form-glow-2"></div>

            <div className="contact-form-card">
              {/* Tech header on form */}
              <div className="form-header">
                <div className="transmission-status">
                  <div className="status-dot"></div>
                  <span className="status-text">TRANSMISSION_UPLINK_READY</span>
                </div>
                <span className="material-symbols-outlined wifi-icon">wifi</span>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group">
                  <label className="form-label">Code Name (Identity)</label>
                  <div className="input-wrapper">
                    <span className="material-symbols-outlined input-icon">badge</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label className="form-label">Secure Frequency (Email)</label>
                  <div className="input-wrapper">
                    <span className="material-symbols-outlined input-icon">alternate_email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="agent@shield.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label className="form-label">Mission Parameters (Brief)</label>
                  <textarea
                    name="message"
                    placeholder="Describe the target mission..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                  <div className="btn-shimmer"></div>
                  <span className="btn-content">
                    Transmit Data
                    <span className="material-symbols-outlined">send</span>
                  </span>
                </button>

                {formStatus && <p className="form-status success">{formStatus}</p>}
              </form>

              <div className="form-footer">
                <p className="encryption-notice">
                  <span className="material-symbols-outlined">lock</span>
                  End-to-End Encryption Enabled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
