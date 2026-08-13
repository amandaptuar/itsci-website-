import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React, { useEffect } from "react";
import resourcesHeroBg from "../assets/resources-hero.png";
import resourceSecure from "../assets/resources-hero.png";
import resourceCloud from "../assets/resource-cloud.png";
import resourceCyber from "../assets/resource-cyber.png";
import resourceTransform from "../assets/resource-transform.png";

export default function Resources() {

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
    <Navbar />
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
    <a href="#0" className="filter-tab active">
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
      All Resources
    </a>
    <a href="#0" className="filter-tab">
      <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 13h6M9 17h6M9 9h2"/></svg>
      Whitepapers
    </a>
    <a href="#0" className="filter-tab">
      <svg viewBox="0 0 24 24"><path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>
      Case Studies
    </a>
    <a href="#0" className="filter-tab">
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v-1M16 4v-1"/></svg>
      Blogs
    </a>
    <a href="#0" className="filter-tab">
      <svg viewBox="0 0 24 24"><rect x="2" y="5" width="15" height="12" rx="2"/><path d="M22 8l-5 3 5 3z"/></svg>
      Videos
    </a>
    <a href="#0" className="filter-tab">
      <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 12h6M9 16h6"/></svg>
      Datasheets
    </a>
    <a href="#0" className="filter-tab">
      <svg viewBox="0 0 24 24"><path d="M4 4h12l4 4v12H4z"/><path d="M8 14l3-3 2 2 3-4"/></svg>
      Guides
    </a>
    <a href="#0" className="filter-tab">
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
      <a href="/resources" className="view-all">View All Resources →</a>
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
          <a href="/resources" className="resource-link">Download Now <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
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
          <a href="/resources" className="resource-link">Read Guide <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
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
          <a href="/resources" className="resource-link">Read More <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
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
          <a href="/resources" className="resource-link">View Case Study <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
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
        <a href="/resources" className="btn btn-primary">Browse All Resources →</a>
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
      <a href="/resources" className="view-all">View All Blogs →</a>
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
          <a href="/resources" className="insight-link">Read More →</a>
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
          <a href="/resources" className="insight-link">Read More →</a>
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
          <a href="/resources" className="insight-link">Read More →</a>
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
  <a href="/contact" className="btn btn-outline">Contact Our Team →</a>
</div>

{/* ============ FOOTER ============ */}
<Footer />


    </div>
  );
}
