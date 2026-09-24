import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FEATURED_POSTS = [
  {
    id: "why-great-design-is-more-than-just-aesthetics",
    date: "Jun 1, 2026",
    title: "Why Great Design Is More Than Just Aesthetics",
    image: "https://framerusercontent.com/images/QqSXtMe9AQ788zkoF66rJR7CI.png?width=1200&height=679"
  },
  {
    id: "why-businesses-partner-with-a-digital-design-studio",
    date: "Jun 10, 2026",
    title: "Why Businesses Partner with a Digital Design Studio",
    image: "https://framerusercontent.com/images/XIZxTqHp5tebQ6TBGO2tjbjoJwc.png?width=1200&height=1200"
  },
  {
    id: "the-value-of-human-centered-design-in-the-digital-age",
    date: "Jun 20, 2026",
    title: "The Value of Human-Centered Design in the Digital Age",
    image: "https://framerusercontent.com/images/vrCMcwaa9sBUjMnRRX3SYW1iGME.png?width=1200&height=655"
  }
];

export default function HomeBlog() {
  return (
    <section className="home-blog-section" id="blog">
      <div className="blog-inner container">
        {/* Section Header */}
        <div className="blog-header">
          <div className="header-meta">
            <span className="blog-num">07</span>
            <span className="blog-label">blog</span>
          </div>
          <h2 className="blog-headline">
            INSIGHTS, IDEAS &amp; DESIGN INSPIRATION
          </h2>
          <p className="blog-subtitle">
            Explore practical tips, industry trends, and creative insights from our experts.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="blog-grid">
          {FEATURED_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/blogs" className="blog-card-link">
                <div className="blog-img-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-img"
                    loading="lazy"
                  />
                </div>
                <div className="blog-card-content">
                  <span className="post-date">{post.date}</span>
                  <h4 className="post-title">{post.title}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .home-blog-section {
          background-color: #ffffff;
          padding: 100px 0 140px;
          position: relative;
        }

        .blog-inner {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .blog-header {
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

        .blog-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
        }

        .blog-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: #000000;
          text-transform: lowercase;
        }

        .blog-headline {
          font-family: var(--font-host);
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1.2;
          color: #000000;
          margin: 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .blog-subtitle {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(18, 18, 18, 0.6);
          margin: 0;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
        }

        .blog-card-link {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-decoration: none;
          color: inherit;
        }

        .blog-img-container {
          width: 100%;
          height: 380px;
          overflow: hidden;
          background-color: #f6f6f6;
          position: relative;
        }

        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }

        .blog-card-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .post-date {
          font-family: var(--font-geist);
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
        }

        .post-title {
          font-family: var(--font-host);
          font-size: 20px;
          font-weight: 500;
          line-height: 1.3;
          color: #000000;
          margin: 0;
          letter-spacing: -0.01em;
        }

        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .blog-img-container {
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
}
