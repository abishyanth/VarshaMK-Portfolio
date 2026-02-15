import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Database, Code, BarChart, Server, Globe, Search } from 'lucide-react';

const SkillsTicker = ({ items }) => {
    return (
        <div className="ticker-wrapper">
            <motion.div
                className="ticker-content"
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {[...items, ...items, ...items].map((item, i) => (
                    <span key={i} className="ticker-item glass">
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const SkillCategory = ({ category, items, index }) => {
    const getIcon = (cat) => {
        if (cat.includes('Business Intelligence')) return <BarChart />;
        if (cat.includes('Data & Databases')) return <Database />;
        if (cat.includes('Programming')) return <Code />;
        if (cat.includes('Data Analysis')) return <Search />;
        if (cat.includes('Tools')) return <Server />;
        return <Globe />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="skill-group"
        >
            <div className="group-header">
                <div className="group-icon">{getIcon(category)}</div>
                <h3>{category}</h3>
            </div>
            <div className="items-container">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className="skill-bubble glass"
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const allTickerItems = resumeData.technicalSkills.flatMap(s => s.items);

    return (
        <section id="skills" className="section-padding skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical <span className="text-gradient">Ecosystem</span></h2>
                    <p className="section-subtitle">A high-velocity view of my tools and expertise</p>
                </div>

                <SkillsTicker items={allTickerItems} />

                <div className="skills-layout">
                    {resumeData.technicalSkills.map((skill, index) => (
                        <SkillCategory key={index} {...skill} index={index} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .skills-section {
          background: #fdfdfd;
          position: relative;
          overflow: hidden;
        }

        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          margin-bottom: 5rem;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .ticker-content {
          display: flex;
          gap: 2rem;
          white-space: nowrap;
          padding: 1rem 0;
        }

        .ticker-item {
          padding: 1rem 2rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--primary);
          border: 1px solid rgba(99, 102, 241, 0.2);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .skills-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .skill-group {
          padding: 2.5rem;
          border-radius: 30px;
          background: white;
          border: 1px solid #f1f5f9;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
        }

        .skill-group:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.05);
          border-color: var(--primary-light);
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .group-icon {
          width: 50px;
          height: 50px;
          background: var(--gradient-soft);
          color: var(--primary);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .items-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-bubble {
          padding: 0.6rem 1.2rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
          cursor: crosshair;
          transition: all 0.2s ease;
        }

        .skill-bubble:hover {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
        }

        @media (max-width: 768px) {
          .skills-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Skills;
