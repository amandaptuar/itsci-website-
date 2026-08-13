import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__col">
          <a className="logo" href="/">
            <span className="logo__name">I T S C I</span>
            <span className="logo__tag">INNOVATE · TRANSFORM · SECURE</span>
          </a>
          <p className="footer__about">ITSCI is a trusted technology partner helping businesses and organizations build secure, scalable and future-ready digital solutions.</p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" className="ic"><path fill="currentColor" d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.29-.04-1.28-.13-2.44-.13-2.42 0-4.07 1.47-4.07 4.18V9.9H7.5V13h2.69v8h3.31Z"/></svg></a>
            <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" className="ic"><path fill="currentColor" d="M21 6.1c-.66.29-1.36.49-2.1.58a3.63 3.63 0 0 0 1.6-2 7.3 7.3 0 0 1-2.32.88 3.65 3.65 0 0 0-6.3 2.5c0 .28.03.56.09.82A10.36 10.36 0 0 1 4.5 5.05a3.65 3.65 0 0 0 1.13 4.87 3.6 3.6 0 0 1-1.65-.46v.05a3.65 3.65 0 0 0 2.93 3.58 3.7 3.7 0 0 1-1.65.06 3.66 3.66 0 0 0 3.41 2.54A7.33 7.33 0 0 1 3 17.19 10.33 10.33 0 0 0 8.6 18.83c6.72 0 10.4-5.57 10.4-10.4l-.01-.48A7.4 7.4 0 0 0 21 6.1Z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" className="ic"><path fill="currentColor" d="M6.94 8.5H4V20h2.94V8.5ZM5.47 3.9a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.63c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58 1-3.02 1.68V8.5H10.2c.04.83 0 11.5 0 11.5h2.9v-6.42c0-.26.02-.52.1-.7.2-.52.68-1.06 1.48-1.06 1.05 0 1.47.8 1.47 1.96V20H20v-6.37Z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" className="ic"><path fill="currentColor" d="M21.6 7.9a2.5 2.5 0 0 0-1.76-1.77C18.28 5.7 12 5.7 12 5.7s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.9 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.1 2.5 2.5 0 0 0 1.76 1.77c1.56.43 7.84.43 7.84.43s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.1ZM10.1 15V9l5.2 3-5.2 3Z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" className="ic"><rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="16.6" cy="7.4" r="1" fill="currentColor"/></svg></a>
          </div>
        </div>
    
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/brands">Our Brands</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
    
        <div className="footer__col">
          <h4>Our Brands</h4>
          <ul>
            <li><a href="https://vigil-1.com" target="_blank" rel="noopener noreferrer">VIGIL</a></li>
            <li><a href="https://limitlessworld.net" target="_blank" rel="noopener noreferrer">Limitless</a></li>
            <li><a href="https://sentinelglobal.net" target="_blank" rel="noopener noreferrer">Sentinel</a></li>
          </ul>
        </div>
    
        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li>
              <svg viewBox="0 0 24 24" className="ic"><path d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11Z" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="10" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg>
              <span>7454 Old Alexandria Ferry Rd,<br />Clinton, Maryland 20735, USA</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="ic"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m3.5 7 8.5 6 8.5-6" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg>
              <span>support@itsci.com</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="ic"><path d="M6.4 4h3l1.4 3.4-1.9 1.4a11 11 0 0 0 5.3 5.3l1.4-1.9L19 13.6v3a1.5 1.5 0 0 1-1.7 1.5A14.6 14.6 0 0 1 5 6.1 1.5 1.5 0 0 1 6.4 4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
              <span>+1 (240) 123-4567</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="ic"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M12 7v5.2l3.4 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              <span>08:00am - 06:00pm (Mon - Fri)</span>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© 2026 ITSCI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
