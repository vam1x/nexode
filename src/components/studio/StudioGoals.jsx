import React from 'react';
import { motion } from 'framer-motion';

const GOALS_DATA = [
  {
    num: "01",
    title: "Our Mission",
    desc: "To create impactful brands, products, and digital experiences that help businesses grow with confidence."
  },
  {
    num: "02",
    title: "Our Vision",
    desc: "To be a creative partner that shapes the future through design, innovation, and meaningful experiences."
  },
  {
    num: "03",
    title: "Our Brand Promise",
    desc: "Every project is crafted with creativity, transparency, and a commitment to delivering measurable results."
  }
];

export default function StudioGoals() {
  return (
    <section className="studio-goals-section" id="goals">
      <div className="goals-inner container">
        {/* Section Header */}
        <div className="goals-header">
          <div className="header-meta">
            <span className="goals-num">02</span>
            <span className="goals-label">Goals</span>
          </div>
          <h2 className="goals-headline">
            THE PRINCIPLES THAT SHAPE EVERYTHING WE CREATE
          </h2>
          <p className="goals-subtitle">
            The values behind our creative work.
          </p>
        </div>

        {/* Goals List */}
        <div className="goals-list">
          {GOALS_DATA.map((goal, idx) => (
            <motion.div
              key={goal.num}
              className="goal-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="goal-num-wrap">
                <span className="goal-number">{goal.num}</span>
              </div>
              <div className="goal-title-wrap">
                <h3 className="goal-title">{goal.title}</h3>
              </div>
              <div className="goal-desc-wrap">
                <p className="goal-desc">{goal.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .studio-goals-section {
          background-color: var(--color-bg);
          color: var(--color-text);
          padding: 120px 0;
          position: relative;
        }

        .goals-inner {
          display: flex;
          flex-direction: column;
          gap: 70px;
        }

        .goals-header {
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

        .goals-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
        }

        .goals-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text);
        }

        .goals-headline {
          font-family: var(--font-host);
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--color-text);
          margin: 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .goals-subtitle {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(18, 18, 18, 0.6);
          margin: 0;
        }

        .goals-list {
          display: flex;
          flex-direction: column;
        }

        .goal-item {
          display: grid;
          grid-template-columns: 100px 380px 1fr;
          gap: 40px;
          padding: 44px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          align-items: flex-start;
        }

        .goal-number {
          font-family: var(--font-host);
          font-size: 32px;
          font-weight: 400;
          color: var(--color-text);
          line-height: 1.1;
        }

        .goal-title {
          font-family: var(--font-host);
          font-size: 32px;
          font-weight: 400;
          color: var(--color-text);
          margin: 0;
          line-height: 1.1;
        }

        .goal-desc {
          font-family: var(--font-geist);
          font-size: 18px;
          line-height: 1.5;
          color: rgba(18, 18, 18, 0.7);
          margin: 0;
          max-width: 600px;
        }

        @media (max-width: 900px) {
          .goal-item {
            grid-template-columns: 60px 1fr;
            gap: 20px;
          }
          .goal-desc-wrap {
            grid-column: 2;
          }
          .goal-title {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}
