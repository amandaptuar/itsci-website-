import React, { useEffect } from "react";
import serviceCtaBg from "../assets/service-cta-bg.png";
import servicesHero from "../assets/services-hero.png";

export default function Services() {
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
    <div className="services-page">
      <style>{`

/* =========================================================
   ITSCI — Service detail page (AI Development)
   Tokens → Base → Components → Sections → Responsive
   ========================================================= */

:root{
  --navy-900:#040A1C;
  --navy-800:#061029;
  --navy-700:#0A1636;
  --navy-600:#0B1730;
  --blue-500:#2563EB;
  --blue-400:#3B82F6;
  --blue-300:#60A5FA;
  --ink-900:#0B1B33;
  --ink-600:#4B5A6E;
  --line:#E3E9F2;
  --surface:#FFFFFF;
  --surface-2:#F4F8FD;
  --surface-3:#F8FAFD;
  --radius:10px;
  --radius-lg:14px;
  --shadow-card:0 2px 14px rgba(11,27,51,.05);
  --shadow-nav:0 10px 30px rgba(2,8,23,.28);
  --container:1440px;
  --ff-display:"Poppins","Segoe UI",system-ui,sans-serif;
  --ff-body:"Inter","Segoe UI",system-ui,sans-serif;
}

*,*::before,*::after{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;font-family:var(--ff-body);font-size:17px;line-height:1.7;
  color:var(--ink-600);background:var(--surface-2);
  -webkit-font-smoothing:antialiased;
}
img{max-width:100%;display:block;}
a{text-decoration:none;color:inherit;}
ul{margin:0;padding:0;list-style:none;}
h1,h2,h3,h4{font-family:var(--ff-display);color:var(--ink-900);margin:0;line-height:1.25;}
p{margin:0;}
:focus-visible{outline:2px solid var(--blue-400);outline-offset:3px;border-radius:4px;}

.container{width:100%;max-width:var(--container);margin:0 auto;padding:0 40px;}
.accent{color:var(--blue-400);}
.ic{width:16px;height:16px;flex:none;}

/* ---------- Placeholders (swap for real assets) ---------- */
.placeholder{
  position:relative;width:100%;height:100%;
  display:flex;align-items:center;justify-content:center;
  border:1px dashed rgba(96,165,250,.55);border-radius:var(--radius-lg);
  background:
    repeating-linear-gradient(45deg,rgba(96,165,250,.07) 0 12px,transparent 12px 24px),
    rgba(10,22,54,.35);
}
.ph-label{
  font-family:var(--ff-display);font-size:12px;letter-spacing:.04em;
  color:rgba(147,197,253,.9);text-align:center;padding:8px 12px;
}
.placeholder--light{
  border-color:rgba(37,99,235,.35);border-radius:var(--radius);
  background:
    repeating-linear-gradient(45deg,rgba(37,99,235,.05) 0 10px,transparent 10px 20px),
    #F3F7FF;
}
.placeholder--light .ph-label{color:#5B7BB5;font-size:11px;}

/* ---------- Buttons & links ---------- */
.btn{
  display:inline-flex;align-items:center;gap:9px;
  font-family:var(--ff-display);font-size:16px;font-weight:500;
  padding:14px 26px;border-radius:8px;
  transition:transform .18s ease,background-color .18s ease;
}
.btn .arrow{width:16px;height:16px;}
.btn--primary{background:var(--blue-500);color:#fff;box-shadow:0 6px 18px rgba(37,99,235,.28);}
.btn--primary:hover{background:#1D4ED8;transform:translateY(-2px);}
.btn--ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.55);}
.btn--ghost:hover{background:rgba(255,255,255,.1);}

.link{
  display:inline-flex;align-items:center;gap:7px;
  font-family:var(--ff-display);font-size:14px;font-weight:500;color:var(--blue-400);
}
.link .arrow{width:15px;height:15px;transition:transform .18s ease;}
.link:hover .arrow{transform:translateX(4px);}

/* ---------- Section headings ---------- */
.eyebrow{
  font-family:var(--ff-display);font-size:14.5px;font-weight:600;
  letter-spacing:.14em;color:var(--blue-400);text-align:center;margin-bottom:14px;
}
.section__title{font-size:38px;font-weight:600;text-align:center;}

/* =========================================================
   PAGE HERO
   ========================================================= */
.page-hero{
  position:relative;overflow:hidden;
  background:radial-gradient(120% 100% at 78% 45%,#0D2352 0%,#071231 48%,var(--navy-800) 100%);
  padding-bottom:36px;
}
/* Swap for the real artwork:
   .page-hero__bg{ background-image:url('assets/ai-hero-bg.jpg'); background-size:cover; background-position:center; }
   …then delete the .ph-label span inside it. */
.page-hero__bg{
  position:absolute;inset:0;
  background-image:url('${servicesHero}');
  background-size:cover;
  background-position:center;
  pointer-events:none;
}
.page-hero > .container{position:relative;z-index:2;}

/* ---------- Nav ---------- */
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
.nav__links a{
  display:inline-flex;align-items:center;gap:5px;
  font-family:var(--ff-display);font-size:16px;font-weight:500;color:#2C3A4F;
  transition:color .18s ease;
}
.nav__links a:hover,.nav__links a.is-active{color:var(--blue-500);}
.caret{width:13px;height:13px;}
.nav__cta{padding:11px 22px;border-radius:8px;}
.nav__toggle{
  display:none;flex-direction:column;justify-content:center;gap:5px;
  width:42px;height:38px;padding:0 9px;background:transparent;
  border:1px solid var(--line);border-radius:8px;cursor:pointer;
}
.nav__toggle span{display:block;height:2px;width:100%;background:var(--ink-900);border-radius:2px;transition:transform .2s ease,opacity .2s ease;}

/* ---------- Hero content ---------- */
.page-hero__grid{display:grid;grid-template-columns:1fr;gap:40px;align-items:center;padding:60px 0 90px;}
.crumbs{display:flex;align-items:center;gap:9px;font-size:13px;color:rgba(203,217,240,.8);margin-bottom:14px;flex-wrap:wrap;}
.crumbs a{color:#fff;}
.crumbs a:hover{color:var(--blue-300);}
.crumbs svg{width:13px;height:13px;opacity:.7;}
.page-hero__title{font-size:54px;font-weight:600;color:#fff;letter-spacing:-.5px;}
.page-hero__lead{font-family:var(--ff-display);font-size:21.5px;font-weight:500;color:#fff;margin-top:14px;}
.page-hero__rule{width:48px;height:2px;background:rgba(255,255,255,.55);margin:18px 0 18px;border:0;}
.page-hero__text{color:rgba(206,220,242,.85);max-width:440px;font-size:17px;line-height:1.7;}
.page-hero__actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px;}
.page-hero__visual img{width:100%;height:auto;border-radius:18px;box-shadow:0 20px 40px rgba(0,0,0,.25);object-fit:cover;}

/* =========================================================
   WHAT WE DO
   ========================================================= */
.offer{padding:60px 0 56px;}
.offer__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:38px;}
.offer__card{
  display:flex;gap:18px;
  background:var(--surface-3);
  border:1px solid var(--line);
  border-radius:var(--radius);
  padding:26px 24px;
  box-shadow:var(--shadow-card);
  transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease;
}
.offer__card:hover{transform:translateY(-4px);border-color:rgba(37,99,235,.35);box-shadow:0 14px 30px rgba(11,27,51,.09);}
.offer__icon{flex:none;color:var(--blue-400);}
.offer__icon svg{width:42px;height:42px;}
.offer__card h3{font-size:19.5px;font-weight:600;}
.offer__card p{font-size:15.5px;line-height:1.7;margin-top:10px;}
.offer__card .link{margin-top:16px;}

/* =========================================================
   WHY CHOOSE
   ========================================================= */
.why{
  background:
    radial-gradient(80% 130% at 50% 0%,#11224C 0%,transparent 62%),
    var(--navy-700);
  padding:46px 0 44px;
}
.why .section__title{color:#fff;}
.why__grid{display:grid;grid-template-columns:repeat(5,1fr);margin-top:34px;}
.why__item{display:flex;gap:14px;padding:0 20px;border-left:1px solid rgba(140,175,235,.2);}
.why__item:first-child{border-left:0;padding-left:0;}
.why__icon{flex:none;color:var(--blue-400);}
.why__icon svg{width:34px;height:34px;}
.why__item h3{font-size:17px;font-weight:600;color:#fff;}
.why__item p{font-size:15px;line-height:1.65;color:rgba(197,212,236,.8);margin-top:8px;}

/* =========================================================
   PROCESS
   ========================================================= */
.process{padding:56px 0 54px;}
.process__grid{
  display:grid;grid-template-columns:repeat(5,1fr);
  margin-top:38px;position:relative;
}
.process__step{text-align:center;padding:0 12px;position:relative;}
.process__bubble{
  width:62px;height:62px;border-radius:50%;
  border:1px solid #CBDCF4;background:#fff;
  display:flex;align-items:center;justify-content:center;
  margin:0 auto;color:var(--blue-400);
  box-shadow:0 4px 14px rgba(37,99,235,.10);
  position:relative;z-index:2;
}
.process__bubble svg{width:28px;height:28px;}
/* dotted connector */
.process__step::after{
  content:"";position:absolute;top:31px;left:calc(50% + 42px);right:calc(-50% + 42px);
  border-top:2px dotted #A9C6EA;z-index:1;
}
.process__step:last-child::after{display:none;}
.process__num{
  font-family:var(--ff-display);font-size:14px;font-weight:600;
  color:var(--blue-400);margin-top:18px;
}
.process__step h3{font-size:19.5px;font-weight:600;margin-top:4px;}
.process__step p{font-size:15px;line-height:1.7;margin-top:10px;}

/* =========================================================
   TECHNOLOGIES
   ========================================================= */
.tech{padding:6px 0 52px;}
.tech__grid{
  display:grid;grid-template-columns:repeat(7,1fr);gap:14px;margin-top:34px;
}
.tech__item{
  background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);
  height:62px;padding:10px;box-shadow:var(--shadow-card);
  transition:transform .2s ease,border-color .2s ease;
}
.tech__item:hover{transform:translateY(-3px);border-color:rgba(37,99,235,.35);}

/* =========================================================
   CTA BAND
   ========================================================= */
.cta{padding:0 0 58px;}
.cta__band{
  position:relative;overflow:hidden;border-radius:var(--radius-lg);
  background:var(--navy-600);padding:40px;min-height:190px;
  display:flex;align-items:center;
}
/* Swap for the real artwork:
   .cta__bg{ background-image:url('assets/ai-cta-bg.jpg'); background-size:cover; background-position:center; } */
.cta__bg{
  position:absolute;inset:0;
  background-image:url('${serviceCtaBg}');
  background-size:cover;
  background-position:center;
  pointer-events:none;
}
.cta__bg::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(90deg, var(--navy-600) 25%, rgba(11,23,48,0.7) 60%, rgba(11,23,48,0.2) 100%);
}
.cta__inner{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:32px;width:100%;}
.cta__eyebrow{
  font-family:var(--ff-display);font-size:13px;font-weight:600;
  letter-spacing:.14em;color:var(--blue-400);margin-bottom:12px;
}
.cta__title{font-size:32px;font-weight:600;color:#fff;}
.cta__text{color:rgba(206,220,242,.85);margin-top:12px;max-width:460px;font-size:17px;line-height:1.7;}

/* =========================================================
   FOOTER
   ========================================================= */
.footer{background:var(--navy-700);color:rgba(203,217,240,.78);font-size:15.5px;}
.footer__grid{
  display:grid;grid-template-columns:1.5fr 1fr 1fr 1.35fr;
  gap:34px;padding-top:50px;padding-bottom:42px;
}
.footer .logo__name{color:#fff;}
.footer .logo__tag{color:rgba(203,217,240,.6);border-top-color:rgba(255,255,255,.22);}
.footer__about{margin-top:16px;font-size:14px;line-height:1.7;max-width:270px;}
.footer__social{display:flex;gap:16px;margin-top:20px;}
.footer__social a{color:rgba(203,217,240,.75);transition:color .18s ease;}
.footer__social a:hover{color:var(--blue-300);}
.footer__social .ic{width:18px;height:18px;}
.footer__col h4{font-size:17.5px;font-weight:600;color:#fff;margin-bottom:16px;}
.footer__col ul li{margin-bottom:10px;}
.footer__col ul a{transition:color .18s ease;}
.footer__col ul a:hover{color:var(--blue-300);}
.footer__contact li{display:flex;gap:10px;align-items:flex-start;line-height:1.55;}
.footer__contact .ic{color:rgba(147,197,253,.85);margin-top:2px;}
.footer__bar{border-top:1px solid rgba(255,255,255,.08);}
.footer__bar-inner{
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding-top:16px;padding-bottom:16px;font-size:13.5px;flex-wrap:wrap;
}
.footer__bar-inner ul{display:flex;}
.footer__bar-inner ul li + li::before{content:"|";margin:0 14px;opacity:.35;}
.footer__bar-inner a:hover{color:var(--blue-300);}

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media (max-width:1200px){
  .nav__links{gap:20px;}
  .nav__menu{gap:20px;}
  .tech__grid{grid-template-columns:repeat(4,1fr);}
}

@media (max-width:1080px){
  .offer__grid{grid-template-columns:repeat(2,1fr);}
  .why__grid{grid-template-columns:repeat(3,1fr);row-gap:28px;}
  .why__item:nth-child(4){border-left:0;padding-left:0;}
  .process__grid{grid-template-columns:repeat(3,1fr);row-gap:34px;}
  .process__step:nth-child(3)::after{display:none;}
  .footer__grid{grid-template-columns:1fr 1fr 1fr;row-gap:38px;}
}

@media (max-width:960px){
  .nav__toggle{display:flex;}
  .nav{flex-wrap:wrap;padding:14px 18px;}
  .nav__menu{
    display:none;width:100%;flex-direction:column;align-items:stretch;gap:6px;
    padding-top:14px;margin-top:12px;border-top:1px solid var(--line);
  }
  .nav.is-open .nav__menu{display:flex;}
  .nav__links{flex-direction:column;align-items:stretch;gap:0;}
  .nav__links li{border-bottom:1px solid #F0F3F8;}
  .nav__links a{padding:12px 4px;justify-content:space-between;}
  .nav__cta{justify-content:center;margin-top:14px;}
  .nav.is-open .nav__toggle span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .nav.is-open .nav__toggle span:nth-child(2){opacity:0;}
  .nav.is-open .nav__toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

  .page-hero__grid{grid-template-columns:1fr;gap:32px;padding-top:28px;text-align:center;}
  .page-hero__title{font-size:37px;}
  .page-hero__text{max-width:none;text-align:center;}
  .page-hero__visual{display:none;}
  .page-hero .btn{margin-inline:auto;}
  .page-hero__actions{justify-content:center;}
  .crumbs{justify-content:center;}
  .section__title{font-size:25px;text-align:center;}
  .eyebrow{text-align:center;}
  .cta__inner{flex-direction:column;align-items:center;text-align:center;}
  .cta__band{padding:34px 26px;}
  .cta__text{text-align:center;}
  .footer__grid{grid-template-columns:1fr 1fr;row-gap:36px;}
}

@media (max-width:760px){
  .topbar__inner{justify-content:center;text-align:center;padding-top:10px;padding-bottom:10px;}
  .topbar__group{gap:8px 20px;justify-content:center;}
  .offer__grid{grid-template-columns:repeat(2,1fr);gap:12px;max-width:none;}
  .why__grid{grid-template-columns:repeat(2,1fr);gap:12px;}
  .why__item:nth-child(odd){border-left:0;padding-left:0;}
  .why__item:nth-child(even){border-left:1px solid rgba(140,175,235,.2);}
  .process__grid{grid-template-columns:repeat(2,1fr);gap:12px;}
  .process__step::after{display:none;}
  .tech__grid{grid-template-columns:repeat(4,1fr);gap:10px;}
}

@media (max-width:560px){
  body{font-size:14px;}
  .container{padding:0 14px;}
  .page-hero__title{font-size:26px;line-height:1.25;}
  .page-hero__lead{font-size:15px;line-height:1.5;}
  .page-hero__actions{flex-direction:column;width:100%;gap:10px;}
  .page-hero__actions .btn{flex:1;justify-content:center;width:100%;padding:13px 20px;}

  /* 2 divs per row on mobile for small cards */
  .offer__grid{grid-template-columns:repeat(2,1fr);gap:10px;}
  .offer__card{padding:16px 12px;text-align:center;align-items:center;border-radius:12px;}
  .offer__card .offer__icon{margin-inline:auto;width:38px;height:38px;}
  .offer__card h3{font-size:14.5px;}
  .offer__card p{font-size:12px;line-height:1.45;}

  .why__grid{grid-template-columns:repeat(2,1fr);gap:10px;row-gap:16px;}
  .why__item{border-left:0 !important;padding:12px 10px;text-align:center;}
  .why__item h4{font-size:14.5px;}
  .why__item p{font-size:12px;line-height:1.4;}

  .process__grid{grid-template-columns:repeat(2,1fr);gap:10px;row-gap:16px;}
  .process__step{text-align:center;padding:12px 10px;}
  .process__num{margin-inline:auto;width:36px;height:36px;font-size:14px;}
  .process__step h4{font-size:14px;}
  .process__step p{font-size:12px;line-height:1.4;}

  .tech__grid{grid-template-columns:repeat(2,1fr);gap:10px;}
  .tech__card{padding:12px 10px;text-align:center;border-radius:10px;}

  .section__title{font-size:22px;text-align:center;}
  .cta__title{font-size:19px;}
  .cta__band{padding:24px 16px;border-radius:16px;}
  .cta__eyebrow{justify-content:center;text-align:center;}

  .footer{padding-top:10px;}
  .footer__grid{grid-template-columns:1fr;row-gap:32px;padding-top:40px;padding-bottom:36px;text-align:center;}
  .footer .logo{align-items:center;margin-bottom:6px;}
  .footer__about{margin-top:18px;margin-bottom:18px;text-align:center;margin-inline:auto;max-width:320px;line-height:1.6;}
  .footer__social{justify-content:center;margin-top:18px;}
  .footer__col{display:flex;flex-direction:column;align-items:center;}
  .footer__col h4{margin-bottom:14px;margin-top:4px;font-size:18px;}
  .footer__col ul{display:flex;flex-direction:column;align-items:center;gap:8px;}
  .footer__contact li{justify-content:center;text-align:center;margin-bottom:10px;}
  .footer__bar-inner{flex-direction:column;text-align:center;gap:10px;padding-top:18px;padding-bottom:18px;}
  .eyebrow{text-align:center;}
}

/* ---------- Large desktop ---------- */
@media (min-width:1440px){
  .container{max-width:1600px;padding:0 60px;}
  .page-hero__title{font-size:60px;}
  .page-hero__grid{gap:60px;padding:80px 0 140px;}
  .section__title{font-size:42px;}
  .offer{padding:72px 0 68px;}
  .offer__grid{gap:28px;margin-top:44px;}
  .why{padding:58px 0 54px;}
  .why__grid{margin-top:40px;}
  .process{padding:68px 0 66px;}
  .process__grid{margin-top:44px;}
  .tech__grid{gap:18px;margin-top:40px;}
  .footer__grid{gap:44px;padding-top:60px;padding-bottom:50px;}
}

@media (prefers-reduced-motion:reduce){
  *{animation:none !important;transition:none !important;scroll-behavior:auto !important;}
}

      `}</style>
      
<header className="page-hero">
  
  <div className="page-hero__bg" aria-hidden="true">
    <span className="ph-label">Hero Background — 1920 × 700</span>
  </div>

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
          <li><a className="is-active" href="/services">Services</a></li>
          <li><a href="/brands">Brands</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/contact" className="btn btn--primary nav__cta">Contact Us</a>
      </div>
    </nav>

    <div className="page-hero__grid" style={{gridTemplateColumns: '1fr', maxWidth: '720px'}}>
      <div>
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <a href="#">Services</a>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>AI Development</span>
        </nav>

        <h1 className="page-hero__title"><span className="accent">AI</span> Development</h1>
        <p className="page-hero__lead">Intelligent Solutions. Real-World Impact.</p>
        <hr className="page-hero__rule" />
        <p className="page-hero__text">We design, build and deploy custom AI solutions that help businesses automate processes, gain actionable insights, and create exceptional customer experiences.</p>

        <div className="page-hero__actions">
          <a href="#contact" className="btn btn--primary">Talk to Our Experts <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <a href="#" className="btn btn--ghost">View All Services</a>
        </div>
      </div>
    </div>
  </div>
</header>


<section className="offer">
  <div className="container">
    <p className="eyebrow">WHAT WE DO</p>
    <h2 className="section__title">End-to-End AI Development Services</h2>

    <div className="offer__grid">
      <article className="offer__card">
        <span className="offer__icon">
          <svg viewBox="0 0 24 24"><path d="M9.4 4.6a2.4 2.4 0 0 1 4.6.9v11.9a2.4 2.4 0 0 1-4.7.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M9.6 5.2a2.6 2.6 0 0 0-3 3.4 2.6 2.6 0 0 0 .3 4.6 2.6 2.6 0 0 0 2.5 4.4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M14 8h3.4M14 12h4.6M14 16h3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="18.6" cy="8" r="1.4" fill="currentColor"/><circle cx="20" cy="12" r="1.4" fill="currentColor"/><circle cx="18" cy="16" r="1.4" fill="currentColor"/></svg>
        </span>
        <div>
          <h3>AI Strategy &amp; Consulting</h3>
          <p>We help you identify AI opportunities, define use cases, and build a roadmap aligned with your business goals.</p>
          <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
      </article>

      <article className="offer__card">
        <span className="offer__icon">
          <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6.4" rx="7" ry="2.9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M5 6.4v5.2c0 1.6 3.1 2.9 7 2.9s7-1.3 7-2.9V6.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M5 11.6v5.2c0 1.6 3.1 2.9 7 2.9s7-1.3 7-2.9v-5.2" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <div>
          <h3>Machine Learning Development</h3>
          <p>Custom ML models that learn, adapt, and deliver accurate predictions to drive smarter decisions.</p>
          <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
      </article>

      <article className="offer__card">
        <span className="offer__icon">
          <svg viewBox="0 0 24 24"><path d="M3.4 9.4A4.4 4.4 0 0 1 7.8 5h5.6a4.4 4.4 0 0 1 0 8.8H8.6L4.6 17v-3.5a4.4 4.4 0 0 1-1.2-3.1Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M16.2 10.6a4 4 0 0 1 4.4 4 3.9 3.9 0 0 1-1.1 2.7v3l-3.6-2.7h-3.3a4 4 0 0 1-3.1-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </span>
        <div>
          <h3>Natural Language Processing</h3>
          <p>NLP solutions to understand, interpret and generate human language for intelligent automation.</p>
          <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
      </article>

      <article className="offer__card">
        <span className="offer__icon">
          <svg viewBox="0 0 24 24"><path d="M2.6 12S6 6.4 12 6.4 21.4 12 21.4 12 18 17.6 12 17.6 2.6 12 2.6 12Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>
        </span>
        <div>
          <h3>Computer Vision</h3>
          <p>Image and video analysis solutions for object detection, classification, OCR and more.</p>
          <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
      </article>

      <article className="offer__card">
        <span className="offer__icon">
          <svg viewBox="0 0 24 24"><rect x="4.4" y="7.6" width="15.2" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 4v3.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="3.2" r="1.2" fill="currentColor"/><circle cx="9.2" cy="12.2" r="1.3" fill="currentColor"/><circle cx="14.8" cy="12.2" r="1.3" fill="currentColor"/><path d="M9.6 15.4c.7.7 1.5 1 2.4 1s1.7-.3 2.4-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M2.6 11.4v3.4M21.4 11.4v3.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
        <div>
          <h3>AI-Powered Automation</h3>
          <p>Intelligent automation to streamline workflows, reduce manual effort and improve operational efficiency.</p>
          <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
      </article>

      <article className="offer__card">
        <span className="offer__icon">
          <svg viewBox="0 0 24 24"><path d="M7.4 16.6a3.9 3.9 0 0 1-.5-7.77A5.2 5.2 0 0 1 17 7.6a3.6 3.6 0 0 1 .3 9h-9.9Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="12.6" r="1.5" fill="currentColor"/><path d="M12 14.1v2.5M10.5 11.7 8.7 10.6M13.5 11.7l1.8-1.1" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="8.2" cy="10.2" r="1.1" fill="currentColor"/><circle cx="15.8" cy="10.2" r="1.1" fill="currentColor"/><circle cx="12" cy="17.2" r="1.1" fill="currentColor"/></svg>
        </span>
        <div>
          <h3>Generative AI Solutions</h3>
          <p>Leverage the power of GenAI to build content, code, chatbots and creative applications.</p>
          <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
      </article>
    </div>
  </div>
</section>


<section className="why">
  <div className="container">
    <p className="eyebrow">WHY CHOOSE ITSCI</p>
    <h2 className="section__title">AI Solutions That Deliver Results</h2>

    <div className="why__grid">
      <article className="why__item">
        <span className="why__icon">
          <svg viewBox="0 0 24 24"><path d="M12 3 5.5 5.6v5c0 3.9 2.7 7.4 6.5 8.6 3.8-1.2 6.5-4.7 6.5-8.6v-5L12 3Z" fill="currentColor" opacity=".16"/><path d="M12 3 5.5 5.6v5c0 3.9 2.7 7.4 6.5 8.6 3.8-1.2 6.5-4.7 6.5-8.6v-5L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m12 8.4 1 2 2.2.3-1.6 1.55.38 2.2L12 13.4l-1.98 1.05.38-2.2L8.8 10.7l2.2-.3 1-2Z" fill="currentColor"/></svg>
        </span>
        <div><h3>Business-Focused</h3><p>Solutions tailored to your goals and industry.</p></div>
      </article>

      <article className="why__item">
        <span className="why__icon">
          <svg viewBox="0 0 24 24"><rect x="6.6" y="6.6" width="10.8" height="10.8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="10.2" y="10.2" width="3.6" height="3.6" rx="1" fill="currentColor"/><path d="M9.4 3.4v3.2M14.6 3.4v3.2M9.4 17.4v3.2M14.6 17.4v3.2M3.4 9.4h3.2M3.4 14.6h3.2M17.4 9.4h3.2M17.4 14.6h3.2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
        </span>
        <div><h3>Advanced AI Models</h3><p>Using the latest research and proven frameworks.</p></div>
      </article>

      <article className="why__item">
        <span className="why__icon">
          <svg viewBox="0 0 24 24"><path d="M7.2 17.6a4.1 4.1 0 0 1-.5-8.17A5.5 5.5 0 0 1 17.2 8a3.8 3.8 0 0 1 .3 9.6H7.2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </span>
        <div><h3>Scalable &amp; Secure</h3><p>Built for performance, security and scalability.</p></div>
      </article>

      <article className="why__item">
        <span className="why__icon">
          <svg viewBox="0 0 24 24"><circle cx="9" cy="8.4" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="16.6" cy="9.6" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M3.4 18.4c.6-3.1 2.9-5 5.6-5s5 1.9 5.6 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 14c2.1.2 3.8 1.7 4.3 4.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
        <div><h3>Expert Team</h3><p>AI/ML experts with deep industry experience.</p></div>
      </article>

      <article className="why__item">
        <span className="why__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><text x="12" y="11" text-anchor="middle" font-size="6.5" font-family="Poppins, sans-serif" font-weight="600" fill="currentColor">24</text><text x="12" y="18" text-anchor="middle" font-size="6.5" font-family="Poppins, sans-serif" font-weight="600" fill="currentColor">24</text></svg>
        </span>
        <div><h3>Support &amp; Maintenance</h3><p>Ongoing support to keep your AI solutions evolving.</p></div>
      </article>
    </div>
  </div>
</section>


<section className="process">
  <div className="container">
    <p className="eyebrow">OUR DEVELOPMENT PROCESS</p>
    <h2 className="section__title">From Idea to Intelligent Solution</h2>

    <div className="process__grid">
      <article className="process__step">
        <span className="process__bubble">
          <svg viewBox="0 0 24 24"><path d="M9.4 16.2a6 6 0 1 1 5.2 0v1.8H9.4v-1.8Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 20h4M10.6 21.6h2.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
        <p className="process__num">01</p>
        <h3>Discover</h3>
        <p>We understand your business challenges and define the right AI opportunities.</p>
      </article>

      <article className="process__step">
        <span className="process__bubble">
          <svg viewBox="0 0 24 24"><path d="M6 3.6h8.6L19 8v12.4H6V3.6Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M14.2 3.8V8H19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8.8 11.4h7.4M8.8 14.2h7.4M8.8 17h4.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
        <p className="process__num">02</p>
        <h3>Design</h3>
        <p>We design the solution architecture, data strategy and model approach.</p>
      </article>

      <article className="process__step">
        <span className="process__bubble">
          <svg viewBox="0 0 24 24"><rect x="3.4" y="5" width="17.2" height="14" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m10 10.4-2.4 2.4L10 15.2M14 10.4l2.4 2.4-2.4 2.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <p className="process__num">03</p>
        <h3>Develop</h3>
        <p>Our team builds, trains and tests AI models with high accuracy and performance.</p>
      </article>

      <article className="process__step">
        <span className="process__bubble">
          <svg viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M10 18.6h4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="m10.2 10.6 1.6 1.6 3-3.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <p className="process__num">04</p>
        <h3>Deploy</h3>
        <p>We deploy AI solutions seamlessly into your existing systems and workflows.</p>
      </article>

      <article className="process__step">
        <span className="process__bubble">
          <svg viewBox="0 0 24 24"><path d="M4 19.4h16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5.4 15.6 10 11l3 2.6 5.4-5.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.8 7.4h4v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <p className="process__num">05</p>
        <h3>Optimize</h3>
        <p>We continuously monitor, learn and optimize to deliver sustained value.</p>
      </article>
    </div>
  </div>
</section>


<section className="tech">
  <style>{`
    .tech__grid{
      display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:40px;
    }
    .tech__item{
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:var(--surface);border:1px solid var(--line);
      border-radius:var(--radius-lg);padding:26px 14px;width:150px;
      box-shadow:var(--shadow-card);
      transition:transform 0.2s ease, box-shadow 0.2s ease;
      height:auto;
    }
    .tech__item:hover{
      transform:translateY(-4px);
      box-shadow:0 12px 30px rgba(11,27,51,.08);
      border-color:rgba(37,99,235,.2);
    }
    .tech__logo{width:56px;height:56px;object-fit:contain;transition:transform 0.2s ease;}
    .tech__item:hover .tech__logo{transform:scale(1.08);}
    .tech__name{
      display:block;text-align:center;font-size:13.5px;font-weight:600;
      color:var(--ink-900);margin-top:16px;font-family:var(--ff-display);
    }
    .tech__card{display:flex;flex-direction:column;align-items:center;}
  `}</style>
  <div className="container">
    <p className="eyebrow">TECHNOLOGIES WE USE</p>
    <h2 className="section__title">Powering AI Solutions with Modern Technologies</h2>

    <div className="tech__grid">
      <div className="tech__item">
        <div className="tech__card">
          <svg className="tech__logo" fill="#3776AB" role="img" viewBox="0 0 24 24" ><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>
          <span className="tech__name">Python</span>
        </div>
      </div>
      <div className="tech__item">
        <div className="tech__card">
          <svg className="tech__logo" fill="#FF6F00" role="img" viewBox="0 0 24 24" ><title>TensorFlow</title><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"/></svg>
          <span className="tech__name">TensorFlow</span>
        </div>
      </div>
      <div className="tech__item">
        <div className="tech__card">
          <svg className="tech__logo" fill="#EE4C2C" role="img" viewBox="0 0 24 24" ><title>PyTorch</title><path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z"/></svg>
          <span className="tech__name">PyTorch</span>
        </div>
      </div>
      <div className="tech__item">
        <div className="tech__card">
          <svg className="tech__logo" fill="#000000" role="img" viewBox="0 0 24 24"><title>OpenAI</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5962 8.3971l2.0201-1.1686a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.908 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1686a.071.071 0 0 1-.038-.052V6.0602a4.504 4.504 0 0 1 7.3708-3.4537l-.142.0805-4.7736 2.7582a.7948.7948 0 0 0-.3927.6813l.0048 6.7365zm-1.0768-4.664a1.859 1.859 0 1 0 0-3.7181 1.859 1.859 0 0 0 0 3.7181zm6.9859-1.916a1.859 1.859 0 1 0 0-3.7181 1.859 1.859 0 0 0 0 3.7181zm6.9858 3.832a1.859 1.859 0 1 0 0-3.7182 1.859 1.859 0 0 0 0 3.7182zm-3.4929 6.046a1.859 1.859 0 1 0 0-3.7182 1.859 1.859 0 0 0 0 3.7182zm-6.9859 1.916a1.859 1.859 0 1 0 0-3.7181 1.859 1.859 0 0 0 0 3.7181zm-6.9858-3.832a1.859 1.859 0 1 0 0-3.7182 1.859 1.859 0 0 0 0 3.7182z"/></svg>
          <span className="tech__name">OpenAI</span>
        </div>
      </div>
      <div className="tech__item">
        <div className="tech__card">
          <svg className="tech__logo" fill="#FFD21E" role="img" viewBox="0 0 24 24" ><title>Hugging Face</title><path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"/></svg>
          <span className="tech__name">Hugging Face</span>
        </div>
      </div>
      <div className="tech__item">
        <div className="tech__card">
          <svg className="tech__logo" fill="#326CE5" role="img" viewBox="0 0 24 24" ><title>Kubernetes</title><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z"/></svg>
          <span className="tech__name">Kubernetes</span>
        </div>
      </div>
      <div className="tech__item">
        <div className="tech__card">
          <img src="/aws-logo.svg" alt="AWS" className="tech__logo" style={{width: '68px', height: '46px'}} />
          <span className="tech__name">AWS</span>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="cta">
  <div className="container">
    <div className="cta__band">
      
      <div className="cta__bg" aria-hidden="true">
      </div>

      <div className="cta__inner">
        <div>
          <p className="cta__eyebrow">LET'S BUILD INTELLIGENCE TOGETHER</p>
          <h2 className="cta__title">Ready to Build Your AI Solution?</h2>
          <p className="cta__text">Partner with ITSCI to harness the power of AI and transform your ideas into impactful solutions.</p>
        </div>
        <a href="#contact" className="btn btn--primary">Talk to Our Experts <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
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



    </div>
  );
}
