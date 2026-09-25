import React from 'react';
import { motion } from 'framer-motion';

export default function StudioHero() {
  return (
    <section className="studio-hero" id="hero">
      {/* Background Image with Dark Overlay */}
      <div className="hero-bg-wrap">
        <img
          src="https://framerusercontent.com/images/5CUetTsJz26VgNOLU8cuMz0E.png?width=1200&height=904"
          alt="Studio Background"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      {/* Hero Centered Headline */}
      <div className="hero-inner container">
        <motion.div
          className="hero-headline-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">
            ENGINEERING THE NEXT ERA OF DIGITAL CRAFT
          </h1>
        </motion.div>
      </div>

      <style>{`
        .studio-hero {
          position: relative;
          min-height: 747px;
          height: 80vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000000;
          overflow: hidden;
          padding: 100px 30px 64px;
          box-sizing: border-box;
        }

        .hero-bg-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.85) 100%);
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
        }

        .hero-headline-wrap {
          max-width: 900px;
        }

        .hero-title {
          font-family: var(--font-host);
          font-size: clamp(52px, 8vw, 100px);
          font-weight: 500;
          line-height: 1.15;
          color: #e6e6e6;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin: 0;
        }

        @media (max-width: 768px) {
          .studio-hero {
            min-height: 500px;
            padding: 80px 20px 40px;
          }
          .hero-title {
            font-size: clamp(36px, 10vw, 56px);
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
}
