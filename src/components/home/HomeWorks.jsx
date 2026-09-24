import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FEATURED_PROJECTS = [
  {
    id: 'noila',
    title: 'NOILA',
    year: '2026',
    image: 'https://framerusercontent.com/images/eEFTAnov0CKyA6QktsWeM4jPdv4.jpg?width=4800&height=3200',
    align: 'flex-start',
    width: '552px',
    height: '644px'
  },
  {
    id: 'cosmira',
    title: 'COSMIRA',
    year: '2026',
    image: 'https://framerusercontent.com/images/8twa8QVRhthsLkemsnyPSG0xfX4.png?width=904&height=1200',
    align: 'flex-end',
    width: '580px',
    height: '675px'
  },
  {
    id: 'astra',
    title: 'ASTRA',
    year: '2026',
    image: 'https://framerusercontent.com/images/00aunXB2T7uPNtlhXQ60jYhP9Y.webp?width=4800&height=4800',
    align: 'flex-start',
    width: '470px',
    height: '554px'
  },
  {
    id: 'auresto',
    title: 'AURESTO',
    year: '2026',
    image: 'https://framerusercontent.com/images/w6Se4jlxX1STTQ0PAxketKvJtY.png?width=904&height=1200',
    align: 'center',
    width: '552px',
    height: '644px'
  },
  {
    id: 'samuer',
    title: 'SAMUER',
    year: '2026',
    image: 'https://framerusercontent.com/images/sqix9bpI8zgZj4Z7fz9nl2N4js.png?width=1200&height=655',
    align: 'flex-end',
    width: '510px',
    height: '599px'
  }
];

export default function HomeWorks() {
  return (
    <section className="home-works-section" id="work">
      <div className="works-inner container">
        {/* Section Header */}
        <div className="works-header">
          <div className="header-meta">
            <span className="section-number">02</span>
            <span className="section-title-label">Seleceted Projects</span>
          </div>
          <p className="header-description">
            Explore a selection of websites, brands, and digital products we've crafted for growing businesses.
          </p>
        </div>

        {/* Card Container with Sticky Title and Alternating Project Rows */}
        <div className="card-container">
          {/* Sticky Background Title */}
          <div className="sticky-watermark-wrap">
            <h2 className="sticky-works-title">WORKS</h2>
          </div>

          {/* Alternating Project Cards */}
          <div className="project-rows">
            {FEATURED_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="project-row"
                style={{ justifyContent: project.align }}
              >
                <motion.div
                  className="project-card"
                  style={{ width: project.width, maxWidth: '100%' }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to="/works" className="project-link" aria-label={`View ${project.title}`}>
                    <div className="project-img-wrap" style={{ height: project.height }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="project-info">
                      <h4 className="project-title">{project.title}</h4>
                      <h4 className="project-year">{project.year}</h4>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .home-works-section {
          background-color: var(--color-bg);
          padding: 100px 0 140px;
          position: relative;
        }

        .works-inner {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .works-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 24px;
        }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .section-number {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
        }

        .section-title-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text);
        }

        .header-description {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.6);
          max-width: 480px;
          margin: 0;
          text-align: right;
        }

        .card-container {
          position: relative;
          width: 100%;
        }

        .sticky-watermark-wrap {
          position: sticky;
          top: 100px;
          z-index: 1;
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 0;
        }

        .sticky-works-title {
          font-family: var(--font-host);
          font-size: clamp(80px, 14vw, 160px);
          font-weight: 700;
          color: rgba(0, 0, 0, 0.06);
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0;
          user-select: none;
          transform: translateY(180px);
        }

        .project-rows {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 120px;
          width: 100%;
        }

        .project-row {
          display: flex;
          width: 100%;
        }

        .project-card {
          display: flex;
          flex-direction: column;
        }

        .project-link {
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-decoration: none;
          color: inherit;
        }

        .project-img-wrap {
          width: 100%;
          overflow: hidden;
          background-color: #f0f0f0;
          position: relative;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-img {
          transform: scale(1.04);
        }

        .project-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 0;
        }

        .project-title {
          font-family: var(--font-host);
          font-size: 20px;
          font-weight: 500;
          color: var(--color-text);
          letter-spacing: -0.01em;
          margin: 0;
        }

        .project-year {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.5);
          margin: 0;
        }

        @media (max-width: 809px) {
          .works-header {
            flex-direction: column;
            gap: 16px;
          }
          .header-description {
            text-align: left;
          }
          .project-rows {
            gap: 60px;
          }
          .project-row {
            justify-content: stretch !important;
          }
          .project-card {
            width: 100% !important;
          }
          .project-img-wrap {
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
