import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const problems = [
  {
    title: "IS YOUR SIBILING NOT PLAYING FAIR? USE THIS TIC TAC TOE BOARD INSTEAD!",
    story: "Like the Problem says.",
    solution:
      "Creating a TIC TAC TOE board that will act like the judge of the game. However, just a board is boring! Let's make a board in the AIR and a computer to play with!!",
    github: "https://github.com/KoalaisMad/AirTicTacToe",
    // demo: "https://yourdemo.com/tictactoe",
    expanded: true,
  },
  { title: "CAN'T DECIDE WHERE TO EAT?",
    // story: "Like the Problem says.",
    // solution:
    //   "Creating a TIC TAC TOE board that will act like the judge of the game. However, just a board is boring! Let's make a board in the AIR and a computer to play with!!",
    // github: "https://github.com/yourusername/where2eat",
    // demo: "https://yourdemo.com/where2eat",
    // expanded: true,
  },
  { title: "CAN'T FIND THE RIGHT MEME IN TIME?" },
  { title: "CAN'T GENERATE A QR CODE WITHOUT WATCHING ADDS!" },
  { title: "SPENDING TOO MUCH TIME ON YOUTUBE?" },
  { title: "MY FRIEND CAN'T SOLVE A SUDOKU!!!" },
  { title: "ARE YOUTUBE POMODORO TIMERS ANNOYING YOU WITH ADS?" },
  { title: "IS YOUR PRODUCT STILL UNAVAILBLE?" },
  { title: "ARE YOUR STUDENTS EMAILING ASKING REPEATED QUESTIONS ON OFFICE HOURS?" },
  { title: "TOO LAZY TO CREATE A PLAYLIST WITH MY FAVORITE ARTIST BUT SPOTIFY IS ANNOYING!" },
];

const navy = "#162447";
const cream = "#f5f5e6";
const fontTitle = "'Montserrat', 'Bebas Neue', Arial, sans-serif";
const fontBody = "'Montserrat', Arial, sans-serif";

function ProblemStatements() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedArr, setExpandedArr] = useState(Array(problems.length).fill(false));
  const toggleExpand = idx => {
    setExpandedArr(arr => {
      const copy = [...arr];
      copy[idx] = !copy[idx];
      return copy;
    });
  };
  return (
    <div className="portfolio" style={{ minHeight: "100vh", background: '#FAF7EE', fontFamily: fontBody, color: navy, position: "relative", animation: "fadeInUp 0.7s ease" }}>
      {/* Header - matches home page */}
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
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/52x52')}>52×52</span>
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/projects')}>Projects</span>
          <span style={{cursor: 'pointer'}} onClick={() => window.open('https://drive.google.com/file/d/1A6C7xwdkJZmOb5NDYPmeiCKt2Yw5g5f2/view?usp=sharing', '_blank')}>Resume</span>
          <span style={{cursor: 'pointer'}} onClick={() => navigate('/contactme')}>Contact</span>
        </nav>
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <span onClick={() => { navigate('/52x52'); setMenuOpen(false); }}>52×52</span>
          <span onClick={() => { navigate('/projects'); setMenuOpen(false); }}>Projects</span>
          <span onClick={() => { window.open('https://drive.google.com/file/d/1A6C7xwdkJZmOb5NDYPmeiCKt2Yw5g5f2/view?usp=sharing', '_blank'); setMenuOpen(false); }}>Resume</span>
          <span onClick={() => { navigate('/contactme'); setMenuOpen(false); }}>Contact</span>
        </nav>
      </header>
      {/* Title */}
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2.5rem" }}>
        {/*
        <h1 style={{
          fontSize: "5rem",
          fontWeight: 900,
          letterSpacing: "0.08em",
          color: navy,
          marginBottom: "0.5rem",
          fontFamily: fontTitle,
          textShadow: "0 4px 0 #e5e5e6"
        }}>PROJECTS</h1>
        */}
        <img src="/PStatementh.png" alt="PROJECTS" style={{
          width: "520px",
          maxWidth: "90vw",
          display: "block",
          margin: "0 auto 0.5rem auto",
          marginBottom: "3.5rem"
        }} />
        {/* <div style={{ fontWeight: 700, fontSize: "1.3rem", letterSpacing: "0.15em", marginBottom: "3.5rem", textAlign: "center", color: navy }}>
          BY PROBLEM STATEMENT
        </div> */}
        {/* Problem Cards */}
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "0 1vw" }}>
          {problems.map((p, idx) => (
            <div key={idx} style={{ marginBottom: "1.5rem", animation: "slideInRight 0.7s cubic-bezier(.77,.2,.32,1.01)", animationDelay: `${idx * 0.08}s`, animationFillMode: "backwards" }}>
              <div
                className="problem-bar"
                style={{
                  background: navy,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  borderRadius: "2rem",
                  padding: "0.7rem 2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 2px 8px rgba(26,43,74,0.08)",
                  letterSpacing: "0.04em",
                  minWidth: 0,
                  width: "100%",
                  boxSizing: "border-box",
                  cursor: "pointer"
                }}
                onClick={() => toggleExpand(idx)}
              >
                <span style={{ textTransform: "uppercase" }}>• {p.title}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                  {/* GitHub icon, clickable if github link exists */}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: "middle" }}>
                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.339-.012 2.421-.012 2.751 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="#fff"/>
                      </svg>
                    </a>
                  )}
                  {/* Dropdown arrow - only this toggles expansion */}
                  <span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </span>
              </div>
              {/* Expanded card */}
              {expandedArr[idx] && p.story && (
                <div style={{
                  background: cream,
                  color: navy,
                  borderRadius: "0 0 2rem 2rem",
                  boxShadow: "0 2px 8px rgba(26,43,74,0.08)",
                  padding: "1.5rem 2.5rem 1.5rem 2.5rem",
                  fontSize: "1.05rem",
                  marginTop: "1.5rem"
                }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>STORY: <span style={{ fontWeight: 400 }}>{p.story}</span></div>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>SOLUTION: <span style={{ fontWeight: 400 }}>{p.solution}</span></div>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", marginTop: "1rem" }}>TECHSTACK:</div>
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                    {p.techstack && p.techstack.map((t, i) => (
                      <span key={i} style={{ background: navy, color: "#fff", borderRadius: "1rem", padding: "0.3rem 1.2rem", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.08em", display: "inline-block", textTransform: "uppercase" }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <span style={{ background: navy, color: "#fff", borderRadius: "1rem", padding: "0.3rem 1.2rem", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.08em", cursor: "pointer", display: "inline-block", textTransform: "uppercase" }}>GITHUB</span>
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <span style={{ background: navy, color: "#fff", borderRadius: "1rem", padding: "0.3rem 1.2rem", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.08em", cursor: "pointer", display: "inline-block", textTransform: "uppercase" }}>DEMO</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      {/* Dots at bottom right - match home page */}
      <div className="pagination" style={{ position: "absolute", bottom: "0.2rem", right: "2.5rem", display: "flex", gap: "1.2rem" }}>
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
      {/* Animations and responsive styles for problem bars */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .problem-bar {
          transition: padding 0.2s, font-size 0.2s;
        }
        @media (max-width: 900px) {
          .problem-bar {
            font-size: 1rem !important;
            padding: 0.7rem 1rem !important;
          }
        }
        @media (max-width: 600px) {
          .problem-bar {
            font-size: 0.95rem !important;
            padding: 0.7rem 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ProblemStatements;
