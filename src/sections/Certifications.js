import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="certifications" className="section-padding cert-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Valuable <span className="text-gradient">Credentials</span></h2>
                    <p className="section-subtitle">Verified expertise in data forensic and generative analytics</p>
                </div>

                <div className="certs-focus-list">
                    {resumeData.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`cert-row ${hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''}`}
                        >
                            <div className="cert-status-icon">
                                <ShieldCheck size={20} />
                            </div>

                            <div className="cert-main-info">
                                <h3>{cert.title}</h3>
                                <div className="cert-meta-row">
                                    <span className="issuer-highlight">{cert.issuer}</span>
                                    <span className="meta-separator">/</span>
                                    <span className="period-text">{cert.period}</span>
                                </div>
                            </div>

                            <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="cert-action-btn"
                            >
                                <ExternalLink size={20} />
                                <span className="btn-tip">View Credential</span>
                            </motion.a>

                            {hoveredIndex === index && (
                                <motion.div
                                    layoutId="cert-bg"
                                    className="cert-highlight-bg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .cert-section {
          background: white;
          position: relative;
        }

        .certs-focus-list {
          max-width: 900px;
          margin: 4rem auto 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cert-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 2.5rem;
          border-radius: 24px;
          transition: all 0.4s ease;
          border: 1px solid transparent;
          z-index: 1;
        }

        .cert-row.dimmed {
          opacity: 0.4;
          filter: blur(2px);
          transform: scale(0.98);
        }

        .cert-status-icon {
          width: 50px;
          height: 50px;
          background: #f1f5f9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: 0.3s;
        }

        .cert-row:hover .cert-status-icon {
          background: var(--primary);
          color: white;
          transform: rotate(-10deg);
        }

        .cert-main-info {
          flex: 1;
          z-index: 2;
        }

        .cert-main-info h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
        }

        .cert-meta-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .issuer-highlight {
          color: var(--primary);
        }

        .meta-separator {
          color: #e2e8f0;
        }

        .period-text {
          color: var(--text-muted);
        }

        .cert-action-btn {
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: white;
          box-shadow: var(--shadow-md);
          color: var(--text-main);
          z-index: 2;
        }

        .btn-tip {
          position: absolute;
          top: -40px;
          right: 0;
          background: black;
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.75rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: 0.3s;
        }

        .cert-action-btn:hover .btn-tip {
          opacity: 1;
          transform: translateY(-5px);
        }

        .cert-highlight-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-soft);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 24px;
          z-index: -1;
        }

        @media (max-width: 768px) {
          .cert-row {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          .cert-meta-row {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default Certifications;
