import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const words = ["OUR", "WORKS"];

  // Framer spring animation tokens matching reference site
  const letterVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 80,
        mass: 1,
        delay: 0.15 + i * 0.035
      }
    })
  };

  let globalCharIndex = 0;

  return (
    <section className="hero-section">
      <div className="hero-container container">
        <h1 className="hero-title" aria-label="Our Works">
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="hero-word">
              {word.split("").map((char) => {
                const charIndex = globalCharIndex++;
                return (
                  <motion.span
                    key={charIndex}
                    className="hero-char"
                    custom={charIndex}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {wordIdx < words.length - 1 && <span className="hero-space">&nbsp;</span>}
            </span>
          ))}
        </h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 80,
            delay: 0.45
          }}
        >
          Explore a selection of websites, brands, and digital products we've crafted for growing businesses.
        </motion.p>
      </div>

      <style>{`
        .hero-section {
          padding-top: 150px;
          padding-bottom: 100px;
          text-align: center;
          background-color: var(--color-bg);
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hero-title {
          font-family: var(--font-host);
          font-size: 100px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--color-text);
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .hero-word {
          display: inline-flex;
        }

        .hero-char {
          display: inline-block;
          will-change: transform, opacity;
        }

        .hero-subtitle {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          color: var(--color-text-muted);
          max-width: 400px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding-top: 130px;
            padding-bottom: 80px;
          }
          .hero-title {
            font-size: 76px;
            line-height: 1.15;
          }
        }

        @media (max-width: 809px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 60px;
          }
          .hero-title {
            font-size: 50px;
            line-height: 1.2;
          }
          .hero-subtitle {
            font-size: 15px;
            padding: 0 10px;
          }
        }

        @media (max-width: 400px) {
          .hero-title {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
