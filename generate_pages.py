import re

def process_file(html_path, out_jsx_path, component_name, is_resources):
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Extract style block
    style_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
    if style_match:
        css = style_match.group(1)
    else:
        css = ""
        
    # Extract body content
    body_match = re.search(r'<body>(.*?)<script>', html, re.DOTALL)
    if not body_match:
        body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL)
    body_html = body_match.group(1)
    
    # Remove topbar and site-header
    body_html = re.sub(r'<!-- ============ TOP BAR ============ -->.*?<!-- ============ HEADER / NAV ============ -->', '', body_html, flags=re.DOTALL)
    body_html = re.sub(r'<div class="topbar">.*?</div>\s*<!-- ============ HEADER / NAV ============ -->', '', body_html, flags=re.DOTALL)
    body_html = re.sub(r'<header class="site-header">.*?</header>', '', body_html, flags=re.DOTALL)
    
    # Inject Nav into Hero
    nav_jsx = """
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
          <li><a className={""" + ("'is-active'" if is_resources else "''") + """} href="/resources">Resources</a></li>
        </ul>
        <a className={""" + ("'btn btn--primary nav__cta is-active'" if not is_resources else "'btn btn--primary nav__cta'") + """} href="/contact">Contact Us</a>
      </div>
    </nav>
    """
    
    # The template has <section class="hero">. We need to insert a container and the nav just inside it.
    body_html = re.sub(r'<section class="hero">', f'<section className="hero">\\n  <div className="container">{nav_jsx}</div>', body_html)
    
    # Replace class= with className=
    body_html = body_html.replace('class="', 'className="')
    # Replace style="..." with style={{...}} roughly... actually there are no styles except style="width:16px;height:16px;" in contact which I can manually fix
    body_html = body_html.replace('style="width:16px;height:16px;"', 'style={{width: "16px", height: "16px"}}')
    body_html = body_html.replace('style="padding-top:20px;"', 'style={{paddingTop: "20px"}}')
    body_html = body_html.replace('style="background:#1fa971;"', 'style={{background: "#1fa971"}}')
    body_html = body_html.replace('viewBox', 'viewBox')
    body_html = body_html.replace('stroke-width', 'strokeWidth')
    body_html = body_html.replace('stroke-linejoin', 'strokeLinejoin')
    body_html = body_html.replace('stroke-linecap', 'strokeLinecap')
    body_html = body_html.replace('fill-rule', 'fillRule')
    body_html = body_html.replace('clip-rule', 'clipRule')
    body_html = body_html.replace('for="', 'htmlFor="')
    # Self close tags
    body_html = re.sub(r'<input(.*?)>', r'<input\1 />', body_html)
    body_html = re.sub(r'<img(.*?)>', r'<img\1 />', body_html)
    body_html = body_html.replace('/> />', '/>') # Fix duplicate self-closing if they already were
    
    # Adjust CSS variables and typography
    css = css.replace('--max-width:1200px;', '--max-width:1440px;')
    css = css.replace("--font-heading:'Poppins','Segoe UI',Arial,sans-serif;", '--font-heading:"Poppins", "Segoe UI", system-ui, sans-serif;')
    css = css.replace("--font-body:'Inter','Segoe UI',Arial,sans-serif;", '--font-body:"Inter", "Segoe UI", system-ui, sans-serif;')
    css = css.replace('font-size:14px;', 'font-size:17px;')
    css = css.replace('font-size: 14px;', 'font-size: 17px;')
    
    # Add nav CSS
    nav_css = """
/* ---------- Nav ---------- */
.nav{
  display:flex;align-items:center;justify-content:space-between;gap:24px;
  background:#fff;border-radius:12px;padding:14px 22px;margin-top:18px;margin-bottom:30px;
  box-shadow:0 10px 30px rgba(2,8,23,.28);position:relative;z-index:20;
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
"""
    css += nav_css

    jsx = f"""import React, {{ useEffect }} from "react";

export default function {component_name}() {{
  useEffect(() => {{
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    if(toggle && nav) {{
      const handler = () => {{
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      }};
      toggle.addEventListener('click', handler);
      
      const links = document.querySelectorAll('.nav__links a, .nav__cta');
      const closeHandler = () => {{
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }};
      links.forEach(a => a.addEventListener('click', closeHandler));
      
      return () => {{
        toggle.removeEventListener('click', handler);
        links.forEach(a => a.removeEventListener('click', closeHandler));
      }};
    }}
  }}, []);

  return (
    <div className="{component_name.lower()}-page">
      <style>{{`{css}`}}</style>
      {body_html}
    </div>
  );
}}
"""
    with open(out_jsx_path, 'w', encoding='utf-8') as f:
        f.write(jsx)

process_file('dummy-pages/itsci-resources-template.html', 'src/pages/Resources.jsx', 'Resources', True)
process_file('dummy-pages/itsci-contact-template (1).html', 'src/pages/Contact.jsx', 'Contact', False)
