"use client";

import { useEffect, useState } from "react";

const RESUME_URL =
  "https://drive.google.com/file/d/1L3piVAgsBu6Go2M28-Jr4Qhi4W4IlZHx/view";

const skills = [
  "Power BI", "DAX", "Power Query", "SQL", "Data Modeling",
  "ETL / ELT", "KPI Design", "Dashboard UX", "Data Quality", "Business Analysis",
];

const metrics = [
  { value: "14.2M", label: "Rows modeled" },
  { value: "38%", label: "Faster reporting" },
  { value: "99.8%", label: "Refresh reliability" },
  { value: "12", label: "Executive KPIs" },
];

const capabilities = [
  {
    index: "01",
    title: "Decision-ready dashboards",
    text: "I design reporting around the decision first—then build the visuals, drill paths, and KPI hierarchy around it.",
    meta: "POWER BI · KPI DESIGN · UX",
  },
  {
    index: "02",
    title: "Models built to scale",
    text: "Star schemas, clean relationships, reusable measures, and business-friendly semantic layers that stay understandable as reporting grows.",
    meta: "DATA MODELING · DAX · GOVERNANCE",
  },
  {
    index: "03",
    title: "Reliable data pipelines",
    text: "From raw operational exports to analysis-ready datasets: profiling, cleaning, transformation, validation, and refresh monitoring.",
    meta: "SQL · POWER QUERY · ETL",
  },
];

const pipeline = [
  { code: "SRC", label: "Operational data" },
  { code: "SQL", label: "Transform" },
  { code: "MDL", label: "Semantic model" },
  { code: "DAX", label: "Business logic" },
  { code: "BI", label: "Decision layer" },
];

// You can use either a Google Drive share URL or its bare file ID.
const GOOGLE_DRIVE_VIDEO_1 =
  "https://drive.google.com/file/d/1QewuUnzZqP5WTp-KsEmWtDYWffyZHybA/view";
const GOOGLE_DRIVE_VIDEO_2 =
  "https://drive.google.com/file/d/16Abzs4Mw1n3M9aEtKamNsuEW1unGaHI8/view";

