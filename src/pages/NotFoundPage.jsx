import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RollingText from '../components/RollingText';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 — Page Not Found | Bold Craft";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="notfound-page">
      <div className="notfound-inner container">
        <motion.div
          className="notfound-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="notfound-badge">ERROR 404</span>
          <h1 className="notfound-code">LOST IN SPACE</h1>
          <p className="notfound-desc">
            The page you're looking for doesn't exist, has been relocated, or never took shape.
          </p>

          <div className="notfound-actions">
            <Link to="/" className="action-btn primary-btn">
              <RollingText text="Back To Home" />
            </Link>
            <Link to="/works" className="action-btn secondary-btn">
              <RollingText text="Explore Works" />
            </Link>
            <Link to="/contact" className="action-btn secondary-btn">
              <RollingText text="Contact Us" />
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        .notfound-page {
          background-color: #000000;
          color: #ffffff;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 20px 100px;
          text-align: center;
        }

        .notfound-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .notfound-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          max-width: 680px;
        }

        .notfound-badge {
          font-family: var(--font-geist);
          font-size: 15px;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.08em;
        }

        .notfound-code {
          font-family: var(--font-host);
          font-size: clamp(48px, 9vw, 96px);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .notfound-desc {
          font-family: var(--font-geist);
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
          margin: 10px 0 20px;
        }

        .notfound-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }

        .action-btn {
          padding: 16px 28px;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .primary-btn {
          background-color: #ffffff;
          color: #000000;
        }

        .primary-btn:hover {
          background-color: #e6e6e6;
        }

        .secondary-btn {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .secondary-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }
      `}</style>
    </div>
  );
}
