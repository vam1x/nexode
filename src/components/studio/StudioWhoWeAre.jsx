import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STATEMENT_TEXT = "WE CRAFT DIGITAL EXPERIENCES THAT USERS LOVE AND BUSINESSES TRUST. FROM PRODUCT DESIGN AND UI/UX TO MODERN WEBSITES, WE TURN IDEAS INTO INTUITIVE, HIGH-PERFORMING PRODUCTS THAT DRIVE GROWTH.";

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
  const color = useTransform(scrollProgress, [start, end], ["rgba(230, 230, 230, 0.2)", "#e6e6e6"]);

  return (
    <motion.span style={{ color }} className="reveal-char">
      {char}
    </motion.span>
  );
}

export default function StudioWhoWeAre() {
  const textContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start 0.85", "center 0.4"]
  });

  const words = STATEMENT_TEXT.split(" ");
  let globalCharIndex = 0;
  const totalChars = STATEMENT_TEXT.length;

  return (
    <section className="studio-who-we-are" id="who-we-are">
      <div className="who-inner container">
        {/* Upper container: Full width scroll-reveal copy */}
        <div ref={textContainerRef} className="upper-container">
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

        {/* Bottom container: 3 Editorial Images */}
        <div className="images-container">
          <motion.div
            className="img-card card-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://framerusercontent.com/images/ckNnEn0gZDJD3KlQ5pew1wY0f0I.png?width=904&height=1200"
              alt="Studio showcase 1"
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
              src="https://framerusercontent.com/images/w6Se4jlxX1STTQ0PAxketKvJtY.png?width=904&height=1200"
              alt="Studio showcase 2"
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
              src="https://framerusercontent.com/images/cFTAO2s1PC0t8c5H6FIPby6o8.jpg?width=1058&height=1182"
              alt="Studio showcase 3"
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
        .studio-who-we-are {
          background-color: #000000;
          color: #e6e6e6;
          padding: 120px 0;
          width: 100%;
          position: relative;
        }

        .who-inner {
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .upper-container {
          max-width: 1180px;
          margin: 0 auto;
          text-align: left;
        }

        .statement-paragraph {
          font-family: var(--font-geist);
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -0.01em;
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
          background-color: #111111;
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
          border-top: 1px solid rgba(230, 230, 230, 0.12);
        }

        .logos-title {
          font-family: var(--font-geist);
          font-size: 20px;
          font-weight: 500;
          color: #e6e6e6;
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
          filter: brightness(0) invert(0.9);
          opacity: 0.7;
          transition: opacity 0.2s ease, filter 0.2s ease;
        }

        .logo-item:hover {
          opacity: 1;
          filter: brightness(0) invert(1);
        }

        .brand-logo-img {
          max-height: 44px;
          max-width: 120px;
          object-fit: contain;
        }

        @media (max-width: 1024px) {
          .images-container {
            flex-direction: column;
            align-items: stretch;
          }
          .card-1, .card-2, .card-3 {
            max-width: 100%;
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
