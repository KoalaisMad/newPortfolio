import { useNavigate } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
// Removed custom component and icon imports

// Add responsive styles
const responsiveStyles = `
  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column !important;
      gap: 1.5rem !important;
      padding: 2rem 1.5rem !important;
    }

    .contact-left-section {
      flex: 1 !important;
      max-width: 100% !important;
      align-items: center !important;
      margin-top: 0 !important;
    }

    .contact-title {
      font-size: 2rem !important;
      text-align: center !important;
    }

    .contact-description {
      font-size: 1.05rem !important;
      text-align: center !important;
      max-width: 100% !important;
    }

    .contact-main-section {
      min-height: auto !important;
      margin-top: 0 !important;
    }

    .contact-links-section {
      border-left: none !important;
      border-top: 3px dashed #bfae8e !important;
      padding-left: 0 !important;
      padding-top: 1.5rem !important;
      align-items: center !important;
      min-width: 100% !important;
    }

    .contact-links-row {
      justify-content: center !important;
    }
  }

  @media (max-width: 480px) {
    .contact-container {
      padding: 1.5rem 1rem !important;
      gap: 1rem !important;
    }

    .contact-title {
      font-size: 1.7rem !important;
    }

    .contact-description {
      font-size: 0.95rem !important;
    }

    .contact-links-row {
      flex-wrap: wrap !important;
      gap: 0.8rem !important;
    }

    .contact-link-btn {
      padding: 0.4rem 0.8rem !important;
    }

    .contact-link-icon {
      width: 20px !important;
      height: 20px !important;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 0.95rem !important;
      padding: 0.65rem 0.9rem !important;
    }

    .contact-submit-btn {
      font-size: 1.05rem !important;
      padding: 0.9rem !important;
    }
  }
`;

// FormData structure for useState

