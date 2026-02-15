import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Why Hire Me', href: '#why-hire-me' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#home" className="logo">
                    <span className="text-gradient">Varsha</span> MK
                </a>

                {/* Desktop Nav */}
                <ul className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                {/* <div className="nav-actions desktop-only">
                    <a href="#contact" className="btn-primary">Hire Me</a>
                </div> */}

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-nav"
                    >
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={() => setIsOpen(false)}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>
                                    Hire Me
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          padding: 0.75rem 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-md);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.5rem;
        }

        .logo {
          font-family: var(--font-outfit);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          font-weight: 500;
          color: var(--text-muted);
          position: relative;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          border-top: 1px solid #eee;
        }

        .mobile-nav ul {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
