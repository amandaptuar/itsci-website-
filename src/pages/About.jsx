import React, { useEffect } from "react";
import heroBg from "../assets/image.png";
import aboutHero from "../assets/about-hero.png";
import aboutCta from "../assets/about-cta.png";

export default function About() {
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
    <div className="about-page">
      <style>{`

/* =========================================================
   ITSCI — About Us page
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
  --surface-2:#F7FAFD;
  --surface-3:#EEF4FC;
  --radius:10px;
  --radius-lg:14px;
  --shadow-card:0 2px 14px rgba(11,27,51,.06);
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
.placeholder--avatar{
  border-radius:50%;
  border-color:rgba(37,99,235,.4);
  background:
    repeating-linear-gradient(45deg,rgba(37,99,235,.07) 0 9px,transparent 9px 18px),
    #EAF1FC;
}
.placeholder--avatar .ph-label{color:#5B7BB5;font-size:10.5px;padding:4px;}

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
.page-hero__bg{
  position:absolute;inset:0;
  background-image:url('${aboutHero}');
  background-size:auto 90%;
  background-position:right bottom;
  background-repeat:no-repeat;
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
  background:#fff;border-radius:12px;padding:6px 22px;margin-top:18px;
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
.nav__cta{padding:9px 20px;border-radius:8px;transform:translateY(-10px);}
.nav__toggle{
  display:none;flex-direction:column;justify-content:center;gap:5px;
  width:42px;height:38px;padding:0 9px;background:transparent;
  border:1px solid var(--line);border-radius:8px;cursor:pointer;
}
.nav__toggle span{display:block;height:2px;width:100%;background:var(--ink-900);border-radius:2px;transition:transform .2s ease,opacity .2s ease;}

/* ---------- Hero content ---------- */
.page-hero{
  position:relative;
  background:radial-gradient(120% 90% at 78% 30%, #0D2352 0%, #071231 45%, var(--navy-800) 100%);
  padding-bottom:56px;
  overflow:hidden;
}
.page-hero__bg{
  position:absolute;inset:0;
  background-image:url('${heroBg}');
  background-size:cover;
  background-position:center;
  pointer-events:none;
}
.page-hero > .container{position:relative;z-index:2;}
.page-hero__grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;padding-top:50px;}
.crumbs{display:flex;align-items:center;gap:9px;font-size:13px;color:rgba(203,217,240,.85);margin-bottom:16px;flex-wrap:wrap;}
.crumbs a{color:#fff;}
.crumbs a:hover{color:var(--blue-300);}
.crumbs svg{width:13px;height:13px;opacity:.7;}
.page-hero__title{font-size:52px;font-weight:600;color:#fff;letter-spacing:-.4px;}
.page-hero__rule{width:44px;height:2px;background:rgba(255,255,255,.6);margin:18px 0 20px;border:0;}
.page-hero__lead{font-family:var(--ff-display);font-size:20px;font-weight:500;color:#fff;}
.page-hero__text{color:rgba(206,220,242,.85);margin-top:16px;max-width:460px;font-size:16.5px;line-height:1.7;}
.page-hero .btn{margin-top:26px;}
.page-hero__visual {aspect-ratio:860/560;}

/* =========================================================
   OUR PURPOSE
   ========================================================= */
.purpose{padding:58px 0 54px;}
.purpose__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:38px;align-items:stretch;}
.purpose__card{
  display:flex;flex-direction:column;align-items:flex-start;
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:var(--radius-lg);
  padding:40px 32px;
  text-align:left;
  box-shadow:var(--shadow-card);
  transition:transform .3s ease, box-shadow .3s ease, border-color .3s ease;
  position:relative;
  overflow:hidden;
}
.purpose__card::before{
  content:"";position:absolute;top:0;left:0;right:0;height:4px;
  background:linear-gradient(90deg, var(--blue-500), var(--blue-300));
  transform:scaleX(0);transform-origin:left;transition:transform .4s ease;
}
.purpose__card:hover{
  transform:translateY(-6px);
  box-shadow:0 24px 48px rgba(11,27,51,.1);
  border-color:transparent;
}
.purpose__card:hover::before{
  transform:scaleX(1);
}
.purpose__icon{
  width:58px;height:58px;border-radius:14px;margin:0 0 24px 0;
  display:flex;align-items:center;justify-content:center;
  color:var(--blue-500);
  background:rgba(37,99,235,.08);
}
.purpose__icon svg{width:28px;height:28px;}
.purpose__card h3{font-size:23px;font-weight:600;margin-bottom:14px;color:var(--ink-900);}
.purpose__card p{font-size:16px;line-height:1.75;color:var(--ink-600);}
.purpose__list{margin-top:20px;display:grid;gap:14px;}
.purpose__list li{display:flex;align-items:flex-start;gap:12px;font-size:15.5px;color:var(--ink-600);line-height:1.55;}
.purpose__list svg{width:20px;height:20px;flex:none;color:var(--blue-500);margin-top:2px;}

/* =========================================================
   OUR JOURNEY
   ========================================================= */
.journey{
  background:
    radial-gradient(80% 130% at 50% 0%,#11224C 0%,transparent 62%),
    var(--navy-700);
  padding:50px 0 48px;
}
.journey .section__title{color:#fff;}
.journey__grid{display:grid;grid-template-columns:repeat(5,1fr);margin-top:38px;}
.journey__step{text-align:center;padding:0 12px;position:relative;}
.journey__bubble{
  width:56px;height:56px;border-radius:50%;margin:0 auto;
  display:flex;align-items:center;justify-content:center;color:#fff;
  background:linear-gradient(150deg,#3B82F6,#1D4ED8);
  box-shadow:0 6px 18px rgba(37,99,235,.35);
  position:relative;z-index:2;
}
.journey__bubble svg{width:26px;height:26px;}
.journey__step::after{
  content:"";position:absolute;top:28px;left:calc(50% + 38px);right:calc(-50% + 38px);
  border-top:2px dotted rgba(147,197,253,.55);z-index:1;
}
.journey__step:last-child::after{display:none;}
.journey__year{
  font-family:var(--ff-display);font-size:22px;font-weight:600;color:#fff;margin-top:18px;
}
.journey__step h3{font-size:17.5px;font-weight:600;color:#fff;margin-top:4px;}
.journey__step p{font-size:15px;line-height:1.7;color:rgba(197,212,236,.8);margin-top:12px;}

/* =========================================================
   LEADERSHIP
   ========================================================= */
.leaders{padding:64px 0 60px;background:var(--surface-2);}
.leaders__grid{
  display:grid;grid-template-columns:repeat(2,1fr);gap:36px;margin-top:42px;
  max-width:900px;margin-inline:auto;
}
.leader{
  display:flex;flex-direction:column;align-items:center;text-align:center;
  background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);
  padding:42px 32px;box-shadow:var(--shadow-card);
  transition:transform .3s ease,box-shadow .3s ease;
  position:relative;overflow:hidden;
}
.leader::before{
  content:"";position:absolute;top:0;left:0;right:0;height:4px;
  background:linear-gradient(90deg, var(--blue-500), var(--blue-300));
}
.leader:hover{transform:translateY(-6px);box-shadow:0 24px 48px rgba(11,27,51,.08);}
.leader__media{flex:none;width:120px;position:relative;margin-bottom:20px;}
.leader__photo{
  width:120px;height:120px;border-radius:50%;overflow:hidden;
  border:4px solid var(--surface-2);box-shadow:0 8px 24px rgba(11,27,51,.1);
}
.leader__photo .placeholder { width: 100%; height: 100%; border-radius: 50%; }
.leader__linkedin{
  position:absolute;bottom:0;right:0;
  width:32px;height:32px;border-radius:50%;
  background:var(--blue-500);color:#fff;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 4px 12px rgba(37,99,235,.3);
  transition:transform .2s ease, background .2s ease;
}
.leader__linkedin:hover{transform:scale(1.1);background:var(--blue-400);}
.leader__linkedin svg{width:16px;height:16px;}
.leader__name{font-size:24px;font-weight:700;color:var(--ink-900);margin-bottom:8px;}
.leader__role{
  display:inline-block;padding:6px 14px;background:rgba(37,99,235,.1);
  color:var(--blue-500);border-radius:20px;
  font-family:var(--ff-display);font-size:13.5px;font-weight:600;
}
.leader__bio{font-size:15px;line-height:1.7;margin-top:18px;color:var(--ink-600);}

/* =========================================================
   WHY CHOOSE / STATS
   ========================================================= */
.stats{background:var(--surface-3);padding:52px 0 50px;}
.stats__grid{display:grid;grid-template-columns:repeat(5,1fr);margin-top:32px;}
.stats__item{text-align:center;padding:4px 16px;border-left:1px solid #D3E0F2;}
.stats__item:first-child{border-left:0;}
.stats__icon{color:var(--blue-400);display:flex;justify-content:center;margin-bottom:14px;}
.stats__icon svg{width:40px;height:40px;}
.stats__num{font-family:var(--ff-display);font-size:36px;font-weight:600;color:var(--ink-900);line-height:1.1;}
.stats__label{font-size:15.5px;margin-top:6px;}

/* =========================================================
   CTA BAND
   ========================================================= */
.cta{background:var(--surface-3);padding:0 0 54px;}
.cta__band{
  position:relative;overflow:hidden;border-radius:var(--radius-lg);
  background:var(--navy-600);padding:40px;min-height:186px;
  display:flex;align-items:center;
}
/* Swap for the real artwork:
   .cta__bg{ background-image:url('assets/about-cta-handshake.jpg'); background-size:cover; background-position:center right; } */
.cta__bg{
  position:absolute;inset:0;
  display:flex;align-items:flex-end;justify-content:flex-end;padding:14px;
  background-image:url('${aboutCta}');
  background-size:cover;
  background-position:center right;
}
.cta__bg::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(90deg, rgba(14,32,68,.9) 20%, rgba(14,32,68,.7) 50%, rgba(14,32,68,.2) 100%);
}
.cta__inner{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:32px;width:100%;}
.cta__eyebrow{
  display:flex;align-items:center;gap:12px;
  font-family:var(--ff-display);font-size:13px;font-weight:600;
  letter-spacing:.14em;color:var(--blue-400);margin-bottom:14px;
}
.cta__eyebrow::before{content:"";width:26px;height:2px;background:#fff;flex:none;}
.cta__title{font-size:32px;font-weight:600;color:#fff;}
.cta__text{color:rgba(206,220,242,.85);margin-top:12px;max-width:440px;font-size:17px;line-height:1.7;}

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
.footer__about{margin-top:16px;font-size:14px;line-height:1.7;max-width:280px;}
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
}

@media (max-width:1080px){
  .purpose__grid{grid-template-columns:1fr 1fr;}
  .purpose__grid .purpose__card:last-child{grid-column:1 / -1;max-width:520px;margin-inline:auto;width:100%;}
  .journey__grid{grid-template-columns:repeat(3,1fr);row-gap:34px;}
  .journey__step:nth-child(3)::after{display:none;}
  .stats__grid{grid-template-columns:repeat(3,1fr);row-gap:30px;}
  .stats__item:nth-child(4){border-left:0;}
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

  .page-hero__grid{grid-template-columns:1fr;gap:30px;padding-top:28px;text-align:center;}
  .page-hero__title{font-size:35px;}
  .page-hero__text{max-width:none;text-align:center;}
  .page-hero__visual{display:none;}
  .page-hero .btn{margin-inline:auto;}
  .page-hero__bg{background:none;}
  .crumbs{justify-content:center;}

  .leaders__grid{grid-template-columns:1fr;max-width:560px;margin-inline:auto;}
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
  .purpose__grid{grid-template-columns:repeat(2,1fr);gap:12px;max-width:none;}
  .purpose__card{text-align:center;align-items:center;padding:20px 14px;border-radius:14px;}
  .purpose__grid .purpose__card:last-child{grid-column:1 / -1;}
  .journey__grid{grid-template-columns:repeat(2,1fr);gap:12px;}
  .journey__step::after{display:none;}
  .stats__grid{grid-template-columns:repeat(2,1fr);gap:12px;}
  .stats__item{padding:14px 10px;text-align:center;}
}

@media (max-width:560px){
  body{font-size:14px;}
  .container{padding:0 14px;}
  .page-hero__title{font-size:26px;line-height:1.25;}
  .page-hero__lead{font-size:15px;line-height:1.5;}
  .page-hero__rule{margin:14px auto 16px;}
  
  /* 2 divs per row on mobile for small cards */
  .purpose__grid{grid-template-columns:repeat(2,1fr);gap:10px;}
  .purpose__card{padding:16px 12px;border-radius:12px;}
  .purpose__card h3{font-size:15px;}
  .purpose__card p{font-size:12.5px;line-height:1.45;}
  .purpose__grid .purpose__card:last-child{grid-column:1 / -1;}

  .journey__grid{grid-template-columns:repeat(2,1fr);gap:10px;row-gap:16px;}
  .journey__step{text-align:center;padding:12px 10px;}
  .journey__num{margin-inline:auto;width:36px;height:36px;font-size:14px;}
  .journey__step h4{font-size:14px;}
  .journey__step p{font-size:12px;line-height:1.4;}

  .stats__grid{grid-template-columns:repeat(2,1fr);gap:10px;row-gap:16px;}
  .stats__item{border-left:0 !important;padding:12px 10px;text-align:center;}
  .stats__num{font-size:24px;}
  .stats__label{font-size:12px;}

  .leaders__grid{grid-template-columns:1fr;gap:16px;max-width:none;}
  .leader{padding:24px 16px;border-radius:14px;}
  .leader__name{font-size:19px;}
  .leader__bio{font-size:13.5px;}

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
  .page-hero__title{font-size:56px;}
  .page-hero__grid{gap:60px;padding-top:70px;}
  .section__title{font-size:42px;}
  .purpose{padding:70px 0 66px;}
  .purpose__grid{gap:32px;margin-top:44px;}
  .journey{padding:64px 0 60px;}
  .journey__grid{margin-top:44px;}
  .leaders{padding:68px 0 66px;}
  .leaders__grid{max-width:1200px;gap:32px;}
  .stats{padding:64px 0 62px;}
  .footer__grid{gap:44px;padding-top:60px;padding-bottom:50px;}
}

@media (prefers-reduced-motion:reduce){
  *{animation:none !important;transition:none !important;scroll-behavior:auto !important;}
}

      `}</style>
      



<header className="page-hero">
  
  <div className="page-hero__bg" aria-hidden="true"></div>

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
          <li><a className="is-active" href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/brands">Brands</a></li>
        </ul>
        <a href="/contact" className="btn btn--primary nav__cta">Contact Us</a>
      </div>
    </nav>

    <div className="page-hero__grid">
      <div>
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>About Us</span>
        </nav>

        <h1 className="page-hero__title">About <span className="accent">ITSCI</span></h1>
        <hr className="page-hero__rule" />
        <p className="page-hero__lead">Innovating Today. Securing Tomorrow.</p>
        <p className="page-hero__text">ITSCI is a USA-based technology and consulting company delivering innovative IT infrastructure, cybersecurity, cloud, and digital solutions to enterprises, governments, and organizations worldwide.</p>
        <p className="page-hero__text">We combine deep industry expertise with a customer-first approach to build secure, scalable, and future-ready solutions that drive performance and create long-term impact.</p>
        <a href="#contact" className="btn btn--primary">Let's Connect <svg viewBox="0 0 24 24" className="arrow"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>

      <div className="page-hero__visual">
      </div>
    </div>
  </div>
</header>


<section className="purpose">
  <div className="container">
    <p className="eyebrow">OUR PURPOSE</p>
    <h2 className="section__title">Driving Innovation. Delivering Impact.</h2>

    <div className="purpose__grid">
      <article className="purpose__card">
        <span className="purpose__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><path d="M12 1.6v3M12 19.4v3M1.6 12h3M19.4 12h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </span>
        <h3>Pioneering the Future</h3>
        <p>We architect secure, hyper-scalable infrastructure that empowers modern enterprises to operate with absolute confidence and agility in a digital-first world.</p>
      </article>

      <article className="purpose__card">
        <span className="purpose__icon">
          <svg viewBox="0 0 24 24"><path d="M2.6 12S6 6.4 12 6.4 21.4 12 21.4 12 18 17.6 12 17.6 2.6 12 2.6 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>
        </span>
        <h3>Redefining Boundaries</h3>
        <p>To be the undisputed global authority in technological transformation, setting entirely new benchmarks for innovation, resilience, and unshakeable trust.</p>
      </article>

      <article className="purpose__card">
        <span className="purpose__icon">
          <svg viewBox="0 0 24 24"><path d="M7.4 4h9.2l3.8 5.2L12 20.4 3.6 9.2 7.4 4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M3.6 9.2h16.8M9.4 4l-1.6 5.2L12 20.4l4.2-11.2L14.6 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
        </span>
        <h3>Core Principles</h3>
        <ul className="purpose__list">
          <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> <strong>Uncompromising Integrity</strong></li>
          <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> <strong>Security by Design</strong></li>
          <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> <strong>Client-Centric Growth</strong></li>
          <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> <strong>Relentless Innovation</strong></li>
        </ul>
      </article>
    </div>
  </div>
</section>


<section className="journey">
  <div className="container">
    <p className="eyebrow">OUR JOURNEY</p>
    <h2 className="section__title">Built on Experience. Driven by Innovation.</h2>

    <div className="journey__grid">
      <article className="journey__step">
        <span className="journey__bubble">
          <svg viewBox="0 0 24 24"><path d="M13.8 3.6c2.6-.5 5.2.4 6.6 1.8 1.4 1.4 2.3 4 1.8 6.6-.4 2.2-2.3 4.4-4.6 6l-.5 3.4-3.4-1.6-2.9-2.9-1.6-3.4 3.4-.5c1.6-2.3 3.8-4.2 6-4.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="15.4" cy="8.6" r="1.7" fill="currentColor"/><path d="M8.2 15.8c-1.3 1.3-1.6 4.2-1.6 4.2s2.9-.3 4.2-1.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </span>
        <p className="journey__year">2015</p>
        <h3>Founded</h3>
        <p>ITSCI was founded with a vision to deliver innovative IT and security solutions with a global mindset.</p>
      </article>

      <article className="journey__step">
        <span className="journey__bubble">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="5.6" cy="10.2" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="18.4" cy="10.2" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M7.4 15.4c.7-2 2.5-3.2 4.6-3.2s3.9 1.2 4.6 3.2M2 17.8c.4-1.9 1.8-3 3.6-3M22 17.8c-.4-1.9-1.8-3-3.6-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="16.8" width="10" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <p className="journey__year">2017</p>
        <h3>Growing Strong</h3>
        <p>Expanded our team and service portfolio, serving enterprises across diverse industries.</p>
      </article>

      <article className="journey__step">
        <span className="journey__bubble">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.6" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="3.8" ry="8.6" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M3.6 9.4h16.8M3.6 14.6h16.8" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <p className="journey__year">2020</p>
        <h3>Global Reach</h3>
        <p>Strengthened our global presence with international projects and technology partnerships.</p>
      </article>

      <article className="journey__step">
        <span className="journey__bubble">
          <svg viewBox="0 0 24 24"><path d="M12 3.2 5.8 5.6v5c0 3.8 2.6 7.2 6.2 8.3 3.6-1.1 6.2-4.5 6.2-8.3v-5L12 3.2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 8.6a2.2 2.2 0 0 0-1.4 3.9v1.7h2.8v-1.7A2.2 2.2 0 0 0 12 8.6Z" fill="currentColor"/></svg>
        </span>
        <p className="journey__year">2023</p>
        <h3>Innovation First</h3>
        <p>Invested in advanced technologies and AI-driven solutions to deliver smarter and secure outcomes.</p>
      </article>

      <article className="journey__step">
        <span className="journey__bubble">
          <svg viewBox="0 0 24 24"><path d="m12 3.4 2.6 5.4 5.9.8-4.3 4.2 1.05 5.9L12 16.9l-5.25 2.8 1.05-5.9L3.5 9.6l5.9-.8L12 3.4Z" fill="currentColor"/></svg>
        </span>
        <p className="journey__year">Today &amp; Beyond</p>
        <h3>Future Ready</h3>
        <p>Continuing our journey of innovation, impact, and building a better digital tomorrow.</p>
      </article>
    </div>
  </div>
</section>


<section className="leaders">
  <div className="container">
    <p className="eyebrow">OUR LEADERSHIP</p>
    <h2 className="section__title">Experienced Leaders. Trusted Guidance.</h2>

    <div className="leaders__grid">
      <article className="leader">
        <div className="leader__media">
          <div className="leader__photo">
            
            <div className="placeholder placeholder--avatar"><span className="ph-label">Photo<br />108 × 108</span></div>
          </div>
          <a href="#" className="leader__linkedin" aria-label="LinkedIn profile">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 8.5H4V20h2.94V8.5ZM5.47 3.9a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.63c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58 1-3.02 1.68V8.5H10.2c.04.83 0 11.5 0 11.5h2.9v-6.42c0-.26.02-.52.1-.7.2-.52.68-1.06 1.48-1.06 1.05 0 1.47.8 1.47 1.96V20H20v-6.37Z"/></svg>
          </a>
        </div>
        <div>
          <h3 className="leader__name">Atul Jain</h3>
          <p className="leader__role">Chief Technology Officer (CTO)</p>
          <p className="leader__bio">Visionary technologist with extensive experience in architecting scalable IT infrastructure, AI solutions, and digital transformation initiatives.</p>
        </div>
      </article>

      <article className="leader">
        <div className="leader__media">
          <div className="leader__photo">
            
            <div className="placeholder placeholder--avatar"><span className="ph-label">Photo<br />108 × 108</span></div>
          </div>
          <a href="#" className="leader__linkedin" aria-label="LinkedIn profile">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 8.5H4V20h2.94V8.5ZM5.47 3.9a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.63c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58 1-3.02 1.68V8.5H10.2c.04.83 0 11.5 0 11.5h2.9v-6.42c0-.26.02-.52.1-.7.2-.52.68-1.06 1.48-1.06 1.05 0 1.47.8 1.47 1.96V20H20v-6.37Z"/></svg>
          </a>
        </div>
        <div>
          <h3 className="leader__name">St Francis Holder</h3>
          <p className="leader__role">Chief Executive Officer (CEO)</p>
          <p className="leader__bio">Strategic leader with a strong focus on growth, innovation, and delivering value through technology-driven solutions worldwide.</p>
        </div>
      </article>
    </div>
  </div>
</section>


<section className="stats">
  <div className="container">
    <p className="eyebrow">WHY CHOOSE ITSCI?</p>
    <h2 className="section__title">Partners in Your Success</h2>

    <div className="stats__grid">
      <article className="stats__item">
        <span className="stats__icon">
          <svg viewBox="0 0 24 24"><path d="M12 3 5.5 5.6v5c0 3.9 2.7 7.4 6.5 8.6 3.8-1.2 6.5-4.7 6.5-8.6v-5L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m12 8.6 1.1 2.2 2.4.35-1.75 1.7.4 2.4L12 14.1l-2.15 1.15.4-2.4-1.75-1.7 2.4-.35L12 8.6Z" fill="currentColor"/></svg>
        </span>
        <p className="stats__num">10+</p>
        <p className="stats__label">Years of Excellence</p>
      </article>

      <article className="stats__item">
        <span className="stats__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="7.2" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="5.6" cy="10.4" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="18.4" cy="10.4" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M7.4 15.6c.7-2 2.5-3.2 4.6-3.2s3.9 1.2 4.6 3.2M2 18c.4-1.9 1.8-3 3.6-3M22 18c-.4-1.9-1.8-3-3.6-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="17" width="10" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <p className="stats__num">50+</p>
        <p className="stats__label">Enterprise Clients</p>
      </article>

      <article className="stats__item">
        <span className="stats__icon">
          <svg viewBox="0 0 24 24"><rect x="3" y="7.4" width="18" height="11.6" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M9 7.4V5.8a1.6 1.6 0 0 1 1.6-1.6h2.8A1.6 1.6 0 0 1 15 5.8v1.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M3 12.4h18" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="10.6" y="11" width="2.8" height="2.8" rx=".7" fill="currentColor"/></svg>
        </span>
        <p className="stats__num">100+</p>
        <p className="stats__label">Projects Delivered</p>
      </article>

      <article className="stats__item">
        <span className="stats__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M3.2 9.2h17.6M3.2 14.8h17.6" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        <p className="stats__num">20+</p>
        <p className="stats__label">Industries Served</p>
      </article>

      <article className="stats__item">
        <span className="stats__icon">
          <svg viewBox="0 0 24 24"><path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M20.7 3.6v4.2h-4.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="7" font-family="Poppins, sans-serif" font-weight="600" fill="currentColor">24</text></svg>
        </span>
        <p className="stats__num">24/7</p>
        <p className="stats__label">Support &amp; Monitoring</p>
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
          <h2 className="cta__title">Ready to Transform Your Business?</h2>
          <p className="cta__text">Partner with ITSCI for secure, scalable, and innovative technology solutions that drive results.</p>
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
