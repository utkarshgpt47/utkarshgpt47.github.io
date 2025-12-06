# Utkarsh Gupta - Personal Portfolio 🚀

A modern, SEO-optimized portfolio website showcasing expertise in AI, Analytics, and Automation.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Portfolio+Website)

## 🌟 Features

- **Modern Design**: Dark theme with vibrant gradients and glassmorphism effects
- **SEO Optimized**: Comprehensive meta tags, Open Graph, structured data, and sitemap
- **Google Analytics**: GA4 integration with event tracking
- **Responsive**: Mobile-first design that looks great on all devices
- **Fast & Lightweight**: Pure HTML, CSS, and JavaScript - no frameworks needed
- **Easy to Update**: All content centralized in `config.js` for simple customization

## 🚀 Quick Start

### View Locally

1. Clone this repository:
```bash
git clone https://github.com/utkarshgpt47/utkarshgpt47.github.io.git
cd utkarshgpt47.github.io
```

2. Open with a local server:
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx serve
```

3. Open your browser and navigate to `http://localhost:8000`

## 📝 Customization

All website content can be easily customized by editing the `config.js` file:

- **Personal Information**: Update your name, title, tagline, and contact details
- **About Section**: Modify your bio and profile image
- **Skills**: Add or remove technical and professional skills
- **Projects**: Update project details, images, and links
- **Services**: Customize the services you offer
- **Social Links**: Add your social media profiles
- **Google Analytics**: Add your GA4 Measurement ID

### Example:
```javascript
// config.js
const config = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com"
  },
  // ... more configuration
};
```

## 🌐 Deployment

### GitHub Pages (Current Setup)

This site is configured to deploy on GitHub Pages:

1. Create a repository named `utkarshgpt47.github.io`
2. Push this code to the `main` branch
3. Go to repository Settings → Pages
4. Set source to "Deploy from branch" and select `main` branch
5. Your site will be live at `https://utkarshgpt47.github.io`

**Note**: Update all URLs in the following files after deployment:
- `index.html` - Update canonical URL and Open Graph URLs
- `robots.txt` - Update sitemap URL
- `sitemap.xml` - Update page URL

### Vercel (Recommended for Production)

For better performance and instant deployments:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will auto-detect the settings
5. Click "Deploy"

Your site will be live with a `.vercel.app` domain and you can add your custom domain.

## 📊 SEO Features

- ✅ Semantic HTML5 structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social media
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org JSON-LD)
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Fast loading time
- ✅ Mobile-friendly responsive design

## 📈 Google Analytics

The site includes Google Analytics 4 (GA4) with:
- Page view tracking
- Form submission events
- External link click tracking
- Scroll depth tracking
- Custom event tracking

To use your own GA4:
1. Get your Measurement ID from [Google Analytics](https://analytics.google.com)
2. Update `config.js` with your ID:
```javascript
analytics: {
  measurementId: "G-XXXXXXXXXX" // Replace with your ID
}
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript** - Vanilla JS, no frameworks
- **Google Fonts** - Inter & Poppins
- **Google Analytics** - GA4 tracking

## 📁 Project Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
├── config.js           # Content configuration
├── robots.txt          # SEO: Search engine directives
├── sitemap.xml         # SEO: Site structure
├── manifest.json       # PWA manifest
└── README.md           # This file
```

## 🎨 Color Palette

- Primary: `#667eea` (Purple Blue)
- Secondary: `#764ba2` (Purple)
- Accent: `#f093fb` (Pink)
- Background: `#0f0f1e` (Dark)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Email**: utkarshgpt47@gmail.com
- **LinkedIn**: [linkedin.com/in/utkarshgpt47](https://linkedin.com/in/utkarshgpt47)
- **GitHub**: [github.com/utkarshgpt47](https://github.com/utkarshgpt47)

---

**Built with ❤️ by Utkarsh Gupta**

*Transforming Data into Intelligent Decisions*
