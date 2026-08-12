import React, { useEffect } from "react";
import resourcesHeroBg from "../assets/resources-hero.png";
import resourceSecure from "../assets/resources-hero.png";
import resourceCloud from "../assets/resource-cloud.png";
import resourceCyber from "../assets/resource-cyber.png";
import resourceTransform from "../assets/resource-transform.png";

export default function Resources() {
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
    <div className="resources-page">
      <style>{`
  /* ============================================
     ITSCI RESOURCES PAGE — DEV HANDOFF TEMPLATE
     Uses the same design system as the Contact page.
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
  button{font-family:inherit;cursor:pointer;border:none;background:none;}
  input{font-family:inherit;font-size:17px;}
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
  .resources-page{overflow-x:hidden;}
  .icon{width:14px;height:14px;fill:currentColor;flex-shrink:0;}

  /* ============ TOP UTILITY BAR ============ */
  .topbar{background:var(--navy-950);color:#c9d3f0;font-size:13px;}
  .topbar .container{
    display:flex;align-items:center;justify-content:space-between;
    padding-top:10px;padding-bottom:10px;flex-wrap:wrap;gap:8px;
  }
  .topbar-info{display:flex;align-items:center;gap:24px;flex-wrap:wrap;}
  .topbar-info span{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;}
  .topbar-social{display:flex;align-items:center;gap:14px;}
  .topbar-social a{
    width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;
    border-radius:50%;background:rgba(255,255,255,0.08);transition:background .2s ease;
  }
  .topbar-social a:hover{background:var(--blue-600);}

  /* ============ HEADER / NAV ============ */
  .site-header{background:var(--white);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100;}
  .site-header .container{
    display:flex;align-items:center;justify-content:space-between;
    padding-top:16px;padding-bottom:16px;gap:20px;
  }
  .logo{
    font-family:var(--font-heading);font-weight:700;font-size:24px;letter-spacing:3px;
    color:var(--navy-950);line-height:1;
  }
  .logo small{
    display:block;font-size:9px;letter-spacing:2px;font-weight:500;
    color:var(--text-muted);margin-top:4px;
  }
  .main-nav{display:flex;align-items:center;gap:32px;}
  .main-nav a{
    font-size:15px;font-weight:500;color:var(--text-dark);
    display:inline-flex;align-items:center;gap:4px;padding:8px 0;transition:color .2s ease;
  }
  .main-nav a:hover{color:var(--blue-600);}
  .main-nav a.active{color:var(--blue-600);border-bottom:2px solid var(--blue-600);}
  .caret{width:10px;height:10px;fill:currentColor;opacity:.6;}
  .header-cta{display:flex;align-items:center;gap:16px;}
  .btn{
    display:inline-flex;align-items:center;justify-content:center;gap:8px;
    padding:12px 24px;border-radius:8px;font-weight:600;font-size:17px;
    transition:all .2s ease;white-space:nowrap;
  }
  .btn-primary{background:var(--blue-600);color:var(--white);}
  .btn-primary:hover{background:#2549c4;}
  .btn-outline{background:transparent;border:1.5px solid var(--white);color:var(--white);}
  .btn-outline:hover{background:rgba(255,255,255,0.1);}
  .btn-outline-dark{background:transparent;border:1.5px solid var(--border);color:var(--text-dark);}
  .btn-outline-dark:hover{border-color:var(--blue-600);color:var(--blue-600);}
  .nav-toggle{display:none;flex-direction:column;gap:5px;padding:6px;}
  .nav-toggle span{width:24px;height:2px;background:var(--navy-950);border-radius:2px;}
  .nav-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:150;}
  .nav-overlay.open{display:block;}

  /* ============ IMAGE PLACEHOLDER UTILITY ============ */
  .img-placeholder{
    background:repeating-linear-gradient(45deg, #e9ecf6, #e9ecf6 10px, #dfe3f2 10px, #dfe3f2 20px);
    display:flex;align-items:center;justify-content:center;text-align:center;
    color:#6a75a3;font-size:12px;font-weight:600;line-height:1.4;padding:8px;
  }
  .img-placeholder span{
    background:rgba(255,255,255,.85);padding:6px 10px;border-radius:6px;max-width:90%;
  }
  .img-placeholder.dark{
    background:
      radial-gradient(circle at 70% 30%, rgba(91,141,255,.25), transparent 45%),
      repeating-linear-gradient(45deg, #101c40, #101c40 10px, #0c1636 10px, #0c1636 20px);
    color:#9fb4ff;
  }
  .img-placeholder.dark span{background:rgba(11,21,48,.75);color:#cfdcff;}

  /* ============ HERO ============ */
  .hero{
    background:linear-gradient(120deg, rgba(11,21,48,.85) 0%, rgba(13,26,58,.8) 55%, rgba(18,33,80,.75) 100%),
      url('${resourcesHeroBg}');
    background-size:cover;background-position:center;
    color:var(--white);position:relative;width:100vw;margin-left:calc(-50vw + 50%);
  }
  .hero > .container{padding-top:28px;}
  .hero-inner{
    position:relative;z-index:2;
    padding:64px 0 72px;
  }
  .hero h1{font-family:var(--font-heading);font-size:52px;font-weight:600;letter-spacing:-.5px;}
  .hero p{margin-top:14px;font-size:18px;color:#b9c3e0;max-width:480px;line-height:1.7;}
  .hero-search{
    margin-top:26px;display:flex;align-items:center;gap:10px;
    background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);
    border-radius:8px;padding:6px 6px 6px 18px;max-width:420px;
  }
  .hero-search input{
    flex:1;background:transparent;border:none;outline:none;color:var(--white);
    font-size:17px;padding:10px 0;
  }
  .hero-search input::placeholder{color:#8a94ba;}
  .hero-search button{
    width:38px;height:38px;background:var(--blue-600);border-radius:6px;
    display:flex;align-items:center;justify-content:center;flex-shrink:0;
  }
  .hero-search button svg{width:16px;height:16px;fill:var(--white);}
  .hero-media{min-height:230px;border-radius:var(--radius-lg);overflow:hidden;}
  .hero-media .img-placeholder{width:100%;height:100%;min-height:230px;border-radius:var(--radius-lg);}

  /* Filter tabs bar (overlaps hero bottom edge via negative margin, not transform,
     so it is never clipped — it sits as a normal-flow sibling after .hero) */
  .filter-bar-wrap{position:relative;z-index:5;margin-top:-56px;}
  .filter-bar{
    background:var(--white);border:1px solid var(--border);border-radius:var(--radius-lg);
    box-shadow:0 12px 30px rgba(15,25,60,.12);
    display:flex;justify-content:space-between;flex-wrap:wrap;
    padding:22px 28px;
  }
  .filter-tab{
    display:flex;flex-direction:column;align-items:center;gap:8px;
    font-size:13px;font-weight:500;color:var(--text-muted);
    padding:4px 8px;border-bottom:2px solid transparent;
  }
  .filter-tab svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.6;}
  .filter-tab.active{color:var(--blue-600);border-bottom-color:var(--blue-600);}
  .filter-tab.active svg{fill:var(--blue-600);stroke:none;}

  /* ============ FEATURED RESOURCES ============ */
  .section-pad{padding:56px 0 64px;}
  .section-head{
    display:flex;align-items:center;justify-content:space-between;
    margin-bottom:28px;flex-wrap:wrap;gap:12px;
  }
  h2{font-family:var(--font-heading);font-size:32px;font-weight:600;color:var(--navy-950);}
  .section-eyebrow{width:44px;height:3px;background:var(--blue-600);border-radius:2px;margin-top:8px;}
  .view-all{
    font-size:15px;font-weight:600;color:var(--blue-600);
    display:inline-flex;align-items:center;gap:6px;
  }

  .resource-grid{
    display:grid;grid-template-columns:repeat(4, 1fr);gap:22px;
  }
  .resource-card{
    border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;
    display:flex;flex-direction:column;transition:box-shadow .2s ease, transform .2s ease;
  }
  .resource-card:hover{box-shadow:0 14px 28px rgba(15,25,60,.1);transform:translateY(-3px);}
  .resource-card .thumb{position:relative;height:150px;}
  .resource-card .thumb .img-placeholder{width:100%;height:100%;}
  .tag{
    position:absolute;top:12px;left:12px;font-size:11px;font-weight:700;
    padding:4px 10px;border-radius:6px;color:var(--white);
    text-transform:capitalize;letter-spacing:.2px;
  }
  .tag.whitepaper{background:#2f5bea;}
  .tag.guide{background:#8b3fd9;}
  .tag.blog{background:#1fa971;}
  .tag.case-study{background:#e08a1f;}
  .resource-body{padding:18px 20px 22px;flex:1;display:flex;flex-direction:column;}
  .resource-body h3{font-size:17.5px;font-weight:600;color:var(--navy-950);line-height:1.35;}
  .resource-body p{font-size:15px;color:var(--text-muted);margin-top:8px;line-height:1.65;flex:1;}
  .resource-link{
    margin-top:14px;font-size:14.5px;font-weight:600;color:var(--blue-600);
    display:inline-flex;align-items:center;gap:6px;
  }
  .resource-link svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;}

  /* ============ RESOURCE LIBRARY ============ */
  .library-section{padding:20px 0 64px;}
  .library-card{
    background:var(--bg-light);border-radius:var(--radius-lg);
    display:grid;grid-template-columns:1fr 1.3fr;gap:32px;
    padding:40px;align-items:center;
  }
  .library-left h2{font-size:24px;}
  .library-left p{font-size:17px;color:var(--text-muted);margin-top:10px;max-width:380px;line-height:1.7;}
  .library-left .btn{margin-top:22px;}
  .stat-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;}
  .stat-item{
    background:var(--white);border-radius:var(--radius-md);border:1px solid var(--border);
    padding:16px;display:flex;align-items:center;gap:12px;
  }
  .stat-icon{
    width:40px;height:40px;border-radius:50%;background:var(--blue-100);
    display:flex;align-items:center;justify-content:center;flex-shrink:0;
  }
  .stat-icon svg{width:18px;height:18px;fill:var(--blue-600);}
  .stat-num{font-size:20px;font-weight:700;color:var(--navy-950);line-height:1.2;}
  .stat-label{font-size:13.5px;color:var(--text-muted);}

  /* ============ LATEST INSIGHTS ============ */
  .insights-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;}
  .insight-card{border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;transition:box-shadow .2s ease, transform .2s ease;}
  .insight-card:hover{box-shadow:0 14px 28px rgba(15,25,60,.1);transform:translateY(-3px);}
  .insight-card .thumb{height:190px;position:relative;}
  .insight-card .thumb .img-placeholder{width:100%;height:100%;}
  .insight-body{padding:20px 22px 24px;}
  .insight-date{font-size:12px;color:var(--text-muted);margin-bottom:8px;}
  .insight-body h3{font-size:18px;font-weight:600;color:var(--navy-950);line-height:1.4;}
  .insight-body p{font-size:15px;color:var(--text-muted);margin-top:10px;line-height:1.65;}
  .insight-link{
    margin-top:14px;font-size:14.5px;font-weight:600;color:var(--blue-600);
    display:inline-flex;align-items:center;gap:6px;
  }

  /* ============ CTA BANNER ============ */
  .cta-banner{
    background:var(--blue-600);border-radius:var(--radius-lg);color:var(--white);
    display:flex;align-items:center;justify-content:space-between;gap:20px;
    padding:34px 40px;margin:56px 24px 64px;max-width:calc(var(--max-width) - 48px);
    margin-left:auto;margin-right:auto;flex-wrap:wrap;
  }
  .cta-banner h3{font-size:22px;font-weight:600;margin-bottom:6px;}
  .cta-banner p{font-size:15.5px;color:#dbe4ff;}
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
    .hero-media{order:-1;min-height:180px;}
    .hero-media .img-placeholder{min-height:180px;}
    .filter-bar-wrap{margin-top:-40px;}
    .filter-bar{gap:18px;overflow-x:auto;justify-content:flex-start;}
    .resource-grid{grid-template-columns:1fr 1fr;}
    .library-card{grid-template-columns:1fr;}
    .insights-grid{grid-template-columns:1fr 1fr;}
    .footer__grid{grid-template-columns:1fr 1fr;}
  }

  @media (max-width:768px){
    .main-nav{
      position:fixed;top:0;left:0;width:78%;max-width:320px;height:100vh;
      background:var(--white);flex-direction:column;align-items:flex-start;
      padding:90px 28px 28px;gap:22px;transform:translateX(-100%);
      transition:transform .3s ease;z-index:200;box-shadow:2px 0 20px rgba(0,0,0,.1);
    }
    .main-nav.open{transform:translateX(0);}
    .nav-toggle{display:flex;}
    .topbar-info span:nth-child(2),
    .topbar-info span:nth-child(3){display:none;}
    .hero h1{font-size:32px;}
    .filter-bar-wrap{margin-top:-32px;}
    .filter-bar{padding:14px 16px;gap:22px;}
    .filter-tab{font-size:12px;white-space:nowrap;}
    .filter-tab svg{width:17px;height:17px;}
    .resource-grid{grid-template-columns:1fr 1fr;gap:16px;}
    .library-card{padding:26px;}
    .stat-grid{grid-template-columns:1fr 1fr;}
    .insights-grid{grid-template-columns:1fr;}
    .cta-banner{padding:26px;justify-content:flex-start;}
    .cta-banner .btn-outline{width:100%;justify-content:center;}
    .footer__grid{grid-template-columns:1fr 1fr;}
    h2{font-size:21px;}
  }

  @media (max-width:560px){
    .container{padding:0 16px;}
    .hero h1{font-size:27px;}
    .resource-grid{grid-template-columns:1fr;}
    .stat-grid{grid-template-columns:1fr;}
    .footer__grid{grid-template-columns:1fr; text-align:center; gap:44px; padding-top:68px; padding-bottom:60px;}
    .footer .logo{align-items:center;}
    .footer__col{align-items:center;}
    .footer__col p{text-align:center;}
    .footer__contact li{flex-direction:column; align-items:center; gap:8px;}
    .footer__bar-inner{flex-direction:column; gap:16px; padding-top:24px; padding-bottom:24px;}
    .filter-bar-wrap{margin-top:-24px;}
    .cta-banner{
      flex-direction: column;
      align-items: stretch;
      text-align: center;
      padding: 30px 20px;
    }
    .cta-banner > div{
      text-align: center;
    }
    .cta-banner .btn-outline{
      margin-top: 16px;
      width: 100%;
      justify-content: center;
    }
  }

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
      




{/* ============ HERO + SEARCH ============ */}
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
          <li><a className={'is-active'} href="/resources">Resources</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a className={'btn btn--primary nav__cta'} href="/contact">Contact Us</a>
      </div>
    </nav>
    <div className="hero-inner">
      <div className="hero-copy">
      <h1>Resources</h1>
      <p>Insights, knowledge, and tools to help your business grow, secure, and innovate.</p>
      <div className="hero-search">
        <input type="text" placeholder="Search resources..." />
        <button aria-label="Search">
          <svg viewBox="0 0 24 24"><path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>
        </button>
      </div>
    </div>

  </div>
  </div>
</section>

<div className="container filter-bar-wrap">
  <div className="filter-bar">
    <a href="#" className="filter-tab active">
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
      All Resources
    </a>
    <a href="#" className="filter-tab">
      <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 13h6M9 17h6M9 9h2"/></svg>
      Whitepapers
    </a>
    <a href="#" className="filter-tab">
      <svg viewBox="0 0 24 24"><path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>
      Case Studies
    </a>
    <a href="#" className="filter-tab">
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v-1M16 4v-1"/></svg>
      Blogs
    </a>
    <a href="#" className="filter-tab">
      <svg viewBox="0 0 24 24"><rect x="2" y="5" width="15" height="12" rx="2"/><path d="M22 8l-5 3 5 3z"/></svg>
      Videos
    </a>
    <a href="#" className="filter-tab">
      <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 12h6M9 16h6"/></svg>
      Datasheets
    </a>
    <a href="#" className="filter-tab">
      <svg viewBox="0 0 24 24"><path d="M4 4h12l4 4v12H4z"/><path d="M8 14l3-3 2 2 3-4"/></svg>
      Guides
    </a>
    <a href="#" className="filter-tab">
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/><circle cx="16" cy="9" r="2"/></svg>
      Webinars
    </a>
  </div>
</div>

{/* ============ FEATURED RESOURCES ============ */}
<section className="section-pad">
  <div className="container">
    <div className="section-head">
      <div>
        <h2>Featured Resources</h2>
        <div className="section-eyebrow"></div>
      </div>
      <a href="#" className="view-all">View All Resources →</a>
    </div>

    <div className="resource-grid">
      <article className="resource-card">
        <div className="thumb">
          <img src={resourceSecure} alt="Secure IT Infrastructure" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          <span className="tag whitepaper">Whitepaper</span>
        </div>
        <div className="resource-body">
          <h3>The Future of Secure IT Infrastructure</h3>
          <p>Explore key strategies for building scalable, secure, and resilient IT infrastructure for the future.</p>
          <a href="#" className="resource-link">Download Now <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article className="resource-card">
        <div className="thumb">
          <img src={resourceCloud} alt="Cloud Migration" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          <span className="tag guide">Guide</span>
        </div>
        <div className="resource-body">
          <h3>Cloud Migration Best Practices</h3>
          <p>A practical guide to help businesses migrate to the cloud with confidence and minimal risk.</p>
          <a href="#" className="resource-link">Read Guide <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article className="resource-card">
        <div className="thumb">
          <img src={resourceCyber} alt="Cybersecurity Trends" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          <span className="tag blog">Blog</span>
        </div>
        <div className="resource-body">
          <h3>Top Cybersecurity Trends Shaping 2025</h3>
          <p>Discover the top cybersecurity trends and what organizations need to know in 2025 and beyond.</p>
          <a href="#" className="resource-link">Read More <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article className="resource-card">
        <div className="thumb">
          <img src={resourceTransform} alt="Transforming Connectivity" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          <span className="tag case-study">Case Study</span>
        </div>
        <div className="resource-body">
          <h3>Transforming Connectivity for a Leading Enterprise</h3>
          <p>How ITSCI helped a global enterprise improve network performance and operational efficiency.</p>
          <a href="#" className="resource-link">View Case Study <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>
    </div>
  </div>
</section>

{/* ============ RESOURCE LIBRARY ============ */}
<section className="library-section">
  <div className="container">
    <div className="library-card">
      <div className="library-left">
        <h2>Resource Library</h2>
        <p>Explore our comprehensive collection of resources across different formats and topics.</p>
        <a href="#" className="btn btn-primary">Browse All Resources →</a>
      </div>
      <div className="stat-grid">
        <div className="stat-item">
          <div className="stat-icon"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/></svg></div>
          <div><div className="stat-num">50+</div><div className="stat-label">Whitepapers</div></div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><svg viewBox="0 0 24 24"><path d="M2 5h15v12H2zM22 8l-5 3 5 3z"/></svg></div>
          <div><div className="stat-num">30+</div><div className="stat-label">Case Studies</div></div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><svg viewBox="0 0 24 24"><path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/></svg></div>
          <div><div className="stat-num">100+</div><div className="stat-label">Blog Articles</div></div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="15" height="12" rx="2"/><path d="M22 8l-5 3 5 3z"/></svg></div>
          <div><div className="stat-num">25+</div><div className="stat-label">Videos</div></div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 12h6M9 16h6"/></svg></div>
          <div><div className="stat-num">20+</div><div className="stat-label">Datasheets</div></div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><svg viewBox="0 0 24 24"><path d="M4 4h12l4 4v12H4z"/></svg></div>
          <div><div className="stat-num">15+</div><div className="stat-label">Guides</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ LATEST INSIGHTS ============ */}
<section className="section-pad" style={{paddingTop: "20px"}}>
  <div className="container">
    <div className="section-head">
      <div>
        <h2>Latest Insights</h2>
        <div className="section-eyebrow"></div>
      </div>
      <a href="#" className="view-all">View All Blogs →</a>
    </div>

    <div className="insights-grid">
      <article className="insight-card">
        <div className="thumb">
          <div className="img-placeholder dark"><span>[[ REPLACE IMAGE ]]<br />AI chip photo</span></div>
          <span className="tag blog" style={{background: "#1fa971"}}>BLOG</span>
        </div>
        <div className="insight-body">
          <div className="insight-date">May 06, 2026</div>
          <h3>AI and Automation: Redefining the Future of IT Operations</h3>
          <p>Discover how AI and automation are revolutionizing IT operations, improving efficiency, and reducing costs.</p>
          <a href="#" className="insight-link">Read More →</a>
        </div>
      </article>

      <article className="insight-card">
        <div className="thumb">
          <div className="img-placeholder dark"><span>[[ REPLACE IMAGE ]]<br />Security lock/shield photo</span></div>
          <span className="tag blog" style={{background: "#1fa971"}}>BLOG</span>
        </div>
        <div className="insight-body">
          <div className="insight-date">Apr 22, 2026</div>
          <h3>How Zero Trust Security Strengthens Modern Enterprises</h3>
          <p>Understand how Zero Trust security frameworks help protect your business from evolving cyber threats.</p>
          <a href="#" className="insight-link">Read More →</a>
        </div>
      </article>

      <article className="insight-card">
        <div className="thumb">
          <div className="img-placeholder dark"><span>[[ REPLACE IMAGE ]]<br />City skyline / cloud photo</span></div>
          <span className="tag blog" style={{background: "#1fa971"}}>BLOG</span>
        </div>
        <div className="insight-body">
          <div className="insight-date">Apr 10, 2026</div>
          <h3>The Role of Cloud in Business Digital Transformation</h3>
          <p>Learn how cloud technologies accelerate digital transformation and drive business agility and innovation.</p>
          <a href="#" className="insight-link">Read More →</a>
        </div>
      </article>
    </div>
  </div>
</section>

{/* ============ CTA BANNER ============ */}
<div className="cta-banner">
  <div>
    <h3>Can't find what you're looking for?</h3>
    <p>Our team is here to help you find the right resources for your business needs.</p>
  </div>
  <a href="#" className="btn btn-outline">Contact Our Team →</a>
</div>

{/* ============ FOOTER ============ */}
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
