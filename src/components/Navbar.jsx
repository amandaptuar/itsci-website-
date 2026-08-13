import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    if(toggle && nav) {
      const handler = () => {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      };
      toggle.addEventListener('click', handler);
      
      const links = document.querySelectorAll('.nav__links a, .nav__cta');
      const closeHandler = () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      };
      links.forEach(a => a.addEventListener('click', closeHandler));
      
      return () => {
        toggle.removeEventListener('click', handler);
        links.forEach(a => a.removeEventListener('click', closeHandler));
      };
    }
  }, []);

  return (
    <nav className="nav" id="nav">
      <a className="logo" href="/">
        <span className="logo__name">I T S C I</span>
        <span className="logo__tag">INNOVATE · TRANSFORM · SECURE</span>
      </a>

      <button className="nav__toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navMenu">
        <span></span><span></span><span></span>
      </button>

      <div className="nav__menu" id="navMenu">
        <ul className="nav__links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li className="has-dropdown">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <a href="/services" style={{ flexGrow: 1 }}>Services</a>
              <button 
                className="dropdown-toggle-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsServicesDropdownOpen(!isServicesDropdownOpen);
                }}
                style={{ background: 'none', border: 'none', padding: '10px', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}
                aria-label="Toggle Services Dropdown"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <ul className={`nav__dropdown ${isServicesDropdownOpen ? 'is-open' : ''}`}>
              <li><a href="/services">All Services</a></li>
              <li><a href="/services/data-center">Data Center Services</a></li>
              <li><a href="/services/telecom-management">Telecom Management Services</a></li>
              <li><a href="/services/infrastructure">Infrastructure Services</a></li>
              <li><a href="/services/security">Security Services</a></li>
              <li><a href="/services/cloud-solutions">Cloud Solutions</a></li>
              <li><a href="/services/network-design">Network Design</a></li>
              <li><a href="/services/saas">SaaS</a></li>
              <li><a href="/services/ai-development">AI Development</a></li>
              <li><a href="/services/scada">SCADA</a></li>
            </ul>
          </li>
          <li><a href="/brands">Brands</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/contact" className="btn btn--primary nav__cta">Contact Us</a>
      </div>
    </nav>
  );
}
