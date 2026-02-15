import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Calendar, Rocket, Database } from 'lucide-react';

const ExperienceItem = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="exp-block"
        >
            <div className="timeline-connector">
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="timeline-pulse"
                />
                <div className="timeline-dot">
                    {index === 0 ? <Rocket size={14} /> : <Database size={14} />}
                </div>
            </div>

            <motion.div
                whileHover={{ x: 15 }}
                className="glass-card exp-content-card"
            >
                <div className="exp-top">
                    <div className="exp-title-row">
                        <h3>{exp.role}</h3>
                        <span className="exp-company-tag">{exp.company}</span>
                    </div>
                    <div className="exp-period-tag">
                        <Calendar size={14} />
                        {exp.period}
                    </div>
                </div>

                <ul className="exp-bullet-list">
                    {exp.points.map((point, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                        >
                            {point}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section-padding exp-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Professional <span className="text-gradient">Evolution</span></h2>
                    <p className="section-subtitle">A timeline of analytical impact and technical growth</p>
                </div>

                <div className="modern-timeline">
                    {resumeData.experience.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .exp-section {
          background: #fdfdfd;
          position: relative;
        }

        .modern-timeline {
          max-width: 900px;
          margin: 4rem auto 0;
          position: relative;
          padding-left: 4rem;
        }

        .modern-timeline::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, var(--primary) 0%, var(--secondary) 100%);
          opacity: 0.1;
        }

        .exp-block {
          position: relative;
          margin-bottom: 5rem;
        }

        .timeline-connector {
          position: absolute;
          left: -4rem;
          top: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .timeline-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--primary);
          z-index: -1;
        }

        .timeline-dot {
          width: 32px;
          height: 32px;
          background: white;
          border: 2px solid var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .exp-content-card {
          padding: 2.5rem;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .exp-content-card:hover {
          border-color: var(--primary-light);
          box-shadow: 0 30px 60px rgba(99, 102, 241, 0.08);
          background: white;
        }

        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .exp-title-row h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
        }

        .exp-company-tag {
          font-size: 0.85rem;
          font-weight: 800;
          color: white;
          background: var(--gradient-primary);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          display: inline-block;
        }

        .exp-period-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-muted);
          background: #f1f5f9;
          padding: 0.5rem 1rem;
          border-radius: 12px;
        }

        .exp-bullet-list {
          list-style: none;
        }

        .exp-bullet-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          color: var(--text-main);
          line-height: 1.6;
        }

        .exp-bullet-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 12px;
          width: 8px;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s;
        }

        .exp-content-card:hover .exp-bullet-list li::before {
          width: 15px;
        }

        @media (max-width: 768px) {
          .modern-timeline {
            padding-left: 3rem;
          }
          .timeline-connector {
            left: -3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Experience;