export default function ContactForm() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentStamp, setSentStamp] = useState(null);
  const [sentMessage, setSentMessage] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsB4dx-FLThdAvLJjrYSc6YSYoYFrJoWw6MswZBBLFrLA5D7sQWmsTYh8hzjXRDrB1mQ/exec';
        const response = await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            timestamp: new Date().toISOString(),
          }),
        });

        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSentStamp(true);
        setSentMessage(formData.message);

        setTimeout(() => {
          setIsSubmitted(false);
          setSentStamp(false);
          setSentMessage('');
        }, 10000); // 10 seconds
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again or email directly.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="portfolio">
      <style>{responsiveStyles}</style>
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

      <section className="main-content contact-main-section" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '70vh', marginTop: '-4rem', gap: '2.5rem'}}>
        <div className="contact-left-section" style={{
          flex: '0 0 340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginTop: '3.5rem',
          padding: '0',
          maxWidth: 340,
          opacity: 0.7,
        }}>
          <h2 className="contact-title" style={{
            fontSize: '2.3rem',
            fontWeight: 800,
            color: '#1a2b4a',
            marginBottom: '1.1rem',
            letterSpacing: '0.04em',
            textShadow: '0 2px 0 #e5d7bb, 0 0 8px #fff',
            fontFamily: 'Georgia, Times New Roman, serif',
            textAlign: 'right',
            lineHeight: 1.1,
          }}>CONTACT ME</h2>
          <p className="contact-description" style={{
            color: '#1a2b4a',
            fontSize: '1.18rem',
            marginBottom: '1.7rem',
            fontWeight: 500,
            fontStyle: 'italic',
            background: 'none',
            borderRadius: '0',
            padding: '0',
            boxShadow: 'none',
            maxWidth: 320,
            borderLeft: 'none',
            textAlign: 'right',
            fontFamily: 'Georgia, Times New Roman, serif',
            letterSpacing: '0.01em',
          }}>
            This stamp still works.<br />
            <span style={{fontWeight: 600}}>Send me a message here, or find me on email, LinkedIn, and GitHub.</span>
          </p>
        </div>
        <div className="contact-container" style={{
          width: '100%',
          maxWidth: 900,
          background: 'repeating-linear-gradient(135deg, #f5f5e6 0px, #e5d7bb 40px, #f5f5e6 80px)',
          borderRadius: '1.5rem',
          boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
          padding: '2.7rem 2.2rem',
          border: '3px solid #bfae8e',
          position: 'relative',
          fontFamily: 'Georgia, Times New Roman, serif',
          display: 'flex',
          flexDirection: 'row',
          gap: '2.7rem',
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/wood-pattern.png)',
          backgroundBlendMode: 'multiply',
          marginTop: '1.5rem',
        }}>
          {sentStamp && (
            <img src="/stamp.png.jpg" alt="Stamp" style={{position: 'absolute', top: '1.2rem', right: '1.2rem', width: '100px', height: '100px', zIndex: 2}} />
          )}
          {/* Left side: message and form */}
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <form className="contact-form" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
              <div>
                <label htmlFor="name" style={{fontWeight: 600, color: '#1a2b4a'}}>Name *</label>
                <input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} style={{width: '100%', marginTop: 8, padding: '0.75rem 1rem', borderRadius: '0.5rem', border: errors.name ? '2px solid #e57373' : '2px solid #e5d7bb', fontSize: '1rem'}} placeholder="Your name" />
                {errors.name && <p style={{color: '#e57373', fontSize: '0.95rem', marginTop: 4}}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" style={{fontWeight: 600, color: '#1a2b4a'}}>Email *</label>
                <input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} style={{width: '100%', marginTop: 8, padding: '0.75rem 1rem', borderRadius: '0.5rem', border: errors.email ? '2px solid #e57373' : '2px solid #e5d7bb', fontSize: '1rem'}} placeholder="your.email@example.com" />
                {errors.email && <p style={{color: '#e57373', fontSize: '0.95rem', marginTop: 4}}>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" style={{fontWeight: 600, color: '#1a2b4a'}}>Subject *</label>
                <input id="subject" value={formData.subject} onChange={(e) => handleChange('subject', e.target.value)} style={{width: '100%', marginTop: 8, padding: '0.75rem 1rem', borderRadius: '0.5rem', border: errors.subject ? '2px solid #e57373' : '2px solid #e5d7bb', fontSize: '1rem'}} placeholder="What's this about?" />
                {errors.subject && <p style={{color: '#e57373', fontSize: '0.95rem', marginTop: 4}}>{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" style={{fontWeight: 600, color: '#1a2b4a'}}>Message *</label>
                <textarea id="message" value={formData.message} onChange={(e) => handleChange('message', e.target.value)} style={{width: '100%', marginTop: 8, minHeight: 120, padding: '0.75rem 1rem', borderRadius: '0.5rem', border: errors.message ? '2px solid #e57373' : '2px solid #e5d7bb', fontSize: '1rem'}} placeholder="Your message..." />
                {errors.message && <p style={{color: '#e57373', fontSize: '0.95rem', marginTop: 4}}>{errors.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="contact-submit-btn" style={{
                marginTop: 8,
                padding: '1rem',
                borderRadius: '0.75rem',
                background: '#bfae8e',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.15rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                position: 'relative'
              }}>
                {isSubmitting ? 'Sending...' : 'Mail Postcard'}
              </button>
            </form>
            {isSubmitted && (
              <div style={{textAlign: 'center', marginTop: '2rem'}}>
                <h3 style={{fontWeight: 700, color: '#7c5c2b', marginTop: 12}}>Thank you! Your mail has been received.</h3>
                <p style={{color: '#7c5c2b'}}>I'll get back to you soon!</p>
              </div>
            )}
          </div>
          {/* Right side: contact links styled as rustic stamps */}
          <div className="contact-links-section" style={{
            flex: 0.7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            gap: '1.5rem',
            borderLeft: '3px dashed #bfae8e',
            paddingLeft: '2rem',
            minWidth: 180,
          }}>
            <div style={{marginBottom: '0.1rem'}}>
              <span style={{fontSize: '1.1rem', color: '#bfae8e', fontWeight: 700, fontFamily: 'Courier New, monospace'}}>Send a postcard to:</span>
            </div>
            <div style={{marginBottom: '2rem'}}>
              <span style={{fontSize: '1.1rem', color: '#bfae8e', fontWeight: 700, fontFamily: 'Courier New, monospace'}}>Jyo  ❛֊❛</span>
            </div>
            {/* Contact links: display side by side */}
            <div className="contact-links-row" style={{display: 'flex', flexDirection: 'row', gap: '1.2rem', marginTop: '2rem', alignItems: 'center'}}>
              {/* Email link: direct mailto */}
              <a href="mailto:madhavarapu.jyo@gmail.com" className="contact-link-btn" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: '#f5f5e6', border: '2.5px solid #bfae8e', borderRadius: '0.5rem', padding: '0.5rem 1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.09)', fontWeight: 700, color: '#7c5c2b', textDecoration: 'none', fontFamily: 'Courier New, monospace'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="Email" className="contact-link-icon" style={{width: '24px', height: '24px', filter: 'sepia(0.7) hue-rotate(20deg)'}} />
              </a>
              <a href="https://www.linkedin.com/in/jyoshitha-madhavarapu/" target="_blank" rel="noopener noreferrer" className="contact-link-btn" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: '#f5f5e6', border: '2.5px solid #bfae8e', borderRadius: '0.5rem', padding: '0.5rem 1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.09)', fontWeight: 700, color: '#7c5c2b', textDecoration: 'none', fontFamily: 'Courier New, monospace'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="contact-link-icon" style={{width: '24px', height: '24px', filter: 'sepia(0.7) hue-rotate(20deg)'}} />
              </a>
              <a href="https://github.com/KoalaisMad" target="_blank" rel="noopener noreferrer" className="contact-link-btn" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: '#f5f5e6', border: '2.5px solid #bfae8e', borderRadius: '0.5rem', padding: '0.5rem 1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.09)', fontWeight: 700, color: '#7c5c2b', textDecoration: 'none', fontFamily: 'Courier New, monospace'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="contact-link-icon" style={{width: '24px', height: '24px', filter: 'sepia(0.7) hue-rotate(20deg)'}} />
              </a>
            </div>
          </div>
        </div>
      </section>
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