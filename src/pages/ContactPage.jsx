import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RollingText from '../components/RollingText';

const SERVICE_OPTIONS = [
  "Brand Design",
  "Web Design & Development",
  "Product Design (UI/UX)",
  "Packaging Design",
  "Design Retainer / Monthly"
];

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+"
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — NEXODE Studio";
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedServices: [],
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (srv) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== srv)
          : [...prev.selectedServices, srv]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        selectedServices: [],
        budget: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="contact-page">
      <div className="contact-inner container">
        {/* Top Header */}
        <div className="contact-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="contact-label">CONTACT US</span>
            <h1 className="contact-headline">
              LET'S BUILD SOMETHING ICONIC TOGETHER
            </h1>
          </motion.div>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="info-block">
              <span className="info-title">DIRECT INQUIRIES</span>
              <a href="mailto:hello@nexode.studio" className="info-email-link">
                hello@nexode.studio
              </a>
              <p className="info-subtext">
                We review every inquiry within 24 hours Monday through Friday.
              </p>
            </div>

            <div className="info-block">
              <span className="info-title">STUDIO LOCATIONS</span>
              <p className="info-address">
                New York / San Francisco / Remote Worldwide
              </p>
            </div>

            <div className="info-block">
              <span className="info-title">OFFICE HOURS</span>
              <p className="info-address">
                Monday – Friday: 9:00 AM – 6:00 PM EST
              </p>
            </div>

            <div className="info-block legal-notes">
              <span className="info-title">LEGAL &amp; PRIVACY</span>
              <p className="info-subtext">
                Your data is never shared. By reaching out, you agree to our{' '}
                <Link to="/legal/privacy-policy" className="legal-link">Privacy Policy</Link> and{' '}
                <Link to="/legal/terms-of-service" className="legal-link">Terms of Service</Link>.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="form-success-card">
                <div className="success-icon">✓</div>
                <h3 className="success-title">Message Received!</h3>
                <p className="success-desc">
                  Thank you for reaching out. A partner from our studio will review your project brief and get in touch within 24 hours.
                </p>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleSubmit}>
                {/* Field: Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Field: Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Field: Services Pills */}
                <div className="form-group">
                  <span className="form-label">SERVICES NEEDED</span>
                  <div className="service-pills">
                    {SERVICE_OPTIONS.map((srv) => {
                      const isSelected = formData.selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          className={`pill-btn ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => toggleService(srv)}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field: Budget Options */}
                <div className="form-group">
                  <span className="form-label">PROJECT BUDGET</span>
                  <div className="budget-grid">
                    {BUDGET_OPTIONS.map((opt) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          className={`pill-btn ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => setFormData({ ...formData, budget: opt })}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field: Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    TELL US ABOUT YOUR PROJECT *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    placeholder="Describe your goals, timeline, and what you're looking to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-form-btn"
                >
                  <RollingText text={isSubmitting ? "Sending..." : "Submit Inquiry"} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-page {
          background-color: var(--color-bg);
          padding-top: 150px;
          padding-bottom: 140px;
          min-height: 100vh;
        }

        .contact-inner {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .contact-hero {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 40px;
        }

        .contact-label {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 16px;
        }

        .contact-headline {
          font-family: var(--font-host);
          font-size: clamp(36px, 6vw, 76px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--color-text);
          margin: 0;
          max-width: 1050px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 90px;
          align-items: flex-start;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .info-block {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-title {
          font-family: var(--font-geist);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(0, 0, 0, 0.45);
          text-transform: uppercase;
        }

        .info-email-link {
          font-family: var(--font-host);
          font-size: 28px;
          font-weight: 500;
          color: var(--color-text);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: opacity 0.2s ease;
        }

        .info-email-link:hover {
          opacity: 0.7;
        }

        .info-address,
        .info-subtext {
          font-family: var(--font-geist);
          font-size: 16px;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.65);
          margin: 0;
        }

        .legal-link {
          color: var(--color-text);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .contact-form-col {
          background-color: #f7f7f7;
          border-radius: 8px;
          padding: 56px 48px;
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form-label {
          font-family: var(--font-geist);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(0, 0, 0, 0.6);
          text-transform: uppercase;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 4px;
          padding: 16px 18px;
          font-family: var(--font-inter);
          font-size: 15px;
          color: #000000;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #000000;
          box-shadow: 0 0 0 1px #000000;
        }

        .form-textarea {
          resize: vertical;
          min-height: 130px;
        }

        .service-pills,
        .budget-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill-btn {
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.14);
          border-radius: 999px;
          padding: 10px 18px;
          font-family: var(--font-geist);
          font-size: 14px;
          font-weight: 400;
          color: #121212;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }

        .pill-btn:hover {
          border-color: #000000;
        }

        .pill-btn.is-selected {
          background-color: #000000;
          color: #ffffff;
          border-color: #000000;
        }

        .submit-form-btn {
          width: 100%;
          padding: 18px 32px;
          background-color: #000000;
          color: #ffffff;
          border-radius: 4px;
          font-family: var(--font-inter);
          font-size: 15px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.25s ease;
          margin-top: 10px;
        }

        .submit-form-btn:hover {
          background-color: #262626;
        }

        .form-success-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 60px 20px;
          gap: 20px;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #000000;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
        }

        .success-title {
          font-family: var(--font-host);
          font-size: 32px;
          font-weight: 500;
          color: #000000;
          margin: 0;
        }

        .success-desc {
          font-family: var(--font-geist);
          font-size: 16px;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.65);
          max-width: 440px;
          margin: 0;
        }

        .reset-btn {
          margin-top: 16px;
          padding: 12px 24px;
          background-color: transparent;
          border: 1px solid #000000;
          border-radius: 4px;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }

        @media (max-width: 990px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .contact-form-col {
            padding: 40px 24px;
          }
        }
      `}</style>
    </div>
  );
}
