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

<!-- Styles & Theme Logic -->
<style>
  /* --- CSS Variables for Theming --- */
  :root {
    /* Default (Dark) Theme */
    --bg-body: #1a1a1a;
    --bg-card: rgba(255, 255, 255, 0.04);
    --border-card: rgba(255, 255, 255, 0.08);
    --text-main: #e4e4e4;
    --text-muted: #a0a0a0;
    --heading-color: #ffffff;
    --accent-primary: #8b9bff;
    --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3);
    --shadow-hover: 0 8px 30px rgba(102, 126, 234, 0.25);
    --glass-blur: 10px;
    --btn-bg-hover: rgba(255, 255, 255, 0.1);
  }

  /* Light Theme Overrides */
  [data-theme="light"] {
    --bg-body: #f8f9fa;
    --bg-card: #ffffff;
    --border-card: rgba(0, 0, 0, 0.08);
    --text-main: #2d3748;
    --text-muted: #718096;
    --heading-color: #1a202c;
    --accent-primary: #5a67d8;
    --shadow-card: 0 2px 10px rgba(0, 0, 0, 0.05);
    --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.1);
    --glass-blur: 0px;
    --btn-bg-hover: #edf2f7;
  }

  /* Force Body Background transition */
  body {
    background-color: var(--bg-body) !important;
    color: var(--text-main);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Container Reset */
  .pub-container * {
    box-sizing: border-box;
  }
  
  .pub-container {
    font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
    max-width: 850px; /* Reduced width for compactness */
    margin: 0 auto;
    padding: 10px 0;
  }

  /* Compact Header */
  .pub-header {
    position: relative;
    padding: 25px 20px;
    margin-bottom: 25px;
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 12px;
    text-align: center;
    backdrop-filter: blur(var(--glass-blur));
  }

  .pub-header h1 {
    font-size: 1.8rem;
    margin: 0 0 5px 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  .pub-header p {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0;
  }

  /* Toggle Button */
  .theme-toggle {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: 1px solid var(--border-card);
    color: var(--text-muted);
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.2s ease;
  }

  .theme-toggle:hover {
    background: var(--btn-bg-hover);
    color: var(--accent-primary);
  }

  /* Year Marker */
  .year-divider {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--accent-primary);
    margin: 20px 0 15px 0;
    padding-left: 10px;
    border-left: 3px solid var(--accent-primary);
    line-height: 1;
  }

  /* Compact Publication Card */
  .pub-card {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: var(--shadow-card);
    transition: all 0.3s ease;
    backdrop-filter: blur(var(--glass-blur));
  }

  .pub-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
    border-color: var(--accent-primary);
  }

  /* Badge */
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: white;
    margin-bottom: 8px;
  }
  .badge-journal { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
  .badge-conf { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }

  /* Title & Meta */
  .pub-card h2 {
    font-size: 1.15rem;
    color: var(--heading-color);
    margin: 0 0 8px 0;
    line-height: 1.35;
  }

  .meta {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 12px;
    line-height: 1.5;
  }
  .meta strong { color: var(--text-main); }
  .venue { color: var(--accent-primary); font-style: italic; }

  /* Abstract (Collapsible) */
  .abstract-container {
    margin-bottom: 12px;
  }
  .abstract {
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--text-muted);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .abstract.expanded { -webkit-line-clamp: unset; }
  
  .read-more {
    font-size: 0.75rem;
    color: var(--accent-primary);
    cursor: pointer;
    display: inline-block;
    margin-top: 4px;
    font-weight: 500;
  }
  .read-more:hover { text-decoration: underline; }

  /* Action Bar */
  .action-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 12px;
    border-top: 1px solid var(--border-card);
    flex-wrap: wrap;
  }

  .btn-link {
    text-decoration: none !important;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 5px 12px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: transform 0.2s;
  }
  .btn-doi { background: #3b82f6; color: white !important; }
  .btn-pdf { background: #ef4444; color: white !important; }
  .btn-link:hover { transform: translateY(-1px); opacity: 0.9; }

  .metrics {
    margin-left: auto;
    font-size: 0.75rem;
    color: var(--text-muted);
    display: flex;
    gap: 10px;
  }

  @media (max-width: 600px) {
    .metrics { width: 100%; margin-top: 8px; }
  }
</style>

<div class="pub-container">
  
  <!-- Header with Toggle -->
  <div class="pub-header">
    <button class="theme-toggle" onclick="toggleTheme()" id="themeBtn">
      <span>☀</span> Light Mode
    </button>
    <h1>📚 Research Publications</h1>
    <p>Selected works in Neuroscience & AI</p>
  </div>

  <div class="year-divider">2025</div>

  <!-- Item 1 -->
  <div class="pub-card">
    <span class="badge badge-journal">Journal Article</span>
    <h2>Decoding Memory with Explainable AI: A Large-Scale EEG-Based Machine Learning Study</h2>
    
    <div class="meta">
      <strong>M. T. Hossain</strong>, et al.<br>
      <span class="venue">Neuroscience Informatics, 2025</span>
    </div>

    <div class="abstract-container">
      <div class="abstract" id="abs1">
        Understanding the distinct neural signatures that differentiate memory encoding from retrieval remains a key challenge in cognitive neuroscience. This study applies machine learning to EEG data from the Penn Electrophysiology of Encoding and Retrieval Study (PEERS), involving 100 participants. We used Discrete Wavelet Transform (DWT) and evaluated seven machine learning models. Gradient Boosting emerged as the most effective classifier, achieving 81.97% accuracy. SHAP analysis revealed theta-band relative energy in Anterior Superior regions as the most influential predictor.
      </div>
      <span class="read-more" onclick="toggleAbs('abs1', this)">Read more</span>
    </div>

    <div class="action-bar">
      <a class="btn-link btn-doi" href="https://doi.org/10.1016/j.neuri.2025.100227" target="_blank">DOI</a>
      <a class="btn-link btn-pdf" href="https://doi.org/10.1016/j.neuri.2025.100227" target="_blank">PDF</a>
      <div class="metrics">
        <span>📊 Acc: 81.97%</span>
        <span>📈 AUC: 91.62%</span>
      </div>
    </div>
  </div>

  <!-- Item 2 -->
  <div class="pub-card">
    <span class="badge badge-conf">Conference Paper</span>
    <h2>Spectrogram-Driven Emotion Detection from Electroencephalogram</h2>
    
    <div class="meta">
      <strong>M. T. Hossain</strong>, et al.<br>
      <span class="venue">IEEE ECCE 2025</span>
    </div>

    <div class="abstract-container">
      <div class="abstract" id="abs2">
        Emotion detection aims to interpret emotions through physiological signals. Electroencephalogram (EEG) offers unique insights for real-time emotion detection. This study evaluates classifying emotions (positive, negative, neutral) in EEG using deep learning, emphasizing Convolutional Neural Networks (CNN). Time-frequency representations (spectrograms) were created as inputs to the CNN architecture using short-time Fourier transform of EEG signals from the SEED dataset. The approach achieved an overall accuracy of 99.80% in detecting emotion classes.
      </div>
      <span class="read-more" onclick="toggleAbs('abs2', this)">Read more</span>
    </div>

    <div class="action-bar">
      <a class="btn-link btn-doi" href="https://doi.org/10.1109/ECCE64574.2025.11013815" target="_blank">DOI</a>
      <a class="btn-link btn-pdf" href="https://doi.org/10.1109/ECCE64574.2025.11013815" target="_blank">PDF</a>
      <div class="metrics">
        <span>📊 Acc: 99.80%</span>
        <span>🧠 SEED Dataset</span>
      </div>
    </div>
  </div>

  <!-- Footer -->
  {% if site.author.googlescholar %}
  <div class="scholar-footer">
    View full profile on <a href="{{ site.author.googlescholar }}" target="_blank">Google Scholar ↗</a>
  </div>
  {% endif %}

</div>

<!-- Logic -->
<script>
  function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');
    
    if (body.hasAttribute('data-theme')) {
      body.removeAttribute('data-theme');
      btn.innerHTML = '<span>☀</span> Light Mode';
    } else {
      body.setAttribute('data-theme', 'light');
      btn.innerHTML = '<span>☾</span> Dark Mode';
    }
  }

  function toggleAbs(id, btn) {
    const el = document.getElementById(id);
    el.classList.toggle('expanded');
    btn.textContent = el.classList.contains('expanded') ? 'Show less' : 'Read more';
  }
</script>

