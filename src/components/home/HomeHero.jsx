import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroRippleShader from './HeroRippleShader';

const CAROUSEL_SLIDES = [
  {
    id: 1,
    image: "/images/hero_slide_saas.jpg",
    title: "SaaS Mobile App UI"
  },
  {
    id: 2,
    image: "/images/hero_slide_web.jpg",
    title: "Editorial Web Platform"
  },
  {
    id: 3,
    image: "/images/hero_slide_system.jpg",
    title: "Design System & Tokens"
  },
  {
    id: 4,
    image: "/images/hero_slide_fintech.jpg",
    title: "FinTech Analytics Dashboard"
  }
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  return (
    <section className="home-hero">
      {/* Background Interactive Shader / Fluid Wave */}
      <HeroRippleShader fallbackImage="https://framerusercontent.com/images/k0UJKIUF5xb9VIvLP78RVqzmw.png?scale-down-to=1469&width=2938&height=1632" />

      {/* Hero Content Container */}
      <div className="hero-content container">
        {/* Upper Row: Title on Left, Carousel on Right */}
        <div className="upper-container">
          <motion.div
            className="hero-headline-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title">
              DESIGN THAT BUILDS BRANDS &amp; DIGITAL EXPERIENCES
            </h1>
          </motion.div>

          <motion.div
            className="hero-carousel-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="carousel-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={CAROUSEL_SLIDES[currentSlide].image}
                  alt={CAROUSEL_SLIDES[currentSlide].title}
                  className="carousel-img"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="carousel-controls">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="carousel-arrow left-arrow"
                  aria-label="Previous Slide"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="carousel-arrow right-arrow"
                  aria-label="Next Slide"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Service Tags & Giant BOLDCRAFT Brand Mark */}
        <div className="bottom-container">
          <motion.div
            className="tags-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-tag">BRANDING</span>
            <span className="hero-tag">WEB DESIGN</span>
            <span className="hero-tag">PRODUCT DESIGN</span>
            <span className="hero-tag">MOTION DESIGN</span>
          </motion.div>

          <motion.div
            className="brandmark-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="massive-boldcraft">BOLDCRAFT</div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .home-hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: stretch;
          background-color: #000000;
          overflow: hidden;
          padding-top: 120px;
          padding-bottom: 20px;
          box-sizing: border-box;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          min-height: calc(100vh - 140px);
        }

        .upper-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          width: 100%;
        }

        .hero-headline-wrap {
          max-width: 680px;
        }

        .hero-title {
          font-family: var(--font-host);
          font-size: 44px;
          font-weight: 400;
          line-height: 52.8px;
          color: #e6e6e6;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          margin: 0;
        }

        .hero-carousel-wrap {
          flex-shrink: 0;
        }

        .carousel-card {
          position: relative;
          width: 184px;
          height: 206px;
          overflow: hidden;
          background-color: #111111;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .carousel-controls {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8px;
          opacity: 0;
          transition: opacity 0.25s ease;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%);
        }

        .carousel-card:hover .carousel-controls {
          opacity: 1;
        }

        .carousel-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .carousel-arrow:hover {
          transform: scale(1.1);
          background: rgba(0, 0, 0, 0.85);
        }

        .bottom-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          margin-top: auto;
          padding-top: 40px;
        }

        .tags-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          border-bottom: 1px solid rgba(230, 230, 230, 0.15);
          padding-bottom: 16px;
        }

        .hero-tag {
          font-family: var(--font-geist);
          font-size: 18px;
          font-weight: 400;
          color: #e6e6e6;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .brandmark-row {
          width: 100%;
          overflow: hidden;
          line-height: 0.82;
        }

        .massive-boldcraft {
          font-family: var(--font-host);
          font-size: clamp(68px, 13.18vw, 190px);
          font-weight: 700;
          color: #e6e6e6;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          width: 100%;
          text-align: justify;
          text-align-last: justify;
          user-select: none;
          pointer-events: none;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 36px;
            line-height: 44px;
          }
          .hero-tag {
            font-size: 15px;
          }
        }

        @media (max-width: 809px) {
          .home-hero {
            padding-top: 100px;
            min-height: auto;
          }
          .upper-container {
            flex-direction: column;
            gap: 32px;
          }
          .hero-title {
            font-size: 30px;
            line-height: 38px;
          }
          .tags-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .hero-tag {
            font-size: 14px;
          }
          .massive-boldcraft {
            font-size: clamp(48px, 14vw, 100px);
          }
        }
      `}</style>
    </section>
  );
}
