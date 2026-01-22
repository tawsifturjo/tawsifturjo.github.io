

---
layout: single
permalink: /publications/
author_profile: true
---


<style>
  /* Global Theme Overrides - Force Backgrounds */
  html, body, #main, .page, .page__content {
    background-color: var(--bg-dark) !important;
    transition: background-color 0.3s ease;
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
    --card-glow: rgba(99, 102, 241, 0.2);
    
    --bg-light: #fdfdfd;
    --card-bg-light: #ffffff;
    --card-border-light: rgba(0, 0, 0, 0.06);
    --text-main-light: #18181b;
    --text-muted-light: #71717a;
  }

  /* Force Remove Jekyll Theme Headers & Gaps */
  .page__title, .page__meta, .page__hero { display: none !important; }
  #main { padding-top: 0 !important; }
  .page { margin-top: 0 !important; }
  .page__content { padding-top: 0 !important; }
  .archive { margin-top: 0 !important; }

  /* Main Wrapper */
  .pub-wrapper {
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text-main-dark);
    transition: all 0.3s ease;
    margin-top: -20px;
    background: transparent;
  }

  body.light-mode .pub-wrapper {
    color: var(--text-main-light);
  }

  /* Compact Theme Bar */
  .theme-bar {
    display: flex;
    justify-content: flex-end;
    padding: 15px 0;
    margin-bottom: 5px;
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
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  body.light-mode .theme-toggle-btn {
    background: #f4f4f5;
    border-color: var(--card-border-light);
    color: var(--text-main-light);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .theme-toggle-btn:hover {
    transform: scale(1.1) rotate(15deg);
    border-color: var(--accent);
    box-shadow: 0 0 20px var(--card-glow);
  }

  /* Compact Header */
  .compact-header {
    margin-bottom: 35px;
    border-left: 4px solid var(--accent);
    padding-left: 20px;
    animation: fadeIn 0.8s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
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

  /* Publication Card - VIBRANT DESIGN */
  .publication-card {
    background: var(--card-bg-dark);
    border: 1px solid var(--card-border-dark);
    border-radius: 20px;
    padding: 26px;
    margin-bottom: 26px;
    display: flex;
    gap: 32px;
    align-items: center;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;
  }

  body.light-mode .publication-card {
    background: var(--card-bg-light);
    border: 1px solid var(--card-border-light);
  }

  .publication-card:hover {
    transform: translateY(-8px) scale(1.01);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px var(--card-glow);
  }

  .pub-content { flex: 1; position: relative; z-index: 1; }

  /* Interactive Image Wrapper */
  .pub-image-wrapper {
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid var(--card-border-dark);
    background: #000;
    transition: all 0.4s ease;
    position: relative;
    z-index: 1;
  }

  .publication-card:hover .pub-image-wrapper {
    transform: scale(1.05);
    border-color: var(--accent);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
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
    transform: scale(1.12);
  }

  .pub-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 8px;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
    background: rgba(99, 102, 241, 0.15);
    color: #a5b4fc;
  }

  .pub-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--text-main-dark);
    line-height: 1.35;
  }

  body.light-mode .pub-title { color: var(--text-main-light); }

  .pub-authors {
    color: var(--text-muted-dark);
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  .pub-authors strong {
    color: var(--text-main-dark);
    font-weight: 600;
    border-bottom: 1px solid var(--accent);
  }

  body.light-mode .pub-authors strong { color: var(--text-main-light); }

  /* Button Group with Shimmer */
  .pub-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .pub-btn {
    text-decoration: none !important;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 10px 18px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: white !important;
    position: relative;
    overflow: hidden;
  }

  .btn-doi { background: #2563eb; }
  .btn-pdf { background: #dc2626; }
  .btn-slide { background: #7c3aed; }

  .pub-btn:hover {
    filter: brightness(1.2);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    .publication-card { flex-direction: column-reverse; padding: 22px; gap: 24px; }
    .pub-image-wrapper { width: 100%; height: 200px; }
    .compact-header h1 { font-size: 1.8rem; }
  }
</style>

<div class="pub-wrapper">
  <div class="theme-bar">
    <button class="theme-toggle-btn" onclick="toggleTheme()" id="themeIcon" title="Toggle Theme">🌙</button>
  </div>

  <header class="compact-header">
    <h1>Selected Publications</h1>
    <p>CUET Researcher | ML, Signal Processing & Neuroscience</p>
  </header>

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
      <img src="/images/favicon-512x512.png" alt="Preview" onerror="this.src='https://via.placeholder.com/150?text=Research'">
    </div>
  </article>

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
      <img src="/images/emotion_detection_thumbnail.jpg" alt="Preview" onerror="this.src='https://via.placeholder.com/150?text=Research'">
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
