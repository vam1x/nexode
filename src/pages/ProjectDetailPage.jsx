import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import RollingText from '../components/RollingText';

export default function ProjectDetailPage() {
  const { slug } = useParams();

  // Find project by slug or ID, including legacy Framer slug "best-practices" -> astra
  const projectIndex = projects.findIndex(
    (p) => p.slug === slug || p.id === slug || (slug === 'best-practices' && p.id === 'astra')
  );

  const project = projectIndex !== -1 ? projects[projectIndex] : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Bold Craft Case Study`;
    } else {
      document.title = "Project Not Found — Bold Craft";
    }
    window.scrollTo(0, 0);
  }, [project, slug]);

  if (!project) {
    return (
      <div className="not-found-project container">
        <h2>Case Study Not Found</h2>
        <p>The project you are looking for does not exist or may have been updated.</p>
        <Link to="/works" className="back-link">
          <RollingText text="← Back to Works" />
        </Link>
        <style>{`
          .not-found-project {
            padding: 180px 20px 100px;
            text-align: center;
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
          }
          .back-link {
            display: inline-block;
            margin-top: 16px;
            padding: 12px 24px;
            background: #000;
            color: #fff;
            text-transform: uppercase;
            font-size: 14px;
          }
        `}</style>
      </div>
    );
  }

  // Next project computation
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="project-detail-page">
      {/* Hero Header */}
      <header className="project-header container">
        <div className="breadcrumb-nav">
          <Link to="/works" className="breadcrumb-link">
            ← WORKS
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{project.title}</span>
        </div>

        <motion.div
          className="header-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="project-category-tag">{project.category}</span>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-summary">{project.description}</p>
        </motion.div>

        {/* Project Meta Bar */}
        <div className="project-meta-grid">
          <div className="meta-item">
            <span className="meta-label">CLIENT</span>
            <span className="meta-value">{project.client}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">TIMELINE</span>
            <span className="meta-value">{project.duration}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">YEAR</span>
            <span className="meta-value">{project.year}</span>
          </div>
          <div className="meta-item meta-services">
            <span className="meta-label">DISCIPLINES</span>
            <div className="services-tags">
              {project.services.map((srv) => (
                <span key={srv} className="service-badge">{srv}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Cover Image */}
      <section className="project-hero-media container">
        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={project.image}
            alt={project.alt || project.title}
            className="hero-cover-img"
          />
        </motion.div>
      </section>

      {/* Case Study Narrative Body */}
      <section className="case-study-body container">
        <div className="narrative-grid">
          {/* Section: Overview */}
          <div className="narrative-section">
            <div className="narrative-label-col">
              <span className="narrative-num">01</span>
              <h2 className="narrative-title">Overview</h2>
            </div>
            <div className="narrative-content-col">
              <p className="narrative-text">{project.overview}</p>
            </div>
          </div>

          {/* Section: The Challenge */}
          <div className="narrative-section">
            <div className="narrative-label-col">
              <span className="narrative-num">02</span>
              <h2 className="narrative-title">The Challenge</h2>
            </div>
            <div className="narrative-content-col">
              <p className="narrative-text">{project.challenge}</p>
            </div>
          </div>

          {/* Section: The Solution */}
          <div className="narrative-section">
            <div className="narrative-label-col">
              <span className="narrative-num">03</span>
              <h2 className="narrative-title">The Solution</h2>
            </div>
            <div className="narrative-content-col">
              <p className="narrative-text">{project.solution}</p>
            </div>
          </div>

          {/* Section: Impact & Result */}
          <div className="narrative-section highlight-section">
            <div className="narrative-label-col">
              <span className="narrative-num">04</span>
              <h2 className="narrative-title">Measurable Impact</h2>
            </div>
            <div className="narrative-content-col">
              <p className="narrative-text impact-text">{project.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Gallery Showcase */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery-section container">
          <div className="gallery-grid">
            {project.gallery.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                className={`gallery-item item-${idx % 3}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} gallery showcase ${idx + 1}`}
                  className="gallery-img"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Teaser Footer */}
      <footer className="next-project-bar">
        <div className="next-inner container">
          <span className="next-label">NEXT CASE STUDY</span>
          <Link to={nextProject.href} className="next-link group">
            <div className="next-title-wrap">
              <h3 className="next-project-title">
                <RollingText text={nextProject.title} />
              </h3>
              <span className="next-category">{nextProject.category}</span>
            </div>
            <span className="next-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>

      <style>{`
        .project-detail-page {
          background-color: var(--color-bg);
          padding-top: 140px;
          min-height: 100vh;
        }

        .breadcrumb-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-geist);
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
          margin-bottom: 30px;
        }

        .breadcrumb-link {
          color: var(--color-text);
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .breadcrumb-link:hover {
          opacity: 0.6;
        }

        .project-category-tag {
          font-family: var(--font-geist);
          font-size: 15px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          display: block;
          margin-bottom: 12px;
        }

        .project-title {
          font-family: var(--font-host);
          font-size: clamp(48px, 8vw, 100px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: var(--color-text);
          margin: 0 0 20px 0;
        }

        .project-summary {
          font-family: var(--font-geist);
          font-size: clamp(18px, 2.2vw, 24px);
          line-height: 1.4;
          color: rgba(0, 0, 0, 0.7);
          max-width: 860px;
          margin: 0;
        }

        .project-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr) 2fr;
          gap: 30px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding: 32px 0;
          margin-top: 60px;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .meta-label {
          font-family: var(--font-geist);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
        }

        .meta-value {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text);
        }

        .services-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .service-badge {
          font-family: var(--font-geist);
          font-size: 13px;
          background-color: #f2f2f2;
          padding: 4px 10px;
          border-radius: 2px;
          color: rgba(0, 0, 0, 0.75);
        }

        .project-hero-media {
          margin-top: 50px;
          margin-bottom: 90px;
        }

        .hero-image-wrap {
          width: 100%;
          max-height: 720px;
          overflow: hidden;
          background-color: #f2f2f2;
        }

        .hero-cover-img {
          width: 100%;
          height: 100%;
          max-height: 720px;
          object-fit: cover;
          display: block;
        }

        .case-study-body {
          padding-bottom: 100px;
        }

        .narrative-grid {
          display: flex;
          flex-direction: column;
          gap: 60px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding-top: 60px;
        }

        .narrative-section {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 60px;
          align-items: flex-start;
        }

        .narrative-label-col {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .narrative-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(0, 0, 0, 0.4);
        }

        .narrative-title {
          font-family: var(--font-host);
          font-size: 28px;
          font-weight: 500;
          color: var(--color-text);
          margin: 0;
        }

        .narrative-text {
          font-family: var(--font-geist);
          font-size: 18px;
          line-height: 1.6;
          color: rgba(0, 0, 0, 0.75);
          margin: 0;
          max-width: 740px;
        }

        .highlight-section {
          background-color: #000000;
          color: #ffffff;
          padding: 48px 40px;
          margin-top: 20px;
        }

        .highlight-section .narrative-title {
          color: #ffffff;
        }

        .highlight-section .narrative-num {
          color: rgba(255, 255, 255, 0.4);
        }

        .impact-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          font-weight: 400;
        }

        .project-gallery-section {
          padding-bottom: 120px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .gallery-item {
          overflow: hidden;
          background-color: #f2f2f2;
          height: 540px;
        }

        .gallery-item:first-child {
          grid-column: 1 / -1;
          height: 640px;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.03);
        }

        .next-project-bar {
          background-color: #000000;
          color: #ffffff;
          padding: 90px 0;
          width: 100%;
        }

        .next-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .next-label {
          font-family: var(--font-geist);
          font-size: 14px;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
        }

        .next-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          color: #ffffff;
          padding-top: 10px;
        }

        .next-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .next-project-title {
          font-family: var(--font-host);
          font-size: clamp(36px, 6vw, 76px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
          text-transform: uppercase;
        }

        .next-category {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
        }

        .next-arrow {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 300;
          transition: transform 0.3s ease;
        }

        .next-link:hover .next-arrow {
          transform: translateX(14px);
        }

        @media (max-width: 960px) {
          .project-meta-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .meta-services {
            grid-column: 1 / -1;
          }
          .narrative-section {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-item,
          .gallery-item:first-child {
            height: 400px;
          }
        }
      `}</style>
    </article>
  );
}
