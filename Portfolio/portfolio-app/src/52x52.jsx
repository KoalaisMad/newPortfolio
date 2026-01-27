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
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3.5rem"
      }}>
        <img
          src={'52X52H.png'}
          alt="52X52H logo"
          style={{
            width: '600px',
            maxWidth: '98vw',
            marginBottom: '1.5rem',
            display: 'block',
            animation: 'scaleIn 1s cubic-bezier(.5,1.8,.5,1)'
          }}
                animation: 'scaleIn 0.8s ease-out 0.3s backwards'
        <div style={{
          fontWeight: 700,
          fontSize: "1.1rem",
          letterSpacing: "0.08em",
          marginBottom: "0.5rem",
          textAlign: "center",
          animation: 'fadeInUp 1.2s cubic-bezier(.5,1.8,.5,1)'
        }}>
              animation: 'fadeInUp 0.8s ease-out 0.7s backwards',
        </div>
        <div style={{
          fontSize: "1rem",
          color: "#222",
          marginBottom: "2.5rem",
          textAlign: "center",
          animation: 'fadeInUp 1.5s cubic-bezier(.5,1.8,.5,1)'
        }}>
          Objective: Every week, I pick at least one problem that matters and solve it with the help of code.
        </div>
        <div style={{
          fontSize: "1rem",
          letterSpacing: "0.15em",
          marginBottom: "1.5rem",
          color: "#1a2b4a",
          animation: 'slideInRight 1.7s cubic-bezier(.5,1.8,.5,1)'
        }}>
              animation: 'fadeInUp 0.8s ease-out 1.1s backwards'
        </div>
        <div style={{ display: "flex", gap: "1.2rem" }}>
          <button
            style={{
              background: "#1a2b4a",
              color: "#fff",
              border: "none",
              borderRadius: "2rem",
              animation: 'slideInRight 0.8s ease-out 1.5s backwards'
              fontSize: "1rem",
              padding: "0.7rem 2.2rem",
              letterSpacing: "0.08em",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(26,43,74,0.08)",
              transition: "background 0.2s",
              width: '230px',
            }}
            onClick={() => navigate("/ProjectsByWeek")}
          >
            BY WEEK
          </button>
          <button
            style={{
              background: "#1a2b4a",
              color: "#fff",
              border: "none",
              borderRadius: "2rem",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.7rem 2.2rem",
              letterSpacing: "0.08em",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(26,43,74,0.08)",
              transition: "background 0.2s",
              width: '230px',
            }}
            onClick={() => navigate("/problemstatements")}
          >
            BY PROBLEM STATEMENT
          </button>
        </div>
      </main>
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
  // Typing animation state
  const fullText = 'BUILT TO SOLVE PROBLEMS AND LEARN NEW TECHNOLOGIES EVERY WEEK.';
  const [typedText, setTypedText] = useState('');

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 32);
    return () => clearInterval(interval);
  }, []);

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
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3.5rem"
      }}>
        <img
          src={'52X52H.png'}
          alt="52X52H logo"
          style={{
            width: '600px',
            maxWidth: '98vw',
            marginBottom: '1.5rem',
            display: 'block',
              // animation: 'scaleIn 1s cubic-bezier(.5,1.8,.5,1)'
          }}
        />
        <div style={{
          fontWeight: 700,
          fontSize: "1.1rem",
          letterSpacing: "0.08em",
          marginBottom: "0.5rem",
          textAlign: "center",
          animation: 'fadeInUp 1.2s cubic-bezier(.5,1.8,.5,1)',
          minHeight: '2.2em',
          whiteSpace: 'pre-wrap'
        }}>
          {typedText}
          <span style={{
            display: 'inline-block',
            width: '1ch',
            background: 'none',
            animation: 'blink 1s steps(1) infinite',
            verticalAlign: 'bottom'
          }}>|</span>
        </div>
        <div style={{
          fontSize: "1rem",
          color: "#222",
          marginBottom: "2.5rem",
          textAlign: "center",
            // animation: 'fadeInUp 1.2s cubic-bezier(.5,1.8,.5,1)'
        }}>
          Objective: Every week, I pick at least one problem that matters and solve it with the help of code.
        </div>
        <div style={{
          fontSize: "1rem",
          letterSpacing: "0.15em",
          marginBottom: "1.5rem",
          color: "#1a2b4a",
            // animation: 'slideInRight 1.7s cubic-bezier(.5,1.8,.5,1)'
        }}>
          VIEW PROJECTS:
        </div>
        <div style={{ display: "flex", gap: "1.2rem" }}>
          <button
            style={{
              background: "#1a2b4a",
              color: "#fff",
              border: "none",
              borderRadius: "2rem",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.7rem 2.2rem",
              letterSpacing: "0.08em",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(26,43,74,0.08)",
              transition: "background 0.2s",
              animation: 'pulse 2.5s infinite'
            }}
            onClick={() => navigate("/ProjectsByWeek")}
          >
            BY WEEK
          </button>
          <button
            style={{
              background: "#1a2b4a",
              color: "#fff",
              border: "none",
              borderRadius: "2rem",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.7rem 2.2rem",
              letterSpacing: "0.08em",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(26,43,74,0.08)",
              transition: "background 0.2s",
              animation: 'pulse 2.5s infinite 0.5s'
            }}
            onClick={() => navigate("/problemstatements")}
          >
            BY PROBLEM STATEMENT
          </button>
        </div>
      </main>
    </div>
  );
}
