import React from 'react';
import { motion } from 'framer-motion';

export default function HomeTestimonial() {
  return (
    <section className="home-testimonial-section" id="testimonial">
      <div className="testimonial-inner container">
        {/* Section Header */}
        <div className="testimonial-header">
          <div className="header-meta">
            <span className="testimonial-num">04</span>
            <span className="testimonial-label">Testimonials</span>
          </div>
          <h2 className="testimonial-headline">
            TRUSTED BY BRANDS ACROSS INDUSTRIES
          </h2>
          <p className="testimonial-subtitle">
            Feedback from brands we’ve worked with.
          </p>
        </div>

        {/* Content Layout */}
        <div className="testimonial-body">
          <motion.div
            className="testimonial-image-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://framerusercontent.com/images/jDZsYX6zyRG1UXQzWlryNia8bpQ.png?width=904&height=1200"
              alt="Kayle John testimonial"
              className="testimonial-img"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="testimonial-quote-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="quote-text">
              “They transformed our website into a high-performing platform. Clean design and great communication throughout.”
            </blockquote>
            <div className="author-meta">
              <h3 className="author-name">Kayle John</h3>
              <p className="author-role">CEO, AUTM Clothings</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .home-testimonial-section {
          background-color: var(--color-bg);
          padding: 120px 0 140px;
          position: relative;
        }

        .testimonial-inner {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .testimonial-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 30px;
        }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .testimonial-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
        }

        .testimonial-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text);
        }

        .testimonial-headline {
          font-family: var(--font-host);
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--color-text);
          margin: 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .testimonial-subtitle {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(18, 18, 18, 0.6);
          margin: 0;
        }

        .testimonial-body {
          display: grid;
          grid-template-columns: 450px 1fr;
          gap: 80px;
          align-items: center;
        }

        .testimonial-image-wrap {
          width: 450px;
          height: 510px;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .testimonial-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .testimonial-quote-wrap {
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 680px;
        }

        .quote-text {
          font-family: var(--font-host);
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 400;
          line-height: 1.35;
          color: var(--color-text);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .author-name {
          font-family: var(--font-host);
          font-size: 32px;
          font-weight: 400;
          color: var(--color-text);
          margin: 0;
          line-height: 1.1;
        }

        .author-role {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(18, 18, 18, 0.6);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .testimonial-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .testimonial-image-wrap {
            width: 100%;
            max-width: 450px;
            height: 440px;
          }
        }
      `}</style>
    </section>
  );
}
