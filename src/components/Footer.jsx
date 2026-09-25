import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RollingText from './RollingText';
import NexodeLogo from './NexodeLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  const pagesLinks = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
    { label: "Studio", href: "/studio" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" }
  ];

  const legalLinks = [
    { label: "404", href: "/404" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" }
  ];

  const isLinkActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        {/* Upper Part */}
        <div className="footer-upper">
          {/* Left Column: Brand, Tagline, Newsletter */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo" aria-label="NEXODE Home">
              <NexodeLogo size={22} showText={false} />
              <h4>NEXODE</h4>
            </Link>
            <p className="footer-tagline">
              Next-Gen Digital Products &amp; Bespoke Web Experiences
            </p>

            <form className="footer-form" onSubmit={handleSubmit}>
              <div className="form-input-wrap">
                <input
                  type="email"
                  required
                  placeholder="jane@framer.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-email-input"
                  aria-label="Email Address for Newsletter"
                />
              </div>
              <button
                type="submit"
                className="footer-submit-btn"
                aria-label="Submit newsletter form"
              >
                <RollingText text={submitted ? "Sent!" : "Submit"} />
              </button>
            </form>
          </div>

          {/* Right Column: Nav Columns */}
          <div className="footer-nav-grid">
            {/* Pages */}
            <div className="footer-nav-col">
              <span className="col-label">Pages</span>
              <ul className="col-links">
                {pagesLinks.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className={`footer-link ${active ? 'is-active' : ''}`}
                      >
                        <RollingText text={link.label} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-nav-col">
              <span className="col-label">Legal</span>
              <ul className="col-links">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="footer-link">
                      <RollingText text={link.label} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="footer-bottom">
          <div className="footer-bottom-meta">
            <span className="copyright-text">Copyright © 2026 NEXODE. All rights reserved.</span>
            <span className="footer-studio-tag">Digital Design &amp; Product Studio</span>
          </div>

          {/* Massive Brand SVG Typography */}
          <div className="footer-massive-text" aria-hidden="true">
            <svg
              viewBox="0 0 1440 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="massive-svg"
            >
              <text
                x="50%"
                y="82%"
                textAnchor="middle"
                className="svg-brand-text"
              >
                NEXODE
              </text>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-dark-bg);
          color: var(--color-dark-text);
          padding-top: 80px;
          padding-bottom: 24px;
          width: 100%;
          overflow: hidden;
        }

        .footer-upper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
          margin-bottom: 70px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 480px;
          width: 100%;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--color-dark-text);
        }

        .footer-logo h4 {
          font-family: var(--font-inter);
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--color-dark-text);
          text-transform: uppercase;
          margin: 0;
        }

        .footer-tagline {
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-dark-muted);
          line-height: 1.4;
        }

        .footer-form {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 10px;
          width: 100%;
          max-width: 420px;
        }

        .form-input-wrap {
          flex: 1;
        }

        .footer-email-input {
          width: 100%;
          height: 40px;
          background-color: transparent;
          border: 1px solid var(--color-dark-border);
          border-radius: 4px;
          padding: 0 14px;
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-dark-text);
          outline: none;
          transition: border-color 0.2s ease;
        }

        .footer-email-input:focus {
          border-color: rgba(255, 255, 255, 0.6);
        }

        .footer-email-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        .footer-submit-btn {
          height: 40px;
          padding: 0 24px;
          background-color: var(--color-dark-btn);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-dark-text);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }

        .footer-submit-btn:hover {
          background-color: #404040;
        }

        .footer-nav-grid {
          display: flex;
          gap: 70px;
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .col-label {
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-dark-muted);
        }

        .col-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-dark-text);
          display: inline-block;
          line-height: 1.2;
        }

        .footer-link.is-active {
          color: #ffffff;
          font-weight: 500;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .footer-bottom-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-dark-muted);
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-studio-tag {
          font-family: var(--font-geist);
          font-size: 14px;
          color: var(--color-dark-muted);
        }

        .footer-massive-text {
          width: 100%;
          line-height: 0;
          user-select: none;
        }

        .massive-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .svg-brand-text {
          font-family: var(--font-host);
          font-size: 290px;
          font-weight: 600;
          letter-spacing: 0.01em;
          fill: var(--color-dark-text);
        }

        @media (max-width: 990px) {
          .footer-upper {
            flex-direction: column;
            gap: 50px;
          }
          .footer-nav-grid {
            width: 100%;
            justify-content: space-between;
            gap: 30px;
          }
        }

        @media (max-width: 640px) {
          .site-footer {
            padding-top: 60px;
          }
          .footer-form {
            flex-direction: column;
            align-items: stretch;
          }
          .footer-submit-btn {
            width: 100%;
          }
          .footer-nav-grid {
            flex-direction: column;
            gap: 36px;
          }
          .footer-bottom-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .svg-brand-text {
            font-size: 270px;
          }
        }
      `}</style>
    </footer>
  );
}
