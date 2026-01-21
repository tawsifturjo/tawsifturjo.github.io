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
  <title>Publications - Mohammed Tawshif Hossain</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #1a1a1a;
      color: #e4e4e4;
      padding: 0;
      min-height: 100vh;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    body.light-mode {
      background: #f5f5f5;
      color: #2c3e50;
    }

    /* Navigation Bar */
    .navbar {
      background: #2b2b2b;
      padding: 0;
      border-bottom: 1px solid #3a3a3a;
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    body.light-mode .navbar {
      background: #ffffff;
      border-bottom: 1px solid #e0e0e0;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }

    .nav-brand {
      font-size: 1.2em;
      font-weight: 600;
      color: #ffffff;
      text-decoration: none;
      padding: 20px 0;
      transition: color 0.3s ease;
    }

    body.light-mode .nav-brand {
      color: #2c3e50;
    }

    .nav-brand:hover {
      color: #667eea;
    }

    .nav-links {
      display: flex;
      gap: 0;
      list-style: none;
      align-items: center;
    }

    .nav-links li {
      margin: 0;
    }

    .nav-links a {
      display: block;
      padding: 20px 24px;
      color: #b8b8b8;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      border-bottom: 3px solid transparent;
    }

    body.light-mode .nav-links a {
      color: #5a5a5a;
    }

    .nav-links a:hover {
      color: #ffffff;
      background: #333333;
      border-bottom-color: #667eea;
    }

    body.light-mode .nav-links a:hover {
      color: #2c3e50;
      background: #f0f0f0;
    }

    .nav-links a.active {
      color: #ffffff;
      border-bottom-color: #667eea;
    }

    body.light-mode .nav-links a.active {
      color: #2c3e50;
    }

    .theme-toggle {
      background: none;
      border: none;
      color: #b8b8b8;
      font-size: 1.5em;
      cursor: pointer;
      padding: 20px 20px;
      transition: color 0.3s ease, transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    body.light-mode .theme-toggle {
      color: #5a5a5a;
    }

    .theme-toggle:hover {
      color: #667eea;
      transform: scale(1.1);
    }

    /* Breadcrumb */
    .breadcrumb {
      max-width: 1100px;
      margin: 0 auto;
      padding: 20px 20px 10px 20px;
      font-size: 0.9em;
      color: #888;
      transition: color 0.3s ease;
    }

    body.light-mode .breadcrumb {
      color: #666;
    }

    .breadcrumb a {
      color: #667eea;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    body.light-mode .breadcrumb a {
      color: #667eea;
    }

    .breadcrumb a:hover {
      color: #764ba2;
      text-decoration: underline;
    }

    .breadcrumb span {
      margin: 0 8px;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 20px 20px 40px 20px;
    }

    /* Header Section */
    .page-header {
      text-align: left;
      margin-bottom: 50px;
      padding: 30px;
      background: #2b2b2b;
      border-radius: 12px;
      border: 1px solid #3a3a3a;
      position: relative;
      overflow: hidden;
      transition: background 0.3s ease, border-color 0.3s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    body.light-mode .page-header {
      background: #ffffff;
      border: 1px solid #e0e0e0;
    }

    .page-header::before {
      display: none;
    }

    .header-content {
      flex: 1;
    }

    .page-header h1 {
      font-size: 2.2em;
      font-weight: 700;
      color: #8b9cff;
      margin-bottom: 8px;
      position: relative;
      transition: color 0.3s ease;
    }

    body.light-mode .page-header h1 {
      color: #667eea;
    }

    .page-header h1::before {
      content: '📚';
      margin-right: 12px;
    }

    .page-header p {
      font-size: 1em;
      color: #b8b8b8;
      position: relative;
      transition: color 0.3s ease;
    }

    body.light-mode .page-header p {
      color: #5a5a5a;
    }

    .header-toggle {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #b8b8b8;
      font-size: 0.9em;
      cursor: pointer;
      padding: 12px 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    body.light-mode .header-toggle {
      color: #5a5a5a;
      background: #f5f5f5;
      border: 1px solid #e0e0e0;
    }

    .header-toggle:hover {
      background: rgba(102, 126, 234, 0.2);
      border-color: rgba(102, 126, 234, 0.4);
    }

    body.light-mode .header-toggle:hover {
      background: #e8ebff;
      border-color: #667eea;
    }

    .toggle-icon {
      font-size: 1.3em;
    }

    /* Year Divider */
    .year-section {
      margin: 50px 0 30px 0;
    }

    .year-divider {
      font-size: 2em;
      font-weight: 700;
      color: #667eea;
      padding-bottom: 12px;
      border-bottom: 3px solid rgba(102, 126, 234, 0.4);
      display: inline-block;
      margin-bottom: 30px;
      transition: color 0.3s ease, border-color 0.3s ease;
    }

    body.light-mode .year-divider {
      color: #667eea;
      border-bottom-color: rgba(102, 126, 234, 0.6);
    }

    /* Publication Card */
    .publication-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 28px;
      margin-bottom: 24px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    body.light-mode .publication-card {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .publication-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
      transform: scaleY(0);
      transition: transform 0.4s ease;
    }

    .publication-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(102, 126, 234, 0.25);
      border-color: rgba(102, 126, 234, 0.3);
    }

    body.light-mode .publication-card:hover {
      box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);
      border-color: rgba(102, 126, 234, 0.4);
    }

    .publication-card:hover::before {
      transform: scaleY(1);
    }

    /* Badge */
    .pub-badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.75em;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 16px;
    }

    .journal-badge {
      background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
      color: white;
    }

    .conference-badge {
      background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
      color: white;
    }

    /* Title */
    .pub-title {
      font-size: 1.3em;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 12px;
      line-height: 1.4;
      transition: color 0.3s ease;
    }

    body.light-mode .pub-title {
      color: #2c3e50;
    }

    .publication-card:hover .pub-title {
      color: #667eea;
    }

    /* Authors */
    .pub-authors {
      font-size: 0.95em;
      color: #a8a8a8;
      margin-bottom: 8px;
      font-style: italic;
      transition: color 0.3s ease;
    }

    body.light-mode .pub-authors {
      color: #666;
    }

    .pub-authors strong {
      color: #d4d4d4;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    body.light-mode .pub-authors strong {
      color: #2c3e50;
    }

    /* Venue */
    .pub-venue {
      font-size: 0.9em;
      color: #888;
      margin-bottom: 16px;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    body.light-mode .pub-venue {
      color: #555;
    }

    .pub-venue em {
      color: #9a9a9a;
      transition: color 0.3s ease;
    }

    body.light-mode .pub-venue em {
      color: #666;
    }

    /* Abstract */
    .pub-abstract {
      font-size: 0.92em;
      line-height: 1.7;
      color: #b0b0b0;
      margin-bottom: 18px;
      text-align: justify;
      transition: color 0.3s ease;
    }

    body.light-mode .pub-abstract {
      color: #4a4a4a;
    }

    .pub-abstract strong {
      color: #667eea;
      font-weight: 600;
    }

    /* Links Section */
    .pub-links {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .pub-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.85em;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .pub-link.doi {
      background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
      color: white;
    }

    .pub-link.pdf {
      background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
      color: white;
    }

    .pub-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    /* Metrics */
    .pub-metrics {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      transition: border-color 0.3s ease;
    }

    body.light-mode .pub-metrics {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .metric {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85em;
      color: #a0a0a0;
      transition: color 0.3s ease;
    }

    body.light-mode .metric {
      color: #666;
    }

    .metric strong {
      color: #d0d0d0;
      transition: color 0.3s ease;
    }

    body.light-mode .metric strong {
      color: #2c3e50;
    }

    /* Footer Section */
    .scholar-section {
      text-align: center;
      margin-top: 60px;
      padding: 30px;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
    }

    body.light-mode .scholar-section {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .scholar-section p {
      font-size: 1.05em;
      color: #b8b8b8;
      transition: color 0.3s ease;
    }

    body.light-mode .scholar-section p {
      color: #5a5a5a;
    }

    .scholar-section a {
      color: #667eea;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .scholar-section a:hover {
      color: #764ba2;
      text-decoration: underline;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        align-items: flex-start;
      }

      .nav-links {
        width: 100%;
        flex-direction: column;
        gap: 0;
      }

      .nav-links li {
        width: 100%;
      }

      .nav-links a {
        padding: 15px 20px;
        border-bottom: 1px solid #3a3a3a;
      }

      .page-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }

      .header-toggle {
        align-self: flex-end;
      }

      .page-header h1 {
        font-size: 1.8em;
      }

      .page-header {
        padding: 25px 20px;
      }

      .publication-card {
        padding: 20px;
      }

      .pub-title {
        font-size: 1.15em;
      }

      .year-divider {
        font-size: 1.6em;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="#" class="nav-brand">Mohammed Tawshif Hossain</a>
      <ul class="nav-links">
        <li><a href="#" class="active">Publications</a></li>
        <li><a href="#">CV</a></li>
        <li><button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button></li>
      </ul>
    </div>
  </nav>

  <!-- Breadcrumb -->
  <div class="breadcrumb">
    <a href="#">Home</a>
    <span>/</span>
    <span>Publications</span>
  </div>

  <div class="container">
    <!-- Header -->
    <div class="page-header">
      <div class="header-content">
        <h1>Research Publications</h1>
        <p>Selected works in Neuroscience & AI</p>
      </div>
      <div class="header-toggle" onclick="toggleTheme()">
        <span class="toggle-icon">🌙</span>
        <span class="toggle-text">Light Mode</span>
      </div>
    </div>

    <!-- 2025 Publications -->
    <div class="year-section">
      <div class="year-divider">2025</div>

      <!-- Publication 1 -->
      <div class="publication-card">
        <span class="pub-badge journal-badge">📄 Journal Article</span>
        
        <h2 class="pub-title">Decoding Memory with Explainable AI: A Large-Scale EEG-Based Machine Learning Study of Encoding vs. Retrieval</h2>
        
        <p class="pub-authors">
          <strong>Mohammed Tawshif Hossain</strong>, et al.
        </p>
        
        <p class="pub-venue">
          <em>Neuroscience Informatics</em>, 2025
        </p>
        
        <p class="pub-abstract">
          Understanding the distinct neural signatures that differentiate memory encoding from retrieval remains a key challenge in cognitive neuroscience. This study applies machine learning to EEG data from the Penn Electrophysiology of Encoding and Retrieval Study (PEERS), involving 100 participants across over 400 sessions, to classify these cognitive states. We used Discrete Wavelet Transform (DWT) on EEG signals from six critical brain regions and evaluated seven machine learning models. Gradient Boosting emerged as the most effective classifier, achieving <strong>81.97% accuracy</strong> and a <strong>91.62% AUC</strong>. To interpret this performance, we applied Explainable AI (XAI) methods, specifically SHapley Additive exPlanations (SHAP). This analysis revealed that theta-band relative energy, especially in the Left and Right Anterior Superior (LAS/RAS) regions, was the most influential predictor.
        </p>
        
        <div class="pub-links">
          <a class="pub-link doi" href="https://doi.org/10.1016/j.neuri.2025.100227" target="_blank" rel="noopener noreferrer">
            🔗 DOI
          </a>
          <a class="pub-link pdf" href="https://doi.org/10.1016/j.neuri.2025.100227" target="_blank" rel="noopener noreferrer">
            📄 PDF
          </a>
        </div>
        
        <div class="pub-metrics">
          <span class="metric">
            📊 <strong>Accuracy:</strong> 81.97%
          </span>
          <span class="metric">
            📈 <strong>AUC:</strong> 91.62%
          </span>
        </div>
      </div>

      <!-- Publication 2 -->
      <div class="publication-card">
        <span class="pub-badge conference-badge">🎤 Conference Paper</span>
        
        <h2 class="pub-title">Spectrogram-Driven Emotion Detection from Electroencephalogram</h2>
        
        <p class="pub-authors">
          <strong>Mohammed Tawshif Hossain</strong>, et al.
        </p>
        
        <p class="pub-venue">
          <em>2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)</em>
        </p>
        
        <p class="pub-abstract">
          Emotion detection aims to interpret emotions through data like text, voice, and physiological signals, which holds significant potential for monitoring mental health and human-computer interaction. Electroencephalogram (EEG) is a non-invasive technique recording brain activity and offers unique insights for real-time emotion detection. This study evaluates classifying emotions (positive, negative, neutral) in EEG using deep learning, emphasizing Convolutional Neural Networks (CNN). After preprocessing, time-frequency representations along with random transformations were created as inputs to the CNN architecture using short-time Fourier transform of EEG signals from the SEED dataset. The spectrograms were processed to achieve better outcomes, showing an overall accuracy of <strong>99.80%</strong> in detecting emotion classes.
        </p>
        
        <div class="pub-links">
          <a class="pub-link doi" href="https://doi.org/10.1109/ECCE64574.2025.11013815" target="_blank" rel="noopener noreferrer">
            🔗 DOI
          </a>
          <a class="pub-link pdf" href="https://doi.org/10.1109/ECCE64574.2025.11013815" target="_blank" rel="noopener noreferrer">
            📄 PDF
          </a>
        </div>
        
        <div class="pub-metrics">
          <span class="metric">
            📊 <strong>Accuracy:</strong> 99.80%
          </span>
          <span class="metric">
            🧠 <strong>Dataset:</strong> SEED
          </span>
        </div>
      </div>
    </div>

    <!-- Google Scholar Section -->
    <div class="scholar-section">
      <p>
        For a complete list of publications and citation metrics, please visit my 
        <a href="#" target="_blank" rel="noopener noreferrer">Google Scholar profile</a>.
      </p>
    </div>
  </div>

  <script>
    // Theme toggle functionality
    function toggleTheme() {
      const body = document.body;
      const themeToggle = document.querySelector('.toggle-icon');
      const toggleText = document.querySelector('.toggle-text');
      
      body.classList.toggle('light-mode');
      
      // Update button icon and text
      if (body.classList.contains('light-mode')) {
        themeToggle.textContent = '☀️';
        toggleText.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
      } else {
        themeToggle.textContent = '🌙';
        toggleText.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
      }
    }

    // Load saved theme on page load
    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');
      const body = document.body;
      const themeToggle = document.querySelector('.toggle-icon');
      const toggleText = document.querySelector('.toggle-text');
      
      if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
        toggleText.textContent = 'Dark Mode';
      }
    });
  </script>
</body>
</html>
