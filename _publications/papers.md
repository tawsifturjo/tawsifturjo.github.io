---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
  .publication-container {
    display: flex;
    align-items: flex-start;
    margin-bottom: 3em;
    padding: 2em;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .publication-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.18);
  }
  
  .publication-content {
    flex: 1 1 70%;
    min-width: 200px;
  }
  
  .publication-image {
    flex: 0 0 25%;
    max-width: 250px;
    min-width: 200px;
    align-self: center;
  }
  
  .publication-image img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    transition: transform 0.3s ease;
  }
  
  .publication-image img:hover {
    transform: scale(1.05);
  }
  
  .publication-type {
    display: inline-block;
    padding: 8px 16px;
    color: white;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 600;
    margin-bottom: 1em;
  }
  
  .journal-badge {
    background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
  }
  
  .conference-badge {
    background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
  }
  
  .publication-title {
    color: #2c3e50;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 0.5em;
    line-height: 1.4;
  }
  
  .publication-authors {
    color: #34495e;
    font-size: 1.05em;
    margin-bottom: 0.5em;
    font-style: italic;
  }
  
  .publication-venue {
    color: #7f8c8d;
    font-size: 1em;
    margin-bottom: 1em;
    font-weight: 600;
  }
  
  .publication-abstract {
    color: #34495e;
    line-height: 1.7;
    font-size: 1em;
    text-align: justify;
    margin-bottom: 1.2em;
  }
  
  .publication-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  
  .pub-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white !important;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
  
  .pub-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
    color: white !important;
    text-decoration: none;
  }
  
  .pub-link.doi-link {
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  }
  
  .pub-link.pdf-link {
    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  }
  
  .pub-link.code-link {
    background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
  }
  
  .metrics {
    display: flex;
    gap: 20px;
    margin-top: 1em;
    padding-top: 1em;
    border-top: 2px solid rgba(0,0,0,0.1);
  }
  
  .metric-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #34495e;
    font-size: 0.9em;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3em;
    padding: 2em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    color: white;
  }
  
  .section-header h1 {
    color: white;
    margin-bottom: 0.5em;
    font-size: 2.5em;
  }
  
  .section-header p {
    font-size: 1.1em;
    opacity: 0.95;
  }
  
  .year-divider {
    font-size: 2em;
    font-weight: 700;
    color: #2c3e50;
    margin: 2em 0 1.5em 0;
    padding-bottom: 0.5em;
    border-bottom: 3px solid #3498db;
  }
  
  @media (max-width: 768px) {
    .publication-container {
      flex-direction: column;
      padding: 1.5em;
    }
    
    .publication-content,
    .publication-image {
      flex: 1 1 100%;
      max-width: 100%;
    }
    
    .section-header h1 {
      font-size: 1.8em;
    }
  }
</style>

<div class="section-header">
  <h1>📚 Research Publications</h1>
  <p>Exploring the intersection of neuroscience, machine learning, and cognitive computing</p>
</div>

<div class="year-divider">2025</div>

<!-- Publication 1: Journal Article -->
<div class="publication-container">
  <div class="publication-content">
    <span class="publication-type journal-badge">📄 Journal Article</span>
    
    <h2 class="publication-title">Decoding Memory with Explainable AI: A Large-Scale EEG-Based Machine Learning Study of Encoding vs. Retrieval</h2>
    
    <p class="publication-authors">
      <strong>Mohammed Tawshif Hossain</strong>, et al.
    </p>
    
    <p class="publication-venue">
      <em>Neuroscience Informatics</em>, 2025
    </p>
    
    <p class="publication-abstract">
      Understanding the distinct neural signatures that differentiate memory encoding from retrieval remains a key challenge in cognitive neuroscience. This study applies machine learning to EEG data from the Penn Electrophysiology of Encoding and Retrieval Study (PEERS), involving 100 participants across over 400 sessions, to classify these cognitive states. We used Discrete Wavelet Transform (DWT) on EEG signals from six critical brain regions and evaluated seven machine learning models. Gradient Boosting emerged as the most effective classifier, achieving <strong>81.97% accuracy</strong> and a <strong>91.62% AUC</strong>. To interpret this performance, we applied Explainable AI (XAI) methods, specifically SHapley Additive exPlanations (SHAP). This analysis revealed that theta-band relative energy, especially in the Left and Right Anterior Superior (LAS/RAS) regions, was the most influential predictor.
    </p>
    
    <div class="publication-links">
      <a class="pub-link doi-link" href="https://doi.org/10.1016/j.neuri.2025.100227" target="_blank" rel="noopener noreferrer">
        🔗 DOI
      </a>
      <a class="pub-link pdf-link" href="https://doi.org/10.1016/j.neuri.2025.100227" target="_blank" rel="noopener noreferrer">
        📄 PDF
      </a>
    </div>
    
    <div class="metrics">
      <span class="metric-item">
        📊 <strong>Accuracy:</strong> 81.97%
      </span>
      <span class="metric-item">
        📈 <strong>AUC:</strong> 91.62%
      </span>
    
    </div>
  </div>
  
  <div class="publication-image">
    <img src="/images/memory-encoding-retrieval.png" alt="EEG Memory Encoding and Retrieval Research" loading="lazy">
  </div>
</div>

<!-- Publication 2: Conference Paper -->
<div class="publication-container">
  <div class="publication-content">
    <span class="publication-type conference-badge">🎤 Conference Paper</span>
    
    <h2 class="publication-title">Spectrogram-Driven Emotion Detection from Electroencephalogram</h2>
    
    <p class="publication-authors">
      <strong>Mohammed Tawshif Hossain</strong>, et al.
    </p>
    
    <p class="publication-venue">
      <em>2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)</em>
    </p>
    
    <p class="publication-abstract">
      Emotion detection aims to interpret emotions through data like text, voice, and physiological signals, which holds significant potential for monitoring mental health and human-computer interaction. Electroencephalogram (EEG) is a non-invasive technique recording brain activity and offers unique insights for real-time emotion detection. This study evaluates classifying emotions (positive, negative, neutral) in EEG using deep learning, emphasizing Convolutional Neural Networks (CNN). After preprocessing, time-frequency representations along with random transformations were created as inputs to the CNN architecture using short-time Fourier transform of EEG signals from the SEED dataset. The spectrograms were processed to achieve better outcomes, showing an overall accuracy of <strong>99.80%</strong> in detecting emotion classes.
    </p>
    
    <div class="publication-links">
      <a class="pub-link doi-link" href="https://doi.org/10.1109/ECCE64574.2025.11013815" target="_blank" rel="noopener noreferrer">
        🔗 DOI
      </a>
      <a class="pub-link pdf-link" href="https://doi.org/10.1109/ECCE64574.2025.11013815" target="_blank" rel="noopener noreferrer">
        📄 PDF
      </a>
    </div>
    
    <div class="metrics">
      <span class="metric-item">
        📊 <strong>Accuracy:</strong> 99.80%
      </span>
      <span class="metric-item">
        🧠 <strong>Dataset:</strong> SEED
      </span>
   
    </div>
  </div>
  
  <div class="publication-image">
    <img src="/images/emotion-detection-eeg.png" alt="EEG-Based Emotion Detection Research" loading="lazy">
  </div>
</div>

---

{% if site.author.googlescholar %}
  <div style="text-align: center; margin-top: 2em; padding: 2em; background: #f8f9fa; border-radius: 12px;">
    <p style="font-size: 1.1em; color: #34495e;">
      For a complete list of publications and citation metrics, please visit my 
      <a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer" style="color: #3498db; font-weight: 600;">Google Scholar profile</a>.
    </p>
  </div>
{% endif %}
