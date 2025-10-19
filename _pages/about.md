---
layout: single 
permalink: /
---
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Mohammed Tawshif Hossain — Portfolio</title>
<style>
  :root {
  --max-width: 1000px;
  --hero-card-width: 700px;
  --card-radius: 16px;
  --card-bg: rgba(255, 255, 255, 0.08);
  --accent: #667eea;
  --accent-light: #8b9bff;
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.75);
  --text-tertiary: rgba(255, 255, 255, 0.55);
  --border-subtle: rgba(255, 255, 255, 0.06);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  background: #0a0e27;
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

html { font-size: 15px; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 32px;
}

/* HERO SECTION */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #5a67d8 50%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(139, 155, 255, 0.15), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.15), transparent 40%);
}

.hero .container {
  position: relative;
  z-index: 1;
}

/* Hero Card - central content */
.hero-card {
  width: 100%;
  max-width: var(--hero-card-width);
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border-radius: var(--card-radius);
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin: auto;
}

/* Profile Icon */
.profile-wrapper {
  width: 130px;
  height: 130px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

.profile-icon {
  font-size: 3.5rem;
}

/* Hero Text */
.hero h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.hero-title {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  font-weight: 500;
}

.hero-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.social-link {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(255, 255, 255, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-card {
    padding: 2rem 1.5rem;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
}
  /* MAIN CONTENT SECTIONS */
  section {
    padding: 80px 0;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--text-primary);
  }

  .section-subtitle {
    font-size: 1rem;
    color: var(--text-tertiary);
  }

  /* CARDS */
  .grid {
    display: grid;
    gap: 24px;
  }

  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  .card {
    background: var(--card-bg);
    border: 1px solid var(--border-subtle);
    border-radius: var(--card-radius);
    padding: 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    background: rgba(255,255,255,0.05);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-4px);
  }

  /* Interest Cards */
  .interest-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: rgba(102, 126, 234, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  .card h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-primary);
  }

  .card p {
    font-size: 0.92rem;
    color: var(--text-tertiary);
    line-height: 1.6;
    flex-grow: 1;
  }

  /* Stats Section */
  .stats-section {
    background: rgba(102, 126, 234, 0.08);
    border-top: 1px solid var(--border-subtle);
    border-bottom: 1px solid var(--border-subtle);
  }

  .stat-card {
    text-align: center;
    padding: 32px 20px;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-light);
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  /* Work Cards */
  .work-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .work-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: rgba(102, 126, 234, 0.15);
    color: var(--accent-light);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    width: fit-content;
  }

  .work-card h3 {
    font-size: 1.15rem;
    line-height: 1.4;
  }

  .work-link {
    color: var(--accent-light);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
  }

  .work-link:hover {
    color: var(--accent);
  }

  /* Footer */
  footer {
    padding: 60px 0;
    border-top: 1px solid var(--border-subtle);
  }

  .footer-links {
    display: flex;
    gap: 32px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .footer-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .footer-link:hover {
    color: var(--accent-light);
  }

  .copyright {
    color: var(--text-tertiary);
    font-size: 0.9rem;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .grid-3 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .grid-4 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    html { font-size: 14px; }
    
    .container {
      padding: 0 24px;
    }

    .hero {
      min-height: 70vh;
    }

    .hero h1 {
      font-size: 2rem;
    }

    section {
      padding: 60px 0;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .grid-3, .grid-4 {
      grid-template-columns: 1fr;
    }

    .hero-buttons {
      flex-direction: column;
      width: 100%;
    }

    .btn {
      justify-content: center;
    }
  }
</style>
</head>
<body>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="profile-wrapper">
      <div class="profile-icon">🎓</div>
    </div>
    
    <h1>Mohammed Tawshif Hossain</h1>
    <div class="hero-title">Electrical & Electronic Engineering Student | Researcher</div>
    <div class="hero-subtitle">
      Passionate about biomedical signal processing, quantum photonics, and computational neuroscience. 
      Exploring the intersection of technology and healthcare to innovate tomorrow's solutions.
    </div>

    <div class="social-links"> 
    <a href="mailto:tawsifturjoeee@gmail.com" class="social-link" title="Email">📧</a> 
    <a href="https://linkedin.com/in/yourprofile" class="social-link" target="_blank" title="LinkedIn">💼</a>
    <a href="https://github.com/tawsifturjo" class="social-link" target="_blank" title="GitHub">💻</a> 
    <a href="https://scholar.google.com" class="social-link" target="_blank" title="Google Scholar">🎓</a> 
    </div>
    
    <div class="hero-buttons">
      <a href="/publications/" class="btn btn-secondary">📚 View Publications</a>
      <a href="/cv/" class="btn btn-secondary">📄 Download CV</a>
    </div>
  </div>
</section>

<!-- RESEARCH INTERESTS -->
<section>
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Research Interests</h2>
      <p class="section-subtitle">Exploring cutting-edge domains at the intersection of physics, engineering, and computation</p>
    </div>
    
    <div class="grid grid-3">
      <div class="card">
        <div class="interest-icon">🔬</div>
        <h3>Quantum Photonics</h3>
        <p>Exploring quantum phenomena in photonic systems and their applications in computing and communication.</p>
      </div>
      
      <div class="card">
        <div class="interest-icon">💡</div>
        <h3>Computational Nanophotonics</h3>
        <p>Designing and simulating nanoscale photonic devices using advanced computational methods.</p>
      </div>
      
      <div class="card">
        <div class="interest-icon">🧠</div>
        <h3>Computational Neuroscience</h3>
        <p>Applying machine learning and signal processing to decode brain activity and understand cognition.</p>
      </div>
      
      <div class="card">
        <div class="interest-icon">⚕️</div>
        <h3>Biomedical Optics</h3>
        <p>Developing optical techniques for medical diagnostics and therapeutic applications.</p>
      </div>
      
      <div class="card">
        <div class="interest-icon">🌐</div>
        <h3>Integrated Photonics</h3>
        <p>Creating on-chip photonic circuits for telecommunications and sensing applications.</p>
      </div>
      
      <div class="card">
        <div class="interest-icon">⚛️</div>
        <h3>Quantum Technologies</h3>
        <p>Investigating quantum computing, sensing, and their revolutionary impact on healthcare.</p>
      </div>
    </div>
  </div>
</section>



<!-- FEATURED WORK -->
<section>
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Featured Research</h2>
      <p class="section-subtitle">Recent publications and ongoing projects</p>
    </div>
    
    <div class="grid grid-3">
      <div class="card work-card">
        <span class="work-badge">📄 Journal Article</span>
        <h3>Decoding Memory with Explainable AI</h3>
        <p>Large-scale EEG study using machine learning and SHAP to classify memory encoding vs. retrieval states with 81.97% accuracy.</p>
        <a href="/publication/2025-memory-decoding-xai" class="work-link">Read More →</a>
      </div>
      
      <div class="card work-card">
        <span class="work-badge">🎤 Conference Paper</span>
        <h3>Spectrogram-Driven Emotion Detection</h3>
        <p>CNN-based emotion classification from EEG spectrograms achieving 99.80% accuracy on the SEED dataset.</p>
        <a href="/publication/2025-emotion-detection-eeg" class="work-link">Read More →</a>
      </div>
      
      <div class="card work-card">
        <span class="work-badge">🔧 Ongoing Thesis</span>
        <h3>Tunable On-Chip Optical Tweezing</h3>
        <p>Developing chip-scale optical tweezers using metasurfaces for precise manipulation at the nanoscale.</p>
        <a href="#" class="work-link">Learn More →</a>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-links">
      <a href="/" class="footer-link">Home</a>
      <a href="/publications/" class="footer-link">Publications</a>
      <a href="/research/" class="footer-link">Research</a>
      <a href="/cv/" class="footer-link">CV</a>
      <a href="/contact/" class="footer-link">Contact</a>
    </div>
    <div class="copyright">© 2025 Mohammed Tawshif Hossain. All rights reserved.</div>
  </div>
</footer>

</body>
</html>