function getGoogleDriveFileId(source: string) {
  const value = source.trim();
  if (!value || value.startsWith("YOUR_")) return null;

  const pathMatch = value.match(/\/file\/d\/([^/?#]+)/);
  if (pathMatch) return pathMatch[1];

  try {
    const queryId = new URL(value).searchParams.get("id");
    if (queryId) return queryId;
  } catch {
    // A bare Drive file ID is also supported.
  }

  return /^[a-zA-Z0-9_-]+$/.test(value) ? value : null;
}

function DriveVideo({ source, title }: { source: string; title: string }) {
  const fileId = getGoogleDriveFileId(source);

  if (!fileId) {
    return (
      <div className="video-placeholder">
        <div className="video-placeholder-grid" />
        <span className="video-number">VIDEO</span>
        <div>
          <strong>{title}</strong>
          <p>Add a valid Google Drive share URL or file ID in app/page.tsx.</p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      className="drive-video"
      src={`https://drive.google.com/file/d/${fileId}/preview`}
      title={title}
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="site-shell">
      <div className="parallax parallax-grid" style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }} />
      <div className="parallax parallax-glow" style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }} />
      <div className="parallax parallax-orbit" style={{ transform: `translate3d(0, ${scrollY * 0.14}px, 0)` }} />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brand-mark">BI</span>
          <span>
            IVER <span className="brand-bi">BI</span>{" "}
            <span className="brand-dim">DEV</span>
          </span>
        </a>

        <nav className="topnav" aria-label="Main navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#work">Work</a>
          <a href={RESUME_URL} target="_blank" rel="noreferrer">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="availability" href="#contact">
          <span className="pulse-dot" />
          Available for BI roles
        </a>
      </header>

      <section className="hero section-frame" id="top">
        <div className="hero-eyebrow">
          <span>BUSINESS INTELLIGENCE DEVELOPER</span>
          <span className="eyebrow-line" />
          <span>MANILA · PH</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker">I turn messy business data into</p>
            <h1>systems people<br /><span>can decide from.</span></h1>
            <p className="hero-description">
              Business intelligence built around clarity, trust, and speed—from
              SQL transformation and dimensional models to DAX measures and
              executive-ready dashboards.
            </p>

            <div className="hero-actions">
              <a className="primary-link" href="#work">
                <span>Explore selected work</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link resume-link" href={RESUME_URL} target="_blank" rel="noreferrer">
                <span>View résumé</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-console" aria-label="Business intelligence workflow">
            <div className="console-head">
              <span>DECISION SYSTEM / 001</span>
              <span className="console-live"><i /> LIVE</span>
            </div>
            <div className="console-kpi">
              <div><span className="console-label">Revenue signal</span><strong>+18.4%</strong></div>
              <div className="spark-bars" aria-hidden="true">
                {[38, 46, 41, 58, 61, 72, 67, 83, 89, 96].map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="query-window">
              <div className="query-tabs"><span className="active">revenue_model.sql</span><span>measures.dax</span></div>
              <pre><code>
                <span className="code-dim">01</span>{"  "}<span className="code-keyword">WITH</span> clean_orders{" "}<span className="code-keyword">AS</span> ({"\n"}
                <span className="code-dim">02</span>{"    "}<span className="code-keyword">SELECT</span> date_key, region, revenue{"\n"}
                <span className="code-dim">03</span>{"    "}<span className="code-keyword">FROM</span> fact_sales{"\n"}
                <span className="code-dim">04</span>{"    "}<span className="code-keyword">WHERE</span> is_valid = 1{"\n"}
                <span className="code-dim">05</span>{"  "}){"\n"}
                <span className="code-dim">06</span>{"  "}<span className="code-keyword">SELECT</span> *<span className="cursor-block"> </span>
              </code></pre>
            </div>
            <div className="console-foot">
              <span>MODEL HEALTH</span><div className="health-bar"><span /></div><strong>99.8%</strong>
            </div>
          </div>
        </div>

        <div className="metric-rail">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
          ))}
          <div className="metric-note"><span>↓</span>SCROLL TO INSPECT</div>
        </div>
      </section>

      <section className="skills-tape" aria-label="Core skills">
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}<i>◆</i></span>
          ))}
        </div>
      </section>

      <section className="capability-section section-frame" id="capabilities">
        <div className="section-index"><span>01 / CAPABILITIES</span><span>WHAT I BUILD</span></div>
        <div className="capability-heading">
          <p>A BI portfolio should show more than charts. It should show how data becomes something a business can trust.</p>
          <h2>From raw rows<br />to <em>clear action.</em></h2>
        </div>
        <div className="pipeline" aria-label="Business intelligence pipeline">
          {pipeline.map((item, index) => (
            <div className="pipeline-step" key={item.code}>
              <div className="pipeline-node"><span>{item.code}</span></div>
              <div><strong>{item.label}</strong><small>0{index + 1}</small></div>
              {index < pipeline.length - 1 && <span className="pipeline-connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className="capability-list">
          {capabilities.map((item) => (
            <article className="capability-row" key={item.index}>
              <span className="capability-index">{item.index}</span>
              <h3>{item.title}</h3><p>{item.text}</p><span className="capability-meta">{item.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section section-frame" id="work">
        <div className="section-index"><span>02 / SELECTED WORK</span><span>VIDEO WALKTHROUGHS</span></div>
        <div className="work-intro">
          <h2>Built to be<br /><span>interrogated.</span></h2>
          <p>Two walkthroughs showing the thinking behind the dashboard—not just the finished screen.</p>
        </div>
        <div className="video-stack">
          <article className="case-study case-study-one">
            <div className="case-meta"><span>CASE / 01</span><span>PERFORMANCE INTELLIGENCE</span></div>
            <div className="video-frame"><DriveVideo source={GOOGLE_DRIVE_VIDEO_1} title="Business intelligence dashboard walkthrough one" /></div>
            <div className="case-copy">
              <div><span className="case-type">EXECUTIVE DASHBOARD</span><h3>Revenue & operational performance</h3></div>
              <p>A compact executive view designed to surface movement, exceptions, and the business drivers behind a KPI—not drown the viewer in charts.</p>
              <div className="case-tags"><span>Power BI</span><span>DAX</span><span>SQL</span><span>Data Modeling</span></div>
            </div>
          </article>
          <article className="case-study case-study-two">
            <div className="case-meta"><span>CASE / 02</span><span>ANALYTICS WORKFLOW</span></div>
            <div className="video-frame"><DriveVideo source={GOOGLE_DRIVE_VIDEO_2} title="Business intelligence dashboard walkthrough two" /></div>
            <div className="case-copy">
              <div><span className="case-type">ANALYTICS SYSTEM</span><h3>From source data to decision layer</h3></div>
              <p>A walkthrough focused on the invisible BI work: transformation, metric logic, model structure, data quality, and how those choices improve the final experience.</p>
              <div className="case-tags"><span>Power Query</span><span>ETL</span><span>Data Quality</span><span>KPI Design</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="proof-section section-frame">
        <div className="section-index"><span>03 / HOW I THINK</span><span>BI PRINCIPLES</span></div>
        <div className="proof-grid">
          <div className="proof-statement">
            <span className="proof-label">THE STANDARD</span>
            <h2>Fast dashboards are good.<br /><span>Trusted dashboards are useful.</span></h2>
          </div>
          <div className="proof-points">
            <div><span>01</span><p>Define the business question before choosing the visualization.</p></div>
            <div><span>02</span><p>Keep metric definitions consistent across every report and team.</p></div>
            <div><span>03</span><p>Make anomalies visible and traceable back to their source.</p></div>
            <div><span>04</span><p>Optimize the model so reporting stays responsive as data grows.</p></div>
          </div>
        </div>
      </section>

      <footer className="footer section-frame" id="contact">
        <div className="footer-kicker">OPEN TO BUSINESS INTELLIGENCE OPPORTUNITIES</div>
        <a className="footer-cta" href="mailto:your.email@example.com">
          <span>Let&apos;s make the numbers</span><strong>mean something.</strong><i aria-hidden="true">↗</i>
        </a>
        <div className="footer-bottom">
          <span>IVER / BUSINESS INTELLIGENCE DEVELOPER</span>
          <span>POWER BI · SQL · DAX · DATA MODELING</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
