import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Zap, TrendingUp, Users } from 'lucide-react';

const Card = ({ icon, title, description, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
            className="why-card glass-card"
        >
            <div className="card-content" style={{ transform: "translateZ(50px)" }}>
                <div className="icon-wrapper">
                    {icon}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="glow-effect" />
            </div>
        </motion.div>
    );
};

const WhyHireMe = () => {
    const points = [
        {
            icon: <Target size={32} />,
            title: "ROI-Driven Dashboards",
            description: "Transforming raw data into strategic KPIs that directly impact bottom-line growth."
        },
        {
            icon: <Zap size={32} />,
            title: "Automated Workflows",
            description: "Replacing hours of manual cleaning with efficient Python/SQL automation scripts."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Predictive Advantage",
            description: "Using ML to spot trends before they become problems, enabling proactive decisions."
        },
        {
            icon: <Users size={32} />,
            title: "Strategic Storyteller",
            description: "Bridging the gap between technical data and executive-level business decisions."
        }
    ];

    return (
        <section id="why-hire-me" className="section-padding why-hire-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="section-title"
                    >
                        The <span className="text-gradient">Impact</span> I Deliver
                    </motion.h2>
                    <p className="section-subtitle">Why my unique blend of BI and AI drives real value</p>
                </div>

                <div className="why-grid">
                    {points.map((point, index) => (
                        <Card key={index} {...point} index={index} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .why-hire-section {
          perspective: 1000px;
          overflow: hidden;
          background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 90% 80%, rgba(20, 184, 166, 0.05) 0%, transparent 50%);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .why-card {
          position: relative;
          height: 320px;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }

        .why-card:hover {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.6);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          height: 100%;
          justify-content: center;
        }

        .icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background: var(--gradient-soft);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s ease;
        }

        .why-card:hover .icon-wrapper {
          background: var(--gradient-primary);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }

        .why-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .why-card p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.5;
        }

        .glow-effect {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.1) 0%, transparent 80%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .why-card:hover .glow-effect {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .why-card {
            height: auto;
            padding: 3rem 1.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default WhyHireMe;
