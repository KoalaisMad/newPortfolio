import './projects.css';
import './App.css';
import { useState } from 'react';

const projects = [
  {
    title: 'GIRLBOSS',
    problem: 'Helping women feel safer when walking alone.',
    description:
      'Built end-to-end real-time Safety Score pipeline which accounts for crime data, lighting, weather, routing metadata, and device factors. Developed Next.js frontend with dynamic maps, route overlays, chatbot, and live score visualization. Won 1st Place – Best Use of Snowflake and 2nd Place – Best Use of Databricks at TAMU Datathon 2025.',
    tech: 'Next.js · Node.js · Express · MongoDB · Databricks · Snowflake · Google Maps API',
    image: '/girlboss.png',
    link: 'https://girlbosssafety.us',
    github: 'https://github.com/KoalaisMad/GirlBoss'
  },
  {
    title: 'WHERE2EAT',
    problem: 'Ending the daily “what should we eat?” decision struggle.',
    description:
      'Built a restaurant discovery tool that randomly selects dining options based on user preferences such as budget, cuisine type, dining style, and time of day.',
    tech: 'Python · HTML · CSS · Leaflet / Map APIs · Restaurant Data APIs',
    image: '/inprogress.png',
    link: '',
    github: ''
  },
  {
    title: 'AIR-TIC-TAC-TOE',
    problem: 'Making Tic-Tac-Toe more enjoyable anywhere without a board or touchscreen.',
    description:
    'Built a computer-vision version of Tic-Tac-Toe where players draw moves in the air. Used OpenCV to track hand motion, recognize drawn strokes, and map gestures to grid coordinates with real-time visual feedback.',
    tech: 'Python · OpenCV · NumPy · Computer Vision',
    image: '/inprogress.png',
    link: '',
    github: ''
  },
  {
    title: 'SWIPETERN',
    problem: 'Making internship discovery simpler and more accessible for students.',
    description:
      'Created a swipe-based mobile app that connects students with relevant internships in seconds. Designed the user experience in Figma, built the production React Native interface, and implemented secure Firebase authentication and profile matching. The app enabled 50+ recruiter–student matches during TAMUHack, validating real-world usability.',
    tech: 'React Native · Expo · Firebase · Figma',
    image: '/swipetern.png',
    link: 'https://devpost.com/software/lalala-kzb9fw',
    github: 'https://github.com/obinnanprogrammed/tamuhack2024'
  },
  {
    title: 'NUTRISCAN',
    problem: 'Helping people make healthier food choices and reducing food waste.',
    description:
      'Developed an AI-powered meal planning tool that converts grocery receipts into personalized meal recommendations. Built an OCR pipeline to extract purchased items and trained machine-learning models on 2M+ nutrition and recipe records to generate calorie- and allergy-aware meal plans.',
    tech: 'Python · OCR · Machine Learning · Kaggle Datasets',
    image: '/Nutri.png',
    link: 'https://github.com/KoalaisMad/NutriScan',
    github: 'https://github.com/KoalaisMad/NutriScan'
  },
  {
    title: 'SP/IT',
    problem: 'Reducing conflict between roommates over chores and expenses.',
    description:
      'Worked on a shared finance and task management app that brings messaging, scheduling, and expense tracking into one place',
    tech: 'React · Node.js · Figma',
    image: '/split.png',
    link: 'https://github.com/Split-Project',
    github: 'https://github.com/Split-Project'
  },
];

import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="projects-page">
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
      <div className="projects-title-row">
        <span className="projects-dots">. . . . .</span>
        <h1 className="projects-title">PROJECTS</h1>
      </div>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              {project.problem && <div className="project-problem">Problem Solved: {project.problem}</div>}
              <div className="project-description">{project.description}</div>
              <div className="project-tech">{project.tech}</div>
            </div>
            <div className="project-links">
  <button
    className="case-study-btn"
    onClick={() => window.open(project.link, '_blank')}
  >
    VIEW CASE STUDY
  </button>

  <button
    className="case-study-btn"
    onClick={() =>  window.open(project.github, '_blank')}
  >
    GITHUB</button>
</div>
          </div>
        ))} 
      </div>
      <div className="pagination">
        <span className="dot" onClick={() => window.open('https://www.instagram.com/jyomad/', '_blank')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
