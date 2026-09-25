import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RollingText from './RollingText';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const centerLinks = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
    { label: "STUDIO", href: "/studio" },
    { label: "BLOGS", href: "/blogs" }
  ];

  const contactLink = { label: "CONTACT", href: "/contact" };

  const allLinks = [...centerLinks, contactLink];

  const isLinkActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Detect whether current section behind navbar is dark or light
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Find actual element directly under navbar behind the fixed header
      const elements = document.elementsFromPoint ? document.elementsFromPoint(window.innerWidth / 2, 35) : [];
      const underlyingEl = elements.find(e => !e.closest('.site-header'));

      if (underlyingEl) {
        const darkSection = underlyingEl.closest(
          '.home-hero, .studio-hero, .home-services-section, .studio-who-we-are, .studio-team-section, .site-footer, [data-theme="dark"]'
        );
        if (darkSection) {
          setIsDarkTheme(true);
          return;
        }

        // Check computed background color of underlying element hierarchy
        let cur = underlyingEl;
        while (cur && cur !== document.body) {
          const bg = window.getComputedStyle(cur).backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            const rgb = bg.match(/\d+/g);
            if (rgb && rgb.length >= 3) {
              const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
              setIsDarkTheme(brightness < 128);
              return;
            }
          }
          cur = cur.parentElement;
        }
      }

      // Fallback based on top of pages
      if (location.pathname === '/' || location.pathname === '/studio') {
        setIsDarkTheme(scrollY < 700);
      } else {
        setIsDarkTheme(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

  return (
    <header className={`site-header ${themeClass} ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Left: Brand Logo */}
        <div className="nav-col-left">
          <Link to="/" className="logo-link" aria-label="Boldcraft Home">
            <span className="logo-text">BOLDCRAFT</span>
          </Link>
        </div>

        {/* Center: Main Navigation Links */}
        <nav className="nav-col-center" aria-label="Main Navigation">
          <div className="nav-links">
            {centerLinks.map((link) => {
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

        {/* Right: Contact Link (Desktop) & Mobile Menu Toggle */}
        <div className="nav-col-right">
          <Link
            to={contactLink.href}
            className={`nav-item contact-item ${isLinkActive(contactLink.href) ? 'is-active' : ''}`}
          >
            <RollingText text={contactLink.label} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="mobile-btn-text">
              <RollingText text={isMobileMenuOpen ? "CLOSE" : "MENU"} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-dropdown">
          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            {allLinks.map((link) => {
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
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          box-sizing: border-box;
          padding: 16px 30px;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .site-header.is-scrolled {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Color variations based on background */
        .site-header.theme-dark {
          --nav-text-color: #e6e6e6;
          --nav-border-color: rgba(255, 255, 255, 0.08);
          --nav-bg-scrolled: rgba(0, 0, 0, 0.4);
        }

        .site-header.theme-light {
          --nav-text-color: #000000;
          --nav-border-color: rgba(0, 0, 0, 0.06);
          --nav-bg-scrolled: rgba(255, 255, 255, 0.7);
        }

        .site-header.is-scrolled {
          background-color: var(--nav-bg-scrolled);
          border-bottom: 1px solid var(--nav-border-color);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          height: 24px;
        }

        /* Left Col */
        .nav-col-left {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-text {
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: -0.01em;
          color: var(--nav-text-color);
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        /* Center Col */
        .nav-col-center {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 2;
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
          color: var(--nav-text-color);
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: normal;
          transition: color 0.3s ease, font-weight 0.2s ease;
        }

        .nav-item.is-active {
          font-weight: 600;
        }

        /* Right Col */
        .nav-col-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
        }

        .contact-item {
          display: inline-block;
        }

        /* Mobile Menu Toggle */
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          color: var(--nav-text-color);
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .mobile-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--color-bg);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          animation: slideDown 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .theme-dark .mobile-dropdown {
          background-color: #000000;
          border-bottom-color: rgba(255, 255, 255, 0.12);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px 30px;
          max-width: 1380px;
          margin: 0 auto;
        }

        .mobile-nav-item {
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--nav-text-color);
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.2s ease;
        }

        .mobile-nav-item.is-active {
          font-weight: 700;
        }

        @media (max-width: 809px) {
          .site-header {
            padding: 16px 20px;
          }
          .nav-col-center {
            display: none;
          }
          .contact-item {
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
