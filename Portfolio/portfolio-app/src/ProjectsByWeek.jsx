import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const weekData = [
  {
    week: 'WEEK 5 – JAN 26ᵗʰ – FEB 1ˢᵗ',
    projects: [
      {
        title: 'EYEHAB',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'A vision therapy app for eye exercises.',
        problem: 'Helps users improve eye health with guided routines.',
        techStack: ['React', 'Vite', 'CSS', 'Node.js']
      },
    ],
  },
  {
    week: 'WEEK 4 – JAN 19ᵗʰ – JAN 25ᵗʰ',
    projects: [
      {
        title: 'EMAIL SET UP',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'Automates email account configuration.',
        problem: 'Simplifies the process of setting up new email accounts.',
        techStack: ['Node.js', 'Express']
      },
      {
        title: 'ALBUM FINDER',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'Finds music albums by artist or title.',
        problem: 'Makes music discovery easier for users.',
        techStack: ['React', 'Spotify API']
      },
    ],
  },
  {
    week: 'WEEK 3 – JAN 12ᵗʰ – JAN 18ᵗʰ',
    projects: [
      {
        title: 'SUDOKU SOLVER',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'Solves Sudoku puzzles instantly.',
        problem: 'Assists users in solving complex Sudoku puzzles.',
        techStack: ['Python', 'React']
      },
      {
        title: 'POMODORO TIMER',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'A productivity timer based on the Pomodoro technique.',
        problem: 'Helps users manage time and boost productivity.',
        techStack: ['React', 'CSS']
      },
    ],
  },
  {
    week: 'WEEK 2 – JAN 5ᵗʰ – JAN 11ᵗʰ',
    projects: [
      {
        title: 'RESTAURANT FINDER',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'Finds restaurants nearby.',
        problem: 'Solves the problem of discovering new places to eat.',
        techStack: ['React', 'Google Maps API']
      },
      {
        title: 'QR CODE GENERATOR',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'Generates QR codes for any text or URL.',
        problem: 'Makes sharing information easy and contactless.',
        techStack: ['React', 'JavaScript']
      },
      {
        title: 'DAILY AFFIRMATIONS',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'Displays daily positive affirmations.',
        problem: 'Boosts user morale and positivity.',
        techStack: ['React', 'CSS']
      },
      {
        title: 'VISUALIZE YOUTUBE DATA',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'Visualizes YouTube channel analytics.',
        problem: 'Helps creators understand their channel performance.',
        techStack: ['React', 'YouTube API', 'Chart.js']
      },
    ],
  },
  {
    week: 'WEEK 1 – JAN 1ˢᵗ – JAN 4ᵗʰ',
    projects: [
      {
        title: 'AIR TIC TAC TOE',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'A fun twist on classic Tic Tac Toe.',
        problem: 'Provides a new way to play a classic game.',
        techStack: ['React', 'CSS']
      },
      {
        title: 'DISCORD BOT+ MEME GENERATION',
        image: false,
        github: 'https://github.com/KoalaisMad',
        description: 'A Discord bot that generates memes.',
        problem: 'Can\'t find the perfect meme when needed :(',
        techStack: ['Node.js', 'Discord.js']
      },
      {
        title: 'REDOING PERSONAL WEBSITE',
        image: true,
        github: 'https://github.com/KoalaisMad/newPortfolio',
        description: 'My personal portfolio website.',
        problem: 'My Resume doesn\'t fully capture my work.',
        techStack: ['React', 'Vite', 'CSS', 'Node.js', 'JavaScript','react-router-dom']
      },
    ],
  },
];

