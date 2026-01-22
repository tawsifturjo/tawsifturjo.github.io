---
layout: single
permalink: /publications/
author_profile: true
---

<style>
  /* Global Theme Overrides */
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
    /* Vibrant Dark Academia Theme - Matching Home Page */
    --bg-dark: #0a0a0a;
    --card-bg-dark: rgba(30, 30, 35, 0.8);
    --card-border-dark: rgba(255, 255, 255, 0.12);
    --text-main-dark: #ffffff;
    --text-muted-dark: #b8b8b8;
    --text-tertiary-dark: #777777;
    
    --accent: #ffd700; /* Vibrant Gold */
    --accent-glow: rgba(255, 215, 0, 0.3);
    --accent-dim: rgba(255, 215, 0, 0.15);
    --accent-gradient: linear-gradient(135deg, #ffffff, #ffd700);
    --border-accent: rgba(255, 215, 0, 0.5);
    
    --bg-light: #fdfdfd;
    --card-bg-light: #ffffff;
    --card-border-light: rgba(0, 0, 0, 0.06);
    --text-main-light: #18181b;
    --text-muted-light: #71717a;
  }

  /* Remove Jekyll Metadata */
  .page__title, .page__meta, .page__hero, .nav-links { display: none !important; }
  #main { padding-top: 0 !important; }
  .page { margin-top: 0 !important; }
  .page__content { padding-top: 0 !important; }

  /* Main Wrapper */
  .pub-wrapper {
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text-main-dark);
    margin-top: -40px;
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.02) 0%, transparent 50%);
  }

  body.light-mode .pub-wrapper {
    color: var(--text-main-light);
    background-image: none;
  }

  /* Top Header Bar */
  .top-header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin-bottom: 40px;
  }

  /* Header Styling */
  .compact-header {
    margin-bottom: 0;
    border-left: 3px solid var(--accent);
    padding-left: 25px;
  }

  .compact-header h1 {
    font-size: 2.8rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0 0 8px 0;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: none !important;
    font-family: 'Playfair Display', serif;
  }

  .compact-header p {
    color: var(--text-tertiary-dark);
    font-size: 1.05rem;
    margin: 0;
    font-weight: 400;
  }

  body.light-mode .compact-header p { color: var(--text-muted-light); }

  /* Theme Toggle Button */
  .theme-toggle-btn {
    background: rgba(20, 20, 20, 0.6);
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
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  body.light-mode .theme-toggle-btn {
    background: #f4f4f5;
    border-color: var(--card-border-light);
    color: var(--text-main-light);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .theme-toggle-btn:hover {
    transform: scale(1.15);
    border-color: var(--accent);
    box-shadow: 0 0 20px var(--accent-glow);
  }

  /* Publication Cards */
  .publication-card {
    background: var(--card-bg-dark);
    border: 1px solid var(--card-border-dark);
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    gap: 28px;
    align-items: center;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .publication-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  body.light-mode .publication-card {
    background: var(--card-bg-light);
    border: 1px solid var(--card-border-light);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  }

  .publication-card:hover {
    transform: translateY(-8px);
    border-color: var(--border-accent);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6), 0 0 30px var(--accent-glow);
  }

  .publication-card:hover::before {
    opacity: 1;
  }

  body.light-mode .publication-card:hover {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  }

  .pub-content { 
    flex: 1; 
    position: relative; 
    z-index: 1; 
  }

  /* Image Wrapper */
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

  body.light-mode .pub-image-wrapper {
    border-color: var(--card-border-light);
    background: #f4f4f5;
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
    transition: all 0.5s ease;
  }

  .publication-card:hover .pub-image-wrapper img {
    opacity: 1;
    transform: scale(1.1);
  }

  /* Badge */
  .pub-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    background: var(--accent-dim);
    color: var(--accent);
    border: 1px solid var(--border-accent);
  }

  /* Title */
  .pub-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text-main-dark);
    line-height: 1.35;
    font-family: 'Playfair Display', serif;
  }

  body.light-mode .pub-title { color: var(--text-main-light); }

  /* Authors */
  .pub-authors {
    color: var(--text-muted-dark);
    font-size: 0.92rem;
    margin-bottom: 18px;
  }

  .pub-authors strong {
    color: var(--text-main-dark);
    font-weight: 600;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 2px;
  }

  body.light-mode .pub-authors { color: var(--text-muted-light); }
  body.light-mode .pub-authors strong { color: var(--text-main-light); }

  /* Action Buttons */
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

  .btn-doi { background: #3b82f6; }
  .btn-pdf { background: #ef4444; }
  .btn-slide { background: #8b5cf6; }

  .pub-btn:hover {
    filter: brightness(1.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .publication-card { 
      flex-direction: column-reverse; 
      padding: 20px; 
      gap: 20px; 
      text-align: left; 
    }
    .pub-image-wrapper { 
      width: 100%; 
      height: 180px; 
    }
    .compact-header h1 { 
      font-size: 2rem; 
    }
    .top-header-bar { 
      flex-direction: column; 
      align-items: flex-start; 
      gap: 15px; 
    }
    .theme-toggle-btn { 
      align-self: flex-end; 
    }
  }
</style>

<div class="pub-wrapper">
  <!-- Top Header Bar -->
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
        <!-- Update these links with your actual file paths -->
        <a href="https://doi.org/10.1016/j.neuri.2025.100227" class="pub-btn btn-doi" target="_blank">DOI</a>
        <a href="/files/decoding_memory_full.pdf" class="pub-btn btn-pdf" target="_blank">Full PDF</a>
        <a href="/files/slides2.pdf" class="pub-btn btn-slide" target="_blank">Slides</a>
      </div>
    </div>
    <div class="pub-image-wrapper">
      <!-- Update image path as needed -->
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
        <!-- Update these links with your actual file paths -->
        <a href="https://doi.org/10.1109/ECCE64574.2025.11013815" class="pub-btn btn-doi" target="_blank">DOI</a>
        <a href="/files/emotion_detection_full.pdf" class="pub-btn btn-pdf" target="_blank">Full PDF</a>
        <a href="/files/emotion_detection_slides.pdf" class="pub-btn btn-slide" target="_blank">Slides</a>
      </div>
    </div>
    <div class="pub-image-wrapper">
      <!-- Update image path as needed -->
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
