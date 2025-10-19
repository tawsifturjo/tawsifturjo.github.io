---
layout: single 
permalink: /
---
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Mohammed Tawshif Hossain — Minimal Portfolio</title>
<style>
  :root{
    /* tweak this to move everything left/right */
    --content-offset: 60px; /* increase to move more right */
    --card-radius: 12px;
    --card-bg: rgba(255,255,255,0.04);
    --accent-1: #667eea;
    --accent-2: #f093fb;
    --text-weak: rgba(255,255,255,0.72);
    --text-muted: rgba(255,255,255,0.6);
  }

  /* reset */
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family: Inter, "Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial;
    background:#0a0e27;color:#fff;line-height:1.45;
    -webkit-font-smoothing:antialiased;
  }

  /* GLOBAL container: same left starting point for all sections, then shifted right */
  .page {
    max-width:1100px;
    margin: 0 auto;
    padding-left: calc(24px + var(--content-offset));
    padding-right: 24px;
  }

  /* Small global scale down for "relatively smaller" feel */
  html { font-size: 14px; } /* change to 13px or 15px if you want smaller/larger */

  /* HERO */
  .hero {
    min-height: 60vh;
    display:flex;
    align-items:center;
    background: linear-gradient(135deg, var(--accent-1), #764ba2 60%, var(--accent-2));
    padding: 3rem 0;
  }
  .hero-inner {
    width:100%;
    max-width:800px;
  }
  .profile {
    width:120px;height:120px;border-radius:50%;
    background:linear-gradient(135deg,#f093fb,#f5576c);
    display:flex;align-items:center;justify-content:center;margin-bottom:1rem;
    box-shadow:0 12px 30px rgba(0,0,0,0.35);
  }
  h1{font-size:1.6rem;margin-bottom:0.25rem;font-weight:600}
  .title{font-size:0.95rem;color:var(--text-weak);margin-bottom:0.5rem}
  .subtitle{font-size:0.9rem;color:var(--text-muted);max-width:65ch;margin-bottom:1rem}

  .cta {
    display:flex;gap:0.6rem;flex-wrap:wrap;
  }
  .btn{
    padding:8px 18px;border-radius:999px;text-decoration:none;font-weight:600;font-size:0.9rem;
    display:inline-flex;align-items:center;gap:8px;
    transition:transform .22s ease, box-shadow .22s ease;
  }
  .btn-primary{background:#fff;color:var(--accent-1)}
  .btn-secondary{background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.06)}
  .btn:hover{transform:translateY(-4px)}

  /* SECTION TITLES align left to the same left starting point */
  .section-title {
    font-size:1.05rem;
    margin: 2.2rem 0 1rem;
    color: transparent;
    background: linear-gradient(135deg,var(--accent-1),var(--accent-2));
    -webkit-background-clip: text;
  }

  /* GRID and CARDS — all cards share same starting alignment and spacing */
  .grid { display:grid; gap:1rem; }

  /* Interests */
  .interests-grid {
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  }
  .card {
    background: var(--card-bg);
    border-radius: var(--card-radius);
    padding: 1rem;
    border: 1px solid rgba(255,255,255,0.04);
    transition: transform .28s cubic-bezier(.2,.9,.2,1), box-shadow .28s ease;
    will-change: transform, box-shadow;
  }
  /* uniform pop-up effect */
  .card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.45), 0 6px 18px rgba(102,126,234,0.12);
  }

  .interest-icon { font-size:1.2rem; margin-bottom:0.45rem; }
  .card h3 { font-size:1rem; margin-bottom:0.35rem; color:var(--accent-2) }
  .card p { font-size:0.88rem; color:var(--text-muted) }

  /* Stats row: make stat boxes align and pop */
  .stats-grid {
    grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
    align-items: center;
  }
  .stat {
    text-align:center; padding:1rem; border-radius:10px; background:var(--card-bg);
    transition: transform .28s ease, box-shadow .28s ease;
  }
  .stat:hover { transform: translateY(-10px); box-shadow: 0 12px 30px rgba(0,0,0,0.35) }
  .stat-number { font-size:1.6rem; font-weight:700; color:#fff }
  .stat-label { font-size:0.82rem; color:var(--text-weak) }

  /* Featured work */
  .work-grid { grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); }
  .work-card { display:flex; flex-direction:column; gap:0.6rem; }
  .work-tag { font-size:0.75rem; padding:4px 8px; border-radius:999px; background:rgba(102,126,234,0.12); width:fit-content; color:var(--accent-2) }
  .work-card h3 { font-size:1rem; margin-top:0.1rem }
  .work-card p { font-size:0.88rem; color:var(--text-muted) }
  .work-link { font-size:0.85rem; color:var(--accent-1); text-decoration:none }

  /* Footer */
  footer { padding:2rem 0 4rem; color:var(--text-muted); text-align:left }
  .footer-links { display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:0.75rem }
  .footer-link{ font-size:0.88rem; color:var(--text-muted); text-decoration:none }

  /* responsive tweaks */
  @media (max-width:720px){
    :root{ --content-offset: 18px; }
    .hero { padding:2rem 0; }
    .profile{ width:96px;height:96px }
    html{ font-size:13px }
    .page{ padding-left: calc(16px + var(--content-offset)); padding-right:16px }
  }