export default function ProjectsByWeek() {
  const navigate = useNavigate();
  const [openWeeks, setOpenWeeks] = useState(Array(weekData.length).fill(true));

  const toggleWeek = idx => {
    setOpenWeeks(openWeeks => openWeeks.map((open, i) => i === idx ? !open : open));
  };

  return (
    <div className="portfolio" style={{ background: '#FAF7EE', minHeight: '100vh', padding: '2.5rem 4rem', maxWidth: '1400px', margin: '0 auto', marginTop: 0 }}>
      <header className="header">
        <div className="header-left">
          <h2 className="logo-text" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>JYO MAD.</h2>
        </div>
        <nav className="header-nav">
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/52x52')}>52×52</span>
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/projects')}>Projects</span>
          <span style={{cursor: 'pointer'}} onClick={() => window.open('https://drive.google.com/file/d/1A6C7xwdkJZmOb5NDYPmeiCKt2Yw5g5f2/view?usp=sharing', '_blank')}>Resume</span>
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/contactme')}>Contact</span>
        </nav>
      </header>
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 0 0 0' }}>
        <div style={{ background: '#fff8ee', borderRadius: '1.5rem', margin: '0 auto 2.5rem', padding: '1.5rem 0', textAlign: 'center', maxWidth: 700 }}>
          <img
            src={'/123.png'}
            alt="Projects By Week"
            style={{
              width: '700px',
              maxWidth: '98vw',
              margin: '0 auto',
              display: 'block',
              objectFit: 'contain'
            }}
          />
        </div>
        <div style={{
          textAlign: 'center',
          margin: '0 auto 1.2rem',
          color: '#7a7a7a',
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 400,
          letterSpacing: '0.01em',
          maxWidth: 420,
          padding: 0,
        }}>
          <span style={{ opacity: 0.7 }}>
            <span style={{ fontWeight: 500 }}>Tip:</span> Click a project card to view the demo/app. Click the
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7a7a7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', margin: '0 2px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            icon for the code.
          </span>
        </div>
        {weekData.map((week, i) => (
          <div key={i} style={{ marginBottom: '2.5rem', background: 'transparent' }}>
            <div
              style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500, fontSize: '1rem', color: '#1a2b4a', marginBottom: '0.7rem', letterSpacing: '0.04em', cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center' }}
              onClick={() => toggleWeek(i)}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', transition: 'transform 0.2s', transform: openWeeks[i] ? 'rotate(90deg)' : 'rotate(0deg)', marginRight: 10 }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#1a2b4a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <polyline points="6 8 10 12 14 8" />
                </svg>
              </span>
              <span>{week.week} :</span>
            </div>
            {openWeeks[i] && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
                {week.projects.map((proj, j) => (
                  <div
                    key={j}
                    style={{
                      background: '#0e1e3a',
                      color: '#fff',
                      borderRadius: '2.5rem',
                      padding: '1.7rem 1.6rem 1.5rem 2.1rem',
                      minWidth: 260,
                      flex: '1 1 320px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      position: 'relative',
                      minHeight: 210,
                      boxShadow: '0 8px 32px 0 #1a2b4a18',
                      transition: 'transform 0.22s cubic-bezier(.5,1.8,.5,1), box-shadow 0.22s',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      if (proj.title === 'REDOING PERSONAL WEBSITE') {
                        window.open('https://jyomad.ink', '_blank');
                      }
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.035) translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 40px 0 #1a2b4a33';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '0 8px 32px 0 #1a2b4a18';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', justifyContent: 'space-between', marginBottom: proj.image ? '0.7rem' : 0 }}>
                      <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.04em', fontFamily: '"Fira Mono", "Menlo", "Monaco", monospace', color: '#fff', textTransform: 'uppercase', flex: 1, marginBottom: 0 }}>{proj.title}</div>
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ marginLeft: 8, color: '#fff', opacity: 0.85, marginTop: 2 }}
                          title="GitHub Repository"
                          onClick={e => e.stopPropagation()}
                        >
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      )}
                    </div>
                    <div style={{ fontSize: '0.98rem', marginBottom: '0.4rem', color: '#fff', opacity: 0.92, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
                      <span style={{ color: '#f7d59c', fontWeight: 700 }}>What it is:</span> <span style={{ color: '#fff', fontWeight: 400 }}>{proj.description}</span>
                    </div>
                    <div style={{ fontSize: '0.93rem', marginBottom: '0.4rem', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
                      <span style={{ color: '#bfae8e', fontWeight: 700 }}>Problem Solved:</span> <span style={{ color: '#fff', fontWeight: 400 }}>{proj.problem}</span>
                    </div>
                    <div style={{ fontSize: '0.93rem', marginBottom: '0.4rem', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
                      <span style={{ color: '#e5e5e6', fontWeight: 700 }}>Tech Stack:</span> <span style={{ color: '#fff', fontWeight: 400 }}>{proj.techStack && proj.techStack.join(', ')}</span>
                    </div>
                    {proj.image && (
                      proj.title === 'REDOING PERSONAL WEBSITE' ? (
                        <div style={{
                          background: '#fff',
                          borderRadius: '1rem',
                          width: 110,
                          height: 90,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginLeft: 'auto',
                          marginTop: '0.7rem',
                          boxShadow: '0 4px 16px 0 #1a2b4a22',
                          border: '2px solid #e5e5e6',
                          padding: 4,
                        }}>
                          <img src="/p1.png" alt="Personal Website" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.7rem', boxShadow: '0 2px 8px #bfae8e33' }} />
                        </div>
                      ) : (
                        <div style={{
                          background: '#fff',
                          color: '#0e1e3a',
                          borderRadius: '1rem',
                          width: 110,
                          height: 90,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '1.05rem',
                          fontFamily: '"Fira Mono", "Menlo", "Monaco", monospace',
                          marginLeft: 'auto',
                          marginTop: '0.7rem',
                          boxShadow: '0 2px 8px rgba(26,43,74,0.08)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}>
                          IMAGE
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
      {/* Dots at bottom center */}
      <div className="pagination" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.2rem', margin: '3.5rem 0 1.5rem 0' }}>
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
  );
}
