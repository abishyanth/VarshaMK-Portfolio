import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { resumeData } from '../data/resume';

const RotatingRoles = () => {
    const roles = ["BI Analyst", "BI Developer", "Data Enthusiast", "SQL Expert"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [roles.length]);

    return (
        <div className="role-container">
            <motion.span
                key={index}
                initial={{ y: 20, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -20, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="role-text"
            >
                {roles[index]}
            </motion.span>
        </div>
    );
};

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    // const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Mouse Spotlight Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        mouseX.set((clientX - left) / width * 100);
        mouseY.set((clientY - top) / height * 100);
    };

    return (
        <section
            id="home"
            className="hero section-padding"
            ref={heroRef}
            onMouseMove={handleMouseMove}
        >
            <div className="container hero-grid">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hero-content"
                >
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="badge"
                    >
                        Available for Opportunity
                    </motion.span>
                    <h1 className="hero-title">
                        Hi, I'm <span
                            className="text-gradient hover-spotlight"
                            style={{
                                '--x': mouseX,
                                '--y': mouseY
                            }}
                        >{resumeData.name}</span>
                    </h1>
                    <RotatingRoles />
                    <p className="hero-description">
                        {resumeData.summary}
                    </p>
                    <div className="hero-cta-container">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary highlight-btn"
                        >
                            Transform Your Data
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    style={{ y: y1 }}
                    className="hero-visual"
                >
                    <motion.div
                        className="glass-card visual-card-3d"
                        whileHover={{ rotateY: 20, rotateX: -10 }}
                    >
                        <div className="visualization-container">
                            <div className="orbit-circle orbit-1" />
                            <div className="orbit-circle orbit-2" />
                            <div className="data-blob" />
                            <div className="floating-icons">
                                <span className="floating-lang">SQL</span>
                                <span className="floating-lang">PBI</span>
                                <span className="floating-lang">PY</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 8rem;
          position: relative;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(99, 102, 241, 0.08) 0%, transparent 60%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(3rem, 10vw, 5.5rem);
          line-height: 1;
          margin-bottom: 1.5rem;
          letter-spacing: -3px;
          perspective: 1000px;
        }

        .text-gradient.hover-spotlight {
          position: relative;
          cursor: pointer;
          transition: 0.3s;
        }

        /* Rotating Roles Enhancements */
        .role-container {
          height: 4rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          perspective: 1000px;
        }

        .role-text {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: var(--primary);
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .highlight-btn {
          font-size: 1.1rem;
          padding: 1rem 2.5rem;
        }

        .visual-card-3d {
          width: 380px;
          height: 450px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 40px 100px rgba(99, 102, 241, 0.1);
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .visualization-container {
          position: relative;
          width: 80%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-circle {
          position: absolute;
          border: 2px dashed var(--primary-light);
          border-radius: 50%;
          opacity: 0.3;
          animation: rotate-orbit 20s linear infinite;
        }

        .orbit-1 { width: 100%; height: 100%; }
        .orbit-2 { width: 60%; height: 60%; animation-direction: reverse; }

        @keyframes rotate-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .data-blob {
          width: 100px;
          height: 100px;
          background: var(--gradient-primary);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: blob-morph 8s ease-in-out infinite;
          filter: blur(2px);
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
        }

        @keyframes blob-morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          33% { border-radius: 60% 40% 50% 70% / 50% 60% 30% 60%; }
          66% { border-radius: 50% 60% 30% 60% / 60% 40% 60% 30%; }
        }

        .floating-icons {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-lang {
          position: absolute;
          background: white;
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.8rem;
          box-shadow: var(--shadow-md);
          color: var(--primary);
          animation: float-lang 4s ease-in-out infinite;
        }

        .floating-lang:nth-child(1) { top: 0; left: 0; animation-delay: 0s; }
        .floating-lang:nth-child(2) { bottom: 20%; right: -10px; animation-delay: 1s; }
        .floating-lang:nth-child(3) { top: 40%; left: -20px; animation-delay: 2s; }

        @keyframes float-lang {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content { align-items: center; }
          .hero-visual { display: none; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
