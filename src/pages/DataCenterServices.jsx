import React, { useEffect } from "react";
import heroBg from "../assets/data-center-hero.png";
import serviceCtaBg from "../assets/service-cta-bg.png";

export default function DataCenterServices() {
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
      
      const links = document.querySelectorAll('.nav__links a:not(.has-dropdown), .nav__cta');
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
    <div className="datacenter-page">
      <style>{`
:root{
  --navy-900:#040A1C;
  --navy-800:#061029;
  --navy-700:#0A1636;
  --navy-600:#0E1C42;
  --blue-500:#2563EB;
  --blue-400:#3B82F6;
  --blue-300:#60A5FA;
  --ink-900:#0B1B33;
  --ink-600:#4B5A6E;
  --line:#E3E9F2;
  --surface:#FFFFFF;
  --surface-2:#F7F9FC;
  --radius:10px;
  --radius-lg:14px;
  --shadow-card:0 2px 14px rgba(11,27,51,.06);
  --shadow-nav:0 10px 30px rgba(2,8,23,.28);
  --container:1440px;
  --ff-display:"Poppins", "Segoe UI", system-ui, sans-serif;
  --ff-body:"Inter", "Segoe UI", system-ui, sans-serif;
}

*,*::before,*::after{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;font-family:var(--ff-body);font-size:17px;line-height:1.7;
  color:var(--ink-600);background:var(--surface);
  -webkit-font-smoothing:antialiased;
}
img{max-width:100%;display:block;}
a{text-decoration:none;color:inherit;}
ul{margin:0;padding:0;list-style:none;}
h1,h2,h3,h4{font-family:var(--ff-display);color:var(--ink-900);margin:0;line-height:1.25;}
p{margin:0;}
:focus-visible{outline:2px solid var(--blue-400);outline-offset:3px;border-radius:4px;}

.container{width:100%;max-width:var(--container);margin:0 auto;padding:0 40px;}
.section{padding:90px 0;}
.accent{color:var(--blue-400);}
.ic{width:16px;height:16px;flex:none;}

.btn{
  display:inline-flex;align-items:center;gap:9px;
  font-family:var(--ff-display);font-size:16px;font-weight:500;
  padding:14px 26px;border-radius:8px;
  transition:transform .18s ease, background-color .18s ease, box-shadow .18s ease;
}
.btn .arrow{width:16px;height:16px;}
.btn--primary{background:var(--blue-500);color:#fff;box-shadow:0 6px 18px rgba(37,99,235,.28);}
.btn--primary:hover{background:#1D4ED8;transform:translateY(-2px);}

.eyebrow{
  font-family:var(--ff-display);font-size:14.5px;font-weight:600;
  letter-spacing:.14em;color:var(--blue-400);margin-bottom:14px;
}
.section__title{font-size:42px;font-weight:600;}

.hero{
  position:relative;
  background:radial-gradient(120% 90% at 78% 30%, #0D2352 0%, #071231 45%, var(--navy-800) 100%);
  padding-bottom:56px;overflow:hidden;
}
.hero__bg{
  position:absolute;inset:0;
  background-image:url('\${heroBg}');
  background-size:cover;background-position:center right;
  pointer-events:none;
}
.hero__bg::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(90deg, rgba(3,8,26,.86) 0%, rgba(3,8,26,.45) 38%, rgba(3,8,26,0) 62%);
}
.hero > .container{position:relative;z-index:2;}

/* Nav */
.nav{
  display:flex;align-items:center;justify-content:space-between;gap:24px;
  background:#fff;border-radius:12px;padding:14px 22px;margin-top:18px;
  box-shadow:var(--shadow-nav);position:relative;z-index:20;
}
.logo{display:block;}
.logo__name{
  display:block;font-family:var(--ff-display);font-weight:600;
  font-size:28px;letter-spacing:.14em;color:var(--ink-900);line-height:1.1;
}
.logo__tag{
  display:block;font-family:var(--ff-display);font-size:7.5px;font-weight:500;
  letter-spacing:.2em;color:#7C8AA0;margin-top:4px;padding-top:4px;border-top:1px solid #DCE3EE;
}
.nav__menu{display:flex;align-items:center;gap:30px;}
.nav__links{display:flex;align-items:center;gap:28px;}
.nav__links > li{position:relative;}
.nav__links a{
  display:inline-flex;align-items:center;gap:5px;
  font-family:var(--ff-display);font-size:16px;font-weight:500;color:#2C3A4F;
  transition:color .18s ease;
}
.nav__links a:hover,.nav__links a.is-active{color:var(--blue-500);}
.nav__dropdown{
  position:absolute;top:100%;left:0;background:#fff;border-radius:8px;
  box-shadow:0 12px 35px rgba(0,0,0,0.12);padding:10px 0;min-width:240px;
  opacity:0;visibility:hidden;transform:translateY(-15px) scale(0.96);
  transform-origin:top center;
  transition:opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1), visibility 0.4s;
  z-index:50;pointer-events:none;
}
.nav__links li:hover .nav__dropdown{
  opacity:1;visibility:visible;transform:translateY(0) scale(1);
  pointer-events:auto;
}
.nav__dropdown a{display:block;padding:8px 20px;font-size:15px;color:var(--ink-600);}
.nav__dropdown a:hover{background:var(--surface-2);color:var(--blue-500);}

.nav__toggle{
  display:none;flex-direction:column;justify-content:center;gap:5px;
  width:42px;height:38px;padding:0 9px;background:transparent;
  border:1px solid var(--line);border-radius:8px;cursor:pointer;
}
.nav__toggle span{display:block;height:2px;width:100%;background:var(--ink-900);border-radius:2px;}

.hero__grid{
  display:grid;grid-template-columns:1fr;align-items:center;gap:40px;
  padding:90px 0 60px;
}
.hero__title{font-size:58px;font-weight:600;color:#fff;letter-spacing:-.5px;}
.hero__text{color:rgba(214,226,244,.86);max-width:480px;margin-top:22px;font-size:18.5px;line-height:1.7;}

.content-section{padding:80px 0;}
.content-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.content-section h2{font-size:36px;margin-bottom:20px;}
.content-section p{font-size:17px;line-height:1.8;margin-bottom:20px;}

.banner-img{
  width:100%;height:450px;object-fit:cover;border-radius:var(--radius-lg);
  box-shadow:var(--shadow-card);
}

.footer{background:var(--navy-700);color:rgba(203,217,240,.78);font-size:15.5px;}
.footer__grid{
  display:grid;grid-template-columns:1.5fr 1fr 1fr 1.35fr;
  gap:34px;padding-top:52px;padding-bottom:44px;
}
.footer .logo__name{color:#fff;}
.footer .logo__tag{color:rgba(203,217,240,.6);border-top-color:rgba(255,255,255,.22);margin-top:4px;}
.footer__about{margin-top:20px;font-size:14px;line-height:1.7;max-width:280px;}
.footer__col h4{font-size:17.5px;font-weight:600;color:#fff;margin-bottom:16px;}
.footer__col ul li{margin-bottom:10px;}
.footer__col ul a:hover{color:var(--blue-300);}

@media (max-width:960px){
  .nav__toggle{display:flex;}
  .nav{flex-wrap:wrap;padding:14px 18px;}
  .nav__menu{
    display:none;width:100%;flex-direction:column;align-items:stretch;
    gap:6px;padding-top:14px;margin-top:12px;border-top:1px solid var(--line);
  }
  .nav.is-open .nav__menu{display:flex;}
  .nav__links{flex-direction:column;align-items:stretch;gap:0;}
  .nav__links li{border-bottom:1px solid #F0F3F8; width: 100%;}
  .nav__links a{padding:12px 4px;justify-content:space-between; width: 100%;}
  .nav__dropdown{position:static;box-shadow:none;padding:10px 0;margin-top:10px;transform:none;opacity:1;visibility:visible;display:flex;flex-direction:column;gap:5px;background:var(--surface-2);pointer-events:auto;border-radius:10px;}
  .nav__links li.is-open .nav__dropdown{display:block;}
  .nav__dropdown a{padding:10px 20px;}
  .content-grid{grid-template-columns:1fr;}
}
@media (max-width:560px){
  .hero__title{font-size:38px;}
  .content-section h2{font-size:28px;}
  .footer__grid{grid-template-columns:1fr;text-align:center;}
}
      `}</style>
      
      <header className="hero">
        <div className="hero__bg" aria-hidden="true"></div>
        <div className="container">
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
                  <a className="is-active" href="/services">Services</a>
                  <ul className="nav__dropdown">
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

          <div className="hero__grid">
            <div className="hero__copy">
              <h1 className="hero__title">Data Center Services</h1>
              <p className="hero__text">Scale, Security And Performance for a smarter tomorrow.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="content-section">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h2>Scale, Security And Performance</h2>
            <p>Global markets are facing widespread disruption. Uncertainties in the business landscape call for breakthroughs in hosting services. Business leaders today need next-generation data centers that are fully hosted, hyperscalable and above all, secured. Colocation is emerging as a viable alternative to CAPEX-intensive, in-house data centers.</p>
            <p>Organizations stand to benefit from a partner who has the financial stability to invest in innovation and capacity to support their business growth. We can deliver on the promise of reduced TCO and increased regulatory compliance, while giving businesses the ability to scale-up on demand.</p>
          </div>
          <div>
             <div style={{width:'100%', height:'350px', background:'#eee', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
               <img src="/images/new-banner/data-centre.jpg" alt="Data Center Performance" style={{width:'100%', height:'100%', objectFit:'cover'}} />
             </div>
          </div>
        </div>
      </section>

      <div className="container" style={{padding: '40px 40px'}}>
        <div style={{width:'100%', height:'450px', background:'#ddd', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', backgroundImage:'url(/images/data-centre-banner.jpg)', backgroundSize:'cover', backgroundPosition:'center'}}>
        </div>
      </div>

      <section className="content-section" style={{background: 'var(--surface-2)'}}>
        <div className="container content-grid">
          <div>
             <div style={{width:'100%', height:'350px', background:'#eee', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
               <img src="/images/new-banner/data-centre2.jpg" alt="Data Center Partnership" style={{width:'100%', height:'100%', objectFit:'cover'}} />
             </div>
          </div>
          <div>
            <p className="eyebrow">PARTNERSHIP</p>
            <h2>We’re invested in your growth as much as our own</h2>
            <p>Financial stability, strong OEM partnerships and many skilled engineers available round-the-clock mean our data centers can meet your most complex requirements. With continually growing capacity and strategic local investments, we are ready to operate at a pace your business requires.</p>
            <p>As a global ITSCI company, our customers benefit from our nearly two decades of experience around colocation, data center migration and security. Through our robust data centers, high-density colocation solutions, fault-free migration expertise and more, we help you bounce back from disruption to certainty.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer__grid">
          <div className="footer__col">
            <a className="logo" href="/">
              <span className="logo__name">I T S C I</span>
              <span className="logo__tag">INNOVATE · TRANSFORM · SECURE</span>
            </a>
            <p className="footer__about">ITSCI is a trusted technology partner helping businesses and organizations build secure, scalable and future-ready digital solutions.</p>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/brands">Our Brands</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
