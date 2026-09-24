import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RollingText from '../RollingText';

const FAQ_ITEMS = [
  {
    num: "01",
    question: "How do I start a project?",
    answer: "Not at all—our course begins with the basics and gradually builds to advanced techniques smoothly."
  },
  {
    num: "02",
    question: "How long will my project take?",
    answer: "Most projects are completed within 2–8 weeks, depending on the scope and requirements."
  },
  {
    num: "03",
    question: "What does your design process look like?",
    answer: "We follow a structured process: discovery, strategy, design, revisions, and final delivery."
  },
  {
    num: "04",
    question: "Do you offer revisions?",
    answer: "Yes. Every project includes revision rounds to ensure the final design meets your expectations."
  },
  {
    num: "05",
    question: "Do you provide ongoing support?",
    answer: "Yes. We offer post-launch support and maintenance to keep your website or design performing at its best."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="home-faq-section" id="faq">
      <div className="faq-inner container">
        {/* Section Header */}
        <div className="faq-header">
          <div className="header-meta">
            <span className="faq-num">06</span>
            <span className="faq-label">FAQ</span>
          </div>
          <h2 className="faq-headline">COMMON QUESTIONS ANSWERED</h2>
          <p className="faq-subtitle">
            Find quick answers to the questions we hear most often.
          </p>
        </div>

        {/* Two-Column Body: Discovery Callout on Left, Accordion on Right */}
        <div className="faq-body">
          {/* Callout Card */}
          <div className="faq-callout-card">
            <h3 className="callout-title">
              Have more questions? Book a free discovery call
            </h3>
            <p className="callout-desc">
              Not sure about something? Check our FAQ for quick answers and helpful details.
            </p>
            <a href="#contact" className="callout-btn">
              <RollingText text="Book A Call" />
            </a>
          </div>

          {/* Accordion List */}
          <div className="faq-accordion-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.num} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="accordion-trigger"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="trigger-left">
                      <span className="item-num">{item.num}</span>
                      <h4 className="item-question">{item.question}</h4>
                    </div>
                    <motion.div
                      className="accordion-icon-wrap"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                        <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="accordion-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="accordion-inner">
                          <p className="item-answer">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .home-faq-section {
          background-color: var(--color-bg);
          padding: 100px 0 140px;
          position: relative;
        }

        .faq-inner {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .faq-header {
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

        .faq-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
        }

        .faq-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text);
        }

        .faq-headline {
          font-family: var(--font-host);
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--color-text);
          margin: 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .faq-subtitle {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(18, 18, 18, 0.6);
          margin: 0;
        }

        .faq-body {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 60px;
          align-items: flex-start;
        }

        /* Callout Card */
        .faq-callout-card {
          background-color: #f1f1f1;
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .callout-title {
          font-family: var(--font-host);
          font-size: 24px;
          font-weight: 400;
          line-height: 1.3;
          color: var(--color-text);
          margin: 0;
        }

        .callout-desc {
          font-family: var(--font-geist);
          font-size: 16px;
          line-height: 1.5;
          color: rgba(18, 18, 18, 0.65);
          margin: 0;
        }

        .callout-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 28px;
          background-color: #000000;
          color: #ffffff;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          text-decoration: none;
          margin-top: 10px;
          transition: background-color 0.2s ease;
        }

        .callout-btn:hover {
          background-color: #222222;
        }

        /* Accordion List */
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
        }

        .accordion-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          color: inherit;
        }

        .trigger-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .item-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
          min-width: 28px;
        }

        .item-question {
          font-family: var(--font-host);
          font-size: clamp(20px, 2vw, 24px);
          font-weight: 400;
          color: var(--color-text);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .accordion-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text);
          flex-shrink: 0;
        }

        .accordion-content {
          overflow: hidden;
        }

        .accordion-inner {
          padding-left: 60px;
          padding-bottom: 28px;
        }

        .item-answer {
          font-family: var(--font-geist);
          font-size: 16px;
          line-height: 1.6;
          color: rgba(18, 18, 18, 0.7);
          margin: 0;
          max-width: 640px;
        }

        @media (max-width: 960px) {
          .faq-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .faq-callout-card {
            padding: 32px 24px;
          }
          .trigger-left {
            gap: 20px;
          }
          .accordion-inner {
            padding-left: 48px;
          }
        }
      `}</style>
    </section>
  );
}
