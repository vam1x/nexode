import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import RollingText from '../components/RollingText';

export default function BlogDetailPage() {
  const { slug } = useParams();

  const blogIndex = blogs.findIndex((b) => b.slug === slug || b.id === slug);
  const blog = blogIndex !== -1 ? blogs[blogIndex] : null;

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} — Bold Craft Insights`;
    } else {
      document.title = "Article Not Found — Bold Craft";
    }
    window.scrollTo(0, 0);
  }, [blog, slug]);

  if (!blog) {
    return (
      <div className="not-found-blog container">
        <h2>Article Not Found</h2>
        <p>The post you are searching for does not exist or may have been renamed.</p>
        <Link to="/blogs" className="back-link">
          <RollingText text="← Back to All Articles" />
        </Link>
        <style>{`
          .not-found-blog {
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

  const otherBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <article className="blog-detail-page">
      {/* Article Header */}
      <header className="article-header container">
        <div className="breadcrumb-nav">
          <Link to="/blogs" className="breadcrumb-link">
            ← BLOGS
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{blog.category}</span>
        </div>

        <motion.div
          className="header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="article-meta-tags">
            <span className="meta-category">{blog.category}</span>
            <span className="meta-dot">•</span>
            <span className="meta-readtime">{blog.readTime}</span>
            <span className="meta-dot">•</span>
            <span className="meta-date">{blog.date}</span>
          </div>

          <h1 className="article-title">{blog.title}</h1>
        </motion.div>

        {/* Author Bio Bar */}
        <div className="author-bar">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="author-avatar"
          />
          <div className="author-meta">
            <span className="author-name">{blog.author.name}</span>
            <span className="author-role">{blog.author.role}</span>
          </div>
        </div>
      </header>

      {/* Main Cover Image */}
      <section className="article-media container">
        <motion.div
          className="media-wrap"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={blog.image}
            alt={blog.alt || blog.title}
            className="article-cover-img"
          />
        </motion.div>
      </section>

      {/* Article Content Layout */}
      <section className="article-body container">
        {/* Lead Excerpt */}
        <div className="article-lead">
          <p>{blog.excerpt}</p>
        </div>

        {/* Narrative Sections */}
        <div className="article-sections">
          {blog.sections && blog.sections.map((sec, idx) => (
            <div key={idx} className="body-section">
              <h2 className="section-heading">{sec.heading}</h2>
              <p className="section-paragraph">{sec.text}</p>
            </div>
          ))}
        </div>

        {/* Key Takeaway Callout */}
        <div className="article-takeaway">
          <span className="takeaway-label">KEY TAKEAWAY</span>
          <p className="takeaway-quote">
            "Exceptional digital craft is never an afterthought. It is the synthesis of user empathy, strategic rigor, and relentless iteration."
          </p>
        </div>
      </section>

      {/* More Insights / Related Posts */}
      <section className="more-articles container">
        <div className="more-header">
          <span className="more-label">CONTINUE READING</span>
          <h3 className="more-title">RELATED PERSPECTIVES</h3>
        </div>

        <div className="related-grid">
          {otherBlogs.map((other) => (
            <div key={other.id} className="related-card">
              <Link to={other.href} className="related-link group">
                <div className="related-img-wrap">
                  <img src={other.image} alt={other.title} className="related-img" />
                </div>
                <div className="related-meta">
                  <span className="related-date">{other.date} • {other.readTime}</span>
                  <h4 className="related-title">
                    <RollingText text={other.title} />
                  </h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .blog-detail-page {
          background-color: var(--color-bg);
          padding-top: 140px;
          padding-bottom: 120px;
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
        }

        .breadcrumb-link:hover {
          opacity: 0.6;
        }

        .article-meta-tags {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-geist);
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          margin-bottom: 16px;
        }

        .meta-category {
          color: #000000;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .meta-dot {
          opacity: 0.4;
        }

        .article-title {
          font-family: var(--font-host);
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--color-text);
          margin: 0 0 36px 0;
          max-width: 1000px;
        }

        .author-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 50px;
        }

        .author-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          background-color: #eee;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .author-name {
          font-family: var(--font-host);
          font-size: 16px;
          font-weight: 500;
          color: var(--color-text);
        }

        .author-role {
          font-family: var(--font-geist);
          font-size: 14px;
          color: rgba(0, 0, 0, 0.55);
        }

        .article-media {
          margin-bottom: 70px;
        }

        .media-wrap {
          width: 100%;
          max-height: 640px;
          overflow: hidden;
          background-color: #f4f4f4;
        }

        .article-cover-img {
          width: 100%;
          height: 100%;
          max-height: 640px;
          object-fit: cover;
          display: block;
        }

        .article-body {
          max-width: 840px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 48px;
          padding-bottom: 90px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .article-lead {
          font-family: var(--font-geist);
          font-size: clamp(20px, 2.2vw, 24px);
          line-height: 1.45;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          border-left: 3px solid #000000;
          padding-left: 24px;
        }

        .article-sections {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .body-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .section-heading {
          font-family: var(--font-host);
          font-size: 26px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--color-text);
          margin: 0;
        }

        .section-paragraph {
          font-family: var(--font-geist);
          font-size: 18px;
          line-height: 1.7;
          color: rgba(0, 0, 0, 0.75);
          margin: 0;
        }

        .article-takeaway {
          background-color: #f7f7f7;
          border-radius: 4px;
          padding: 36px 40px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .takeaway-label {
          font-family: var(--font-geist);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
        }

        .takeaway-quote {
          font-family: var(--font-host);
          font-size: 20px;
          line-height: 1.45;
          font-weight: 400;
          color: #000000;
          margin: 0;
        }

        .more-articles {
          padding-top: 80px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .more-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .more-label {
          font-family: var(--font-geist);
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
          letter-spacing: 0.06em;
        }

        .more-title {
          font-family: var(--font-host);
          font-size: 32px;
          font-weight: 400;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          margin: 0;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .related-link {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-decoration: none;
          color: inherit;
        }

        .related-img-wrap {
          width: 100%;
          height: 320px;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .related-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .related-card:hover .related-img {
          transform: scale(1.04);
        }

        .related-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .related-date {
          font-family: var(--font-geist);
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
        }

        .related-title {
          font-family: var(--font-host);
          font-size: 20px;
          font-weight: 500;
          line-height: 1.3;
          margin: 0;
          color: #000000;
        }

        @media (max-width: 809px) {
          .related-grid {
            grid-template-columns: 1fr;
          }
          .article-body {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </article>
  );
}
