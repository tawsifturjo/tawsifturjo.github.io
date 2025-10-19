---
layout: single 
permalink: /
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Mohammed Tawshif Hossain - Portfolio</title>
<style>
  /* Reset & base */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background: #0a0e27;
    color: #fff;
    line-height: 1.5;
    overflow-x: hidden;
  }

  /* Global container slight right offset */
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
    transform: translateX(40px);
  }

  /* Hero */
  .hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 60%, #f093fb 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 2rem;
  }
  .hero-content {
    max-width: 800px;
    animation: fadeIn 1.5s ease;
  }
  @keyframes fadeIn {
    from {opacity: 0; transform: translateY(30px);}
    to {opacity: 1; transform: translateY(0);}
  }

  .profile-image-container {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    padding: 4px;
    margin-bottom: 1.5rem;
  }
  .profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #0a0e27;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    background: linear-gradient(to right, #fff, #f0f0f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .title {
    font-size: 1rem;
    color: rgba(255,255,255,0.8);
    margin-bottom: 0.6rem;
  }
  .subtitle {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.7);
    max-width: 600px;
    margin-bottom: 1.5rem;
  }

  /* Buttons */
  .cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .btn {
    padding: 10px 25px;
    border-radius: 30px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  .btn-primary {
    background: white;
    color: #667eea;
  }
  .btn-primary:hover {
    box-shadow: 0 0 15px rgba(255,255,255,0.3);
  }
  .btn-secondary {
    background: rgba(255,255,255,0.1);
    color: white;
    border: 1px solid rgba(255,255,255,0.3);
  }
  .btn-secondary:hover {
    background: rgba(255,255,255,0.15);
  }

  /* Research Interests */
  .research-section {
    background: #0a0e27;
    padding: 4rem 2rem;
  }
  .section-title {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  .interest-card {
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .interest-card:hover {
    background: rgba(255,255,255,0.08);
    transform: translateY(-5px);
  }
  .interest-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .interest-card h3 {
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
    color: #f093fb;
  }
  .interest-card p {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.7);
  }

  /* Stats */
  .stats-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 3rem 2rem;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 2rem;
    text-align: center;
  }
  .stat-number {
    font-size: 2rem;
    font-weight: 600;
  }
  .stat-label {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.8);
  }

  /* Work */
  .featured-section {
    background: #0a0e27;
    padding: 4rem 2rem;
  }
  .work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .work-card {
    background: rgba(255,255,255,0.05);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s ease;
  }
  .work-card:hover {
    background: rgba(255,255,255,0.08);
  }
  .work-tag {
    display: inline-block;
    padding: 3px 10px;
    background: rgba(102,126,234,0.2);
    border-radius: 15px;
    font-size: 0.75rem;
    color: #f093fb;
  }
  .work-card h3 {
    font-size: 1.1rem;
    margin: 0.6rem 0;
  }
  .work-card p {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 0.8rem;
  }
  .work-link {
    font-size: 0.85rem;
    color: #667eea;
    text-decoration: none;
  }
  .work-link:hover {
    color: #f093fb;
  }

  /* Footer */
  footer {
    background: #050816;
    padding: 2rem;
    text-align: center;
  }
  .footer-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .footer-link {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
  }
  .footer-link:hover {
    color: #667eea;
  }
  .copyright {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.5);
  }
</style>
</head>
<body>

<section class="hero">
  <div class="hero-content container">
    <div class="profile-image-container">
      <div class="profile-image">🎓</div>
    </div>
    <h1>Mohammed Tawshif Hossain</h1>
    <p class="title">Electrical & Electronic Engineering Student | Researcher</p>
    <p class="subtitle">Passionate about biomedical signal processing, quantum photonics, and computational neuroscience.</p>
    <div class="cta-buttons">
      <a href="/publications/" class="btn btn-primary">📚 Publications</a>
      <a href="/cv/" class="btn btn-secondary">📄 CV</a>
    </div>
  </div>
</section>

<section class="research-section">
  <div class="container">
    <h2 class="section-title">Research Interests</h2>
    <div class="interests-grid">
      <div class="interest-card"><div class="interest-icon">🔬</div><h3>Quantum Photonics</h3><p>Exploring quantum phenomena in photonic systems.</p></div>
      <div class="interest-card"><div class="interest-icon">💡</div><h3>Computational Nanophotonics</h3><p>Simulating nanoscale optical devices using numerical methods.</p></div>
      <div class="interest-card"><div class="interest-icon">🧠</div><h3>Computational Neuroscience</h3><p>Machine learning approaches to understand brain activity.</p></div>
    </div>
  </div>
</section>

<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div><div class="stat-number">2</div><div class="stat-label">Published Papers</div></div>
      <div><div class="stat-number">3.51</div><div class="stat-label">CGPA / 4.00</div></div>
      <div><div class="stat-number">5+</div><div class="stat-label">Research Projects</div></div>
    </div>
  </div>
</section>

<section class="featured-section">
  <div class="container">
    <h2 class="section-title">Featured Research</h2>
    <div class="work-grid">
      <div class="work-card"><span class="work-tag">Journal</span><h3>Decoding Memory with Explainable AI</h3><p>EEG study classifying memory states with explainable models.</p><a href="#" class="work-link">Read more →</a></div>
      <div class="work-card"><span class="work-tag">Conference</span><h3>Spectrogram-Driven Emotion Detection</h3><p>CNN-based emotion recognition using EEG spectrograms.</p><a href="#" class="work-link">Read more →</a></div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-links">
    <a href="/" class="footer-link">Home</a>
    <a href="/publications/" class="footer-link">Publications</a>
    <a href="/cv/" class="footer-link">CV</a>
  </div>
  <p class="copyright">© 2025 Mohammed Tawshif Hossain</p>
</footer>

</body>
</html>

