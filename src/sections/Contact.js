import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Let's discuss how data can drive your business forward</p>
        </div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="contact-info"
          >
            <div className="glass contact-card">
              <h3>Contact Information</h3>
              <div className="contact-methods">
                <div className="method">
                  <div className="icon-box"><Mail size={20} /></div>
                  <div>
                    <p className="label">Email</p>
                    <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
                  </div>
                </div>
                <div className="method">
                  <div className="icon-box"><Phone size={20} /></div>
                  <div>
                    <p className="label">Phone</p>
                    <a href={`tel:${resumeData.phone}`}>{resumeData.phone}</a>
                  </div>
                </div>
                <div className="method">
                  <div className="icon-box"><MapPin size={20} /></div>
                  <div>
                    <p className="label">Location</p>
                    <p>{resumeData.location}</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href={resumeData.linkedin} className="social-btn glass"><Linkedin /></a>
                <a href={resumeData.github} className="social-btn glass"><Github /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="contact-form-container"
          >
            {/* <form className="glass-card contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message <Send size={18} />
              </button>
            </form> */}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-card {
          padding: 2.5rem;
          height: 100%;
          border-radius: var(--radius-xl);
        }

        .contact-card h3 {
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .method {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .icon-box {
          width: 45px;
          height: 45px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }

        .label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .method a, .method p:not(.label) {
          font-weight: 500;
          color: var(--text-main);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          transition: all 0.3s;
        }

        .social-btn:hover {
          background: var(--gradient-primary);
          color: white;
          transform: translateY(-3px);
        }

        .contact-form {
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255,255,255,0.8);
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          font-family: inherit;
          transition: border-color 0.3s;
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }

        .w-full {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
