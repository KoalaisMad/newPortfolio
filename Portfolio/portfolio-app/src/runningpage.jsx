import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Add responsive styles for running page
const runningPageStyles = `
  @media (max-width: 1024px) {
    .running-title {
      font-size: 4.5rem !important;
    }

    .running-section-title {
      font-size: 2.3rem !important;
    }

    .running-research-cards,
    .running-clubs-grid {
      gap: 1.5rem !important;
    }
  }

  @media (max-width: 768px) {
    .running-title {
      font-size: 3.5rem !important;
      top: 0.3em !important;
    }

    .running-title-shadow {
      font-size: 3.5rem !important;
    }

    .running-title-container {
      height: 4rem !important;
      margin-bottom: 2rem !important;
    }

    .running-section-title {
      font-size: 2rem !important;
      margin-top: 3.5rem !important;
      margin-bottom: 2rem !important;
    }

    .running-research-cards {
      flex-direction: column !important;
      gap: 1.5rem !important;
    }

    .running-card {
      min-width: 100% !important;
      padding: 1.3rem 1.7rem !important;
    }

    .running-card-title {
      font-size: 1.15rem !important;
    }

    .running-card-subtitle {
      font-size: 1rem !important;
    }

    .running-card-description {
      font-size: 1rem !important;
    }

    .running-card-list {
      font-size: 0.98rem !important;
    }

    .running-card-badge {
      font-size: 0.95rem !important;
      padding: 0.18rem 0.65rem !important;
    }

    .running-work-container {
      justify-content: center !important;
    }

    .running-work-card-wrapper {
      max-width: 100% !important;
      justify-content: center !important;
    }

    .running-work-card {
      max-width: 100% !important;
    }

    .running-dots-wrapper {
      display: none !important;
    }

    .running-clubs-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }

    .running-past-clubs-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }
  }

  @media (max-width: 480px) {
    .running-title {
      font-size: 2.5rem !important;
    }

    .running-title-shadow {
      font-size: 2.5rem !important;
    }

    .running-title-container {
      height: 3rem !important;
      margin-bottom: 1.5rem !important;
    }

    .running-section-title {
      font-size: 1.7rem !important;
      margin-top: 3rem !important;
    }

    .running-card {
      padding: 1.2rem 1.5rem !important;
      border-radius: 1rem !important;
    }

    .running-card-title {
      font-size: 1.1rem !important;
    }

    .running-card-subtitle {
      font-size: 0.98rem !important;
    }

    .running-card-description {
      font-size: 0.98rem !important;
    }

    .running-card-list {
      font-size: 0.95rem !important;
      padding-left: 1rem !important;
    }

    .running-card-badge {
      font-size: 0.9rem !important;
      padding: 0.15rem 0.6rem !important;
    }

    .running-past-title {
      font-size: 1rem !important;
      margin-bottom: 1rem !important;
    }
  }
`;

