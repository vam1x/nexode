import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LegalPage({ type = "privacy" }) {
  const isPrivacy = type === "privacy";

  useEffect(() => {
    document.title = isPrivacy
      ? "Privacy Policy — NEXODE"
      : "Terms of Service — NEXODE";
    window.scrollTo(0, 0);
  }, [isPrivacy]);

  return (
    <div className="legal-page">
      <div className="legal-inner container">
        {/* Header */}
        <header className="legal-header">
          <div className="legal-toggle-bar">
            <Link
              to="/legal/privacy-policy"
              className={`toggle-link ${isPrivacy ? 'is-active' : ''}`}
            >
              Privacy Policy
            </Link>
            <span className="toggle-separator">/</span>
            <Link
              to="/legal/terms-of-service"
              className={`toggle-link ${!isPrivacy ? 'is-active' : ''}`}
            >
              Terms of Service
            </Link>
          </div>

          <motion.h1
            className="legal-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {isPrivacy ? "PRIVACY POLICY" : "TERMS OF SERVICE"}
          </motion.h1>
          <span className="legal-date">Last Updated: January 15, 2026</span>
        </header>

        {/* Legal Text Content */}
        <article className="legal-content">
          {isPrivacy ? (
            <div className="policy-sections">
              <section className="policy-block">
                <h2>1. Information We Collect</h2>
                <p>
                  At NEXODE Studio, we prioritize your privacy and transparency. We only collect personal information that you voluntarily submit through our project inquiry forms, direct email correspondence, or newsletter subscriptions. This may include your name, work email address, company details, and project specifications.
                </p>
              </section>

              <section className="policy-block">
                <h2>2. How We Use Your Information</h2>
                <p>
                  Any information gathered is used exclusively to evaluate creative project inquiries, prepare tailored proposals, communicate regarding active design contracts, and send periodic studio updates if you opted in. We never sell, rent, or trade your personal data to third parties.
                </p>
              </section>

              <section className="policy-block">
                <h2>3. Analytics and Cookies</h2>
                <p>
                  We utilize privacy-focused, anonymized analytics to measure site traffic, page load performance, and user interaction patterns. These analytics do not store personally identifiable data and help us optimize your browsing experience.
                </p>
              </section>

              <section className="policy-block">
                <h2>4. Data Retention &amp; Security</h2>
                <p>
                  We implement industry-standard encryption and security protocols to safeguard your submitted information. Project briefs and correspondence are retained only as long as necessary to fulfill client services or statutory legal requirements.
                </p>
              </section>

              <section className="policy-block">
                <h2>5. Contact Concerning Privacy</h2>
                <p>
                  If you have any questions or wish to request data deletion, please contact our data team directly at{' '}
                  <a href="mailto:privacy@nexode.studio" className="legal-link">privacy@nexode.studio</a>.
                </p>
              </section>
            </div>
          ) : (
            <div className="policy-sections">
              <section className="policy-block">
                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing the NEXODE website or engaging our creative design services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please refrain from using our digital properties.
                </p>
              </section>

              <section className="policy-block">
                <h2>2. Intellectual Property Rights</h2>
                <p>
                  All case studies, conceptual brand systems, interactive code shaders, typography selections, and visual media displayed on this website are the proprietary property of NEXODE or our respective clients and are protected by international intellectual property laws.
                </p>
              </section>

              <section className="policy-block">
                <h2>3. Studio Engagements &amp; Deliverables</h2>
                <p>
                  Client design engagements, scope boundaries, delivery schedules, and intellectual property transfers are governed by individual Master Services Agreements (MSA) executed prior to project kick-off.
                </p>
              </section>

              <section className="policy-block">
                <h2>4. Limitation of Liability</h2>
                <p>
                  This website and all creative concepts are provided on an "as is" basis without warranties of any kind. NEXODE is not liable for indirect or consequential damages arising from site access or reliance on published content.
                </p>
              </section>

              <section className="policy-block">
                <h2>5. Governing Law &amp; Jurisdiction</h2>
                <p>
                  These terms are governed by the laws of the State of New York, without regard to conflict of law principles.
                </p>
              </section>
            </div>
          )}
        </article>
      </div>

      <style>{`
        .legal-page {
          background-color: var(--color-bg);
          padding-top: 150px;
          padding-bottom: 120px;
          min-height: 100vh;
        }

        .legal-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .legal-header {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .legal-toggle-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-geist);
          font-size: 14px;
        }

        .toggle-link {
          color: rgba(0, 0, 0, 0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .toggle-link.is-active {
          color: #000000;
          font-weight: 600;
        }

        .toggle-separator {
          color: rgba(0, 0, 0, 0.3);
        }

        .legal-title {
          font-family: var(--font-host);
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--color-text);
          margin: 0;
        }

        .legal-date {
          font-family: var(--font-geist);
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
        }

        .policy-sections {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .policy-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .policy-block h2 {
          font-family: var(--font-host);
          font-size: 24px;
          font-weight: 500;
          color: var(--color-text);
          margin: 0;
        }

        .policy-block p {
          font-family: var(--font-geist);
          font-size: 17px;
          line-height: 1.65;
          color: rgba(0, 0, 0, 0.7);
          margin: 0;
        }

        .legal-link {
          color: #000000;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
