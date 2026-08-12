import React, { useEffect } from "react";
import contactHeroBg from "../assets/contact-hero.png";
import officeUsa from "../assets/office-usa.png";
import officeDubai from "../assets/office-dubai.png";
import officeIndia from "../assets/office-india.png";

export default function Contact() {
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
    <div className="contact-page">
      <style>{`
  /* ============================================
     ITSCI CONTACT PAGE — DEV HANDOFF TEMPLATE
     Replace placeholders marked [[ REPLACE IMAGE ]]
     with real client assets before launch.
     ============================================ */

  :root{
    --navy-950:#0b1530;
    --navy-900:#0d1a3a;
    --navy-800:#122150;
    --navy-700:#0A1636;
    --blue-600:#2f5bea;
    --blue-500:#3866f2;
    --blue-400:#3B82F6;
    --blue-300:#60A5FA;
    --blue-100:#e8edfd;
    --text-dark:#12172b;
    --text-muted:#6b7280;
    --border:#e5e8f0;
    --white:#ffffff;
    --bg-light:#f7f8fb;
    --radius-md:10px;
    --radius-lg:16px;
    --max-width:1440px;
    --font-heading:"Poppins", "Segoe UI", system-ui, sans-serif;
    --font-body:"Inter", "Segoe UI", system-ui, sans-serif;
  }

  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    font-family:var(--font-body);
    color:var(--text-dark);
    background:var(--white);
    line-height:1.7;
    font-size:17px;
    -webkit-font-smoothing:antialiased;
  }
  img{max-width:100%;display:block;}
  a{text-decoration:none;color:inherit;}
  ul{list-style:none;}
  button{font-family:inherit;cursor:pointer;border:none;}
  input,textarea{font-family:inherit;font-size:17px;}
  .container{
    width:100%;
    max-width:var(--max-width);
    margin:0 auto;
    padding:0 40px;
  }
  @media (min-width:1440px){
    .container{max-width:1600px;padding:0 60px;}
  }
  section{width:100%;max-width:100%;}
  .contact-page{overflow-x:hidden;}
  .visually-hidden{
    position:absolute;width:1px;height:1px;overflow:hidden;
    clip:rect(0 0 0 0);white-space:nowrap;
  }

  /* ============ TOP UTILITY BAR ============ */
  .topbar{
    background:var(--navy-950);
    color:#c9d3f0;
    font-size:13px;
  }
  .topbar .container{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-top:10px;
    padding-bottom:10px;
    flex-wrap:wrap;
    gap:8px;
  }
  .topbar-info{
    display:flex;
    align-items:center;
    gap:24px;
    flex-wrap:wrap;
  }
  .topbar-info span{
    display:inline-flex;
    align-items:center;
    gap:6px;
    white-space:nowrap;
  }
  .topbar-social{
    display:flex;
    align-items:center;
    gap:14px;
  }
  .topbar-social a{
    width:28px;height:28px;
    display:inline-flex;align-items:center;justify-content:center;
    border-radius:50%;
    background:rgba(255,255,255,0.08);
    transition:background .2s ease;
  }
  .topbar-social a:hover{background:var(--blue-600);}
  .icon{width:14px;height:14px;fill:currentColor;flex-shrink:0;}

  /* ============ HEADER / NAV ============ */
  .site-header{
    background:var(--white);
    border-bottom:1px solid var(--border);
    position:sticky;
    top:0;
    z-index:100;
  }
  .site-header .container{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-top:16px;
    padding-bottom:16px;
    gap:20px;
  }
  .logo{
    font-family:var(--font-heading);
    font-weight:700;
    font-size:24px;
    letter-spacing:3px;
    color:var(--navy-950);
    line-height:1;
  }
  .logo small{
    display:block;
    font-size:9px;
    letter-spacing:2px;
    font-weight:500;
    color:var(--text-muted);
    margin-top:4px;
  }
  .main-nav{
    display:flex;
    align-items:center;
    gap:32px;
  }
  .main-nav a{
    font-size:15px;
    font-weight:500;
    color:var(--text-dark);
    display:inline-flex;
    align-items:center;
    gap:4px;
    padding:8px 0;
    transition:color .2s ease;
  }
  .main-nav a:hover{color:var(--blue-600);}
  .main-nav a.active{
    color:var(--blue-600);
    border-bottom:2px solid var(--blue-600);
  }
  .caret{width:10px;height:10px;fill:currentColor;opacity:.6;}
  .header-cta{
    display:flex;
    align-items:center;
    gap:16px;
  }
  .btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:12px 24px;
    border-radius:8px;
    font-weight:600;
    font-size:17px;
    transition:all .2s ease;
    white-space:nowrap;
  }
  .btn-primary{
    background:var(--blue-600);
    color:var(--white);
  }
  .btn-primary:hover{background:#2549c4;}
  .btn-outline{
    background:transparent;
    border:1.5px solid var(--white);
    color:var(--white);
  }
  .btn-outline:hover{background:rgba(255,255,255,0.1);}

  .nav-toggle{
    display:none;
    flex-direction:column;
    gap:5px;
    background:none;
    padding:6px;
  }
  .nav-toggle span{
    width:24px;height:2px;background:var(--navy-950);border-radius:2px;
  }

  /* ============ HERO ============ */
  .hero{
    background:linear-gradient(120deg, rgba(11,21,48,.85) 0%, rgba(13,26,58,.8) 55%, rgba(18,33,80,.75) 100%),
      url('${contactHeroBg}');
    background-size:cover;background-position:center;
    color:var(--white);position:relative;width:100vw;margin-left:calc(-50vw + 50%);
  }
  .hero > .container{padding-top:28px;}
  .hero-inner{
    position:relative;
    z-index:2;
    padding:72px 0 56px;
  }
  .hero h1{
    font-family:var(--font-heading);
    font-size:52px;
    line-height:1.2;
    font-weight:600;
    letter-spacing:-.5px;
  }
  .hero h1 .accent{color:#5b8dff;}
  .hero p{
    margin-top:18px;
    font-size:18px;
    color:#b9c3e0;
    max-width:480px;
    line-height:1.7;
  }
  .hero-contacts{
    display:flex;
    gap:32px;
    margin-top:36px;
    flex-wrap:wrap;
  }
  .hero-contact-item{
    display:flex;
    align-items:center;
    gap:12px;
  }
  .hero-contact-item .icon-circle{
    width:44px;height:44px;
    border-radius:50%;
    border:1.5px solid #3a4a80;
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;
  }
  .hero-contact-item .icon-circle svg{width:18px;height:18px;fill:#7ea0ff;}
  .hero-contact-item .label-top{font-size:17px;font-weight:600;}
  .hero-contact-item .label-bottom{font-size:12px;color:#8f9bc4;}

  /* Hero image / map placeholder */
  .hero-media{
    position:relative;
    min-height:280px;
    border-radius:var(--radius-lg);
    overflow:hidden;
  }
  .hero-media .img-placeholder{
    width:100%;
    height:100%;
    min-height:280px;
    border-radius:var(--radius-lg);
  }
  .map-pin{
    position:absolute;
    top:38%;
    right:14%;
    width:34px;height:34px;
    filter:drop-shadow(0 0 12px rgba(91,141,255,.9));
  }

  /* ============ IMAGE PLACEHOLDER UTILITY ============ */
  .img-placeholder{
    background:repeating-linear-gradient(45deg, #e9ecf6, #e9ecf6 10px, #dfe3f2 10px, #dfe3f2 20px);
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:#6a75a3;
    font-size:12px;
    font-weight:600;
    line-height:1.4;
    padding:8px;
  }
  .img-placeholder span{
    background:rgba(255,255,255,.85);
    padding:6px 10px;
    border-radius:6px;
    max-width:90%;
  }
  .hero-media .img-placeholder{
    background:
      radial-gradient(circle at 70% 40%, rgba(91,141,255,.25), transparent 45%),
      repeating-linear-gradient(45deg, #101c40, #101c40 10px, #0c1636 10px, #0c1636 20px);
    color:#9fb4ff;
  }
  .hero-media .img-placeholder span{
    background:rgba(11,21,48,.75);
    color:#cfdcff;
  }

  /* ============ CONTACT SECTION ============ */
  .contact-section{
    padding:64px 0;
    background:var(--bg-light);
  }
  .contact-grid{
    display:grid;
    grid-template-columns:1.15fr 0.85fr;
    gap:32px;
  }
  .card{
    background:var(--white);
    border-radius:var(--radius-lg);
    border:1px solid var(--border);
    padding:36px;
  }
  .section-eyebrow{
    width:44px;
    height:3px;
    background:var(--blue-600);
    border-radius:2px;
    margin:10px 0 18px;
  }
  h2{
    font-family:var(--font-heading);
    font-size:32px;
    font-weight:600;
    color:var(--navy-950);
  }
  .section-sub{
    font-size:18px;
    color:var(--text-muted);
    margin-top:4px;
    line-height:1.7;
  }

  .form-row{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
    margin-top:20px;
  }
  .field{
    display:flex;
    flex-direction:column;
  }
  .field.full{grid-column:1 / -1;}
  .field input,
  .field textarea{
    padding:13px 16px;
    border:1px solid var(--border);
    border-radius:8px;
    background:#fbfcfe;
    color:var(--text-dark);
    outline:none;
    transition:border-color .2s ease, box-shadow .2s ease;
  }
  .field input::placeholder,
  .field textarea::placeholder{color:#9aa1b4;}
  .field input:focus,
  .field textarea:focus{
    border-color:var(--blue-600);
    box-shadow:0 0 0 3px rgba(56,102,242,.12);
    background:var(--white);
  }
  .field textarea{resize:vertical;min-height:130px;}
  .submit-btn{
    margin-top:24px;
    width:100%;
  }
  @media (min-width:600px){
    .submit-btn{width:auto;padding:14px 32px;}
  }

  /* Get in touch list */
  .touch-list{
    display:flex;
    flex-direction:column;
    gap:0;
    margin-top:22px;
  }
  .touch-item{
    display:flex;
    gap:16px;
    align-items:flex-start;
    padding:16px 0;
  }
  .touch-item:not(:last-child){
    border-bottom:1px solid var(--border);
  }
  .touch-icon{
    width:44px;height:44px;
    border-radius:10px;
    background:var(--blue-100);
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;
  }
  .touch-icon svg{width:20px;height:20px;fill:var(--blue-600);}
  .touch-item h3{
    font-size:18px;
    font-weight:600;
    color:var(--navy-950);
    margin-bottom:4px;
  }
  .touch-item p{
    font-size:15.5px;
    color:var(--text-muted);
    line-height:1.7;
  }

  /* ============ OUR OFFICES ============ */
  .offices-section{
    padding:64px 0;
    text-align:center;
  }
  .offices-section h2{margin:0 auto;}
  .offices-section .section-eyebrow{margin:10px auto 8px;}
  .offices-section .section-sub{margin-bottom:36px;}
  .offices-grid{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:24px;
    text-align:left;
  }
  .office-card{
    border:1px solid var(--border);
    border-radius:var(--radius-lg);
    overflow:hidden;
    display:flex;
    flex-direction:column;
  }
  @media (min-width:640px){
    .office-card{flex-direction:row;}
  }
  .office-card .img-placeholder{
    width:100%;
    height:150px;
    position:relative;
    flex-shrink:0;
    background:none;
    padding:0;
  }
  @media (min-width:640px){
    .office-card .img-placeholder{width:130px;height:auto;}
  }
  .office-card .img-placeholder img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .office-pin{
    position:absolute;
    top:10px;left:10px;
    width:28px;height:28px;
    background:var(--white);
    border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 2px 6px rgba(0,0,0,.15);
    z-index:10;
  }
  .office-pin svg{width:14px;height:14px;fill:var(--blue-600);}
  .office-info{
    padding:16px 18px;
    flex:1;
  }
  .office-info h3{
    font-size:18px;
    font-weight:600;
    color:var(--navy-950);
    margin-bottom:6px;
  }
  .office-info p{
    font-size:15px;
    color:var(--text-muted);
    line-height:1.7;
  }
  .office-info .office-phone{
    margin-top:8px;
    font-size:15px;
    font-weight:600;
    color:var(--blue-600);
  }

  /* ============ CTA BANNER ============ */
  .cta-banner{
    background:var(--navy-950);
    border-radius:var(--radius-lg);
    color:var(--white);
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    padding:32px 40px;
    margin:0 24px 64px;
    max-width:calc(var(--max-width) - 48px);
    margin-left:auto;
    margin-right:auto;
    flex-wrap:wrap;
  }
  .cta-left{
    display:flex;
    align-items:center;
    gap:20px;
  }
  .cta-icon{
    width:52px;height:52px;
    border-radius:50%;
    border:1.5px solid #3a4a80;
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;
  }
  .cta-icon svg{width:22px;height:22px;fill:#7ea0ff;}
  .cta-left h3{font-size:19px;font-weight:600;margin-bottom:4px;}
  .cta-left p{font-size:13.5px;color:#a9b4d8;}
  .cta-banner .btn-outline{flex-shrink:0;}

  /* ============ FOOTER ============ */
  .footer{background:var(--navy-700);color:rgba(203,217,240,.78);font-size:15.5px;width:100vw;margin-left:calc(-50vw + 50%);}
  .footer ul{margin:0;padding:0;list-style:none;}
  .footer p{margin:0;}
  .footer h4{margin:0;font-family:var(--font-heading);}
  .footer .ic{width:16px;height:16px;flex:none;}
  .footer__grid{
    display:grid;grid-template-columns:1.5fr 1fr 1fr 1.35fr;
    gap:34px;padding-top:52px;padding-bottom:44px;
  }
  .footer .logo{display:inline-flex;flex-direction:column;align-items:flex-start;text-decoration:none;}
  .footer .logo__name{color:#fff;font-family:var(--font-heading);font-weight:600;font-size:28px;letter-spacing:.14em;line-height:1.1;text-decoration:none;}
  .footer .logo__tag{color:rgba(203,217,240,.6);border-top:1px solid rgba(255,255,255,.22);margin-top:4px;padding-top:4px;font-size:7.5px;font-weight:500;letter-spacing:.2em;font-family:var(--font-heading);}
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

  /* ============ RESPONSIVE ============ */
  @media (max-width:991px){
    .hero-inner{grid-template-columns:1fr;}
    .hero-media{order:-1;min-height:220px;}
    .hero-media .img-placeholder{min-height:220px;}
    .contact-grid{grid-template-columns:1fr;}
    .offices-grid{grid-template-columns:1fr 1fr;}
    .footer__grid{grid-template-columns:1fr 1fr;}
  }

  @media (max-width:768px){
    .main-nav{
      position:fixed;
      top:0;left:0;
      width:78%;
      max-width:320px;
      height:100vh;
      background:var(--white);
      flex-direction:column;
      align-items:flex-start;
      padding:90px 28px 28px;
      gap:22px;
      transform:translateX(-100%);
      transition:transform .3s ease;
      z-index:200;
      box-shadow:2px 0 20px rgba(0,0,0,.1);
    }
    .main-nav.open{transform:translateX(0);}
    .nav-toggle{display:flex;}
    .header-cta .btn-outline-header{display:none;}
    .topbar-info span:nth-child(2),
    .topbar-info span:nth-child(3){display:none;}
    .hero{padding:48px 0 40px;}
    .hero h1{font-size:32px;}
    .hero-contacts{gap:20px;}
    .card{padding:24px;}
    .form-row{grid-template-columns:1fr;}
    .offices-grid{grid-template-columns:1fr;}
    .office-card{flex-direction:row;}
    .office-card .img-placeholder{width:110px;height:auto;}
    .cta-banner{padding:26px;justify-content:flex-start;}
    .cta-banner .btn-outline{width:100%;justify-content:center;}
    .footer__grid{grid-template-columns:1fr 1fr;}
    h2{font-size:22px;}
  }

  @media (max-width:560px){
    .container{padding:0 16px;}
    .hero h1{font-size:27px;}
    .footer__grid{grid-template-columns:1fr; text-align:center; gap:44px; padding-top:68px; padding-bottom:60px;}
    .footer .logo{align-items:center;}
    .footer__col{align-items:center;}
    .footer__col p{text-align:center;}
    .footer__contact li{flex-direction:column; align-items:center; gap:8px;}
    .footer__bar-inner{flex-direction:column; gap:16px; padding-top:24px; padding-bottom:24px;}
    .hero-contact-item .label-bottom{display:none;}
    .office-card{flex-direction:column;}
    .office-card .img-placeholder{width:100%;height:140px;}
    .cta-banner{
      flex-direction: column;
      align-items: stretch;
      text-align: center;
      padding: 30px 20px;
    }
    .cta-left{
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
    }
    .cta-banner .btn-outline{
      margin-top: 16px;
      width: 100%;
      justify-content: center;
    }
  }

  /* Overlay for mobile nav */
  .nav-overlay{
    display:none;
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.4);
    z-index:150;
  }
  .nav-overlay.open{display:block;}

/* ---------- Nav ---------- */
.nav{
  display:flex;align-items:center;justify-content:space-between;gap:24px;
  background:#fff;border-radius:12px;padding:14px 22px;margin-top:18px;
  box-shadow:0 10px 30px rgba(2,8,23,.28);position:relative;z-index:20;
}
.hero .nav{
  margin-top:0;
}
.logo{display:block;}
.logo__name{
  display:block;font-family:var(--font-heading);font-weight:600;
  font-size:28px;letter-spacing:.14em;color:#0B1B33;line-height:1.1;
}
.logo__tag{
  display:block;font-family:var(--font-heading);font-size:7.5px;font-weight:500;
  letter-spacing:.2em;color:#7C8AA0;margin-top:4px;padding-top:4px;border-top:1px solid #DCE3EE;
}
.nav__menu{display:flex;align-items:center;gap:30px;}
.nav__links{display:flex;align-items:center;gap:28px;list-style:none;margin:0;padding:0;}
.nav__links a{
  display:inline-flex;align-items:center;gap:5px;
  font-family:var(--font-heading);font-size:16px;font-weight:500;color:#2C3A4F;
  transition:color .18s ease;text-decoration:none;
}
.nav__links a:hover,.nav__links a.is-active{color:#2563EB;}
.nav__cta{
  padding:11px 22px;border-radius:8px;background:#2563EB;color:#fff;
  font-family:var(--font-heading);font-size:16px;font-weight:500;text-decoration:none;
  transition:transform .18s ease, background-color .18s ease, box-shadow .18s ease;
  box-shadow:0 6px 18px rgba(37,99,235,.28);
}
.nav__cta:hover{background:#1D4ED8;transform:translateY(-2px);}
.nav__toggle{
  display:none;flex-direction:column;justify-content:center;gap:5px;
  width:42px;height:38px;padding:0 9px;background:transparent;
  border:1px solid #E3E9F2;border-radius:8px;cursor:pointer;
}
.nav__toggle span{display:block;height:2px;width:100%;background:#0B1B33;border-radius:2px;transition:transform .2s ease,opacity .2s ease;}

@media (max-width:960px){
  .nav__toggle{display:flex;}
  .nav{flex-wrap:wrap;padding:14px 18px;}
  .nav__menu{
    display:none;width:100%;flex-direction:column;align-items:stretch;
    gap:6px;padding-top:14px;margin-top:12px;border-top:1px solid #E3E9F2;
  }
  .nav.is-open .nav__menu{display:flex;}
  .nav__links{flex-direction:column;align-items:stretch;gap:0;}
  .nav__links li{border-bottom:1px solid #F0F3F8;width:100%;}
  .nav__links a{padding:12px 4px;justify-content:space-between;display:block;}
  .nav__cta{justify-content:center;margin-top:14px;display:flex;}
  .nav.is-open .nav__toggle span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .nav.is-open .nav__toggle span:nth-child(2){opacity:0;}
  .nav.is-open .nav__toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
}
`}</style>
      




{/* ============ HERO ============ */}
<section className="hero">
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
          <li><a href="/brands">Brands</a></li>
          <li><a className={''} href="/resources">Resources</a></li>
          <li><a className={'is-active'} href="/contact">Contact</a></li>
        </ul>
        <a className={'btn btn--primary nav__cta is-active'} href="/contact">Contact Us</a>
      </div>
    </nav>
    <div className="hero-inner">
      <div className="hero-copy">
      <h1>Let's Build<br /><span className="accent">Something Amazing</span><br />Together</h1>
      <p>Have a question, need a consultation, or want to partner with us? We're here to help you achieve your goals.</p>

      <div className="hero-contacts">
        <div className="hero-contact-item">
          <div className="icon-circle">
            <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
          </div>
          <div>
            <div className="label-top">+1 (240) 123-4567</div>
            <div className="label-bottom">Call Us</div>
          </div>
        </div>
        <div className="hero-contact-item">
          <div className="icon-circle">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </div>
          <div>
            <div className="label-top">support@itsci.com</div>
            <div className="label-bottom">Email Us</div>
          </div>
        </div>
        <div className="hero-contact-item">
          <div className="icon-circle">
            <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-4v-2h2V7h2v6z"/></svg>
          </div>
          <div>
            <div className="label-top">08:00am - 06:00pm</div>
            <div className="label-bottom">Mon - Fri</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

{/* ============ CONTACT FORM + GET IN TOUCH ============ */}
<section className="contact-section">
  <div className="container contact-grid">

    {/* Send us a message */}
    <div className="card">
      <h2>Send Us a Message</h2>
      <div className="section-eyebrow"></div>
      <p className="section-sub">Fill out the form below and our team will get back to you shortly.</p>

      <form>
        <div className="form-row">
          <div className="field">
            <input type="text" placeholder="Full Name *" required />
          </div>
          <div className="field">
            <input type="email" placeholder="Work Email *" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <input type="text" placeholder="Company Name" />
          </div>
          <div className="field">
            <input type="tel" placeholder="Phone Number" />
          </div>
        </div>
        <div className="form-row">
          <div className="field full">
            <input type="text" placeholder="Subject *" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field full">
            <textarea placeholder="Message *&#10;How can we help you?" required></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          Send Message
          <svg className="icon" viewBox="0 0 24 24" style={{width: "16px", height: "16px"}}><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
        </button>
      </form>
    </div>

    {/* Get in touch */}
    <div className="card">
      <h2>Get in Touch</h2>
      <div className="section-eyebrow"></div>
      <p className="section-sub">Reach out to us through any of the following channels.</p>

      <div className="touch-list">
        <div className="touch-item">
          <div className="touch-icon"><svg viewBox="0 0 24 24"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 11.5 7.3 11.8.2.1.4.2.7.2s.5-.1.7-.2C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/></svg></div>
          <div>
            <h3>Head Office</h3>
            <p>7454 Old Alexandria Ferry Rd,<br />Clinton, Maryland 20735, USA</p>
          </div>
        </div>
        <div className="touch-item">
          <div className="touch-icon"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
          <div>
            <h3>Email Us</h3>
            <p>support@itsci.com<br />info@itsci.com</p>
          </div>
        </div>
        <div className="touch-item">
          <div className="touch-icon"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/></svg></div>
          <div>
            <h3>Call Us</h3>
            <p>+1 (240) 123-4567<br />+1 (240) 765-8901</p>
          </div>
        </div>
        <div className="touch-item">
          <div className="touch-icon"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-4v-2h2V7h2v6z"/></svg></div>
          <div>
            <h3>Office Hours</h3>
            <p>Monday - Friday<br />08:00am - 06:00pm (EST)</p>
          </div>
        </div>
        <div className="touch-item">
          <div className="touch-icon"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15.6 15.6 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8zM12 4c.8 1.1 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.9 1.9-4zM4.3 14a8.1 8.1 0 0 1 0-4h3.4a16.8 16.8 0 0 0 0 4H4.3zm.8 2h3a15.6 15.6 0 0 0 1.4 3.6A8 8 0 0 1 5.1 16zm3-8h-3a8 8 0 0 1 4.4-3.6A15.6 15.6 0 0 0 8.1 8zM12 20c-.8-1.1-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.9-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.4 5.6c.6-1.1 1.1-2.3 1.4-3.6h3a8 8 0 0 1-4.4 3.6zm1.8-5.6a16.8 16.8 0 0 0 0-4h3.4a8.1 8.1 0 0 1 0 4h-3.4z"/></svg></div>
          <div>
            <h3>Website</h3>
            <p>www.itsci.com</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* ============ OUR OFFICES ============ */}
