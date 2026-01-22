---
layout: single
permalink: /publications/
author_profile: true
---

<style>
  /* Root Theme Variables */
  :root {
    --bg-dark: #0a0a0c;
    --card-bg-dark: #161618;
    --card-border-dark: rgba(255, 255, 255, 0.05);
    --text-main-dark: #f0f0f2;
    --text-muted-dark: #a1a1aa;
    --accent: #6366f1;
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    
    --bg-light: #fdfdfd;
    --card-bg-light: #ffffff;
    --card-border-light: rgba(0, 0, 0, 0.06);
    --text-main-light: #18181b;
    --text-muted-light: #71717a;
  }

  /* Force Remove Jekyll Theme Headers & Gaps */
  .page__title, .page__meta, .page__hero { display: none !important; }
  #main { padding-top: 0 !important; background: transparent !important; }
  .page { margin-top: 0 !important; }
  .page__content { padding-top: 0 !important; }
  .archive { margin-top: 0 !important; }

  /* Main Wrapper */
  .pub-wrapper {
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text-main-dark);
    transition: all 0.3s ease;
    margin-top: 0;
    background: var(--bg-dark);
  }

  body.light-mode .pub-wrapper {
    color: var(--text-main-light);
    background: var(--bg-light);
  }

  /* Top Header Bar - UPDATED */
  .top-header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin-bottom: 40px;
  }

  .theme-toggle-btn {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--card-border-dark);
    cursor: pointer;
    font-size: 1.1rem;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-main-dark);
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  body.light-mode .theme-toggle-btn {
    background: #f4f4f5;
    border-color: var(--card-border-light);
    color: var(--text-main-light);
  }

  .theme-toggle-btn:hover {
    transform: scale(1.05);
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
  }

  /* Compact Header */
  .compact-header {
    margin-bottom: 0;
    border-left: 4px solid var(--accent);
    padding-left: 20px;
  }

  .compact-header h1 {
    font-size: 2.4rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    margin: 0 0 4px 0;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: none !important;
  }

  .compact-header p {
    color: var(--text-muted-dark);
    font-size: 1.05rem;
    margin: 0;
    font-weight: 400;
  }

  body.light-mode .compact-header p { color: var(--text-muted-light); }

  /* Publication Card */
  .publication-card {
    background: var(--card-bg-dark);
    border: 1px solid var(--card-border-dark);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    gap: 28px;
    align-items: center;
    transition: all 0.3s ease;
  }

  body.light-mode .publication-card {
    background: var(--card-bg-light);
    border: 1px solid var(--card-border-light);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  }

  .publication-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }

  .pub-content { flex: 1; }

  .pub-image-wrapper {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--card-border-dark);
    background: #000;
  }

  .pub-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    transition: opacity 0.3s;
  }

  .publication-card:hover .pub-image-wrapper img { opacity: 1; }

  .pub-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
    background: rgba(99, 102, 241, 0.12);
    color: #818cf8;
  }

  .pub-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text-main-dark);
    line-height: 1.35;
  }

  body.light-mode .pub-title { color: var(--text-main-light); }

  .pub-authors {
    color: var(--text-muted-dark);
    font-size: 0.92rem;
    margin-bottom: 18px;
  }

  .pub-authors strong {
    color: var(--text-main-dark);
    font-weight: 600;
    border-bottom: 1px solid var(--accent);
  }

  body.light-mode .pub-authors strong { color: var(--text-main-light); }

  /* Button Group */
  .pub-links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .pub-btn {
    text-decoration: none !important;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 9px 16px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: white !important;
  }

  .btn-doi { background: #2563eb; }
  .btn-pdf { background: #dc2626; }
  .btn-slide { background: #7c3aed; }

  .pub-btn:hover {
    filter: brightness(1.15);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    .publication-card { flex-direction: column-reverse; padding: 20px; text-align: left; }
    .pub-image-wrapper { width: 100%; height: 180px; }
    .compact-header h1 { font-size: 1.8rem; }
    .top-header-bar { flex-direction: column; align-items: flex-start; gap: 15px; }
    .theme-toggle-btn { align-self: flex-end; }
  }
</style>

<div class="pub-wrapper">
  <!-- Top Header Bar with Title on Left, Toggle on Right -->
  <div class="top-header-bar">
    <header class="compact-header">
      <h1>Selected Publications</h1>
      <p>CUET Researcher | ML, Signal Processing & Neuroscience</p>
    </header>
    <button class="theme-toggle-btn" onclick="toggleTheme()" id="themeIcon" title="Toggle Theme">🌙</button>
  </div>

  <!-- Paper 1 -->
  <article class="publication-card">
    <div class="pub-content">
      <span class="pub-badge">Journal Article</span>
      <h2 class="pub-title">Decoding Memory with Explainable AI: A Large-Scale EEG-Based Machine Learning Study</h2>
      <p class="pub-authors">
        <strong>Mohammed Tawshif Hossain</strong>, et al.
      </p>
      
      <div class="pub-links">
        <a href="https://doi.org/10.1016/j.neuri.2025.100227" class="pub-btn btn-doi" target="_blank">DOI</a>
        <a href="/files/decoding_memory_full.pdf" class="pub-btn btn-pdf">Full PDF</a>
        <a href="/files/slides2.pdf" class="pub-btn btn-slide">Slides</a>
      </div>
    </div>
    <div class="pub-image-wrapper">
      <img src="/images/favicon-512x512.png" alt="Visual Preview" onerror="this.src='https://via.placeholder.com/150?text=Research'">
    </div>
  </article>

  <!-- Paper 2 -->
  <article class="publication-card">
    <div class="pub-content">
      <span class="pub-badge">Conference Paper</span>
      <h2 class="pub-title">Spectrogram-Driven Emotion Detection from Electroencephalogram</h2>
      <p class="pub-authors">
        <strong>Mohammed Tawshif Hossain</strong>, et al.
      </p>
      
      <div class="pub-links">
        <a href="https://doi.org/10.1109/ECCE64574.2025.11013815" class="pub-btn btn-doi" target="_blank">DOI</a>
        <a href="/files/emotion_detection_full.pdf" class="pub-btn btn-pdf">Full PDF</a>
        <a href="/files/emotion_detection_slides.pdf" class="pub-btn btn-slide">Slides</a>
      </div>
    </div>
    <div class="pub-image-wrapper">
      <img src="/images/emotion_detection_thumbnail.jpg" alt="Visual Preview" onerror="this.src='https://via.placeholder.com/150?text=Research'">
    </div>
  </article>
</div>

<script>
  function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
      icon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    } else {
      icon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  }

  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      document.getElementById('themeIcon').textContent = '☀️';
    }
  };
</script>
