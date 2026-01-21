---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---


---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
  /* --- Aesthetic Styling & Theme Variables --- */
  :root {
    --bg-body: #1a1a1a;
    --text-main: #e4e4e4;
    --text-muted: #a0a0a0;
    --card-bg: rgba(255, 255, 255, 0.04);
    --card-border: rgba(255, 255, 255, 0.08);
    --accent: #8b9bff;
    --heading-color: #ffffff;
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  [data-theme="light"] {
    --bg-body: #f8f9fa;
    --text-main: #2d3748;
    --text-muted: #718096;
    --card-bg: #ffffff;
    --card-border: rgba(0, 0, 0, 0.08);
    --accent: #5a67d8;
    --heading-color: #1a202c;
    --shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  /* Force Body Background */
  body {
    background-color: var(--bg-body) !important;
    color: var(--text-main);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Main Container */
  .pub-container {
    font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
  }
  .pub-container * { box-sizing: border-box; }

  /* Aesthetic Toggle Button */
  .theme-toggle {
    position: absolute;
    top: -40px; /* Moves it up into the white-space area */
    right: 0;
    background: transparent;
    border: 1px solid var(--card-border);
    color: var(--text-muted);
    padding: 6px 12px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
  }

  .theme-toggle:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(255,255,255,0.05);
  }

  .toggle-icon svg {
    width: 16px;
    height: 16px;
    stroke-width: 2;
  }

  /* Year Marker */
  .year-divider {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--accent);
    margin: 20px 0 20px 0;
    padding-left: 10px;
    border-left: 3px solid var(--accent);
    line-height: 1;
  }

  /* Publication Card */
  .pub-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .pub-card:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }

  /* Badges */
  .badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: white;
    margin-bottom: 12px;
  }
  .badge-journal { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
  .badge-conf { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }

  /* Content Styling */
  .pub-card h2 {
    font-size: 1.25rem;
    color: var(--heading-color);
    margin: 0 0 10px 0;
    line-height: 1.4;
    font-weight: 600;
  }

  .meta {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .meta strong { color: var(--text-main); }
  .venue { color: var(--accent); font-style: italic; }

  /* Abstract */
  .abstract-container {
    margin-bottom: 16px;
    position: relative;
  }
  .abstract {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--text-muted);
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Shows 2 lines by default */
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .abstract.expanded { -webkit-line-clamp: unset; }
  
  .read-more {
    font-size: 0.8rem;
    color: var(--accent);
    cursor: pointer;
    display: inline-block;
    margin-top: 6px;
    font-weight: 500;
    border-bottom: 1px dotted transparent;
  }
  .read-more:hover { border-bottom-color: var(--accent); }

  /* Links & Metrics */
  .action-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 16px;
    border-top: 1px solid var(--card-border);
    flex-wrap: wrap;
  }

  .btn-link {
    text-decoration: none !important;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: transform 0.2s;
    color: white !important;
  }
  .btn-doi { background: #3b82f6; }
  .btn-pdf { background: #ef4444; }
  .btn-link:hover { transform: translateY(-2px); opacity: 0.9; }

  .metrics {
    margin-left: auto;
    font-size: 0.8rem;
    color: var(--text-muted);
    display: flex;
    gap: 15px;
    font-family: "SF Mono", Consolas, monospace;
  }

  @media (max-width: 600px) {
    .metrics { width: 100%; margin-top: 10px; margin-left: 0; }
    .theme-toggle { top: -50px; }
  }
</style>

<div class="pub-container">
  
  <!-- Aesthetic Toggle Button -->
  <button class="theme-toggle" onclick="toggleTheme()" id="themeBtn" aria-label="Toggle Theme">
    <span class="toggle-icon">
      <!-- Moon Icon (Default) -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </span>
    <span class="toggle-text">Dark Mode</span>
  </button>

  <!-- 2025 Section -->
  <div class="year-divider">2025</div>

  <!-- Publication 1 -->
  <div class="pub-card">
    <span class="badge badge-journal">Journal Article</span>
    <h2>Decoding Memory with Explainable AI: A Large-Scale EEG-Based Machine Learning Study</h2>
    
    <div class="meta">
      <strong>M. T. Hossain</strong>, et al.<br>
      <span class="venue">Neuroscience Informatics, 2025</span>
    </div>

    <div class="abstract-container">
      <div class="abstract" id="abs1">
        Understanding the distinct neural signatures that differentiate memory encoding from retrieval remains a key challenge in cognitive neuroscience. This study applies machine learning to EEG data from the Penn Electrophysiology of Encoding and Retrieval Study (PEERS). Gradient Boosting emerged as the most effective classifier, achieving 81.97% accuracy. SHAP analysis revealed theta-band relative energy in Anterior Superior regions as the most influential predictor.
      </div>
      <span class="read-more" onclick="toggleAbs('abs1', this)">Read more</span>
    </div>

    <div class="action-bar">
      <a class="btn-link btn-doi" href="https://doi.org/10.1016/j.neuri.2025.100227" target="_blank">DOI</a>
      <a class="btn-link btn-pdf" href="https://doi.org/10.1016/j.neuri.2025.100227" target="_blank">PDF</a>
      <div class="metrics">
        <span>📊 81.97% Acc</span>
        <span>📈 91.62% AUC</span>
      </div>
    </div>
  </div>

  <!-- Publication 2 -->
  <div class="pub-card">
    <span class="badge badge-conf">Conference Paper</span>
    <h2>Spectrogram-Driven Emotion Detection from Electroencephalogram</h2>
    
    <div class="meta">
      <strong>M. T. Hossain</strong>, et al.<br>
      <span class="venue">IEEE ECCE 2025</span>
    </div>

    <div class="abstract-container">
      <div class="abstract" id="abs2">
        Emotion detection aims to interpret emotions through physiological signals. Electroencephalogram (EEG) offers unique insights for real-time emotion detection. This study evaluates classifying emotions (positive, negative, neutral) in EEG using deep learning, emphasizing Convolutional Neural Networks (CNN). The approach achieved an overall accuracy of 99.80% in detecting emotion classes.
      </div>
      <span class="read-more" onclick="toggleAbs('abs2', this)">Read more</span>
    </div>

    <div class="action-bar">
      <a class="btn-link btn-doi" href="https://doi.org/10.1109/ECCE64574.2025.11013815" target="_blank">DOI</a>
      <a class="btn-link btn-pdf" href="https://doi.org/10.1109/ECCE64574.2025.11013815" target="_blank">PDF</a>
      <div class="metrics">
        <span>📊 99.80% Acc</span>
        <span>🧠 SEED</span>
      </div>
    </div>
  </div>

  <!-- Footer -->
  {% if site.author.googlescholar %}
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--card-border); text-align: center; font-size: 0.9rem; color: var(--text-muted);">
    View full profile on <a href="{{ site.author.googlescholar }}" target="_blank" style="color: var(--accent); text-decoration: none;">Google Scholar ↗</a>
  </div>
  {% endif %}

</div>

<!-- Logic -->
<script>
  // SVG Icons
  const iconSun = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
  const iconMoon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

  function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');
    const iconSpan = btn.querySelector('.toggle-icon');
    const textSpan = btn.querySelector('.toggle-text');
    
    if (body.hasAttribute('data-theme')) {
      body.removeAttribute('data-theme');
      iconSpan.innerHTML = iconMoon; // Show Moon when in Dark Mode (to switch to Light?) - Usually icon represents current state or target state. Let's make icon represent Target.
      // Actually standard: Icon shows what you will Switch TO.
      // Default is Dark. So we show Sun (to switch to Light).
      // Wait, CSS says Default is Dark. 
      // Let's fix logic:
      // If Dark (Default) -> Button shows Sun (to go Light).
      // If Light -> Button shows Moon (to go Dark).
    } else {
      body.setAttribute('data-theme', 'light');
    }
    updateButton();
  }

  function updateButton() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');
    const iconSpan = btn.querySelector('.toggle-icon');
    const textSpan = btn.querySelector('.toggle-text');

    if (body.hasAttribute('data-theme')) {
      // Light Mode is Active -> Show Moon (to go Dark)
      iconSpan.innerHTML = iconMoon;
      textSpan.textContent = "Dark Mode";
    } else {
      // Dark Mode is Active (Default) -> Show Sun (to go Light)
      iconSpan.innerHTML = iconSun;
      textSpan.textContent = "Light Mode";
    }
  }
  
  // Initialize
  updateButton();

  function toggleAbs(id, btn) {
    const el = document.getElementById(id);
    el.classList.toggle('expanded');
    btn.textContent = el.classList.contains('expanded') ? 'Show less' : 'Read more';
  }
</script>
