---
layout: single 
permalink: /
---

<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Mohammed Tawshif Hossain — Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

<style>
  :root {
    /* Color Palette - Vibrant Dark Academia */
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --card-bg: rgba(30, 30, 35, 0.8);
    
    --accent: #ffd700; /* Vibrant Gold */
    --accent-glow: rgba(255, 215, 0, 0.3);
    --accent-dim: rgba(255, 215, 0, 0.15);
    
    --text-primary: #ffffff;
    --text-secondary: #b8b8b8;
    --text-tertiary: #777777;
    
    --border-light: rgba(255, 255, 255, 0.12);
    --border-accent: rgba(255, 215, 0, 0.5);
    
    --max-width: 1000px;
    --card-radius: 8px;
    
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
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.02) 0%, transparent 50%),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  }

  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 600;
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

  /* HERO SECTION - Enhanced with Image */
  .hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 3rem 0;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(80px);
    animation: pulse 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.1); }
  }

  .hero-content {
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .profile-frame {
    width: 160px;
    height: 160px;
    margin: 0 auto 35px;
    border-radius: 50%;
    border: 2px solid var(--border-accent);
    padding: 5px;
    position: relative;
    background: linear-gradient(135deg, var(--accent-dim), transparent);
    box-shadow: 0 0 30px var(--accent-glow), 0 0 60px rgba(255, 215, 0, 0.1);
    animation: glow 3s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 30px var(--accent-glow), 0 0 60px rgba(255, 215, 0, 0.1); }
    50% { box-shadow: 0 0 40px var(--accent-glow), 0 0 80px rgba(255, 215, 0, 0.15); }
  }
  
  .profile-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .profile-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-inner span {
    font-size: 4rem;
    filter: drop-shadow(0 0 10px var(--accent-glow));
  }

  .hero h1 {
    font-size: 3.8rem;
    letter-spacing: -0.03em;
    margin-bottom: 15px;
    background: linear-gradient(135deg, #ffffff 0%, var(--accent) 50%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 6s linear infinite;
    font-weight: 700;
  }

  @keyframes shimmer {
    to { background-position: 200% center; }
  }

  .hero-role {
    font-family: var(--font-body);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--accent);
    margin-bottom: 28px;
    display: inline-block;
    position: relative;
    font-weight: 600;
    text-shadow: 0 0 20px var(--accent-glow);
  }

  .hero-role::before,
  .hero-role::after {
    content: '—';
    margin: 0 15px;
    opacity: 0.6;
  }

  .hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-secondary);
    line-height: 1.9;
    margin-bottom: 45px;
    font-weight: 300;
  }

  .hero-subtitle span {
    color: var(--text-primary);
    border-bottom: 2px solid var(--accent);
    padding-bottom: 2px;
    font-weight: 500;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 45px;
  }

  .social-link {
    font-size: 1.3rem;
    color: var(--text-secondary);
    border: 1px solid var(--border-light);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    background: rgba(20, 20, 20, 0.6);
    backdrop-filter: blur(10px);
  }

  .social-link:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-5px);
    box-shadow: 0 8px 20px var(--accent-glow);
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 18px;
  }

  .btn {
    padding: 15px 35px;
    border-radius: 6px;
    font-size: 0.92rem;
    letter-spacing: 0.05em;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--accent), #ffed4e);
    border: none;
    color: #0a0a0a;
    box-shadow: 0 4px 15px var(--accent-glow);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px var(--accent-glow);
  }

  .btn-text {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border-light);
  }

  .btn-text:hover {
    color: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
  }

  /* SECTIONS */
  section {
    padding: 80px 0;
    border-top: 1px solid var(--border-light);
    position: relative;
  }

  .section-header {
    margin-bottom: 50px;
    text-align: left;
    position: relative;
    padding-left: 25px;
    border-left: 3px solid var(--accent);
  }

  .section-title {
    font-size: 2.8rem;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #ffffff, var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-subtitle {
    font-family: var(--font-body);
    font-size: 1.05rem;
    color: var(--text-tertiary);
  }

  /* SUBSECTION HEADERS */
  .subsection-header {
    margin-bottom: 35px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--border-light);
  }

  .subsection-header h3 {
    font-family: var(--font-heading);
    font-size: 1.9rem;
    margin-bottom: 8px;
    color: var(--accent);
  }

  .subsection-header .time-label {
    font-size: 0.85rem;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  /* GRID */
  .grid {
    display: grid;
    gap: 22px;
  }

  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-2 { grid-template-columns: repeat(2, 1fr); }

  /* RESEARCH WORK CARDS WITH IMAGES */
  .research-card {
    background: var(--card-bg);
    border: 1px solid var(--border-light);
    border-radius: var(--card-radius);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    backdrop-filter: blur(10px);
  }

  .research-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  .research-card:hover {
    border-color: var(--border-accent);
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6), 0 0 30px var(--accent-glow);
  }

  .research-card:hover::before {
    opacity: 1;
  }

  .research-image {
    width: 100%;
    height: 180px;
    overflow: hidden;
    position: relative;
    background: #000;
  }

  .research-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .research-card:hover .research-image img {
    transform: scale(1.08);
  }

  .research-content {
    padding: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .research-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .research-badge {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    font-weight: 600;
  }

  .research-year {
    font-size: 0.75rem;
    color: var(--text-tertiary);
  }

  .research-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
    font-family: var(--font-heading);
    color: var(--text-primary);
  }

  .research-card p {
    font-size: 0.92rem;
    color: var(--text-secondary);
    font-weight: 300;
    flex-grow: 1;
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .research-status {
    font-size: 0.8rem;
    padding: 6px 12px;
    border-radius: 4px;
    display: inline-block;
    margin-top: 8px;
  }

  .status-ongoing {
    background: var(--accent-dim);
    color: var(--accent);
    border: 1px solid var(--border-accent);
  }

  .status-completed {
    background: rgba(100, 100, 100, 0.2);
    color: var(--text-secondary);
    border: 1px solid var(--border-light);
  }

  /* REGULAR CARDS (for Areas of Inquiry) */
  .card {
    background: var(--card-bg);
    border: 1px solid var(--border-light);
    border-radius: var(--card-radius);
    padding: 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    backdrop-filter: blur(10px);
    overflow: hidden;
  }

  .card::before {
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

  .card:hover {
    border-color: var(--border-accent);
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6), 0 0 30px var(--accent-glow);
  }

  .card:hover::before {
    opacity: 1;
  }

  .card-icon {
    font-size: 2rem;
    margin-bottom: 16px;
    filter: drop-shadow(0 0 8px var(--accent-glow));
  }

  .card h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
    font-family: var(--font-heading);
    color: var(--text-primary);
  }

  .card p {
    font-size: 0.92rem;
    color: var(--text-secondary);
    font-weight: 300;
    flex-grow: 1;
    line-height: 1.7;
  }

  /* FOOTER */
  footer {
    padding: 70px 0 35px;
    border-top: 1px solid var(--border-light);
    text-align: center;
    background: linear-gradient(to bottom, transparent, rgba(10, 10, 10, 0.8));
  }

  .footer-nav {
    display: flex;
    justify-content: center;
    gap: 28px;
    margin-bottom: 28px;
  }

  .footer-nav a {
    font-family: var(--font-heading);
    font-style: italic;
    font-size: 1.1rem;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .footer-nav a:hover {
    color: var(--accent);
    text-shadow: 0 0 15px var(--accent-glow);
  }

  .copyright {
    font-size: 0.85rem;
    color: var(--text-tertiary);
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .grid-3 { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .hero h1 { font-size: 2.6rem; }
    .grid-3, .grid-2 { grid-template-columns: 1fr; }
    .hero-buttons { 
      flex-direction: column; 
      width: 100%; 
      max-width: 300px; 
      margin: 0 auto; 
    }
    .btn { width: 100%; text-align: center; }
    .section-header { 
      text-align: center; 
      border-left: none; 
      padding-left: 0; 
    }
    .section-header::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background: var(--accent);
      margin: 18px auto 0;
    }
    .profile-frame {
      width: 140px;
      height: 140px;
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
        <!-- Replace the span with your actual image -->
        <!-- <img src="/images/profile.jpg" alt="Mohammed Tawshif Hossain"> -->
        <span>🎓</span>
      </div>
    </div>
    
    <div class="hero-role">EEE Student & Researcher</div>
    <h1>Mohammed Tawshif Hossain</h1>
    
    <p class="hero-subtitle">
      Conducting research at the intersection of 
      <span>Biomedical Engineering</span>, 
      <span>Quantum Photonics</span>, and 
      <span>Computational Neuroscience</span>.
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
      <a href="/cv/" class="btn btn-text">Download CV →</a>
    </div>
  </div>
</div>

<!-- RESEARCH TIMELINE SECTION -->
<section>
  <div class="container fade-in" style="animation-delay: 0.2s;">
    <div class="section-header">
      <h2 class="section-title">Research Timeline</h2>
      <p class="section-subtitle">Current ongoing works and past completed projects</p>
    </div>
    
    <!-- PRESENT WORKS -->
    <div style="margin-bottom: 70px;">
      <div class="subsection-header">
        <div class="time-label">Present</div>
        <h3>Current Ongoing Works</h3>
      </div>
      
      <div class="grid grid-2">
        <article class="research-card">
          <div class="research-image">
            <img src="/images/optical-tweezing.jpg" alt="Optical Tweezing Research" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Optical+Tweezing'">
          </div>
          <div class="research-content">
            <div class="research-meta">
              <span class="research-badge">Undergraduate Thesis</span>
              <span class="research-year">2024 - Present</span>
            </div>
            <h3>Tunable On-Chip Optical Tweezing</h3>
            <p>Design and simulation of active metasurfaces for dynamic optical trapping and manipulation of nanoparticles on a silicon-on-insulator platform.</p>
            <span class="research-status status-ongoing">In Progress - Simulation Phase</span>
          </div>
        </article>
        
        <article class="research-card">
          <div class="research-image">
            <img src="/images/quantum-photonics.jpg" alt="Quantum Photonics Research" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Quantum+Photonics'">
          </div>
          <div class="research-content">
            <div class="research-meta">
              <span class="research-badge">Research Project</span>
              <span class="research-year">2024 - Present</span>
            </div>
            <h3>Quantum Photonic Circuit Design</h3>
            <p>Investigating scalable photonic integrated circuits for quantum information processing and entanglement generation using silicon photonics platform.</p>
            <span class="research-status status-ongoing">In Progress - Literature Review</span>
          </div>
        </article>
      </div>
    </div>
    
    <!-- PAST WORKS -->
    <div>
      <div class="subsection-header">
        <div class="time-label">2023 - 2024</div>
        <h3>Past Completed Works</h3>
      </div>
      
      <div class="grid grid-3">
        <article class="research-card">
          <div class="research-image">
            <img src="/images/favicon-512x512.png" alt="Memory Decoding Research" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Memory+Decoding'">
          </div>
          <div class="research-content">
            <div class="research-meta">
              <span class="research-badge">Journal Article</span>
              <span class="research-year">2025</span>
            </div>
            <h3>Decoding Memory with Explainable AI</h3>
            <p>Large-scale EEG study using SHAP values to interpret ML models distinguishing memory states.</p>
            <span class="research-status status-completed">Published</span>
          </div>
        </article>
        
        <article class="research-card">
          <div class="research-image">
            <img src="/images/emotion_detection_thumbnail.jpg" alt="Emotion Detection Research" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Emotion+Detection'">
          </div>
          <div class="research-content">
            <div class="research-meta">
              <span class="research-badge">Conference Paper</span>
              <span class="research-year">2025</span>
            </div>
            <h3>Spectrogram-Driven Emotion Detection</h3>
            <p>CNN architectures on EEG spectrograms for emotion classification presented at ECCE 2025.</p>
            <span class="research-status status-completed">Published</span>
          </div>
        </article>
        
        <article class="research-card">
          <div class="research-image">
            <img src="/images/metamaterial-absorber.jpg" alt="Metamaterial Research" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Metamaterial'">
          </div>
          <div class="research-content">
            <div class="research-meta">
              <span class="research-badge">Course Project</span>
              <span class="research-year">2024</span>
            </div>
            <h3>Metamaterial Absorber Design</h3>
            <p>Computational design of frequency-selective metamaterial absorbers for EMI shielding applications.</p>
            <span class="research-status status-completed">Completed</span>
          </div>
        </article>
        
        <article class="research-card">
          <div class="research-image">
            <img src="/images/biomedical-signal.jpg" alt="Biomedical Signal Processing" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Signal+Processing'">
          </div>
          <div class="research-content">
            <div class="research-meta">
              <span class="research-badge">Research Project</span>
              <span class="research-year">2023</span>
            </div>
            <h3>Biomedical Signal Processing</h3>
            <p>Analysis of ECG and EMG signals using wavelet transforms for arrhythmia detection.</p>
            <span class="research-status status-completed">Completed</span>
          </div>
        </article>
        
        <article class="research-card">
          <div class="research-image">
            <img src="/images/neural-network.jpg" alt="Neural Network Implementation" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Neural+Networks'">
          </div>
          <div class="research-content">
            <div class="research-meta">
              <span class="research-badge">Workshop Project</span>
              <span class="research-year">2023</span>
            </div>
            <h3>Neural Network Implementation</h3>
            <p>From-scratch implementation of feedforward and CNNs for image classification tasks.</p>
            <span class="research-status status-completed">Completed</span>
          </div>
        </article>
        
        <article class="research-card">
          <div class="research-image">
            <img src="/images/iot-health.jpg" alt="IoT Health Monitoring" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/ffd700?text=IoT+Health'">
          </div>
          <div class="research-content">
            <div class="research-meta">
              <span class="research-badge">Hackathon</span>
              <span class="research-year">2023</span>
            </div>
            <h3>IoT Health Monitoring System</h3>
            <p>Real-time vital signs monitoring using Arduino and cloud integration for remote patients.</p>
            <span class="research-status status-completed">Completed</span>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

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
        <h3>Biomedical Optics
