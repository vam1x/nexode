import React from 'react';
import { motion } from 'framer-motion';

export default function BlogHero() {
  const letters = "Blogs".split("");

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
        delay: 0.15 + i * 0.04
      }
    })
  };

  return (
    <section className="blog-hero-section">
      <div className="blog-hero-container container">
        <h1 className="blog-hero-title" aria-label="Blogs">
          {letters.map((char, index) => (
            <motion.span
              key={index}
              className="blog-hero-char"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="blog-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 80,
            delay: 0.4
          }}
        >
          Explore a selection of websites, brands, and digital products we've crafted for growing businesses.
        </motion.p>
      </div>

      <style>{`
        .blog-hero-section {
          padding-top: 150px;
          padding-bottom: 100px;
          text-align: center;
          background-color: var(--color-bg);
        }

        .blog-hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .blog-hero-title {
          font-family: var(--font-host);
          font-size: 100px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--color-text);
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .blog-hero-char {
          display: inline-block;
          will-change: transform, opacity;
        }

        .blog-hero-subtitle {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          color: var(--color-text-muted);
          max-width: 400px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .blog-hero-section {
            padding-top: 130px;
            padding-bottom: 80px;
          }
          .blog-hero-title {
            font-size: 76px;
            line-height: 1.15;
          }
        }

        @media (max-width: 809px) {
          .blog-hero-section {
            padding-top: 100px;
            padding-bottom: 60px;
          }
          .blog-hero-title {
            font-size: 50px;
            line-height: 1.2;
          }
          .blog-hero-subtitle {
            font-size: 15px;
            padding: 0 10px;
          }
        }

        @media (max-width: 400px) {
          .blog-hero-title {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
