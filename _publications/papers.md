---
layout: single
permalink: /publications/
author_profile: true
---

<style>
  /* Global Theme Overrides - Force Deep Dark Backgrounds */
  html, body, #main, .page, .page__content {
    background-color: var(--bg-dark) !important;
    transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  body.light-mode, 
  body.light-mode #main, 
  body.light-mode .page, 
  body.light-mode .page__content {
    background-color: var(--bg-light) !important;
  }

  :root {
    --bg-dark: #0a0a0c;
    --card-bg-dark: #161618;
    --card-border-dark: rgba(255, 255, 255, 0.05);
    --text-main-dark: #f0f0f2;
    --text-muted-dark: #a1a1aa;
    --accent: #6366f1;
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    --card-glow: rgba(99, 102, 241, 0.25);
    
    --bg-light: #fdfdfd;
    --card-bg-light: #ffffff;
    --card-border-light: rgba(0, 0, 0, 0.06);
    --text-main-light: #18181b;
    --text-muted-light: #71717a;
  }

  /* Remove Jekyll Metadata Gaps */
  .page__title, .page__meta, .page__hero, .nav-links { display: none !important; }
  #main { padding-top: 0 !important; }
  .page { margin-top: 0 !important; }
  .page__content { padding-top: 0 !important; }

  /* Main Wrapper - Compact Start */
  .pub-wrapper {
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text-main-dark);
    margin-top: -40px;
    background: transparent;
  }

  body.light-mode .pub-wrapper {
    color: var(--text-main-light);
  }

  /* Discrete Theme Toggle (Right Corner) */
  .theme-bar {
    display: flex;
    justify-content: flex-end;
    padding: 15px 0;
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
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  body.light-mode .theme-toggle-btn {
    background: #f4f4f5;
    border-color: var(--card-border-light);
    color: var(--text-main-light);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .theme-toggle-btn:hover {
    transform: scale(1.15) rotate(10deg);
    border-color: var(--accent);
    box-shadow: 0 0 20px var(--card-glow);
  }

  /* Compact Header */
  .compact-header {
    margin-bottom: 30px;
    border-left: 4px solid var(--accent);
    padding-left: 20px;
  }

  .compact-header h1 {
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    margin: 0;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: none !important;
  }

  .compact-header p {
    color: var(--text-muted-dark);
    font-size: 0.95rem;
    margin: 4px 0 0 0;
  }

  body.light-mode .compact-header p { color: var(--text-muted-light); }

  /* Lively Publication Card Slot */
  .publication-card {
    background: var(--card-bg-dark);
    border: 1px solid var(--card-border-dark);
    border-radius: 18px;
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    gap: 28px;
    align-items: center;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Livelier "vibration" motion */
    overflow: hidden;
  }

  body.light-mode .publication-card {
    background: var(--card-bg-light);
    border: 1px solid var(--card-border-light);
  }

  .publication-card:hover {
    transform: translateY(-8px) scale(1.01);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px var(--card-glow);
  }

  .pub-content { flex: 1; position: relative; z-index: 1; }

  /* Square Image Wrapper */
  .pub-image-wrapper {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--card-border-dark);
    background: #000;
    transition: all 0.4s ease;
  }

  .publication-card:hover .pub-image-wrapper {
    transform: scale(1.05);
    border-color: var(--accent);
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  }

  .pub-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.85;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .publication-card:hover .pub-image-wrapper img {
    opacity: 1;
    transform: scale(1.1);
  }

  .pub-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 0.62rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 10px;
    background: rgba(99, 102, 241, 0.15);
    color: #a5b4fc;
  }

  .pub-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--text-main-dark);
    line-height: 1.35;
  }

  body.light-mode .pub-title { color: var(--text-main-light); }

  .pub-authors {
    color: var(--text-muted-dark);
    font-size: 0.88rem;
    margin-bottom: 18px;
  }

  .pub-authors strong {
    color: var(--text-main-dark);
    font-weight: 600;
    border-bottom: 1px solid var(--accent);
  }

  body.light-mode .pub-authors strong { color: var(--text-main-light); }

  /* Action Buttons Group */
  .pub-links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .pub-btn {
    text-decoration: none !important;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 8px 14px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: white !important;
  }

  .btn-doi { background: #3b82f6; }   /* Blue */
  .btn-pdf { background: #ef4444; }   /* Red */
  .btn-slide { background: #8b5cf6; } /* Purple */

  .pub-btn:hover {
    filter: brightness(1.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    .publication-card { flex-direction: column-reverse; padding: 22px; gap: 20px; text-align: left; }
    .pub-image-wrapper { width: 100%; height: 160px; }
    .compact-header h1 { font-size: 1.8rem; }
    .theme-bar { padding: 10px 0; }
  }
</style>

<div class="pub-wrapper">
  <!-- Top Theme Toggle Only -->
  <div class="theme-bar">
    <button class="theme-toggle-btn" onclick="toggleTheme()" id="themeIcon" title="Toggle Theme">🌙</button>
  </div>

  <header class="compact-header">
    <h1>Selected Publications</h1>
    <p>Researcher at CUET | ML, Signal Processing & Neuroscience</p>
  </header>

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
        <!-- Pulling PDF from your /files/ directory -->
        <a href="/files/decoding_memory_full.pdf" class="pub-btn btn-pdf" target="_blank">Full PDF</a>
        <!-- Pulling Slide from your /files/ directory -->
        <a href="/files/slides2.pdf" class="pub-btn btn-slide" target="_blank">Presentation Slide</a>
      </div>
    </div>
    <div class="pub-image-wrapper">
      <!-- Pulling Image from your /images/ directory -->
      <img src="/images/favicon-512x512.png" alt="Paper Visual" onerror="this.src='https://via.placeholder.com/140?text=Research'">
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
        <!-- Pulling PDF from your /files/ directory -->
        <a href="/files/emotion_detection_full.pdf" class="pub-btn btn-pdf" target="_blank">Full PDF</a>
        <!-- Pulling Slide from your /files/ directory -->
        <a href="/files/emotion_detection_slides.pdf" class="pub-btn btn-slide" target="_blank">Presentation Slide</a>
      </div>
    </div>
    <div class="pub-image-wrapper">
      <!-- Pulling Image from your /images/ directory -->
      <img src="/images/emotion_detection_thumbnail.jpg" alt="Paper Visual" onerror="this.src='https://via.placeholder.com/140?text=Research'">
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
