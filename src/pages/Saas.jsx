import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React, { useEffect } from "react";
import serviceCtaBg from "../assets/service-cta-bg.png";

export default function Saas() {

  return (
    <div className="saas-page">
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
  background-image:url('/images/new-banner/application-security.jpg');
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
  box-shadow:0 12px 35px rgba(0,0,0,0.12);padding:10px 0;min-width:280px;
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
.content-list { margin-left: 20px; margin-bottom: 20px; list-style-type: disc; }
.content-list li { margin-bottom: 10px; font-size: 17px; line-height: 1.8; color: var(--ink-600); }

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
          <Navbar />

          <div className="hero__grid">
            <div className="hero__copy">
              <h1 className="hero__title">Software as a Service (SaaS)</h1>
              <p className="hero__text">Cloud-based applications tailored for enterprise scale, performance, and flexibility.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="content-section">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">ENTERPRISE SOLUTIONS</p>
            <h2>Transforming Software Delivery</h2>
            <p>The SaaS model has transformed software delivery, offering unprecedented flexibility, continuous seamless updates, and zero maintenance overhead. In today's highly competitive market, businesses are rapidly shifting to subscription-based cloud models to remain agile.</p>
            <p>Our solutions enable businesses to completely offload infrastructure management. ITSCI develops robust, multi-tenant SaaS architectures that allow you to serve your customers more efficiently while maximizing uptime and minimizing operational costs.</p>
          </div>
          <div>
             <div style={{width:'100%', height:'450px', background:'#eee', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
               <img src="/images/new-banner/banner-dev.png" alt="SaaS Development" style={{width:'100%', height:'100%', objectFit:'cover'}} />
             </div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{background: 'var(--surface-2)'}}>
        <div className="container content-grid">
          <div>
             <div style={{width:'100%', height:'450px', background:'#eee', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
               <img src="/images/web-security/pic-14.png" alt="SaaS Architectures" style={{width:'100%', height:'100%', objectFit:'cover'}} />
             </div>
          </div>
          <div>
            <p className="eyebrow">OUR EXPERTISE</p>
            <h2>SaaS Development Services</h2>
            <p>We specialize in designing and engineering high-availability multi-tenant architectures, ensuring secure data isolation and scalable microservices infrastructure. Our development team has the deep domain expertise required to build complex cloud-native applications from the ground up.</p>
            <ul className="content-list">
              <li>End-to-end SaaS Application Development</li>
              <li>Multi-tenant Cloud Architecture Design</li>
              <li>Microservices and API Integrations</li>
              <li>SaaS Migration and Re-engineering</li>
              <li>Data Isolation and Security Compliance</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
