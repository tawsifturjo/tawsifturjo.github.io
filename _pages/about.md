---
layout: single 
permalink: /
---

<!DOCTYPE html>
<html lang="en">
<head>


<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mohammed Tawshif Hossain - Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow-x: hidden;
            background: #0a0e27;
            color: #fff;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(253, 121, 168, 0.3), transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(99, 179, 237, 0.3), transparent 50%);
            animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }

        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 2rem;
            max-width: 1200px;
        }

        .profile-image-container {
            width: 200px;
            height: 200px;
            margin: 0 auto 2rem;
            border-radius: 50%;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            padding: 6px;
            animation: float 6s ease-in-out infinite;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        .profile-image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            background: #2d3748;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: #667eea;
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(to right, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: fadeInUp 1s ease;
        }

        .title {
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 1rem;
            animation: fadeInUp 1.2s ease;
        }

        .subtitle {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 700px;
            margin: 0 auto 2rem;
            line-height: 1.6;
            animation: fadeInUp 1.4s ease;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .social-links {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            margin-bottom: 2rem;
            animation: fadeInUp 1.6s ease;
        }

        .social-link {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .social-link:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .cta-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 1.8s ease;
        }

        .btn {
            padding: 15px 35px;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: 50px;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .btn-primary {
            background: white;
            color: #667eea;
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(255, 255, 255, 0.4);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
        }

        .scroll-indicator {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-20px); }
            60% { transform: translateX(-50%) translateY(-10px); }
        }

        .scroll-indicator::before {
            content: '↓';
            font-size: 2rem;
            color: rgba(255, 255, 255, 0.7);
        }

        /* Research Interests Section */
        .research-section {
            padding: 6rem 2rem;
            background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .interests-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }

        .interest-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .interest-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }

        .interest-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        .interest-card h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: #f093fb;
        }

        .interest-card p {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
        }

        /* Stats Section */
        .stats-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 4rem 2rem;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: white;
        }

        .stat-label {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.9);
        }

        /* Featured Work */
        .featured-section {
            padding: 6rem 2rem;
            background: #0a0e27;
        }

        .work-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .work-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }

        .work-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
        }

        .work-image {
            width: 100%;
            height: 250px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: white;
        }

        .work-content {
            padding: 2rem;
        }

        .work-tag {
            display: inline-block;
            padding: 5px 15px;
            background: rgba(102, 126, 234, 0.2);
            border-radius: 20px;
            font-size: 0.85rem;
            margin-bottom: 1rem;
            color: #f093fb;
        }

        .work-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: white;
        }

        .work-card p {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .work-link {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .work-link:hover {
            color: #f093fb;
        }

        /* Footer */
        footer {
            background: #050816;
            padding: 3rem 2rem;
            text-align: center;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer-links {
            display: flex;
            gap: 2rem;
            justify-content: center;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .footer-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-link:hover {
            color: #667eea;
        }

        .copyright {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            h1 { font-size: 2.5rem; }
            .title { font-size: 1.2rem; }
            .interests-grid, .work-grid {
                grid-template-columns: 1fr;
            }
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="profile-image-container">
                <div class="profile-image">🎓</div>
            </div>
            
            <h1>Mohammed Tawshif Hossain</h1>
            <p class="title">Electrical & Electronic Engineering Student | Researcher</p>
            <p class="subtitle">
                Passionate about biomedical signal processing, quantum photonics, and computational neuroscience. 
                Exploring the intersection of technology and healthcare to innovate tomorrow's solutions.
            </p>
            
            <div class="social-links">
                <a href="mailto:tawsifturjoeee@gmail.com" class="social-link" title="Email">📧</a>
                <a href="https://linkedin.com/in/yourprofile" class="social-link" target="_blank" title="LinkedIn">💼</a>
                <a href="https://github.com/tawsifturjo" class="social-link" target="_blank" title="GitHub">💻</a>
                <a href="https://scholar.google.com" class="social-link" target="_blank" title="Google Scholar">🎓</a>
            </div>
            
            <div class="cta-buttons">
                <a href="/publications/" class="btn btn-primary">
                    📚 View Publications
                </a>
                <a href="/cv/" class="btn btn-secondary">
                    📄 Download CV
                </a>
            </div>
        </div>
        
        <div class="scroll-indicator"></div>
    </section>

    <!-- Research Interests -->
    <section class="research-section">
        <div class="container">
            <h2 class="section-title">Research Interests</h2>
            
            <div class="interests-grid">
                <div class="interest-card">
                    <div class="interest-icon">🔬</div>
                    <h3>Quantum Photonics</h3>
                    <p>Exploring quantum phenomena in photonic systems and their applications in computing and communication.</p>
                </div>
                
                <div class="interest-card">
                    <div class="interest-icon">💡</div>
                    <h3>Computational Nanophotonics</h3>
                    <p>Designing and simulating nanoscale photonic devices using advanced computational methods.</p>
                </div>
                
                <div class="interest-card">
                    <div class="interest-icon">🧠</div>
                    <h3>Computational Neuroscience</h3>
                    <p>Applying machine learning and signal processing to decode brain activity and understand cognition.</p>
                </div>
                
                <div class="interest-card">
                    <div class="interest-icon">⚕️</div>
                    <h3>Biomedical Optics</h3>
                    <p>Developing optical techniques for medical diagnostics and therapeutic applications.</p>
                </div>
                
                <div class="interest-card">
                    <div class="interest-icon">🌐</div>
                    <h3>Integrated Photonics</h3>
                    <p>Creating on-chip photonic circuits for telecommunications and sensing applications.</p>
                </div>
                
                <div class="interest-card">
                    <div class="interest-icon">⚛️</div>
                    <h3>Quantum Technologies</h3>
                    <p>Investigating quantum computing, sensing, and their revolutionary impact on healthcare.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">2</div>
                <div class="stat-label">Published Papers</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">3.51</div>
                <div class="stat-label">CGPA / 4.00</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">5+</div>
                <div class="stat-label">Research Projects</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">100+</div>
                <div class="stat-label">EEG Sessions Analyzed</div>
            </div>
        </div>
    </section>

    <!-- Featured Work -->
    <section class="featured-section">
        <div class="container">
            <h2 class="section-title">Featured Research</h2>
            
            <div class="work-grid">
                <div class="work-card">
                    <div class="work-image">🧠</div>
                    <div class="work-content">
                        <span class="work-tag">Journal Article</span>
                        <h3>Decoding Memory with Explainable AI</h3>
                        <p>Large-scale EEG study using machine learning and SHAP to classify memory encoding vs. retrieval states with 81.97% accuracy.</p>
                        <a href="/publication/2025-memory-decoding-xai" class="work-link">
                            Read More →
                        </a>
                    </div>
                </div>
                
                <div class="work-card">
                    <div class="work-image">😊</div>
                    <div class="work-content">
                        <span class="work-tag">Conference Paper</span>
                        <h3>Spectrogram-Driven Emotion Detection</h3>
                        <p>CNN-based emotion classification from EEG spectrograms achieving 99.80% accuracy on the SEED dataset.</p>
                        <a href="/publication/2025-emotion-detection-eeg" class="work-link">
                            Read More →
                        </a>
                    </div>
                </div>
                
                <div class="work-card">
                    <div class="work-image">🔧</div>
                    <div class="work-content">
                        <span class="work-tag">Ongoing Thesis</span>
                        <h3>Tunable On-Chip Optical Tweezing</h3>
                        <p>Developing chip-scale optical tweezers using metasurfaces for precise manipulation at the nanoscale.</p>
                        <a href="#" class="work-link">
                            Learn More →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-links">
                <a href="/" class="footer-link">Home</a>
                <a href="/publications/" class="footer-link">Publications</a>
                <a href="/research/" class="footer-link">Research</a>
                <a href="/cv/" class="footer-link">CV</a>
                <a href="/contact/" class="footer-link">Contact</a>
            </div>
            <p class="copyright">
                © 2025 Mohammed Tawshif Hossain. All rights reserved.
            </p>
        </div>
    </footer>
</body>
</html>
