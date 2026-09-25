import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STATEMENT_TEXT = "We craft digital experiences that users love and businesses trust. From Product Design and UI/UX to modern websites, we turn ideas into intuitive, high-performing products that drive growth.";

const BRAND_LOGOS = [
  { id: 1, src: "https://framerusercontent.com/images/DSfWdvI5vceONLMA95JXn7kJnzE.png?width=118&height=72", alt: "Brand 1" },
  { id: 2, src: "https://framerusercontent.com/images/aWo0bpqJ37DmNxYmnWLXECugjYc.png?width=140&height=80", alt: "Brand 2" },
  { id: 3, src: "https://framerusercontent.com/images/U1bdExaWPMD0TeYil1vo1fc7GIY.png?width=72&height=82", alt: "Brand 3" },
  { id: 4, src: "https://framerusercontent.com/images/alDlQDwyIzuUt2HqDlpxTFoEck.png?width=120&height=80", alt: "Brand 4" },
  { id: 5, src: "https://framerusercontent.com/images/Iyz3XURMNtRFAJaBEVdLv6QdfIY.png?width=98&height=96", alt: "Brand 5" },
  { id: 6, src: "https://framerusercontent.com/images/axrgU5XLo2aTmVtuZwPl8tbDHI.png?width=100&height=78", alt: "Brand 6" },
  { id: 7, src: "https://framerusercontent.com/images/PY6XG9fgS4iPmiTipgQCoBilY.png?width=156&height=64", alt: "Brand 7" }
];

function CharacterSpan({ char, index, total, scrollProgress }) {
  const start = index / total;
  const end = Math.min(start + 0.05, 1);
  const color = useTransform(scrollProgress, [start, end], ["#f1f1f1", "#000000"]);

  return (
    <motion.span style={{ color }} className="reveal-char">
      {char}
    </motion.span>
  );
}

function CounterNumber({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const duration = 1800; // ms

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <span className="stat-num">
      {count}{suffix}
    </span>
  );
}

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start 0.85", "center 0.4"]
  });

  const words = STATEMENT_TEXT.split(" ");
  let globalCharIndex = 0;
  const totalChars = STATEMENT_TEXT.length;

  return (
    <section ref={sectionRef} className="who-we-are-section" id="who-we-are">
      <div className="who-inner container">
        {/* Upper container: Label & Scroll reveal text on Left, Stats on Right */}
        <div className="upper-container">
          <div ref={textContainerRef} className="text-col">
            <span className="section-label">Who We Are</span>
            <p className="statement-paragraph">
              {words.map((word, wIdx) => {
                const chars = word.split("");
                return (
                  <span key={wIdx} className="reveal-word">
                    {chars.map((c) => {
                      const idx = globalCharIndex++;
                      return (
                        <CharacterSpan
                          key={idx}
                          char={c}
                          index={idx}
                          total={totalChars}
                          scrollProgress={scrollYProgress}
                        />
                      );
                    })}
                    {wIdx < words.length - 1 && (
                      <CharacterSpan
                        char=" "
                        index={globalCharIndex++}
                        total={totalChars}
                        scrollProgress={scrollYProgress}
                      />
                    )}
                  </span>
                );
              })}
            </p>
          </div>

          <motion.div
            className="stats-col"
            onViewportEnter={() => setStatsVisible(true)}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="stat-item">
              <CounterNumber target={8} suffix="+" isVisible={statsVisible} />
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <CounterNumber target={120} suffix="+" isVisible={statsVisible} />
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <CounterNumber target={100} suffix="%" isVisible={statsVisible} />
              <span className="stat-label">Client Retention</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom container: 3 Design Studio Workflow Images */}
        <div className="images-container">
          <motion.div
            className="img-card card-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/studio_figma_workspace.jpg"
              alt="UI UX design sprint and Figma component architecture"
              className="editorial-img"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="img-card card-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/studio_mobile_proto.jpg"
              alt="Interactive mobile app prototype testing"
              className="editorial-img"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="img-card card-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/studio_design_review.jpg"
              alt="Digital product architecture and design system review"
              className="editorial-img"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Third container: Client Logos Marquee */}
        <div className="logos-container">
          <h4 className="logos-title">Trusted by most loved brands in the world</h4>
          <div className="logos-marquee">
            <div className="marquee-track">
              {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
                <div key={idx} className="logo-item">
                  <img src={logo.src} alt={logo.alt} className="brand-logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .who-we-are-section {
          background-color: #ffffff;
          color: #000000;
          padding: 100px 0;
          width: 100%;
          position: relative;
        }

        .who-inner {
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .upper-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 60px;
          width: 100%;
        }

        .text-col {
          flex: 1;
          max-width: 820px;
        }

        .section-label {
          display: inline-block;
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 400;
          color: #000000;
          margin-bottom: 24px;
        }

        .statement-paragraph {
          font-family: var(--font-geist);
          font-size: 40px;
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .reveal-word {
          display: inline-block;
          white-space: pre;
        }

        .reveal-char {
          display: inline;
          transition: color 0.1s linear;
        }

        .stats-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
          flex-shrink: 0;
          min-width: 260px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-num {
          font-family: var(--font-geist);
          font-size: 100px;
          font-weight: 500;
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: #000000;
        }

        .stat-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.6);
        }

        /* 3 Editorial Images Row */
        .images-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          width: 100%;
        }

        .img-card {
          overflow: hidden;
          background-color: #f6f6f6;
        }

        .card-1 {
          flex: 1.2;
          max-width: 496px;
          height: 582px;
        }

        .card-2 {
          flex: 1.2;
          max-width: 496px;
          height: 512px;
        }

        .card-3 {
          flex: 0.9;
          max-width: 345px;
          height: 350px;
        }

        .editorial-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .img-card:hover .editorial-img {
          transform: scale(1.04);
        }

        /* Logos Marquee */
        .logos-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 100%;
          padding-top: 40px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .logos-title {
          font-family: var(--font-geist);
          font-size: 20px;
          font-weight: 500;
          color: #000000;
          margin: 0;
          text-align: center;
        }

        .logos-marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 80px;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: opacity 0.2s ease, filter 0.2s ease;
        }

        .logo-item:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        .brand-logo-img {
          max-height: 44px;
          max-width: 120px;
          object-fit: contain;
        }

        @media (max-width: 1024px) {
          .upper-container {
            flex-direction: column;
          }
          .statement-paragraph {
            font-size: 32px;
          }
          .stats-col {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }
          .stat-num {
            font-size: 72px;
          }
          .images-container {
            flex-direction: column;
            align-items: stretch;
          }
          .card-1, .card-2, .card-3 {
            max-width: 100%;
            height: 400px;
          }
        }

        @media (max-width: 640px) {
          .statement-paragraph {
            font-size: 26px;
          }
          .stats-col {
            flex-direction: column;
            gap: 24px;
          }
          .stat-num {
            font-size: 56px;
          }
        }
      `}</style>
    </section>
  );
}
