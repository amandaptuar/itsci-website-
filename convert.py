import os
import re

files = {
    'Home': r'c:\Users\amand\OneDrive\Desktop\itsci\document\itsci.html',
    'About': r'c:\Users\amand\OneDrive\Desktop\itsci\document\about.html',
    'Services': r'c:\Users\amand\OneDrive\Desktop\itsci\document\ai-development.html',
    'Brands': r'c:\Users\amand\OneDrive\Desktop\itsci\document\brands.html'
}

out_dir_pages = r'c:\Users\amand\OneDrive\Desktop\itsci\react-app\src\pages'
os.makedirs(out_dir_pages, exist_ok=True)

def html_to_jsx(html):
    # Basic conversions
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('stroke-width', 'strokeWidth')
    jsx = jsx.replace('stroke-linecap', 'strokeLinecap')
    jsx = jsx.replace('stroke-linejoin', 'strokeLinejoin')
    jsx = jsx.replace('fill-rule', 'fillRule')
    
    # Self close tags
    jsx = re.sub(r'(<(?:br|hr|img|input)[^>]*?)(?<!/)>', r'\1 />', jsx)
    
    # Fix style="color:#3B82F6" -> style={{color: '#3B82F6'}}
    def style_repl(match):
        style_str = match.group(1)
        props = style_str.split(';')
        out = []
        for p in props:
            if ':' not in p: continue
            k, v = p.split(':', 1)
            k = k.strip()
            # to camelCase
            k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            v = v.strip().replace("'", '"')
            out.append(f"{k}: '{v}'")
        return 'style={{' + ', '.join(out) + '}}'
        
    jsx = re.sub(r'style="([^"]*)"', style_repl, jsx)
    
    # Fix links
    jsx = jsx.replace('href="index.html"', 'href="/"')
    jsx = jsx.replace('href="about.html"', 'href="/about"')
    jsx = jsx.replace('href="ai-development.html"', 'href="/services"')
    jsx = jsx.replace('href="brands.html"', 'href="/brands"')
    
    # Remove script tags
    jsx = re.sub(r'<script.*?</script>', '', jsx, flags=re.DOTALL)
    
    # Remove HTML comments
    jsx = re.sub(r'<!--(.*?)-->', '', jsx, flags=re.DOTALL)
    
    return jsx

for name, path in files.items():
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract style
    style_match = re.search(r'<style>(.*?)</style>', content, flags=re.DOTALL)
    style_content = style_match.group(1) if style_match else ''
    
    # Extract body
    body_match = re.search(r'<body>(.*?)</body>', content, flags=re.DOTALL)
    body_content = body_match.group(1) if body_match else ''
    
    jsx_content = html_to_jsx(body_content)
    
    # Write JSX
    jsx_path = os.path.join(out_dir_pages, f'{name}.jsx')
    with open(jsx_path, 'w', encoding='utf-8') as f:
        f.write(f'''import React, {{ useEffect }} from "react";

export default function {name}() {{
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
    <div className="{name.lower()}-page">
      <style>{{`
{style_content}
      `}}</style>
      {jsx_content}
    </div>
  );
}}
''')

print("Conversion complete.")
