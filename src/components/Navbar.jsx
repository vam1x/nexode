import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RollingText from './RollingText';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
    { label: "STUDIO", href: "/studio" },
    { label: "BLOGS", href: "/blogs" },
    { label: "CONTACT", href: "/contact" }
  ];

  const isLinkActive = (href) => {
    return location.pathname === href;
  };

  return (
    <header className="site-header">
      <div className="header-inner container">
        {/* Brand Logo */}
        <Link to="/" className="logo-link" aria-label="Boldcraft Home">
          <span className="logo-text">BOLDCRAFT</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <div className="nav-links">
            {links.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`nav-item ${active ? 'is-active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  <RollingText text={link.label} />
                </Link>
              );
            })}
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
      {isMobileMenuOpen && (
        <div className="mobile-dropdown">
          <nav className="mobile-nav-links container" aria-label="Mobile Navigation">
            {links.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`mobile-nav-item ${active ? 'is-active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

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
          font-weight: 600;
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
          animation: slideDown 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
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
          font-weight: 700;
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