</style>
</head>
<body>

<main class="page">

  <!-- HERO -->
  <section class="hero" aria-label="hero">
    <div class="hero-inner">
      <div class="profile">🎓</div>
      <h1>Mohammed Tawshif Hossain</h1>
      <div class="title">Electrical & Electronic Engineering Student | Researcher</div>
      <div class="subtitle">Passionate about biomedical signal processing, quantum photonics, and computational neuroscience.</div>
      <div class="cta">
        <a class="btn btn-primary" href="/publications/">📚 Publications</a>
        <a class="btn btn-secondary" href="/cv/">📄 CV</a>
      </div>
    </div>
  </section>

  <!-- Research Interests -->
  <section>
    <h2 class="section-title">Research Interests</h2>
    <div class="grid interests-grid">
      <div class="card">
        <div class="interest-icon">🔬</div>
        <h3>Quantum Photonics</h3>
        <p>Exploring quantum effects in photonic devices and systems.</p>
      </div>
      <div class="card">
        <div class="interest-icon">💡</div>
        <h3>Computational Nanophotonics</h3>
        <p>Design & simulation of nanoscale optical devices.</p>
      </div>
      <div class="card">
        <div class="interest-icon">🧠</div>
        <h3>Computational Neuroscience</h3>
        <p>ML and signal processing to decode brain signals.</p>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section>
    <h2 class="section-title">Stats</h2>
    <div class="grid stats-grid" style="margin-top:0.5rem">
      <div class="stat"><div class="stat-number">2</div><div class="stat-label">Published Papers</div></div>
      <div class="stat"><div class="stat-number">3.51</div><div class="stat-label">CGPA / 4.00</div></div>
      <div class="stat"><div class="stat-number">5+</div><div class="stat-label">Research Projects</div></div>
    </div>
  </section>

  <!-- Featured Work -->
  <section>
    <h2 class="section-title">Featured Research</h2>
    <div class="grid work-grid" style="margin-top:0.5rem">
      <article class="card work-card">
        <div class="work-tag">Journal</div>
        <h3>Decoding Memory with Explainable AI</h3>
        <p>EEG study classifying encoding vs retrieval with explainable models.</p>
        <a class="work-link" href="/publication/2025-memory-decoding-xai">Read →</a>
      </article>

      <article class="card work-card">
        <div class="work-tag">Conference</div>
        <h3>Spectrogram-Driven Emotion Detection</h3>
        <p>CNN emotion recognition from EEG spectrograms.</p>
        <a class="work-link" href="/publication/2025-emotion-detection-eeg">Read →</a>
      </article>
    </div>
  </section>

  <footer>
    <div class="footer-links">
      <a class="footer-link" href="/">Home</a>
      <a class="footer-link" href="/publications/">Publications</a>
      <a class="footer-link" href="/cv/">CV</a>
    </div>
    <div style="font-size:0.85rem;color:var(--text-muted)">© 2025 Mohammed Tawshif Hossain</div>
  </footer>

</main>

</body>
</html>


