import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Projects from './projects';
import ContactForm from './contactme';
import RunningPage from './runningpage'; // Import the RunningPage component
const researchStamp = '/research-stamp.png';
const projectsStamp = '/projects-stamp.png';
const skillsStamp = '/skills-stamp.png';
const workStamp = '/work-stamp.png';
const contactStamp = '/contact-stamp.png';
const clubsStamp = '/clubs-stamp.png';
const linkedinStamp = '/linkedin-stamp.png';
const githubStamp = '/github-stamp.png';
const photoBoothStamp = '/photo-booth-stamp.png';
const postcardImage = '/postcard.png';

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const stamps = [
    { label: 'RESEARCH', value: '8¢', image: researchStamp },
    { label: 'MY PROJECTS', value: '5¢', image: projectsStamp },
    { label: 'SKILLS', value: '7¢', image: skillsStamp },
    { label: 'WORK', value: '10¢', image: workStamp },
    { label: 'CONTACT ME', value: '6¢', image: contactStamp },
    { label: 'CLUBS', value: '10¢', image: clubsStamp },
    { label: 'LINKEDIN', value: '8¢', image: linkedinStamp },
    { label: 'GITHUB', value: '10¢', image: githubStamp },
    { label: 'PHOTO BOOTH', value: '5¢', image: photoBoothStamp },
  ]

  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-left">
          <h2 className="logo-text" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>JYO MAD.</h2>
        </div>
        
        <button 
          className="hamburger-menu" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>

        <nav className="header-nav">
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/projects')}>Projects</span>
          <span style={{cursor: 'pointer'}} onClick={() => window.open('https://drive.google.com/file/d/1A6C7xwdkJZmOb5NDYPmeiCKt2Yw5g5f2/view?usp=sharing', '_blank')}>Resume</span>
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/contactme')}>Contact</span>
        </nav>

        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <span onClick={() => { navigate('/projects'); setMenuOpen(false); }}>Projects</span>
          <span onClick={() => { window.open('https://drive.google.com/file/d/1A6C7xwdkJZmOb5NDYPmeiCKt2Yw5g5f2/view?usp=sharing', '_blank'); setMenuOpen(false); }}>Resume</span>
          <span onClick={() => { navigate('/contactme'); setMenuOpen(false); }}>Contact</span>
        </nav>
      </header>

      <section className="main-content">
        <div className="stamp-grid">
          <div className="mobile-stamps-top">
            <div className="stamp-card" onClick={() => navigate('/runningpage')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[0].image} alt={stamps[0].label} className="stamp-image" />
              </div>
            </div>
            <div className="stamp-card" onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[1].image} alt={stamps[1].label} className="stamp-image" />
              </div>
            </div>
            <div className="stamp-card" onClick={() => navigate('/runningpage#skills')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[2].image} alt={stamps[2].label} className="stamp-image" />
              </div>
            </div>
          </div>

          <div className="stamp-row desktop-only">
            <div className="stamp-card" onClick={() => navigate('/runningpage')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[0].image} alt={stamps[0].label} className="stamp-image" />
              </div>
            </div>
            <div className="stamp-card" onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[1].image} alt={stamps[1].label} className="stamp-image" />
              </div>
            </div>
            <div className="hero-section">
              <h1 className="greeting">HOWDY!</h1>
              <div className="name-section">
                <h2 className="name">I'M JYO</h2>
              </div>
            </div>
          </div>

          <div className="hero-section mobile-hero">
            <h1 className="greeting">HOWDY!</h1>
            <div className="name-section">
              <h2 className="name">I'M JYO</h2>
            </div>
            <div className="name-section2">
              <h2 className="name1">MADHAVARAPU</h2>
              <p className="tagline">A SWE IN TRAINING</p>
              <div className="mobile-social-links">
                <svg onClick={() => window.open('https://www.linkedin.com/in/jyoshitha-madhavarapu', '_blank')} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <svg onClick={() => window.open('https://github.com/KoalaisMad', '_blank')} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <svg onClick={() => window.open('https://www.instagram.com/jyo.mad/', '_blank')} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </div>
          </div>

          <div className="stamp-row desktop-only">
            <div className="stamp-card" onClick={() => navigate('/runningpage#skills')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[2].image} alt={stamps[2].label} className="stamp-image" />
              </div>
            </div>
            <div className="stamp-card" onClick={() => navigate('/runningpage#work')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[3].image} alt={stamps[3].label} className="stamp-image" />
              </div>
            </div>
            <div className="hero-section">
              <div className="name-section2">
                <h2 className="name1">MADHAVARAPU</h2>
                <p className="tagline">A SWE IN TRAINING</p>
              </div>
            </div>
          </div>
          
          <div className="stamp-row stamp-row-bottom">
            <div className="stamp-card" onClick={() => navigate('/contactme')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[4].image} alt={stamps[4].label} className="stamp-image" />
              </div>
            </div>
            <div className="stamp-card" onClick={() => navigate('/runningpage#clubs')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[5].image} alt={stamps[5].label} className="stamp-image" />
              </div>
            </div>
            <div className="stamp-card desktop-only" onClick={() => window.open('https://www.linkedin.com/in/jyoshitha-madhavarapu', '_blank')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[6].image} alt={stamps[6].label} className="stamp-image" />
              </div> 
            </div>
            <div className="stamp-card desktop-only" onClick={() => window.open('https://github.com/KoalaisMad', '_blank')} style={{ cursor: 'pointer' }}>
              <div className="stamp-content">
                <img src={stamps[7].image} alt={stamps[7].label} className="stamp-image" />
              </div>
            </div>
            <div className="stamp-card">
              <div className="stamp-content">
                <img src={stamps[8].image} alt={stamps[8].label} className="stamp-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-label-stack">
          <span className="about-label"> ABOUT ME</span>
          <span className="about-label about-label-2">ABOUT ME</span>
          <span className="about-label about-label-3">ABOUT ME</span>
        </div>
        
        <div className="mobile-about-text">
          <div className="about-text-card">
            <div className="about-text-header">
              <span className="about-title">Builder</span>
            </div>
            <p className="about-description">
              I'm a Computer Science student from Texas A&M University. 
              I love building technology that helps people in the moments that matter most. 
              I use code to make everyday experiences simpler, more accessible, and more meaningful 
              for people like you and me.
            </p>
          </div>
        </div>

        <div className="postcard desktop-postcard">
          <img src={postcardImage} alt="Postcard" className="postcard-image" />
          <div className="postcard-overlay">
            <div className="postcard-body">
              <div className="postcard-left">
                <p className="postcard-text">
                I'm a Computer Science student from Texas A&M University. I love building technology that helps people in the moments that matter most. I use code to make everyday experiences simpler, more accessible, and more meaningful for people like you and me.
                </p>
                <p className="postcard-from">My Desk</p>
              </div>
              <div className="postcard-right">
                <p className="postcard-to">To Your Screen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pagination">
        <span className="dot" onClick={() => window.open('https://www.instagram.com/jyo.mad/', '_blank')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
  )
}


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactForm />} />
        <Route path="/runningpage" element={<RunningPage />} /> {/* Add the running page route */}
      </Routes>
    </Router>
  );
}
