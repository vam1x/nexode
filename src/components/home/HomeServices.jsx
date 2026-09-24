import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SERVICES_DATA = [
  {
    num: "01",
    title: "Brand Design",
    tags: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines", "Brand Positioning"],
    description: "Building memorable brands with strategy and impactful visual identities."
  },
  {
    num: "02",
    title: "Web Design",
    tags: ["UI Design", "UX Design", "Responsive Design", "Website Development", "SEO Optimization"],
    description: "Designing modern, user-focused websites that drive engagement."
  },
  {
    num: "03",
    title: "Product Design",
    tags: ["Wireframing", "UX research", "Prototyping", "Design Systems", "User Testing"],
    description: "Creating intuitive digital products built around user needs."
  },
  {
    num: "04",
    title: "Packaging Design",
    tags: ["Label Design", "Structural Packaging", "Product Packaging", "Print Design", "Retail Branding"],
    description: "Crafting packaging that stands out and strengthens your brand."
  }
];

export default function HomeServices() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="home-services-section" id="services">
      <div className="services-inner container">
        {/* Header Container */}
        <div className="services-header">
          <div className="header-meta">
            <span className="services-num">03</span>
            <span className="services-label">Services</span>
          </div>
          <h2 className="services-headline">
            EVERYTHING YOU NEED TO GROW ONLINE
          </h2>
        </div>

        {/* Services Rows List */}
        <div className="services-list">
          {SERVICES_DATA.map((srv, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={srv.num}
                className={`service-row ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Column 1: Number */}
                <div className="col-num">
                  <h3 className="srv-number">{srv.num}</h3>
                </div>

                {/* Column 2: Title & Tags */}
                <div className="col-title-tags">
                  <h3 className="srv-title">{srv.title}</h3>
                  <div className="srv-tags-wrap">
                    {srv.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="srv-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 3: Description */}
                <div className="col-desc">
                  <p className="srv-description">{srv.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .home-services-section {
          background-color: #000000;
          color: #e6e6e6;
          padding: 120px 0;
          position: relative;
          width: 100%;
        }

        .services-inner {
          display: flex;
          flex-direction: column;
          gap: 70px;
        }

        .services-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-bottom: 1px solid rgba(230, 230, 230, 0.15);
          padding-bottom: 30px;
        }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .services-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(230, 230, 230, 0.5);
        }

        .services-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: #e6e6e6;
        }

        .services-headline {
          font-family: var(--font-host);
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1.2;
          color: #e6e6e6;
          margin: 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .services-list {
          display: flex;
          flex-direction: column;
        }

        .service-row {
          display: grid;
          grid-template-columns: 140px 1.5fr 1fr;
          gap: 40px;
          padding: 48px 24px;
          border-bottom: 1px solid rgba(230, 230, 230, 0.12);
          transition: background-color 0.3s ease, transform 0.3s ease;
          position: relative;
          align-items: flex-start;
        }

        .service-row.is-hovered {
          background-color: #0d0d0d;
        }

        .col-num {
          display: flex;
          align-items: flex-start;
        }

        .srv-number {
          font-family: var(--font-host);
          font-size: 32px;
          font-weight: 400;
          color: #e6e6e6;
          margin: 0;
          line-height: 1.1;
        }

        .col-title-tags {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .srv-title {
          font-family: var(--font-host);
          font-size: 32px;
          font-weight: 400;
          color: #e6e6e6;
          margin: 0;
          line-height: 1.1;
        }

        .srv-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 12px;
        }

        .srv-tag {
          font-family: var(--font-geist);
          font-size: 14px;
          color: rgba(230, 230, 230, 0.6);
          background-color: rgba(255, 255, 255, 0.05);
          padding: 4px 10px;
          border-radius: 2px;
          letter-spacing: 0.02em;
        }

        .col-desc {
          display: flex;
          align-items: flex-start;
        }

        .srv-description {
          font-family: var(--font-geist);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5;
          color: rgba(230, 230, 230, 0.8);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .service-row {
            grid-template-columns: 80px 1fr;
            gap: 30px;
          }
          .col-desc {
            grid-column: 2;
          }
        }

        @media (max-width: 768px) {
          .service-row {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 36px 12px;
          }
          .srv-title {
            font-size: 26px;
          }
          .srv-number {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
