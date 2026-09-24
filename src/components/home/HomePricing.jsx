import React from 'react';
import { motion } from 'framer-motion';
import RollingText from '../RollingText';

export default function HomePricing() {
  const monthlyFeatures = [
    "Dedicated design support",
    "Priority communication",
    "Unlimited design requests",
    "Regular delivery schedule",
    "Monthly strategy and review sessions",
    "Scalable support as your business grows"
  ];

  const customFeatures = [
    "Defined project scope",
    "Fixed timeline and milestones",
    "Tailored design process",
    "Collaborative feedback rounds",
    "Flexible working hours",
    "Final deliverables ready for launch"
  ];

  return (
    <section className="home-pricing-section" id="pricing">
      <div className="pricing-inner container">
        {/* Section Header */}
        <div className="pricing-header">
          <div className="header-meta">
            <span className="pricing-num">04</span>
            <span className="pricing-label">Pricing</span>
          </div>
          <h2 className="pricing-headline">
            FLEXIBLE PLANS FOR EVERY STAGE OF GROWTH
          </h2>
          <p className="pricing-subtitle">
            Choose a package that fits your goals, timeline, and budget.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {/* Card 1: Monthly (Light) */}
          <motion.div
            className="pricing-card monthly-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-top">
              <h3 className="card-title">Monthly</h3>
              <p className="card-description">
                A dedicated creative partner for brands that need reliable, high-quality design every month.
              </p>
              <div className="price-wrap">
                <span className="price-amount">$2K</span>
                <span className="price-period">/Month</span>
              </div>
              <a href="#contact" className="pricing-btn light-btn">
                <RollingText text="Start Monthly Plan" />
              </a>
            </div>

            <div className="card-features">
              {monthlyFeatures.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="feature-text">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Custom Project (Dark with Popular Badge) */}
          <motion.div
            className="pricing-card custom-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="popular-badge">Popular</div>
            <div className="card-top">
              <h3 className="card-title">Custom Project</h3>
              <p className="card-description">
                Strategic design solutions for launches, redesigns, and business-critical initiatives.
              </p>
              <div className="price-wrap">
                <span className="price-amount">$5K</span>
                <span className="price-period">From</span>
              </div>
              <a href="#contact" className="pricing-btn dark-btn">
                <RollingText text="Start Monthly Plan" />
              </a>
            </div>

            <div className="card-features">
              {customFeatures.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="feature-text">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .home-pricing-section {
          background-color: var(--color-bg);
          padding: 100px 0 120px;
          position: relative;
        }

        .pricing-inner {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .pricing-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pricing-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
        }

        .pricing-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text);
        }

        .pricing-headline {
          font-family: var(--font-host);
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--color-text);
          margin: 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .pricing-subtitle {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(18, 18, 18, 0.6);
          margin: 0;
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 20px;
          align-items: stretch;
        }

        .pricing-card {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .monthly-card {
          background-color: #f1f1f1;
          color: #000000;
        }

        .custom-card {
          background-color: #000000;
          color: #e6e6e6;
        }

        .popular-badge {
          position: absolute;
          top: 36px;
          right: 36px;
          background-color: #ffffff;
          color: #000000;
          font-family: var(--font-geist);
          font-size: 14px;
          font-weight: 500;
          padding: 4px 14px;
          border-radius: 999px;
        }

        .card-top {
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 40px;
        }

        .custom-card .card-top {
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .card-title {
          font-family: var(--font-host);
          font-size: 24px;
          font-weight: 400;
          margin: 0;
        }

        .card-description {
          font-family: var(--font-geist);
          font-size: 16px;
          line-height: 1.4;
          margin: 0;
          color: rgba(18, 18, 18, 0.6);
        }

        .custom-card .card-description {
          color: rgba(156, 156, 156, 0.7);
        }

        .price-wrap {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-top: 10px;
        }

        .price-amount {
          font-family: var(--font-inter);
          font-size: 52px;
          font-weight: 600;
          line-height: 1;
        }

        .price-period {
          font-family: var(--font-geist);
          font-size: 18px;
          color: rgba(18, 18, 18, 0.6);
        }

        .custom-card .price-period {
          color: rgba(156, 156, 156, 0.7);
        }

        .pricing-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 24px;
          font-family: var(--font-inter);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color 0.25s ease, color 0.25s ease;
          width: 100%;
          text-align: center;
          margin-top: 10px;
        }

        .light-btn {
          background-color: #000000;
          color: #ffffff;
        }

        .light-btn:hover {
          background-color: #222222;
        }

        .dark-btn {
          background-color: #ffffff;
          color: #000000;
        }

        .dark-btn:hover {
          background-color: #e6e6e6;
        }

        .card-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 36px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .check-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .monthly-card .check-icon {
          color: #000000;
        }

        .custom-card .check-icon {
          color: #ffffff;
        }

        .feature-text {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(18, 18, 18, 0.65);
        }

        .custom-card .feature-text {
          color: rgba(156, 156, 156, 0.75);
        }

        @media (max-width: 900px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr;
          }
          .pricing-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
}