export default function RunningPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  React.useEffect(() => {
    if (window.location.hash === '#work') {
      const el = document.getElementById('work-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (window.location.hash === '#clubs') {
      const el = document.getElementById('clubs-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (window.location.hash === '#skills') {
      const el = document.getElementById('skills');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);
  return (
    <div className="portfolio" style={{background: '#FAF7EE', color: '#0E1E3A'}}>
      <style>{runningPageStyles}</style>
      <header className="header">
        <div className="header-left">
          <h2 className="logo-text" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>JYO MAD.</h2>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <button 
          className="hamburger-menu" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/projects')}>Projects</span>
          <span style={{cursor: 'pointer'}} onClick={() => window.open('https://drive.google.com/file/d/1A6C7xwdkJZmOb5NDYPmeiCKt2Yw5g5f2/view?usp=sharing', '_blank')}>Resume</span>
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/contactme')}>Contact</span>
        </nav>

        {/* Mobile Navigation Menu */}
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <span onClick={() => { navigate('/projects'); setMenuOpen(false); }}>Projects</span>
          <span onClick={() => { window.open('https://drive.google.com/file/d/1A6C7xwdkJZmOb5NDYPmeiCKt2Yw5g5f2/view?usp=sharing', '_blank'); setMenuOpen(false); }}>Resume</span>
          <span onClick={() => { navigate('/contactme'); setMenuOpen(false); }}>Contact</span>
        </nav>
      </header>
      <main style={{position: 'relative', minHeight: '80vh'}}>
        <div className="running-title-container" style={{position: 'relative', height: '5.5rem', marginBottom: '2.5rem'}}>
          <h1 className="running-title" style={{
            fontSize: '5.3rem',
            fontWeight: 900,
            color: '#e5d7bb',
            textShadow: '2px 2px 0 #bfae8e, 0 4px 0 #bfae8e',
            letterSpacing: '0.03em',
            lineHeight: 1.0,
            position: 'absolute',
            left: 0,
            top: '0.5em',
            zIndex: 2,
            opacity: 1,
          }}>
            WHERE IS JYO RUNNING
          </h1>
          <h1 className="running-title-shadow" style={{
            fontSize: '5.3rem',
            fontWeight: 900,
            color: '#e5d7bb',
            textShadow: '2px 2px 0 #bfae8e, 0 4px 0 #bfae8e',
            letterSpacing: '0.03em',
            lineHeight: 1.0,
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 1,
            opacity: 0.5,
          }}>
            WHERE IS JYO RUNNING
          </h1>
        </div>
        <h2 className="running-section-title" style={{
          fontSize: '2.7rem',
          fontWeight: 900,
          color: '#112250',
          marginTop: '5rem',
          marginBottom: '2.5rem',
          letterSpacing: '0.01em',
          zIndex: 2,
        }}>RESEARCH?</h2>
        <div className="running-research-cards" style={{ display: 'flex', flexDirection: 'row', gap: '2.2rem', maxWidth: 1300, marginBottom: '2.5rem' }}>
          {/* BRD Detection Railway */}
          <div className="running-card" style={{
            background: '#fff',
            borderRadius: '1.1rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            padding: '1.5rem 2rem',
            border: '2px solid #e5d7bb',
            minWidth: 340,
            flex: 1,
          }}>
            <div className="running-card-title" style={{fontWeight: 700, fontSize: '1.25rem', marginTop: '0.2rem'}}>
              Bovine Respiratory Disease Detection using Computer Vision
            </div>
            <div className="running-card-subtitle" style={{fontWeight: 500, color: '#bfae8e', fontSize: '1.05rem', marginBottom: '0.5rem'}}>
              Animal Science Department
            </div>
            {/* <div style={{fontSize: '1.05rem', marginBottom: '0.7rem'}}>
              Detecting Bovine Respiratory Disease using computational and data-driven methods. Interdisciplinary collaboration between computing and animal science to improve livestock health monitoring.
            </div> */}
            {/* Added detailed achievements */}
            <div className="running-card-description" style={{fontSize: '1.05rem', marginBottom: '0.7rem'}}>
              Built real-time vision models to detect respiratory disease in cattle. </div> 
            <ul className="running-card-list" style={{fontSize: '1.01rem', marginBottom: '0.7rem', marginTop: '-0.3rem', paddingLeft: '1.2rem', color: '#0E1E3A', fontWeight: 500}}>
              {/* <li>Built real-time vision models to detect respiratory disease in cattle.</li> */}
              <li>99.5% mAP with YOLOv5 + instance segmentation</li>
              <li>CLIP-based multimodal analysis</li>
              <li>Image segmentation with HPRC + Docker workflows</li>
              <li>1st Place at TAMU Research Week (Agriculture)</li>
            </ul>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.2rem'}}>
              {['Computer Vision','Object Detection (YOLOv5)','Instance Segmentation','Data Annotation','Python','PyTorch','Model Evaluation'].map((ach, i) => (
                <span key={i} className="running-card-badge" style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.2rem 0.7rem', fontSize: '0.98rem', fontWeight: 600}}>{ach}</span>
              ))}
            </div>
          </div>
          {/* Protein Discovery Coaster */}
          <div className="running-card" style={{
            background: '#fff',
            borderRadius: '1.1rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            padding: '1.5rem 2rem',
            border: '2px solid #e5d7bb',
            minWidth: 340,
            flex: 1,
          }}>
            <div className="running-card-title" style={{fontWeight: 700, fontSize: '1.25rem', marginTop: '0.2rem'}}>
              Protein Mutation Discovery
            </div>
            <div className="running-card-subtitle" style={{fontWeight: 500, color: '#bfae8e', fontSize: '1.05rem', marginBottom: '0.5rem'}}>
              CSCE – Shen Lab
            </div>
            <div className="running-card-description" style={{fontSize: '1.05rem', marginBottom: '0.7rem'}}>
              Developing ML pipelines to study biological sequence variation.
            </div>
            <ul className="running-card-list" style={{fontSize: '1.01rem', marginBottom: '0.7rem', marginTop: '-0.3rem', paddingLeft: '1.2rem', color: '#0E1E3A', fontWeight: 500}}>
              <li>Built learning pipelines for large-scale protein sequence modeling</li>
              <li>Applied representation learning to mutation effect prediction tasks</li>
              <li>Curated and benchmarked biological variant datasets</li>
              <li>Contributed to internal evaluation and validation workflows</li>
            </ul>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.2rem'}}>
              {['Protein Sequence Modeling','Variant Effect Prediction','ML Pipelines','ESM Embeddings','Python','PyTorch','Bioinformatics'].map((ach, i) => (
                <span key={i} className="running-card-badge" style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.2rem 0.7rem', fontSize: '0.98rem', fontWeight: 600}}>{ach}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Move WORK below research cards */}
        <div id="work-section" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <h2 className="running-section-title" style={{
            fontSize: '2.3rem',
            fontWeight: 900,
            color: '#112250',
            letterSpacing: '0.01em',
            margin: 0,
          }}>WORK?</h2>
        </div>
        <div className="running-work-container" style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '2.5rem',
        }}>
          <div className="running-work-card-wrapper" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: '1.2rem',
            maxWidth: 800,
            width: '100%',
            justifyContent: 'flex-end',
          }}>
            <div className="running-card running-work-card" style={{
              background: '#fff',
              borderRadius: '1.1rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              padding: '1.5rem 2rem',
              border: '2px solid #e5d7bb',
              minWidth: 340,
              maxWidth: 600,
              flex: 1,
            }}>
              <div className="running-card-title" style={{fontWeight: 700, fontSize: '1.25rem', marginTop: '0.2rem'}}>
                Undergraduate Peer Teacher for ENGR 102 and 216
              </div>
              <div className="running-card-subtitle" style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem', marginTop: '0.2rem'}}>
                August 2025 – Present
              </div>
              <ul className="running-card-list" style={{fontSize: '1.05rem', marginBottom: 0, paddingLeft: '1.2rem'}}>
                <li>Mentoring 100+ students in Python programming fundamentals, algorithmic thinking, and structured problem solving.</li>
                <li>Leading Experimental Physics and Engineering Lab II, delivering interactive lectures, demonstrations, and hands-on lab activities.</li>
             </ul>
            </div>
            {/* Decorative dots beside WORK card, bottom aligned */}
            <div className="running-dots-wrapper" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', paddingRight: '2rem', height: '100%' }}>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: '#D7C19A', display: 'inline-block', opacity: 0.7 }}></span>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: '#D7C19A', display: 'inline-block', opacity: 0.5 }}></span>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: '#D7C19A', display: 'inline-block', opacity: 0.3 }}></span>
            </div>
          </div>
        </div>
        {/* Remove absolute clubs, add after work */}
        <div id="clubs-section" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <h2 className="running-section-title" style={{
            fontSize: '2.3rem',
            fontWeight: 900,
            color: '#112250',
            letterSpacing: '0.01em',
            margin: 0,
          }}>STOPS AROUND CAMPUS?</h2>
        </div>
        {/* Current Clubs */}
        <div className="running-clubs-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* SLS */}
          <div style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(80,60,20,0.13), 0 2px 12px rgba(0,0,0,0.09)', padding: '1.5rem 1.7rem', border: '3.5px solid #D8C8A3', minWidth: 300, flex: 1, maxWidth: 400, fontFamily: 'Georgia, Times New Roman, serif', position: 'relative', overflow: 'hidden', color: '#0E1E3A'}}>
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2.5px dashed #D8C8A3', borderRadius: '1.1rem', pointerEvents: 'none', opacity: 0.5}}></div>
            <a href="https://slstamu.vercel.app" target="_blank" rel="noopener noreferrer" style={{fontWeight: 700, fontSize: '1.13rem', color: '#1a2b4a', textDecoration: 'underline', fontFamily: 'inherit'}}>Statistics Learning Society (SLS)</a>
            <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem', marginTop: '0.2rem'}}>Workshops Officer</div>
            <div style={{fontSize: '1.04rem', marginTop: '0.5rem', fontFamily: 'inherit'}}>Leading hands-on programming and statistics project workshops.</div>
            {/* <div style={{marginTop: '0.7rem', fontWeight: 600, color: '#7c5c2b', fontSize: '1.01rem'}}>Skills:</div> */}
            {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem'}}>
              {['Python', 'Data Analysis', 'Teaching'].map((skill, i) => (
                <span key={i} style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.18rem 0.7rem', fontSize: '0.97rem', fontWeight: 600}}>{skill}</span>
              ))}
            </div> */}
          </div>
          {/* AWICS */}
          <div style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(80,60,20,0.13), 0 2px 12px rgba(0,0,0,0.09)', padding: '1.5rem 1.7rem', border: '3.5px solid #D8C8A3', minWidth: 300, flex: 1, maxWidth: 400, fontFamily: 'Georgia, Times New Roman, serif', position: 'relative', overflow: 'hidden', color: '#0E1E3A'}}>
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2.5px dashed #D8C8A3', borderRadius: '1.1rem', pointerEvents: 'none', opacity: 0.5}}></div>
            <a href="https://www.awics.org" target="_blank" rel="noopener noreferrer" style={{fontWeight: 700, fontSize: '1.13rem', color: '#1a2b4a', textDecoration: 'underline', fontFamily: 'inherit'}}>Aggie Women in Computer Science (AWICS)</a>
            <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem', marginTop: '0.2rem'}}>Service Officer</div>
            <div style={{fontSize: '1.04rem', marginTop: '0.5rem', fontFamily: 'inherit'}}>Driving community outreach and expanding CS access for kids.</div>
            {/* <div style={{marginTop: '0.7rem', fontWeight: 600, color: '#7c5c2b', fontSize: '1.01rem'}}>Skills:</div> */}
            {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem'}}>
              {['Community Outreach', 'Program Management', 'Communication'].map((skill, i) => (
                <span key={i} style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.18rem 0.7rem', fontSize: '0.97rem', fontWeight: 600}}>{skill}</span>
              ))}
            </div> */}
          </div>
          {/* APHFLO */}
          <div style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(80,60,20,0.13), 0 2px 12px rgba(0,0,0,0.09)', padding: '1.5rem 1.7rem', border: '3.5px solid #D8C8A3', minWidth: 300, flex: 1, maxWidth: 400, fontFamily: 'Georgia, Times New Roman, serif', position: 'relative', overflow: 'hidden', color: '#0E1E3A'}}>
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2.5px dashed #D8C8A3', borderRadius: '1.1rem', pointerEvents: 'none', opacity: 0.5}}></div>
            <a href="https://www.instagram.com/aggiephflo/" target="_blank" rel="noopener noreferrer" style={{fontWeight: 700, fontSize: '1.13rem', color: '#1a2b4a', textDecoration: 'underline', fontFamily: 'inherit'}}>Pan-Honors Freshman Leadership Organization (APHFLO)</a>
            <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem', marginTop: '0.2rem'}}>Events Chair</div>
            <div style={{fontSize: '1.04rem', marginTop: '0.5rem', fontFamily: 'inherit'}}> Building leadership and community within the Honors program.</div>
            {/* <div style={{marginTop: '0.7rem', fontWeight: 600, color: '#7c5c2b', fontSize: '1.01rem'}}>Skills:</div> */}
            {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem'}}>
              {['Event Planning', 'Leadership', 'Public Speaking'].map((skill, i) => (
                <span key={i} style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.18rem 0.7rem', fontSize: '0.97rem', fontWeight: 600}}>{skill}</span>
              ))}
            </div> */}
          </div>
        </div>
        {/* Past Clubs */}
        <div style={{marginBottom: '2.5rem'}}>
          <h3 className="running-past-title" style={{fontWeight: 700, color: '#bfae8e', fontSize: '1.15rem', marginBottom: '1.2rem'}}>Past Clubs</h3>
          <div className="running-past-clubs-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '2rem',
            maxWidth: '100%',
            overflowX: 'auto',
          }}>
            {/* WIRED VEX Robotics */}
            <div style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(80,60,20,0.13), 0 2px 12px rgba(0,0,0,0.09)', padding: '1.5rem 1.7rem', border: '3.5px solid #D8C8A3', minWidth: 220, fontFamily: 'Georgia, Times New Roman, serif', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2.5px dashed #D8C8A3', borderRadius: '1.1rem', pointerEvents: 'none', opacity: 0.5}}></div>
              <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#1a2b4a'}}>WIRED VEX Robotics</div>
              <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem'}}>Historian & Programming Member</div>
              <div style={{fontSize: '1.01rem', marginTop: '0.5rem'}}>• Documented designs & competitions</div>
              <div style={{fontSize: '1.01rem', marginTop: '0.5rem'}}>• Built notebooks and organized events</div>
              <div style={{fontSize: '0.98rem', color: '#7c5c2b', marginTop: '0.3rem'}}>We beat TU in our match!</div>
              {/* <div style={{marginTop: '0.7rem', fontWeight: 600, color: '#7c5c2b', fontSize: '1.01rem'}}>Skills:</div> */}
              {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem'}}>
                {['Robotics', 'Programming', 'Technical Writing', 'Teamwork'].map((skill, i) => (
                  <span key={i} style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.18rem 0.7rem', fontSize: '0.97rem', fontWeight: 600}}>{skill}</span>
                ))}
              </div> */}
            </div>
            {/* GDSC TAMU */}
            <div style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(80,60,20,0.13), 0 2px 12px rgba(0,0,0,0.09)', padding: '1.5rem 1.7rem', border: '3.5px solid #D8C8A3', minWidth: 220, fontFamily: 'Georgia, Times New Roman, serif', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2.5px dashed #D8C8A3', borderRadius: '1.1rem', pointerEvents: 'none', opacity: 0.5}}></div>
              <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#1a2b4a'}}>Google Developer Club (GDSC) TAMU</div>
              <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem'}}>Workshop Officer</div>
              <div style={{fontSize: '1.01rem', marginTop: '0.5rem'}}>• Led web dev & ML workshops</div>
              <div style={{fontSize: '1.01rem', marginTop: '0.5rem'}}>• Introduced peers to Google tools</div>
              {/* <div style={{marginTop: '0.7rem', fontWeight: 600, color: '#7c5c2b', fontSize: '1.01rem'}}>Skills:</div> */}
              {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem'}}>
                {['Web Development', 'Machine Learning', 'Mentorship'].map((skill, i) => (
                  <span key={i} style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.18rem 0.7rem', fontSize: '0.97rem', fontWeight: 600}}>{skill}</span>
                ))}
              </div> */}
            </div>
            {/* Aggie Data Science Club */}
            <div style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(80,60,20,0.13), 0 2px 12px rgba(0,0,0,0.09)', padding: '1.5rem 1.7rem', border: '3.5px solid #D8C8A3', minWidth: 220, fontFamily: 'Georgia, Times New Roman, serif', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2.5px dashed #D8C8A3', borderRadius: '1.1rem', pointerEvents: 'none', opacity: 0.5}}></div>
              <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#1a2b4a'}}>Aggie Data Science Club</div>
              <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem'}}>Project Manager for Sign2Speech</div>
              <div style={{fontSize: '1.01rem', marginTop: '0.5rem'}}>• Led analytics development</div>
              <div style={{fontSize: '1.01rem', marginTop: '0.5rem'}}>• Mentored members in DS workflows</div>
              {/* <div style={{marginTop: '0.7rem', fontWeight: 600, color: '#7c5c2b', fontSize: '1.01rem'}}>Skills:</div> */}
              {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem'}}>
                {['Data Analytics', 'ML Pipelines', 'Project Management'].map((skill, i) => (
                  <span key={i} style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.18rem 0.7rem', fontSize: '0.97rem', fontWeight: 600}}>{skill}</span>
                ))}
              </div> */}
            </div>
            {/* SWE */}
            <div style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(80,60,20,0.13), 0 2px 12px rgba(0,0,0,0.09)', padding: '1.5rem 1.7rem', border: '3.5px solid #D8C8A3', minWidth: 220, fontFamily: 'Georgia, Times New Roman, serif', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2.5px dashed #D8C8A3', borderRadius: '1.1rem', pointerEvents: 'none', opacity: 0.5}}></div>
              <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#1a2b4a'}}>Society of Women Engineers (SWE)</div>
              <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem'}}>Banquet & Service Member</div>
              <div style={{fontSize: '1.01rem', marginTop: '0.5rem'}}>• Bronze Award — 2024 & 2025</div>
              {/* <div style={{marginTop: '0.7rem', fontWeight: 600, color: '#7c5c2b', fontSize: '1.01rem'}}>Skills:</div> */}
              {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem'}}>
                {['Event Coordination', 'Professional Service', 'Leadership'].map((skill, i) => (
                  <span key={i} style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.18rem 0.7rem', fontSize: '0.97rem', fontWeight: 600}}>{skill}</span>
                ))}
              </div> */}
            </div>
            {/* Aggie Coding Club */}
            <div style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(80,60,20,0.13), 0 2px 12px rgba(0,0,0,0.09)', padding: '1.5rem 1.7rem', border: '3.5px solid #D8C8A3', minWidth: 220, fontFamily: 'Georgia, Times New Roman, serif', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2.5px dashed #D8C8A3', borderRadius: '1.1rem', pointerEvents: 'none', opacity: 0.5}}></div>
              <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#1a2b4a'}}>Aggie Coding Club</div>
                            <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem'}}>...</div>
              <div style={{fontSize: '1.01rem', marginTop: '0.5rem'}}>• Worked on Sp/it & AggieSeek; involved in workshops.</div>
              {/* <div style={{marginTop: '0.7rem', fontWeight: 600, color: '#7c5c2b', fontSize: '1.01rem'}}>Skills:</div> */}
              {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem'}}>
                {['Full-Stack Dev', 'React', 'APIs'].map((skill, i) => (
                  <span key={i} style={{background: '#E9DDBF', color: '#0E1E3A', borderRadius: '0.5rem', padding: '0.18rem 0.7rem', fontSize: '0.97rem', fontWeight: 600}}>{skill}</span>
                ))}
              </div> */}
            </div>
          </div>
        </div>
         {/* Move WORK below research cards */}
        <div id="skills" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <h2 className="running-section-title" style={{
            fontSize: '2.3rem',
            fontWeight: 900,
            color: '#112250',
            letterSpacing: '0.01em',
            margin: 0,
          }}>BUILDING SKILLS?</h2>
        </div>
        <div className="running-resume-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '4rem', cursor: 'pointer' }} onClick={() => window.open('https://drive.google.com/file/d/1A6C7xwdkJZmOb5NDYPmeiCKt2Yw5g5f2/view?usp=sharing', '_blank')}>
          <div style={{width: 60, height: 60, borderRadius: '50%', background: '#D7C19A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0E1E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: 30, height: 30}}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>

            </svg>
          </div>
          <div style={{fontWeight: 500, color: '#D7C19A', fontSize: '1.01rem'}}>Check Resume</div>
        </div>
      </main>
      <div className="pagination">
        <span className="dot" onClick={() => window.open('https://www.instagram.com/jyoiscool/', '_blank')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </span>
        <span className="dot" onClick={() => window.open('https://www.linkedin.com/in/jyoshitha-madhavarapu', '_blank')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </span>
        <span className="dot" onClick={() => window.open('https://github.com/KoalaisMad', '_blank')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
