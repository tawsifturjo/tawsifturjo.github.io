---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---



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
      padding: 40px 20px;
      min-height: 100vh;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* Header Section */
    .page-header {
      text-align: center;
      margin-bottom: 50px;
      padding: 40px 30px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    }

    .page-header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
      animation: pulse 15s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.1) rotate(180deg); }
    }

    .page-header h1 {
      font-size: 2.8em;
      font-weight: 700;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 15px;
      position: relative;
    }

    .page-header p {
      font-size: 1.1em;
      color: #b8b8b8;
      position: relative;
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

    .publication-card:hover .pub-title {
      color: #667eea;
    }

    /* Authors */
    .pub-authors {
      font-size: 0.95em;
      color: #a8a8a8;
      margin-bottom: 8px;
      font-style: italic;
    }

    .pub-authors strong {
      color: #d4d4d4;
      font-weight: 600;
    }

    /* Venue */
    .pub-venue {
      font-size: 0.9em;
      color: #888;
      margin-bottom: 16px;
      font-weight: 500;
    }

    .pub-venue em {
      color: #9a9a9a;
    }

    /* Abstract */
    .pub-abstract {
      font-size: 0.92em;
      line-height: 1.7;
      color: #b0b0b0;
      margin-bottom: 18px;
      text-align: justify;
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
    }

    .metric {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85em;
      color: #a0a0a0;
    }

    .metric strong {
      color: #d0d0d0;
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
    }

    .scholar-section p {
      font-size: 1.05em;
      color: #b8b8b8;
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
      .page-header h1 {
        font-size: 2em;
      }

      .page-header {
        padding: 30px 20px;
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
  <div class="container">
    <!-- Header -->
    <div class="page-header">
      <h1>📚 Research Publications</h1>
      <p>Exploring the intersection of neuroscience, machine learning, and cognitive computing</p>
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
</body>
</html>
