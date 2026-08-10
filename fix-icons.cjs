const https = require('https');
const fs = require('fs');

const icons = {
  Python: ['python', '#3776AB'],
  TensorFlow: ['tensorflow', '#FF6F00'],
  PyTorch: ['pytorch', '#EE4C2C'],
  OpenAI: ['openai', '#000000'],
  'Hugging Face': ['huggingface', '#FFD21E'],
  Kubernetes: ['kubernetes', '#326CE5'],
  AWS: ['amazonwebservices', '#232F3E']
};

async function fetchIcon(slug) {
  return new Promise((resolve, reject) => {
    https.get(`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${slug}.svg`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  let content = fs.readFileSync('./src/pages/Services.jsx', 'utf8');
  for (const [name, [slug, color]] of Object.entries(icons)) {
    const svgStr = await fetchIcon(slug);
    if (!svgStr.includes('<svg')) {
      console.error('Failed to fetch', slug);
      continue;
    }
    const cleanSvg = svgStr
        .replace('<svg ', `<svg className="tech__logo" fill="${color}" `)
        .replace(/<!--.*?-->/g, '')
        .replace(/xmlns=".*?"/g, '')
        .replace(/\r?\n/g, ' ')
        .trim();
    
    const regex = new RegExp(`<img[^>]*alt="${name}"[^>]*/>`);
    content = content.replace(regex, cleanSvg);
  }
  fs.writeFileSync('./src/pages/Services.jsx', content);
  console.log("Done replacing icons!");
}

main();
