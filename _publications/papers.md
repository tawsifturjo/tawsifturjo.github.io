---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Research Portfolio | Mohammed Tawshif Hossain</title>
  <style>
    :root {
      --bg-dark: #0f1115;
      --card-bg-dark: #1a1d23;
      --text-main-dark: #e4e4e4;
      --text-muted-dark: #9da3ae;
      --accent: #6366f1;
      --accent-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      
      --bg-light: #f8fafc;
      --card-bg-light: #ffffff;
      --text-main-light: #1e293b;
      --text-muted-light: #64748b;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg-dark);
      color: var(--text-main-dark);
      line-height: 1.6;
      transition: background 0.3s ease, color 0.3s ease;
    }

    body.light-mode {
      background: var(--bg-light);
      color: var(--text-main-light);
    }

    /* Simplified Top Bar (Toggle Only) */
    .top-bar {
      position: fixed;
      top: 0;
      right: 0;
      padding: 20px 40px;
      z-index: 1000;
    }

    .theme-toggle-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      font-size: 1.2rem;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-main-dark);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    body.light-mode .theme-toggle-btn {
      background: rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.1);
      color: var(--text-main-light);
    }

    .theme-toggle-btn:hover {
      transform: scale(1.1) rotate(15deg);
      border-color: var(--accent);
    }

    .container {
      max-width: 950px;
      margin: 0 auto;
      padding: 80px 20px;
    }

    .page-header {
      margin-bottom: 60px;
      border-left: 5px solid var(--accent);
      padding-left: 25px;
    }

    .page-header h1 {
      font-size: 2.8rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      margin-bottom: 10px;
      background: var(--accent-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .page-header p {
      color: var(--text-muted-dark);
      font-size: 1.1rem;
    }

    body.light-mode .page-header p { color: var(--text-muted-light); }

    .year-divider {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-main-dark);
      margin: 50px 0 30px 0;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    body.light-mode .year-divider { color: var(--text-main-light); }

    .year-divider::after {
      content: "";
      height: 1px;
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.1);
    }

    body.light-mode .year-divider::after { background: rgba(0, 0, 0, 0.1); }

    /* Publication Card */
    .publication-card {
      background: var(--card-bg-dark);
      border: 1px solid rgba(255, 255, 255, 0.03);
      border-radius: 20px;
      padding: 30px;
      margin-bottom: 30px;
      display: flex;
      gap: 35px;
      align-items: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    body.light-mode .publication-card {
      background: var(--card-bg-light);
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
    }

    .publication-card:hover {
      transform: translateY(-8px);
      border-color: var(--accent);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .pub-content { flex: 1; }

    .pub-image-wrapper {
      flex-shrink: 0;
      width: 170px;
      height: 170px;
      border-radius: 15px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: #000;
    }

    .pub-image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .publication-card:hover .pub-image-wrapper img { transform: scale(1.1); }

    .pub-badge {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 8px;
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
      background: rgba(99, 102, 241, 0.1);
      color: var(--accent);
    }

    .pub-title {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 12px;
      color: var(--text-main-dark);
      line-height: 1.3;
    }

    body.light-mode .pub-title { color: var(--text-main-light); }

    .pub-authors {
      color: var(--text-muted-dark);
      font-size: 0.95rem;
      margin-bottom: 8px;
    }

    .pub-authors strong {
      color: var(--text-main-dark);
      border-bottom: 2px solid var(--accent);
    }

    body.light-mode .pub-authors strong { color: var(--text-main-light); }

    .pub-venue {
      font-size: 0.9rem;
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 20px;
    }

    /* Links/Buttons Row */
    .pub-links {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .pub-btn {
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 10px 18px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }

    .btn-doi { background: #3b82f6; color: white; }
    .btn-pdf { background: #ef4444; color: white; }
    .btn-slide { background: #8b5cf6; color: white; }

    .pub-btn:hover {
      filter: brightness(1.2);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    /* Footer */
    .scholar-footer {
      text-align: center;
      margin-top: 100px;
      padding: 40px;
      color: var(--text-muted-dark);
      font-size: 0.9rem;
    }

    .scholar-footer a { color: var(--accent); font-weight: 600; text-decoration: none; }

    @media (max-width: 850px) {
      .publication-card { flex-direction: column-reverse; padding: 25px; }
      .pub-image-wrapper { width: 100%; height: 200px; }
      .top-bar { padding: 15px 20px; }
    }
  </style>
</head>
<body>

  <!-- Minimal Theme Toggle -->
  <div class="top-bar">
    <button class="theme-toggle-btn" onclick="toggleTheme()" id="themeIcon" title="Toggle Theme">
      🌙
    </button>
  </div>

  <div class="container">
    <header class="page-header">
      <h1>Selected Publications</h1>
      <p>Researcher at CUET | Machine Learning, Signal Processing & Neuroscience</p>
    </header>

    <!-- 2025 Section -->
    <section class="year-section">
      <div class="year-divider">2025</div>

      <!-- Publication 1 -->
      <article class="publication-card">
        <div class="pub-content">
          <span class="pub-badge">Journal Article</span>
          <h2 class="pub-title">Decoding Memory with Explainable AI: A Large-Scale EEG-Based Machine Learning Study</h2>
          <p class="pub-authors">
            <strong>Mohammed Tawshif Hossain</strong>, et al.
          </p>
          <p class="pub-venue">Neuroscience Informatics, 2025</p>
          
          <div class="pub-links">
            <a href="https://doi.org/10.1016/j.neuri.2025.100227" class="pub-btn btn-doi" target="_blank">DOI</a>
            <!-- Paths pointing to your GitHub 'files' folder -->
            <a href="/files/decoding_memory_full.pdf" class="pub-btn btn-pdf">Full PDF</a>
            <a href="/files/decoding_memory_slides.pdf" class="pub-btn btn-slide">Presentation Slide</a>
          </div>
        </div>
        <div class="pub-image-wrapper">
          <!-- Path pointing to your GitHub 'images' folder -->
          <img src="/images/decoding_memory_thumbnail.jpg" alt="Publication Preview" onerror="this.src='https://via.placeholder.com/170?text=Research'">
        </div>
      </article>

      <!-- Publication 2 -->
      <article class="publication-card">
        <div class="pub-content">
          <span class="pub-badge">Conference Paper</span>
          <h2 class="pub-title">Spectrogram-Driven Emotion Detection from Electroencephalogram</h2>
          <p class="pub-authors">
            <strong>Mohammed Tawshif Hossain</strong>, et al.
          </p>
          <p class="pub-venue">ECCE 2025</p>
          
          <div class="pub-links">
            <a href="https://doi.org/10.1109/ECCE64574.2025.11013815" class="pub-btn btn-doi" target="_blank">DOI</a>
            <!-- Paths pointing to your GitHub 'files' folder -->
            <a href="/files/emotion_detection_full.pdf" class="pub-btn btn-pdf">Full PDF</a>
            <a href="/files/emotion_detection_slides.pdf" class="pub-btn btn-slide">Presentation Slide</a>
          </div>
        </div>
        <div class="pub-image-wrapper">
          <!-- Path pointing to your GitHub 'images' folder -->
          <img src="/images/emotion_detection_thumbnail.jpg" alt="Publication Preview" onerror="this.src='https://via.placeholder.com/170?text=Research'">
        </div>
      </article>
    </section>

    <footer class="scholar-footer">
      <p>Updated January 2026 • Explore citations on <a href="https://scholar.google.com/citations?user=BHDeP0gAAAAJ" target="_blank">Google Scholar</a></p>
    </footer>
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
</body>
</html>
