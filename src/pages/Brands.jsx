import React, { useEffect } from "react";
import brandHero from "../assets/brand-hero.png";
import brandCta from "../assets/brand-cta.png";
import vigilLogo from "../assets/vigil-logo.png";
import limitlessLogo from "../assets/limitless-logo.png";
import sentinelLogo from "../assets/sentinel-logo.png";

export default function Brands() {
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
    <div className="brands-page">
      <style>{`

/* =========================================================
   ITSCI — Brands page
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
  --surface-2:#F6F9FE;
  --radius:10px;
  --radius-lg:14px;
  --shadow-card:0 2px 16px rgba(11,27,51,.07);
  --shadow-nav:0 10px 30px rgba(2,8,23,.28);
  --container:1440px;
  --ff-display:"Poppins","Segoe UI",system-ui,sans-serif;
  --ff-body:"Inter","Segoe UI",system-ui,sans-serif;
}

*,*::before,*::after{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  font-family:var(--ff-body);
  font-size:17px;line-height:1.7;
  color:var(--ink-600);
  background:var(--surface-2);
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
  border:1px dashed rgba(96,165,250,.55);
  border-radius:var(--radius-lg);
  background:
    repeating-linear-gradient(45deg,rgba(96,165,250,.07) 0 12px,transparent 12px 24px),
    rgba(10,22,54,.35);
}
.ph-label{
  font-family:var(--ff-display);font-size:12px;letter-spacing:.04em;
  color:rgba(147,197,253,.9);text-align:center;padding:8px 12px;
}
.placeholder--logo{
  height:58px;
  border-color:rgba(37,99,235,.4);
  background:
    repeating-linear-gradient(45deg,rgba(37,99,235,.06) 0 10px,transparent 10px 20px),
    #F3F7FF;
}
.placeholder--logo .ph-label{color:#5B7BB5;}

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

.link{
  display:inline-flex;align-items:center;gap:7px;
  font-family:var(--ff-display);font-size:15.5px;font-weight:500;color:var(--blue-400);
}
.link .arrow{width:15px;height:15px;transition:transform .18s ease;}
.link:hover .arrow{transform:translateX(4px);}

/* ---------- Section headings ---------- */
.eyebrow{
  font-family:var(--ff-display);font-size:14.5px;font-weight:600;
  letter-spacing:.14em;color:var(--blue-400);text-align:center;margin-bottom:14px;
}
.section__title{font-size:38px;font-weight:600;text-align:center;}
.section__sub{text-align:center;margin:14px auto 0;max-width:700px;font-size:17px;}

/* =========================================================
   PAGE HERO
   ========================================================= */
.page-hero{
  position:relative;overflow:hidden;
  background:radial-gradient(120% 95% at 78% 40%,#0D2352 0%,#071231 48%,var(--navy-800) 100%);
  padding-bottom:36px;
}
/* Swap for the real artwork:
   .page-hero__bg{ background-image:url('assets/brands-hero-bg.jpg'); background-size:cover; background-position:center; }
   …then delete the .ph-label span inside it. */
.page-hero__bg{
  position:absolute;inset:0;
  background-image:url('${brandHero}');
  background-size:cover;
  background-position:center;
  pointer-events:none;
}
.page-hero__bg::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(90deg, rgba(3,8,26,.86) 0%, rgba(3,8,26,.55) 45%, rgba(3,8,26,0) 100%);
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
.page-hero__grid{
  display:grid;grid-template-columns:1fr;align-items:center;gap:40px;
  padding: 60px 0 90px;
}
.crumbs{display:flex;align-items:center;gap:9px;font-size:13px;color:rgba(203,217,240,.8);margin-bottom:16px;}
.crumbs a:hover{color:var(--blue-300);}
.crumbs svg{width:13px;height:13px;opacity:.7;}
.crumbs .is-current{color:#fff;}
.page-hero__title{font-size:54px;font-weight:600;color:#fff;letter-spacing:-.5px;}
.page-hero__title .accent{
  color:var(--blue-400);
  border-bottom:3px solid var(--blue-400);padding-bottom:2px;
}
.page-hero__rule{width:58px;height:2px;background:rgba(255,255,255,.55);margin:20px 0 18px;border:0;}
.page-hero__lead{font-family:var(--ff-display);font-size:21.5px;font-weight:500;color:#fff;}
.page-hero__text{color:rgba(206,220,242,.85);margin-top:14px;max-width:430px;font-size:17px;line-height:1.7;}
.page-hero__visual{position:relative;}
.page-hero__visual .placeholder{aspect-ratio:900/560;}

/* =========================================================
   BRAND PORTFOLIO
   ========================================================= */
.portfolio{padding:66px 0 10px;background:transparent;}
.portfolio__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:40px;}
.brand{
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:var(--radius-lg);
  border-bottom:4px solid var(--brand-color,var(--blue-500));
  padding:30px 28px 26px;
  box-shadow:var(--shadow-card);
  display:flex;flex-direction:column;
  transition:transform .2s ease,box-shadow .2s ease;
}
.brand:hover{transform:translateY(-5px);box-shadow:0 16px 34px rgba(11,27,51,.10);}
.brand--vigil{--brand-color:#2563EB;}
.brand--limitless{--brand-color:#E11D48;}
.brand--sentinel{--brand-color:#7C3AED;}
.brand__logo{width:100%;max-width:250px;margin:0 auto;}
.brand__divider{height:1px;background:var(--brand-color);opacity:.45;margin:22px 0 20px;border:0;}
.brand__title{font-size:23px;font-weight:600;}
.brand__text{font-size:16px;margin-top:14px;line-height:1.7;}
.brand__list{margin-top:22px;display:grid;gap:11px;}
.brand__list li{display:flex;align-items:center;gap:10px;font-size:16px;color:#3C4C63;}
.brand__list svg{width:17px;height:17px;flex:none;color:var(--brand-color);}
.brand .link{margin-top:24px;color:var(--brand-color);}

/* =========================================================
   WHY OUR BRANDS MATTER
   ========================================================= */
.why{padding:52px 0 0;}
.why__panel{
  background:
    radial-gradient(90% 130% at 50% 0%,#11224C 0%,transparent 62%),
    var(--navy-600);
  border-radius:var(--radius-lg);
  padding:44px 34px 40px;
}
.why__panel .eyebrow{color:var(--blue-400);}
.why__panel .section__title{color:#fff;}
.why__grid{display:grid;grid-template-columns:repeat(4,1fr);margin-top:34px;}
.why__item{text-align:center;padding:0 22px;border-left:1px solid rgba(140,175,235,.22);}
.why__item:first-child{border-left:0;}
.why__icon{color:var(--blue-400);display:flex;justify-content:center;margin-bottom:16px;}
.why__icon svg{width:36px;height:36px;}
.why__item h3{font-size:17.5px;font-weight:600;color:#fff;}
.why__item p{font-size:15px;line-height:1.7;color:rgba(197,212,236,.8);margin-top:10px;}

/* =========================================================
   IMPACT NUMBERS
   ========================================================= */
.impact{padding:56px 0 10px;}
.impact__grid{display:grid;grid-template-columns:repeat(5,1fr);margin-top:30px;}
.impact__item{text-align:center;padding:6px 16px;border-left:1px solid #DCE5F2;}
.impact__item:first-child{border-left:0;}
.impact__icon{color:var(--blue-400);display:flex;justify-content:center;margin-bottom:14px;}
.impact__icon svg{width:38px;height:38px;}
.impact__num{font-family:var(--ff-display);font-size:34px;font-weight:600;color:var(--ink-900);line-height:1.1;}
.impact__label{font-size:15.5px;margin-top:6px;}

/* =========================================================
   CTA BAND
   ========================================================= */
.cta{padding:48px 0 60px;}
.cta__band{
  position:relative;overflow:hidden;
  border-radius:var(--radius-lg);
  background:var(--navy-600);
  padding:44px 40px;
  min-height:200px;
  display:flex;align-items:center;
}
/* Swap for the real artwork:
   .cta__bg{ background-image:url('assets/cta-mountain.jpg'); background-size:cover; background-position:center right; } */
.cta__bg{
  position:absolute;inset:0;
  display:flex;align-items:flex-end;justify-content:flex-end;padding:14px;
  background-image:url('${brandCta}');
  background-size:cover;
  background-position:center right;
}
.cta__bg::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(90deg, rgba(14,32,68,.9) 20%, rgba(14,32,68,.7) 50%, rgba(14,32,68,.2) 100%);
}
.cta__bg .ph-label{
  border:1px dashed rgba(96,165,250,.35);border-radius:6px;
  background:rgba(4,10,28,.5);font-size:11px;opacity:.75;
}
.cta__inner{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:32px;width:100%;}
.cta__eyebrow{
  font-family:var(--ff-display);font-size:13px;font-weight:600;
  letter-spacing:.14em;color:var(--blue-400);margin-bottom:14px;
}
.cta__title{font-size:32px;font-weight:600;color:#fff;}
.cta__text{color:rgba(206,220,242,.85);margin-top:12px;max-width:470px;font-size:17px;line-height:1.7;}

/* =========================================================
   FOOTER
   ========================================================= */
.footer{background:var(--navy-700);color:rgba(203,217,240,.78);font-size:15.5px;}
.footer__grid{
  display:grid;grid-template-columns:1.5fr 1fr 1fr 1.35fr;
  gap:34px;padding-top:52px;padding-bottom:44px;
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
.footer__col ul a.is-active{color:var(--blue-400);}
.footer__brands li{display:flex;align-items:center;gap:10px;}
.footer__brands svg{width:17px;height:17px;flex:none;}
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
}

@media (max-width:1080px){
  .portfolio__grid{grid-template-columns:1fr 1fr;}
  .portfolio__grid .brand:last-child{grid-column:1 / -1;max-width:520px;margin-inline:auto;width:100%;}
  .impact__grid{grid-template-columns:repeat(3,1fr);row-gap:30px;}
  .impact__item:nth-child(4){border-left:0;}
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

  .page-hero__grid{grid-template-columns:1fr;padding-top:30px;gap:32px;text-align:center;}
  .page-hero__title{font-size:38px;}
  .page-hero__text{max-width:none;text-align:center;}
  .page-hero__visual{display:none;}
  .page-hero .btn{margin-inline:auto;}
  .crumbs{justify-content:center;}

  .why__grid{grid-template-columns:1fr 1fr;row-gap:34px;}
  .why__item{padding:0 16px;}
  .why__item:nth-child(3){border-left:0;}
  .section__title{font-size:26px;text-align:center;}
  .eyebrow{text-align:center;}

  .cta__inner{flex-direction:column;align-items:center;text-align:center;}
  .cta__band{padding:36px 28px;}
  .cta__text{text-align:center;}
  .footer__grid{grid-template-columns:1fr 1fr;row-gap:36px;}
}

@media (max-width:760px){
  .topbar__inner{justify-content:center;text-align:center;padding-top:10px;padding-bottom:10px;}
  .topbar__group{gap:8px 20px;justify-content:center;}
  .portfolio__grid{grid-template-columns:1fr;max-width:460px;margin-inline:auto;}
  .portfolio__grid .brand:last-child{max-width:none;}
  .why__grid{grid-template-columns:repeat(2,1fr);gap:12px;}
  .impact__grid{grid-template-columns:repeat(2,1fr);gap:12px;}
  .impact__item:nth-child(odd){border-left:0;}
  .impact__item:nth-child(even){border-left:1px solid #DCE5F2;}
}

@media (max-width:560px){
  body{font-size:14px;}
  .container{padding:0 14px;}
  .page-hero__title{font-size:26px;line-height:1.25;}
  .page-hero__lead{font-size:15px;line-height:1.5;}
  .portfolio{padding-top:38px;}
  .portfolio__grid{max-width:none;gap:16px;}
  .brand{padding:22px 16px 20px;border-radius:14px;}
  .brand__title{font-size:19px;}
  
  /* 2 divs per row on mobile for small cards */
  .why__panel{padding:20px 14px 18px;border-radius:16px;}
  .why__grid{grid-template-columns:repeat(2,1fr);gap:10px;row-gap:16px;}
  .why__item{border-left:0;padding:8px 6px;text-align:center;}
  .why__icon{margin-inline:auto;width:38px;height:38px;}
  .why__item h4{font-size:14px;}
  .why__item p{font-size:12px;line-height:1.4;}

  .impact__grid{grid-template-columns:repeat(2,1fr);gap:10px;row-gap:16px;}
  .impact__item{border-left:0 !important;padding:12px 10px;text-align:center;}
  .impact__num{font-size:24px;}
  .impact__label{font-size:12px;}

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
}

/* ---------- Large desktop ---------- */
@media (min-width:1440px){
  .container{max-width:1600px;padding:0 60px;}
  .page-hero__title{font-size:60px;}
  .page-hero__grid{gap:60px;padding:80px 0 140px;}
  .section__title{font-size:42px;}
  .portfolio{padding:80px 0 16px;}
  .portfolio__grid{gap:32px;margin-top:48px;}
  .why{padding:64px 0 0;}
  .why__panel{padding:54px 44px 48px;}
  .why__grid{margin-top:40px;}
  .impact{padding:68px 0 16px;}
  .cta{padding:58px 0 70px;}
  .cta__band{padding:50px 48px;}
  .footer__grid{gap:44px;padding-top:62px;padding-bottom:52px;}
}

@media (prefers-reduced-motion:reduce){
  *{animation:none !important;transition:none !important;scroll-behavior:auto !important;}
}

      `}</style>
      
<header className="page-hero">
  
  <div className="page-hero__bg" aria-hidden="true">
    <span className="ph-label">Brands Hero Background — 1920 × 700</span>
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
          <li><a href="/services">Services</a></li>
          <li><a className="is-active" href="/brands">Brands</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/contact" className="btn btn--primary nav__cta">Contact Us</a>
      </div>
    </nav>

    <div className="page-hero__grid">
      <div>
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="is-current">Brands</span>
        </nav>

        <h1 className="page-hero__title">Our <span className="accent">Brands</span></h1>
        <hr className="page-hero__rule" />
        <p className="page-hero__lead">Innovative Solutions. Trusted Impact.</p>
        <p className="page-hero__text">Our brands represent our commitment to innovation, security, and excellence across the technologies that power a smarter, safer tomorrow.</p>
      </div>

      <div className="page-hero__visual">
      </div>
    </div>
  </div>
</header>


<section className="portfolio">
  <div className="container">
    <p className="eyebrow">OUR BRAND PORTFOLIO</p>
    <h2 className="section__title">Built on Innovation. Driven by Purpose.</h2>
    <p className="section__sub">Each ITSCI brand is dedicated to solving real-world challenges with cutting-edge technology, delivering value and creating a lasting impact.</p>

    <div className="portfolio__grid">
      
      <article className="brand brand--vigil">
        <div className="brand__logo">
          <img src={vigilLogo} alt="Vigil" style={{ width: '100%', height: 'auto', maxHeight: '58px', objectFit: 'contain' }} />
        </div>
        <hr className="brand__divider" />
        <h3 className="brand__title">Smart Monitoring.<br />Safer Tomorrow.</h3>
        <p className="brand__text">Vigil delivers advanced monitoring and intelligence solutions for safety, security and operational visibility.</p>
        <ul className="brand__list">
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Real-time Monitoring</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Behavior Analytics</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Parental &amp; Workplace Safety</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Intelligent Alerts</li>
        </ul>
        <a href="https://vigil-1.com" className="link" target="_blank" rel="noopener noreferrer">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      
      <article className="brand brand--limitless">
        <div className="brand__logo">
          <img src={limitlessLogo} alt="Limitless" style={{ width: '100%', height: 'auto', maxHeight: '58px', objectFit: 'contain' }} />
        </div>
        <hr className="brand__divider" />
        <h3 className="brand__title">Limitless Possibilities.<br />Limitless You.</h3>
        <p className="brand__text">Limitless focuses on health, wellness and lifestyle solutions empowering people to live better every day.</p>
        <ul className="brand__list">
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Health &amp; Wellness Programs</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Personal Growth</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Community &amp; Support</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Lifestyle Solutions</li>
        </ul>
        <a href="https://limitlessworld.net" className="link" target="_blank" rel="noopener noreferrer">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      
      <article className="brand brand--sentinel">
        <div className="brand__logo">
          <img src={sentinelLogo} alt="Sentinel" style={{ width: '100%', height: 'auto', maxHeight: '58px', objectFit: 'contain' }} />
        </div>
        <hr className="brand__divider" />
        <h3 className="brand__title">Autonomous Security.<br />Always On.</h3>
        <p className="brand__text">Sentinel provides AI-powered security and cyber defense solutions for a secure digital future.</p>
        <ul className="brand__list">
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Threat Detection</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> AI-Powered Defense</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Compliance &amp; Governance</li>
          <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="m8.4 12.2 2.4 2.4 4.8-5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> Incident Response</li>
        </ul>
        <a href="https://sentinelglobal.net" className="link" target="_blank" rel="noopener noreferrer">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>
    </div>
  </div>
</section>


<section className="why">
  <div className="container">
    <div className="why__panel">
      <p className="eyebrow">WHY OUR BRANDS MATTER</p>
      <h2 className="section__title">One Vision. Multiple Solutions.</h2>

      <div className="why__grid">
        <article className="why__item">
          <span className="why__icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><path d="M12 1.8v3M12 19.2v3M1.8 12h3M19.2 12h3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <h3>Customer Focused</h3>
          <p>Solving real-world problems with a customer-first approach.</p>
        </article>

        <article className="why__item">
          <span className="why__icon">
            <svg viewBox="0 0 24 24"><path d="M9.2 16.4a6 6 0 1 1 5.6 0v1.9H9.2v-1.9Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9.9 20.4h4.2M10.4 22h3.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 2.4V1M4.6 5.2 3.6 4.2M19.4 5.2l1-1M3 11H1.6M22.4 11H21" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </span>
          <h3>Innovative by Design</h3>
          <p>Built with innovation at the core to stay ahead of tomorrow.</p>
        </article>

        <article className="why__item">
          <span className="why__icon">
            <svg viewBox="0 0 24 24"><path d="M12 3 5 6v5.2c0 4.2 2.9 8 7 9.3 4.1-1.3 7-5.1 7-9.3V6l-7-3Z" fill="currentColor" opacity=".18"/><path d="M12 3 5 6v5.2c0 4.2 2.9 8 7 9.3 4.1-1.3 7-5.1 7-9.3V6l-7-3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m12 8.2 1.1 2.2 2.4.35-1.75 1.7.4 2.4L12 13.7l-2.15 1.15.4-2.4-1.75-1.7 2.4-.35L12 8.2Z" fill="currentColor"/></svg>
          </span>
          <h3>Secure &amp; Reliable</h3>
          <p>Security, privacy, and reliability built into every solution.</p>
        </article>

        <article className="why__item">
          <span className="why__icon">
            <svg viewBox="0 0 24 24"><path d="M4 20h16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="5.2" y="12.4" width="3.4" height="6" rx=".8" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="10.3" y="9.2" width="3.4" height="9.2" rx=".8" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="15.4" y="6" width="3.4" height="12.4" rx=".8" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M14.8 3.4h4v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.4 3.8 12.6 9l-2.8-2-4 3.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <h3>Scalable Impact</h3>
          <p>Solutions that scale across industries and create long-term value.</p>
        </article>
      </div>
    </div>
  </div>
</section>


<section className="impact">
  <div className="container">
    <p className="eyebrow">OUR IMPACT IN NUMBERS</p>

    <div className="impact__grid">
      <article className="impact__item">
        <span className="impact__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m12 6.3 1 1.9 2.1.3-1.5 1.5.35 2.1L12 11.1l-1.95 1 .35-2.1L8.9 8.5l2.1-.3 1-1.9Z" fill="currentColor"/><path d="M8.6 13.6 7 21l5-2.4L17 21l-1.6-7.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </span>
        <p className="impact__num">10+</p>
        <p className="impact__label">Years of Excellence</p>
      </article>

      <article className="impact__item">
        <span className="impact__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="7.2" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="5.6" cy="10.4" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="18.4" cy="10.4" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M7.4 15.6c.7-2 2.5-3.2 4.6-3.2s3.9 1.2 4.6 3.2M2 18c.4-1.9 1.8-3 3.6-3M22 18c-.4-1.9-1.8-3-3.6-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="17" width="10" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <p className="impact__num">50+</p>
        <p className="impact__label">Enterprise Clients</p>
      </article>

      <article className="impact__item">
        <span className="impact__icon">
          <svg viewBox="0 0 24 24"><rect x="3" y="7.4" width="18" height="11.6" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M9 7.4V5.8a1.6 1.6 0 0 1 1.6-1.6h2.8A1.6 1.6 0 0 1 15 5.8v1.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M3 12.4h18" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="10.6" y="11" width="2.8" height="2.8" rx=".7" fill="currentColor"/></svg>
        </span>
        <p className="impact__num">100+</p>
        <p className="impact__label">Projects Delivered</p>
      </article>

      <article className="impact__item">
        <span className="impact__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M3.2 9.2h17.6M3.2 14.8h17.6" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <p className="impact__num">20+</p>
        <p className="impact__label">Countries Served</p>
      </article>

      <article className="impact__item">
        <span className="impact__icon">
          <svg viewBox="0 0 24 24"><path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M20.7 3.6v4.2h-4.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="7" font-family="Poppins, sans-serif" font-weight="600" fill="currentColor">24</text></svg>
        </span>
        <p className="impact__num">24/7</p>
        <p className="impact__label">Support &amp; Monitoring</p>
      </article>
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
          <p className="cta__eyebrow">LET'S BUILD THE FUTURE TOGETHER</p>
          <h2 className="cta__title">Explore Our Brands. Experience the Difference.</h2>
          <p className="cta__text">Discover how our brands work together to deliver innovative, secure, and impactful solutions for a better tomorrow.</p>
        </div>
        <a href="#contact" className="btn btn--primary">Contact Us Today <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
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
