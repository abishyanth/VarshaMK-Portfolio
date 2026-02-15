import React from 'react';
import { Github, Linkedin, ChevronUp } from 'lucide-react';
import { resumeData } from '../../data/resume';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="text-gradient">Varsha</span>.MK
            </a>
            <p className="footer-summary">{resumeData.summary}</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#why-hire-me">Why Hire Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/varsha-m-k-7685982b7/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              <a href="https://github.com/VarshaMK" target="_blank" rel="noopener noreferrer"><Github /></a>
              {/* <a href={`mailto:${resumeData.email}`}><Mail /></a> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Varsha M K. All rights reserved.</p>
          <button className="scroll-top" onClick={scrollToTop}>
            <ChevronUp />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: white;
          padding: 4rem 0 2rem;
          border-top: 1px solid #eee;
          margin-top: 5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-brand .logo {
          font-family: var(--font-outfit);
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          display: block;
        }

        .footer-summary {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 400px;
        }

        .footer h4 {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .footer ul li {
          margin-bottom: 0.75rem;
        }

        .footer ul a {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .footer ul a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f1f5f9;
          color: var(--text-main);
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          background: var(--gradient-primary);
          color: white;
          transform: translateY(-3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid #f1f5f9;
        }

        .footer-bottom p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .scroll-top {
          background: var(--gradient-primary);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease;
        }

        .scroll-top:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
