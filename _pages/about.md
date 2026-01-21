---
layout: single
title: "About Me"
permalink: /about/
author_profile: true
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Mohammed Tawshif Hossain — Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

<style>
  :root {
    /* Color Palette - Dark Academia / Classic Luxury */
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --card-bg: rgba(25, 25, 25, 0.6);
    
    --accent: #d4af37; /* Classic Gold */
    --accent-dim: rgba(212, 175, 55, 0.15);
    
    --text-primary: #f2f2f2;
    --text-secondary: #a0a0a0;
    --text-tertiary: #666666;
    
    --border-light: rgba(255, 255, 255, 0.08);
    --border-accent: rgba(212, 175, 55, 0.4);
    
    --max-width: 1000px;
    --card-radius: 4px; /* Sharper corners for a classic look */
    
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    /* Subtle grain texture overlay */
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  }

  /* Typography */
  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 400;
    color: var(--text-primary);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 32px;
  }

  /* Utility: Fade In Animation */
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* HERO SECTION */
  .hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 4rem 0;
  }

  .hero-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .profile-frame {
    width: 140px;
    height: 140px;
    margin: 0 auto 30px;
    border-radius: 50%;
    border: 1px solid var(--border-accent);
    padding: 6px;
    position: relative;
  }
  
  .profile-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
    overflow: hidden;
    position: relative;
  }

  /* Decorative line behind profile */
  .hero-content::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 60%;
    background: linear-gradient(to bottom, transparent, var(--border-light), transparent);
    z-index: -1;
  }

  .hero h1 {
    font-size: 3.5rem;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    background: linear-gradient(to right, #fff, #bbb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-role {
    font-family: var(--font-body);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent);
    margin-bottom: 24px;
    display: inline-block;
    position: relative;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 40px;
    font-weight: 300;
  }

  /* Social Links */
  .social-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 40px;
  }

  .social-link {
    font-size: 1.2rem;
    color: var(--text-secondary);
    border: 1px solid var(--border-light);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-3px);
  }

  /* Buttons */
  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .btn {
    padding: 14px 32px;
    border-radius: 2px;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .btn-primary {
    background: transparent;
    border: 1px solid var(--text-primary);
    color: var(--text-primary);
  }

  .btn-primary:hover {
    background: var(--text-primary);
    color: var(--bg-primary);
  }

  .btn-text {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid transparent;
  }

  .btn-text:hover {
    color: var(--accent);
  }

  /* SECTIONS */
  section {
    padding: 100px 0;
    border-top: 1px solid var(--border-light);
  }

  .section-header {
    margin-bottom: 60px;
    text-align: left;
    position: relative;
    padding-left: 20px;
    border-left: 2px solid var(--accent);
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--text-tertiary);
  }

  /* GRID */
  .grid {
    display: grid;
    gap: 30px;
  }

  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-2 { grid-template-columns: repeat(2, 1fr); }

  /* CARDS */
  .card {
    background: var(--card-bg);
    border: 1px solid var(--border-light);
    padding: 32px;
    transition: transform 0.3s ease, border-color 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    backdrop-filter: blur(5px);
  }

  .card:hover {
    border-color: var(--border-accent);
    transform: translateY(-5px);
  }

  .card-icon {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: var(--accent);
    filter: sepia(0.5); /* Makes emojis look more classic/muted */
  }

  .card h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
    font-family: var(--font-heading);
  }

  .card p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 300;
    flex-grow: 1;
  }

  /* Featured Work Specifics */
  .work-meta {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    margin-bottom: 12px;
    display: block;
  }

  .work-link {
    margin-top: 20px;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    border-bottom: 1px solid transparent;
    padding-bottom: 2px;
    width: fit-content;
  }

  .work-link:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  /* FOOTER */
  footer {
    padding: 80px 0 40px;
    border-top: 1px solid var(--border-light);
    text-align: center;
  }

  .footer-nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
  }

  .footer-nav a {
    font-family: var(--font-heading);
    font-style: italic;
    font-size: 1.1rem;
    color: var(--text-secondary);
  }

  .footer-nav a:hover {
    color: var(--accent);
  }

  .copyright {
    font-size: 0.8rem;
    color: var(--text-tertiary);
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .grid-3 { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .hero h1 { font-size: 2.5rem; }
    .grid-3, .grid-2 { grid-template-columns: 1fr; }
    .hero-buttons { flex-direction: column; width: 100%; max-width: 300px; margin: 0 auto; }
    .btn { width: 100%; text-align: center; }
    .section-header { text-align: center; border-left: none; padding-left: 0; }
    .section-header::after {
      content: '';
      display: block;
      width: 40px;
      height: 2px;
      background: var(--accent);
      margin: 16px auto 0;
    }
  }
</style>
</head>
<body>

<!-- HERO -->
<div class="hero">
  <div class="container hero-content fade-in" style="animation-delay: 0.1s;">
    <div class="profile-frame">
      <div class="profile-inner">
        <!-- Placeholder for image, using emoji for now but styled -->
        <span style="filter: sepia(0.8);">🎓</span>
      </div>
    </div>
    
    <div class="hero-role">EEE Student & Researcher</div>
    <h1>Mohammed Tawshif Hossain</h1>
    
    <p class="hero-subtitle">
      Conducting research at the intersection of 
      <span style="color: var(--text-primary); border-bottom: 1px solid var(--border-accent);">Biomedical Engineering</span>, 
      <span style="color: var(--text-primary); border-bottom: 1px solid var(--border-accent);">Quantum Photonics</span>, and 
      <span style="color: var(--text-primary); border-bottom: 1px solid var(--border-accent);">Computational Neuroscience</span>.
      <br>Bridging the gap between theoretical physics and applied healthcare.
    </p>

    <div class="social-links"> 
      <a href="mailto:tawsifturjoeee@gmail.com" class="social-link" title="Email">✉️</a> 
      <a href="https://linkedin.com/in/yourprofile" class="social-link" target="_blank" title="LinkedIn">👔</a>
      <a href="https://github.com/tawsifturjo" class="social-link" target="_blank" title="GitHub">⚡</a> 
      <a href="https://scholar.google.com" class="social-link" target="_blank" title="Google Scholar">📜</a> 
    </div>
    
    <div class="hero-buttons">
      <a href="/publications/" class="btn btn-primary">Selected Publications</a>
      <a href="/cv/" class="btn btn-text">Download Curriculum Vitae →</a>
    </div>
  </div>
</div>

<!-- RESEARCH INTERESTS -->
<section>
  <div class="container fade-in" style="animation-delay: 0.3s;">
    <div class="section-header">
      <h2 class="section-title">Areas of Inquiry</h2>
      <p class="section-subtitle">Core research domains and academic interests</p>
    </div>
    
    <div class="grid grid-3">
      <div class="card">
        <div class="card-icon">🔬</div>
        <h3>Quantum Photonics</h3>
        <p>Investigation of quantum phenomena in photonic systems, focusing on entanglement sources and quantum state manipulation.</p>
      </div>
      
      <div class="card">
        <div class="card-icon">💡</div>
        <h3>Nanophotonics</h3>
        <p>Computational design of metasurfaces and nanoscale optical devices for wavefront engineering and sensing.</p>
      </div>
      
      <div class="card">
        <div class="card-icon">🧠</div>
        <h3>Comp. Neuroscience</h3>
        <p>Decoding neural signals using advanced signal processing and machine learning to understand cognitive states.</p>
      </div>
      
      <div class="card">
        <div class="card-icon">⚕️</div>
        <h3>Biomedical Optics</h3>
        <p>Non-invasive optical diagnostic techniques, utilizing light-tissue interaction for medical imaging.</p>
      </div>
      
      <div class="card">
        <div class="card-icon">🌐</div>
        <h3>Integrated Photonics</h3>
        <p>Scalable on-chip photonic circuits design for next-generation telecommunications and classical computing.</p>
      </div>
      
      <div class="card">
        <div class="card-icon">⚛️</div>
        <h3>Quantum Sensing</h3>
        <p>Leveraging quantum superposition and entanglement to achieve precision beyond the standard quantum limit.</p>
      </div>
    </div>
  </div>
</section>

<!-- FEATURED WORK -->
<section style="background: var(--bg-secondary);">
  <div class="container fade-in" style="animation-delay: 0.4s;">
    <div class="section-header">
      <h2 class="section-title">Selected Works</h2>
      <p class="section-subtitle">Recent publications, preprints, and theses</p>
    </div>
    
    <div class="grid grid-3">
      <!-- Item 1 -->
      <article class="card">
        <span class="work-meta">Journal Article</span>
        <h3>Decoding Memory with Explainable AI</h3>
        <p>A comprehensive EEG study utilizing SHAP values to interpret machine learning models distinguishing between memory encoding and retrieval states (81.97% acc).</p>
        <a href="/publication/2025-memory-decoding-xai" class="work-link">Read Abstract <span>→</span></a>
      </article>
      
      <!-- Item 2 -->
      <article class="card">
        <span class="work-meta">Conference Paper</span>
        <h3>Spectrogram-Driven Emotion Detection</h3>
        <p>Implementation of CNN architectures on EEG spectrograms to classify human emotion, achieving state-of-the-art accuracy on the SEED dataset.</p>
        <a href="/publication/2025-emotion-detection-eeg" class="work-link">View Paper <span>→</span></a>
      </article>
      
      <!-- Item 3 -->
      <article class="card">
        <span class="work-meta">Undergraduate Thesis</span>
        <h3>Tunable On-Chip Optical Tweezing</h3>
        <p>Design and simulation of active metasurfaces for dynamic optical trapping and manipulation of nanoparticles on a silicon-on-insulator platform.</p>
        <a href="#" class="work-link">View Project <span>→</span></a>
      </article>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <nav class="footer-nav">
      <a href="/">Home</a>
      <a href="/publications/">Publications</a>
      <a href="/research/">Research</a>
      <a href="/cv/">CV</a>
      <a href="/contact/">Contact</a>
    </nav>
    <div class="copyright">
      &copy; 2025 Mohammed Tawshif Hossain. All Rights Reserved.<br>
      <span style="opacity: 0.5; font-size: 0.7rem; margin-top: 5px; display: block;">Designed with precision & code.</span>
    </div>
  </div>
</footer>

</body>
</html>
