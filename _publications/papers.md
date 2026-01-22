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
    /* Base Variables for Theme Consistency */
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

    /* Minimalist Navigation Bar */
    .navbar {
      background: rgba(15, 17, 21, 0.8);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
    }

    body.light-mode .navbar {
      background: rgba(248, 250, 252, 0.8);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .nav-container {
      max-width: 1000px; /* Aligned with content width */
      margin: 0 auto;
      display: flex;
      justify-content: flex-end; /* Pushes links to the right */
      align-items: center;
      padding: 0 20px;
    }

    .nav-links {
      display: flex;
      list-style: none;
      align-items: center;
    }

    .nav-links a {
      color: var(--text-muted-dark);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 20px 15px;
      transition: color 0.3s ease;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    body.light-mode .nav-links a {
      color: var(--text-muted-light);
    }

    .nav-links a:hover, .nav-links a.active {
      color: var(--accent);
    }

    .theme-toggle-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      padding: 10px;
      margin-left: 10px;
      color: var(--text-muted-dark);
      transition: transform 0.3s ease;
    }

    body.light-mode .theme-toggle-btn {
      color: var(--text-muted-light);
    }

    .theme-toggle-btn:hover {
      transform: rotate(15deg);
    }

    /* Main Container */
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    /* Page Header Section */
    .page-header {
      margin-bottom: 60px;
      border-left: 4px solid var(--accent);
      padding-left: 25px;
    }

    .page-header h1 {
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
      background: var(--accent-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .page-header p {
      color: var(--text-muted-dark);
      font-size: 1.1rem;
    }

    body.light-mode .page-header p {
      color: var(--text-muted-light);
    }

    /* Year Divider */
    .year-section {
      margin-top: 40px;
    }

    .year-divider {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-main-dark);
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    body.light-mode .year-divider {
      color: var(--text-main-light);
    }

    .year-divider::after {
      content: "";
      height: 1px;
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.1);
    }

    body.light-mode .year-divider::after {
      background: rgba(0, 0, 0, 0.1);
    }

    /* Publication Card Styles */
    .publication-card {
      background: var(--card-bg-dark);
      border: 1px solid rgba(255, 255, 255, 0.03);
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 24px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    body.light-mode .publication-card {
      background: var(--card-bg-light);
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    .publication-card:hover {
      transform: translateY(-4px);
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    }

    .pub-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 15px;
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

    body.light-mode .pub-title {
      color: var(--text-main-light);
    }

    .pub-authors {
      color: var(--text-muted-dark);
      font-size: 0.95rem;
      margin-bottom: 8px;
    }

    .pub-authors strong {
      color: var(--text-main-dark);
      text-decoration: underline;
      text-decoration-color: var(--accent);
    }

    body.light-mode .pub-authors strong {
      color: var(--text-main-light);
    }

    .pub-venue {
      font-size: 0.9rem;
      color: var(--accent);
      font-weight: 500;
      margin-bottom: 15px;
    }

    .pub-abstract {
      font-size: 0.95rem;
      color: var(--text-muted-dark);
      margin-bottom: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      transition: -webkit-line-clamp 0.3s ease;
    }

    .publication-card:hover .pub-abstract {
      -webkit-line-clamp: 10;
    }

    body.light-mode .pub-abstract {
      color: var(--text-muted-light);
    }

    /* Links and Buttons */
    .pub-links {
      display: flex;
      gap: 12px;
    }

    .pub-btn {
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background: var(--accent);
      color: white;
    }

    .btn-primary:hover {
      background: #4f46e5;
      transform: scale(1.02);
    }

    .btn-outline {
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-muted-dark);
    }

    body.light-mode .btn-outline {
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: var(--text-muted-light);
    }

    .btn-outline:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-main-dark);
    }

    /* Scholar Footer */
    .scholar-footer {
      text-align: center;
      margin-top: 80px;
      padding: 40px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    body.light-mode .scholar-footer {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }

    .scholar-footer a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .page-header h1 { font-size: 2rem; }
      .nav-container { justify-content: center; }
      .nav-links a { padding: 15px 10px; font-size: 0.8rem; }
    }
  </style>
</head>
<body>

  <!-- Minimal Navigation -->
  <nav class="navbar">
    <div class="nav-container">
      <ul class="nav-links">
        <li><a href="#" class="active">Research</a></li>
        <li><a href="#">CV</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          <button class="theme-toggle-btn" onclick="toggleTheme()" id="themeIcon">
            🌙
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <!-- Header -->
    <header class="page-header">
      <h1>Selected Publications</h1>
      <p>Advancing Neuroscience through Machine Learning and Signal Processing</p>
    </header>

    <!-- 2025 Section -->
    <section class="year-section">
      <div class="year-divider">2025</div>

      <!-- Item 1 -->
      <article class="publication-card">
        <span class="pub-badge">Journal Article</span>
        <h2 class="pub-title">Decoding Memory with Explainable AI: A Large-Scale EEG-Based Machine Learning Study of Encoding vs. Retrieval</h2>
        <p class="pub-authors">
          <strong>Mohammed Tawshif Hossain</strong>, et al.
        </p>
        <p class="pub-venue">Neuroscience Informatics, 2025</p>
        <p class="pub-abstract">
          This study applies machine learning to EEG data from the PEERS study to classify memory encoding vs. retrieval. Using DWT and Gradient Boosting, we achieved 81.97% accuracy. SHAP analysis revealed theta-band relative energy as the most influential predictor.
        </p>
        <div class="pub-links">
          <a href="https://doi.org/10.1016/j.neuri.2025.100227" class="pub-btn btn-primary" target="_blank">DOI</a>
          <a href="#" class="pub-btn btn-outline">Full PDF</a>
        </div>
      </article>

      <!-- Item 2 -->
      <article class="publication-card">
        <span class="pub-badge">Conference Paper</span>
        <h2 class="pub-title">Spectrogram-Driven Emotion Detection from Electroencephalogram</h2>
        <p class="pub-authors">
          <strong>Mohammed Tawshif Hossain</strong>, et al.
        </p>
        <p class="pub-venue">2025 Int. Conf. on Electrical, Computer and Communication Engineering (ECCE)</p>
        <p class="pub-abstract">
          Evaluates classifying emotions (positive, negative, neutral) in EEG using CNNs. Utilizing STFT-generated spectrograms from the SEED dataset, the model achieved an accuracy of 99.80%.
        </p>
        <div class="pub-links">
          <a href="https://doi.org/10.1109/ECCE64574.2025.11013815" class="pub-btn btn-primary" target="_blank">DOI</a>
          <a href="#" class="pub-btn btn-outline">Presentation</a>
        </div>
      </article>
    </section>

    <!-- Footer -->
    <footer class="scholar-footer">
      <p>View more on <a href="https://scholar.google.com/citations?user=BHDeP0gAAAAJ" target="_blank">Google Scholar</a></p>
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

    // Initialize theme
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
