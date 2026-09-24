import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '../data/projects';
import RollingText from './RollingText';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        {/* Brand Logo */}
        <a href="/" className="logo-link" aria-label="Boldcraft Home">
          <span className="logo-text">BOLDCRAFT</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <div className="nav-links">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-item ${link.active ? 'is-active' : ''}`}
                aria-current={link.active ? 'page' : undefined}
              >
                <RollingText text={link.label} />
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="mobile-btn-text">
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-nav-links container" aria-label="Mobile Navigation">
              {navigationLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`mobile-nav-item ${link.active ? 'is-active' : ''}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          background-color: var(--color-bg);
          z-index: 100;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
        }

        .logo-link {
          display: inline-flex;
          align-items: center;
        }

        .logo-text {
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--color-text);
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-item {
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 400;
          line-height: 16.8px;
          color: var(--color-text);
          text-transform: uppercase;
          transition: opacity 0.2s ease;
        }

        .nav-item.is-active {
          font-weight: 500;
        }

        .mobile-menu-btn {
          display: none;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--color-text);
          padding: 4px 0;
        }

        .mobile-dropdown {
          overflow: hidden;
          background-color: var(--color-bg);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 16px;
          padding-bottom: 24px;
        }

        .mobile-nav-item {
          font-family: var(--font-inter);
          font-size: 15px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--color-text);
          padding: 6px 0;
        }

        .mobile-nav-item.is-active {
          opacity: 1;
          color: var(--color-text);
        }

        @media (max-width: 809px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
