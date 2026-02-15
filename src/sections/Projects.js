import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ExternalLink, Database, Activity, Clock, Heart, ShoppingCart, Sparkles } from 'lucide-react';

const ProjectCard = ({ title, description, highlights, index, githubLink }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

    const springConfig = { damping: 20, stiffness: 150 };
    const springX = useSpring(rotateX, springConfig);
    const springY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const getIcon = (title) => {
        if (title.includes('Fraud')) return <Database size={60} />;
        if (title.includes('Chronic')) return <Heart size={60} />;
        if (title.includes('Doppelganger')) return <Clock size={60} />;
        if (title.includes('Emotion')) return <Activity size={60} />;
        if (title.includes('Shopping')) return <ShoppingCart size={60} />;
        return <ExternalLink size={60} />;
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            style={{
                perspective: 1000,
                rotateX: springX,
                rotateY: springY,
            }}
            className="project-perspective-card"
        >
            <div className="project-inner glass-card">
                <div className="project-visual-header">
                    <div className="header-bg" />
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="floating-project-icon"
                    >
                        {getIcon(title)}
                    </motion.div>
                    <div className="project-stars"><Sparkles size={16} /></div>
                </div>

                <div className="project-body">
                    <div className="project-tag-list">
                        {highlights.slice(0, 2).map((h, i) => (
                            <span key={i} className="mini-tag">{h}</span>
                        ))}
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>

                    {/* <motion.a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="project-action-btn"
                    >
                        Review Codebase <ExternalLink size={16} />
                    </motion.a> */}
                </div>
            </div>

            <style jsx>{`
        .project-perspective-card {
          position: relative;
          cursor: pointer;
          transform-style: preserve-3d;
          height: 100%;
        }

        .project-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 1);
          border-radius: 40px;
          transition: background 0.3s;
        }

        .project-perspective-card:hover .project-inner {
          background: rgba(255, 255, 255, 0.95);
        }

        .project-visual-header {
          height: 200px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .header-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-soft);
          opacity: 0.5;
          transform: skewY(-5deg) translateY(-20px);
          transition: transform 0.5s;
        }

        .project-perspective-card:hover .header-bg {
          transform: skewY(0deg) translateY(0px) scale(1.1);
          background: var(--gradient-primary);
          opacity: 0.1;
        }

        .floating-project-icon {
          z-index: 2;
          color: var(--primary);
          filter: drop-shadow(0 10px 20px rgba(99, 102, 241, 0.2));
        }

        .project-stars {
          position: absolute;
          top: 20px;
          right: 20px;
          color: var(--secondary);
          opacity: 0.5;
        }

        .project-body {
          padding: 2.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .project-tag-list {
          display: flex;
          gap: 0.5rem;
        }

        .mini-tag {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.3rem 0.8rem;
          background: var(--bg-main);
          border-radius: 6px;
          color: var(--primary);
        }

        .project-body h3 {
          font-size: 1.5rem;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .project-body p {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-action-btn {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          font-size: 0.95rem;
          transition: gap 0.3s;
        }

        .project-perspective-card:hover .project-action-btn {
          gap: 1.25rem;
        }
      `}</style>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section-padding projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Impactful <span className="text-gradient">Portfolio</span></h2>
                    <p className="section-subtitle">A deep dive into complex analytical problem-solving</p>
                </div>

                <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .projects-section {
          background: #fafafa;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 4rem;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Projects;
