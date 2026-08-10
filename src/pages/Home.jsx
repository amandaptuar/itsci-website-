import React, { useEffect } from "react";
import heroBg from "../assets/image.png";
import vigilLogo from "../assets/vigil-logo.png";
import limitlessLogo from "../assets/limitless-logo.png";
import sentinelLogo from "../assets/sentinel-logo.png";
import serviceCtaBg from "../assets/service-cta-bg.png";

export default function Home() {
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
    <div className="home-page">
      <style>{`

/* =========================================================
   ITSCI — Corporate site template
   Tokens → Base → Components → Sections → Responsive
   ========================================================= */

:root{
  --navy-900:#040A1C;   /* top bar / darkest */
  --navy-800:#061029;   /* hero base */
  --navy-700:#0A1636;   /* services / footer */
  --navy-600:#0E1C42;   /* dark cards */
  --blue-500:#2563EB;   /* primary action */
  --blue-400:#3B82F6;   /* accent text + icons */
  --blue-300:#60A5FA;
  --ink-900:#0B1B33;    /* headings on light */
  --ink-600:#4B5A6E;    /* body on light */
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
  margin:0;
  font-family:var(--ff-body);
  font-size:17px;
  line-height:1.7;
  color:var(--ink-600);
  background:var(--surface);
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

/* ---------- Image placeholders (swap for real assets) ---------- */
.placeholder{
  position:relative;
  width:100%;height:100%;
  display:flex;align-items:center;justify-content:center;
  border:1px dashed rgba(96,165,250,.55);
  border-radius:var(--radius-lg);
  background:
    repeating-linear-gradient(45deg,rgba(96,165,250,.07) 0 12px,transparent 12px 24px),
    rgba(10,22,54,.35);
}
.ph-label{
  font-family:var(--ff-display);
  font-size:12px;letter-spacing:.04em;
  color:rgba(147,197,253,.9);
  text-align:center;padding:8px 12px;
}
.placeholder--hero{aspect-ratio:900/620;}
.placeholder--logo{
  height:56px;
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
  transition:transform .18s ease, background-color .18s ease, box-shadow .18s ease;
}
.btn .arrow{width:16px;height:16px;}
.btn--primary{background:var(--blue-500);color:#fff;box-shadow:0 6px 18px rgba(37,99,235,.28);}
.btn--primary:hover{background:#1D4ED8;transform:translateY(-2px);}
.btn--ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.55);}
.btn--ghost:hover{background:rgba(255,255,255,.1);}

.link{
  display:inline-flex;align-items:center;gap:7px;
  font-family:var(--ff-display);font-size:15px;font-weight:500;color:var(--blue-400);
}
.link .arrow{width:15px;height:15px;transition:transform .18s ease;}
.link:hover .arrow{transform:translateX(4px);}
.link--dark{color:var(--ink-900);}

/* ---------- Section headings ---------- */
.eyebrow{
  font-family:var(--ff-display);font-size:14.5px;font-weight:600;
  letter-spacing:.14em;color:var(--blue-400);margin-bottom:14px;
}
.eyebrow--center{text-align:center;}
.section__title{font-size:42px;font-weight:600;}
.section__title--center{text-align:center;color:#fff;}
.section__sub{text-align:center;margin:14px auto 0;max-width:700px;font-size:17px;}

/* =========================================================
   HERO
   ========================================================= */
.hero{
  position:relative;
  background:radial-gradient(120% 90% at 78% 30%, #0D2352 0%, #071231 45%, var(--navy-800) 100%);
  padding-bottom:56px;
  overflow:hidden;
}
/* Swap the placeholder tint below for the real artwork:
   .hero__bg{ background-image:url('assets/hero-background.jpg'); background-size:cover; background-position:center; }
   …and delete the .ph-label span inside it. */
.hero__bg{
  position:absolute;inset:0;
  background-image:url('${heroBg}');
  background-size:cover;
  background-position:center right;
  pointer-events:none;
}
/* keeps the headline readable once the artwork is in place */
.hero__bg::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(90deg, rgba(3,8,26,.86) 0%, rgba(3,8,26,.45) 38%, rgba(3,8,26,0) 62%);
}
.hero__bg{align-items:flex-end;justify-content:flex-end;}
.hero__bg .ph-label{
  border:1px dashed rgba(96,165,250,.35);
  border-radius:6px;background:rgba(4,10,28,.5);
  font-size:11px;opacity:.75;
}
.hero > .container{position:relative;z-index:2;}

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
.hero__grid{
  display:grid;grid-template-columns:1fr 1.05fr;align-items:center;gap:40px;
  padding:90px 0 60px;
}
.hero__title{font-size:58px;font-weight:600;color:#fff;letter-spacing:-.5px;}
.hero__text{color:rgba(214,226,244,.86);max-width:480px;margin-top:22px;font-size:18.5px;line-height:1.7;}
.hero__actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px;}
.hero__visual{position:relative;}

/* ---------- USP row ---------- */
.usp{
  display:grid;grid-template-columns:repeat(4,1fr);gap:24px;
  padding: 60px 0 20px;
}
.usp__item{
  display:flex;flex-direction:column;align-items:flex-start;
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:var(--radius-lg);
  padding: 32px 28px;
  box-shadow:var(--shadow-card);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  position: relative;
  overflow: hidden;
}
.usp__item::before{
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--blue-500);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .3s ease;
}
.usp__item:hover{
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(11,27,51,.08);
  border-color: transparent;
}
.usp__item:hover::before{
  transform: scaleX(1);
}
.usp__icon{
  flex:none;width:54px;height:54px;display:grid;place-items:center;
  color:var(--blue-500);
  background: rgba(37,99,235,.08);
  border-radius: 14px;
  margin-bottom: 20px;
}
.usp__icon svg{width:26px;height:26px;}
.usp__item h3{font-size:18.5px;font-weight:600;color:var(--ink-900);margin-bottom: 8px;}
.usp__item p{font-size:15px;color:var(--ink-600);line-height:1.65;max-width:none;}

/* =========================================================
   ABOUT
   ========================================================= */
.about{background:var(--surface);}
.about.section{padding-top: 20px;}
.about__grid{display:grid;grid-template-columns:1fr 1.12fr;gap:56px;align-items:center;}
.about__copy p{margin-top:16px;max-width:480px;font-size:17px;line-height:1.7;}
.about__copy .btn{margin-top:28px;}

.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;}
.stat{
  display:flex;align-items:center;gap:18px;
  background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);
  padding:30px 26px;box-shadow:var(--shadow-card);
  transition:transform .2s ease, box-shadow .2s ease;
}
.stat:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(11,27,51,.10);}
.stat__icon{flex:none;color:var(--blue-400);}
.stat__icon svg{width:42px;height:42px;}
.stat__num{font-family:var(--ff-display);font-size:38px;font-weight:600;color:var(--ink-900);line-height:1.1;}
.stat__label{font-size:16px;margin-top:5px;}

/* =========================================================
   SERVICES
   ========================================================= */
.services{
  background:
    radial-gradient(80% 120% at 50% 0%, #10214A 0%, transparent 60%),
    var(--navy-700);
}
.services .section__sub{color:rgba(203,217,240,.8);}
.services__grid{
  display:grid;grid-template-columns:repeat(6,1fr);gap:16px;
  margin-top:44px;
}
.service{
  background:rgba(255,255,255,.035);
  border:1px solid rgba(120,160,230,.22);
  border-radius:var(--radius);
  padding:28px 18px 24px;
  text-align:center;
  display:flex;flex-direction:column;align-items:center;
  transition:transform .2s ease, border-color .2s ease, background-color .2s ease;
}
.service:hover{transform:translateY(-5px);border-color:rgba(96,165,250,.6);background:rgba(37,99,235,.10);}
.service__icon{color:var(--blue-400);margin-bottom:16px;}
.service__icon svg{width:38px;height:38px;}
.service__title{font-size:18.5px;font-weight:600;color:#fff;}
.service__text{font-size:15.5px;line-height:1.65;color:rgba(197,212,236,.8);margin-top:12px;flex:1;}
.service .link{margin-top:18px;}

/* =========================================================
   BRANDS
   ========================================================= */
.brands{background:var(--surface);}
.brands .section__title--center{color:var(--ink-900);}
.brands .eyebrow--center{margin-bottom:12px;}
.brands__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:40px;}
.brand{
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:var(--radius-lg);
  border-bottom:4px solid var(--brand-color,var(--blue-500));
  padding:32px 28px 28px;
  text-align:center;
  box-shadow:var(--shadow-card);
  display:flex;flex-direction:column;align-items:center;
  transition:transform .2s ease, box-shadow .2s ease;
}
.brand:hover{transform:translateY(-5px);box-shadow:0 16px 32px rgba(11,27,51,.10);}
.brand--vigil{--brand-color:#2563EB;}
.brand--limitless{--brand-color:#E11D48;}
.brand--sentinel{--brand-color:#7C3AED;}
.brand__logo{width:100%;max-width:260px;margin-bottom:22px;}
.brand__title{font-size:23px;font-weight:600;}
.brand__text{font-size:16px;margin-top:14px;flex:1;line-height:1.7;}
.brand .link{margin-top:20px;}
.brand--limitless .link:hover,.brand--sentinel .link:hover{color:var(--brand-color);}

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
.cta__bg{
  position:absolute;inset:0;
  display:flex;align-items:flex-end;justify-content:flex-end;padding:14px;
  background-image:url('${serviceCtaBg}');
  background-size:cover;
  background-position:center right;
}
.cta__bg::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(90deg, rgba(14,32,68,.9) 20%, rgba(14,32,68,.7) 50%, rgba(14,32,68,.2) 100%);
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
.footer .logo{display:inline-flex;flex-direction:column;align-items:flex-start;}
.footer .logo__name{color:#fff;}
.footer .logo__tag{color:rgba(203,217,240,.6);border-top-color:rgba(255,255,255,.22);margin-top:4px;}
.footer__about{margin-top:20px;font-size:14px;line-height:1.7;max-width:280px;}
.footer__social{display:flex;gap:16px;margin-top:20px;}
.footer__social a{color:rgba(203,217,240,.75);transition:color .18s ease;}
.footer__social a:hover{color:var(--blue-300);}
.footer__social .ic{width:18px;height:18px;}
.footer__col h4{font-size:17.5px;font-weight:600;color:#fff;margin-bottom:16px;}
.footer__col ul li{margin-bottom:10px;}
.footer__col ul a{transition:color .18s ease;}
.footer__col ul a:hover{color:var(--blue-300);}
.footer__col ul a.is-active{color:var(--blue-400);}
.footer__contact li{display:flex;gap:10px;align-items:flex-start;line-height:1.55;}
.footer__contact .ic{color:rgba(147,197,253,.85);margin-top:2px;}
.footer__bar{border-top:1px solid rgba(255,255,255,.08);}
.footer__bar-inner{
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding-top:16px;padding-bottom:16px;font-size:13.5px;flex-wrap:wrap;
}
.footer__bar-inner ul{display:flex;gap:0;}
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
  .services__grid{grid-template-columns:repeat(3,1fr);gap:20px;}
  .footer__grid{grid-template-columns:1fr 1fr 1fr;row-gap:40px;}
  .footer__cta{grid-column:1 / -1;}
}

@media (max-width:960px){
  /* Mobile navigation */
  .nav__toggle{display:flex;}
  .nav{flex-wrap:wrap;padding:14px 18px;}
  .nav__menu{
    display:none;width:100%;flex-direction:column;align-items:stretch;
    gap:6px;padding-top:14px;margin-top:12px;border-top:1px solid var(--line);
  }
  .nav.is-open .nav__menu{display:flex;}
  .nav__links{flex-direction:column;align-items:stretch;gap:0;}
  .nav__links li{border-bottom:1px solid #F0F3F8;}
  .nav__links a{padding:12px 4px;justify-content:space-between;}
  .nav__cta{justify-content:center;margin-top:14px;}
  .nav.is-open .nav__toggle span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .nav.is-open .nav__toggle span:nth-child(2){opacity:0;}
  .nav.is-open .nav__toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

  .hero__grid{grid-template-columns:1fr;padding:48px 0 32px;gap:34px;text-align:center;}
  .hero__copy{display:flex;flex-direction:column;align-items:center;}
  .hero__title{font-size:38px;}
  .hero__text{max-width:100%;text-align:center;}
  .hero__actions{justify-content:center;}
  .hero__visual{display:none;}
  .usp{grid-template-columns:repeat(2,1fr);gap:24px;}
  .usp__item{text-align:center;align-items:center;}
  .usp__item p{max-width:none;}

  .about__grid{grid-template-columns:1fr;gap:36px;text-align:center;}
  .about__copy{display:flex;flex-direction:column;align-items:center;}
  .about__copy p{max-width:none;}
  .about__visual{display:none;}
  .section__title{font-size:29px;}
  .section{padding:60px 0;}
  .brands__grid{grid-template-columns:1fr;max-width:460px;margin-inline:auto;}
  .footer__grid{grid-template-columns:1fr 1fr;row-gap:36px;}
}

@media (max-width:760px){
  .topbar__inner{justify-content:center;text-align:center;padding-top:10px;padding-bottom:10px;}
  .topbar__group{gap:8px 20px;justify-content:center;}
  .services__grid{grid-template-columns:repeat(2,1fr);}
  .footer__grid{grid-template-columns:1fr 1fr;row-gap:30px;}
}

@media (max-width:560px){
  body{font-size:14px;}
  .container{padding:0 14px;}
  .hero__title{font-size:26px;line-height:1.25;}
  .hero__text{font-size:15px;line-height:1.6;}
  .hero__actions{flex-direction:column;width:100%;gap:10px;}
  .hero__actions .btn{flex:1;justify-content:center;width:100%;padding:13px 20px;}
  
  /* 2 divs per row on mobile for small cards */
  .usp{grid-template-columns:repeat(2,1fr);gap:12px;}
  .usp__item{padding:14px 10px;text-align:center;align-items:center;border-radius:12px;}
  .usp__item h3{font-size:15px;}
  .usp__item p{font-size:12.5px;line-height:1.45;}

  .stats{grid-template-columns:repeat(2,1fr);gap:10px;}
  .stat{padding:16px 12px;text-align:center;border-radius:12px;}
  .stat__number{font-size:26px;}
  .stat__label{font-size:12px;}

  .services__grid{grid-template-columns:repeat(2,1fr);gap:12px;max-width:none;}
  .service-card{padding:16px 12px;text-align:center;align-items:center;border-radius:12px;}
  .service-card__icon{margin-inline:auto;width:40px;height:40px;}
  .service-card__title{font-size:15px;}
  .service-card__desc{font-size:12.5px;line-height:1.4;}

  .section__title{font-size:23px;text-align:center;}
  .section{padding:38px 0;}
  
  .brands__grid{grid-template-columns:1fr;gap:16px;max-width:none;}
  .brand{padding:22px 16px 18px;border-radius:14px;}
  .brand__title{font-size:19px;}

  .cta__title{font-size:19px;}
  .cta__band{padding:24px 16px;border-radius:16px;}
  .cta__inner{flex-direction:column;align-items:center;text-align:center;}
  .cta__eyebrow{justify-content:center;text-align:center;}
  .cta__text{text-align:center;}

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
  .eyebrow,.eyebrow--center{text-align:center;}
  .section__title--center{font-size:23px;}
}

/* ---------- Large desktop ---------- */
@media (min-width:1440px){
  .container{max-width:1600px;padding:0 60px;}
  .hero__title{font-size:62px;}
  .hero__grid{gap:60px;padding:120px 0 90px;}
  .section{padding:100px 0;}
  .section__title{font-size:46px;}
  .services__grid{gap:22px;}
  .footer__grid{gap:44px;padding-top:64px;padding-bottom:54px;}
  .usp{gap:36px;}
  .stats{gap:28px;}
  .about__grid{gap:70px;}
}

@media (prefers-reduced-motion:reduce){
  *{animation:none !important;transition:none !important;scroll-behavior:auto !important;}
}

      `}</style>
      
      <header className="hero" id="home">
  
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
          <li><a className="is-active" href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/brands">Brands</a></li>
        </ul>
        <a href="/contact" className="btn btn--primary nav__cta">Contact Us</a>
      </div>
    </nav>

    <div className="hero__grid">
      <div className="hero__copy">
        <h1 className="hero__title">Innovative Solutions.<br /><span className="accent">Powerful</span> Impact.</h1>
        <p className="hero__text">End-to-end IT infrastructure, security and cloud solutions designed to drive performance, scalability and growth for a smarter tomorrow.</p>
        <div className="hero__actions">
          <a href="#services" className="btn btn--primary">Explore Services <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <a href="#about" className="btn btn--ghost">About Us</a>
        </div>
      </div>

      <div className="hero__visual">
      </div>
    </div>

    </div>
</header>

<div className="container">
  <ul className="usp">
    <li className="usp__item">
      <span className="usp__icon">
        <svg viewBox="0 0 24 24"><path d="M12 3 5 6v5.2c0 4.2 2.9 8 7 9.3 4.1-1.3 7-5.1 7-9.3V6l-7-3Z" fill="currentColor" opacity=".18"/><path d="M12 3 5 6v5.2c0 4.2 2.9 8 7 9.3 4.1-1.3 7-5.1 7-9.3V6l-7-3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m9.4 12.1 1.9 1.9 3.4-3.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <div><h3>Secure &amp; Reliable</h3><p>Enterprise-grade security you can trust.</p></div>
    </li>
    <li className="usp__item">
      <span className="usp__icon">
        <svg viewBox="0 0 24 24"><path d="M13.8 3.6c2.6-.5 5.2.4 6.6 1.8 1.4 1.4 2.3 4 1.8 6.6-.4 2.2-2.3 4.4-4.6 6l-.5 3.4-3.4-1.6-2.9-2.9-1.6-3.4 3.4-.5c1.6-2.3 3.8-4.2 6-4.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="15.4" cy="8.6" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M8.2 15.8c-1.3 1.3-1.6 4.2-1.6 4.2s2.9-.3 4.2-1.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
      </span>
      <div><h3>Scalable Solutions</h3><p>Built to grow with your business.</p></div>
    </li>
    <li className="usp__item">
      <span className="usp__icon">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><text x="12" y="15.5" text-anchor="middle" font-size="8" font-family="Poppins, sans-serif" font-weight="600" fill="currentColor">24</text></svg>
      </span>
      <div><h3>24/7 Support</h3><p>Always here when you need us.</p></div>
    </li>
    <li className="usp__item">
      <span className="usp__icon">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M4.8 20c.6-3.6 3.6-6 7.2-6s6.6 2.4 7.2 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </span>
      <div><h3>Customer Focused</h3><p>Your success is our priority.</p></div>
    </li>
  </ul>
</div>


<section className="about section" id="about">
  <div className="container about__grid">
    <div className="about__copy">
      <p className="eyebrow">WHO WE ARE</p>
      <h2 className="section__title">Building the Future<br />with <span className="accent">Technology</span></h2>
      <p>ITSCI is a U.S.-based technology and consulting company focused on delivering innovative digital solutions to enterprises, governments, and organizations worldwide.</p>
      <p>We combine industry expertise, modern infrastructure and emerging technologies to help our clients achieve operational excellence, security and long-term growth.</p>
      <a href="#contact" className="btn btn--primary">Discover More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
    </div>

    <div className="stats">
      <article className="stat">
        <span className="stat__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m12 6.3 1 1.9 2.1.3-1.5 1.5.35 2.1L12 11.1l-1.95 1 .35-2.1L8.9 8.5l2.1-.3 1-1.9Z" fill="currentColor"/><path d="M8.6 13.6 7 21l5-2.4L17 21l-1.6-7.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </span>
        <div><p className="stat__num">10+</p><p className="stat__label">Years of Excellence</p></div>
      </article>
      <article className="stat">
        <span className="stat__icon">
          <svg viewBox="0 0 24 24"><path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4L10.5 8h9A1.5 1.5 0 0 1 21 9.5v8A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-10Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M3 11h18" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <div><p className="stat__num">100+</p><p className="stat__label">Projects Delivered</p></div>
      </article>
      <article className="stat">
        <span className="stat__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="7.2" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="5.6" cy="10.4" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="18.4" cy="10.4" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M7.4 15.6c.7-2 2.5-3.2 4.6-3.2s3.9 1.2 4.6 3.2M2 18c.4-1.9 1.8-3 3.6-3M22 18c-.4-1.9-1.8-3-3.6-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="17" width="10" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <div><p className="stat__num">50+</p><p className="stat__label">Enterprise Clients</p></div>
      </article>
      <article className="stat">
        <span className="stat__icon">
          <svg viewBox="0 0 24 24"><path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M20.7 3.6v4.2h-4.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="7" font-family="Poppins, sans-serif" font-weight="600" fill="currentColor">24</text></svg>
        </span>
        <div><p className="stat__num">24/7</p><p className="stat__label">Support &amp; Monitoring</p></div>
      </article>
    </div>
  </div>
</section>


<section className="services section" id="services">
  <div className="container">
    <p className="eyebrow eyebrow--center">OUR SERVICES</p>
    <h2 className="section__title section__title--center">Comprehensive IT Solutions</h2>
    <p className="section__sub">We deliver solutions that drive efficiency, security and innovation.</p>

    <div className="services__grid">
      <article className="service">
        <span className="service__icon">
          <svg viewBox="0 0 24 24"><path d="M12 13v8m-4 0h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="9.5" r="1.8" fill="currentColor"/><path d="M8.2 5.7a5.4 5.4 0 0 0 0 7.6M15.8 5.7a5.4 5.4 0 0 1 0 7.6M5.6 3.1a9 9 0 0 0 0 12.8M18.4 3.1a9 9 0 0 1 0 12.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
        <h3 className="service__title">Telecom Infra</h3>
        <p className="service__text">End-to-end telecom infrastructure solutions for seamless connectivity and performance.</p>
        <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      <article className="service">
        <span className="service__icon">
          <svg viewBox="0 0 24 24"><rect x="3.5" y="4" width="17" height="5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="3.5" y="9.5" width="17" height="5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="3.5" y="15" width="17" height="5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="6.5" r=".9" fill="currentColor"/><circle cx="7" cy="12" r=".9" fill="currentColor"/><circle cx="7" cy="17.5" r=".9" fill="currentColor"/></svg>
        </span>
        <h3 className="service__title">Data Center Solutions</h3>
        <p className="service__text">High-performance data centers designed for reliability, security and scalability.</p>
        <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      <article className="service">
        <span className="service__icon">
          <svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="4.6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="15.4" width="6" height="4.6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="15" y="15.4" width="6" height="4.6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7.6v4.2M6 15.4v-3.6h12v3.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <h3 className="service__title">IT Infra</h3>
        <p className="service__text">Modern IT infrastructure services to power your business operations efficiently.</p>
        <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      <article className="service">
        <span className="service__icon">
          <svg viewBox="0 0 24 24"><path d="M12 3 5 6v5.2c0 4.2 2.9 8 7 9.3 4.1-1.3 7-5.1 7-9.3V6l-7-3Z" fill="currentColor" opacity=".18"/><path d="M12 3 5 6v5.2c0 4.2 2.9 8 7 9.3 4.1-1.3 7-5.1 7-9.3V6l-7-3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m12 8.2 1.1 2.2 2.4.35-1.75 1.7.4 2.4L12 13.7l-2.15 1.15.4-2.4-1.75-1.7 2.4-.35L12 8.2Z" fill="currentColor"/></svg>
        </span>
        <h3 className="service__title">Security</h3>
        <p className="service__text">Advanced security solutions to protect your data, applications and infrastructure.</p>
        <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      <article className="service">
        <span className="service__icon">
          <svg viewBox="0 0 24 24"><path d="M7.2 18.5a4.2 4.2 0 0 1-.5-8.37 5.6 5.6 0 0 1 10.83-1.4A3.9 3.9 0 0 1 17.4 18.5H7.2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </span>
        <h3 className="service__title">Cloud Solutions</h3>
        <p className="service__text">Scalable cloud services for agility, innovation and cost efficiency.</p>
        <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      <article className="service">
        <span className="service__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M3.2 9.2h17.6M3.2 14.8h17.6" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <h3 className="service__title">Network &amp; Broadband</h3>
        <p className="service__text">High-speed networking solutions ensuring reliable connectivity wherever you operate.</p>
        <a href="#" className="link">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>
    </div>
  </div>
</section>


<section className="brands section" id="brands">
  <div className="container">
    <p className="eyebrow eyebrow--center">OUR BRANDS</p>
    <h2 className="section__title section__title--center">Innovative Brands. Powerful Solutions.</h2>

    <div className="brands__grid">
      <article className="brand brand--vigil">
        <div className="brand__logo">
          <img src={vigilLogo} alt="Vigil" style={{ width: '100%', height: 'auto', maxHeight: '60px', objectFit: 'contain' }} />
        </div>
        <h3 className="brand__title">Smart Monitoring.<br />Safer Tomorrow.</h3>
        <p className="brand__text">Vigil delivers advanced monitoring and intelligence solutions for safety, security and operational visibility.</p>
        <a href="https://vigil-1.com" className="link" target="_blank" rel="noopener noreferrer">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      <article className="brand brand--limitless">
        <div className="brand__logo">
          <img src={limitlessLogo} alt="Limitless" style={{ width: '100%', height: 'auto', maxHeight: '60px', objectFit: 'contain' }} />
        </div>
        <h3 className="brand__title">Limitless Possibilities.<br />Limitless You.</h3>
        <p className="brand__text">Limitless focuses on health, wellness and lifestyle solutions empowering people to live better every day.</p>
        <a href="https://limitlessworld.net" className="link link--dark" target="_blank" rel="noopener noreferrer">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>

      <article className="brand brand--sentinel">
        <div className="brand__logo">
          <img src={sentinelLogo} alt="Sentinel" style={{ width: '100%', height: 'auto', maxHeight: '60px', objectFit: 'contain' }} />
        </div>
        <h3 className="brand__title">Autonomous Security.<br />Always On.</h3>
        <p className="brand__text">Sentinel provides AI-powered security and cyber defense solutions for a secure digital future.</p>
        <a href="https://sentinelglobal.net" className="link link--dark" target="_blank" rel="noopener noreferrer">Learn More <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </article>
    </div>
  </div>
</section>


<section className="cta">
  <div className="container">
    <div className="cta__band">
      <div className="cta__bg" aria-hidden="true"></div>
      <div className="cta__inner">
        <div>
          <p className="cta__eyebrow">LET'S BUILD THE FUTURE TOGETHER</p>
          <h2 className="cta__title">Ready to Transform Your Business?</h2>
          <p className="cta__text">Partner with ITSCI to build smarter, secure, and scalable digital solutions together.</p>
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