<section className="offices-section">
  <div className="container">
    <h2>Our Offices</h2>
    <div className="section-eyebrow"></div>
    <p className="section-sub">We operate globally to serve you better.</p>

    <div className="offices-grid">
      <div className="office-card">
        <div className="img-placeholder">
          <img src={officeUsa} alt="USA Office" />
          <div className="office-pin"><svg viewBox="0 0 24 24"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 11.5 7.3 11.8.2.1.4.2.7.2s.5-.1.7-.2C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/></svg></div>
        </div>
        <div className="office-info">
          <h3>USA – Head Office</h3>
          <p>7454 Old Alexandria Ferry Rd, Clinton, Maryland 20735, USA</p>
          <div className="office-phone">+1 (240) 123-4567</div>
        </div>
      </div>

      <div className="office-card">
        <div className="img-placeholder">
          <img src={officeIndia} alt="India Office" />
          <div className="office-pin"><svg viewBox="0 0 24 24"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 11.5 7.3 11.8.2.1.4.2.7.2s.5-.1.7-.2C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/></svg></div>
        </div>
        <div className="office-info">
          <h3>India Office</h3>
          <p>Gurugram, Haryana, India – 122002</p>
          <div className="office-phone">+91 98765 43210</div>
        </div>
      </div>

      <div className="office-card">
        <div className="img-placeholder">
          <img src={officeDubai} alt="UAE Office" />
          <div className="office-pin"><svg viewBox="0 0 24 24"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 11.5 7.3 11.8.2.1.4.2.7.2s.5-.1.7-.2C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/></svg></div>
        </div>
        <div className="office-info">
          <h3>UAE Office</h3>
          <p>Dubai Silicon Oasis, Dubai, UAE</p>
          <div className="office-phone">+971 50 123 4567</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ CTA BANNER ============ */}
<div className="cta-banner">
  <div className="cta-left">
    <div className="cta-icon">
      <svg viewBox="0 0 24 24"><path d="M12 1a9 9 0 0 0-9 9v7a3 3 0 0 0 3 3h1v-8H5v-2a7 7 0 0 1 14 0v2h-2v8h1a3 3 0 0 0 3-3v-7a9 9 0 0 0-9-9z"/></svg>
    </div>
    <div>
      <h3>Ready to start your next project?</h3>
      <p>Our experts are ready to discuss how ITSCI can help you achieve more.</p>
    </div>
  </div>
  <a href="#" className="btn btn-outline">Schedule a Consultation →</a>
</div>

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
