# Saurav Kumar - Professional Resume Website

A production-ready, SEO-optimized personal resume website built with Next.js 14, showcasing professional experience, projects, skills, and achievements.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (No TypeScript)
- **Styling**: Tailwind CSS
- **Rendering**: Static Site Generation (SSG)
- **Deployment**: Vercel (Recommended)

## ✨ Features

### SEO Optimization
- ✅ Semantic HTML structure (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- ✅ Next.js Metadata API implementation
- ✅ JSON-LD structured data (Person, WorkExperience, Education schemas)
- ✅ OpenGraph and Twitter card meta tags
- ✅ Automatic sitemap.xml generation
- ✅ robots.txt configuration
- ✅ Canonical URLs
- ✅ Clean, crawlable URL structure

### Performance
- ✅ Static Site Generation for optimal loading speed
- ✅ next/font optimization
- ✅ Server Components by default
- ✅ Minimal client-side JavaScript
- ✅ Optimized for Lighthouse score 95+

### Content Pages
1. **Homepage** (`/`) - Professional summary and highlights
2. **Experience** (`/experience`) - Work history at SAP Labs India
3. **Projects** (`/projects`) - Personal projects (ChatWave)
4. **Skills** (`/skills`) - Technical skills and expertise
5. **Education** (`/education`) - Academic background
6. **Achievements** (`/achievements`) - Awards and recognitions
7. **Contact** (`/contact`) - Contact information and social links

## 📁 Project Structure

```
resume-website/
├── app/
│   ├── layout.js              # Root layout with navigation and footer
│   ├── page.js                # Homepage
│   ├── globals.css            # Global styles
│   ├── sitemap.js             # Dynamic sitemap generation
│   ├── robots.js              # Robots.txt configuration
│   ├── experience/
│   │   └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── skills/
│   │   └── page.js
│   ├── education/
│   │   └── page.js
│   ├── achievements/
│   │   └── page.js
│   └── contact/
│       └── page.js
├── public/
│   └── (static assets)
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Navigate to the project directory**:
```bash
cd resume-website
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Local Build

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
cd resume-website
vercel
```

4. **Follow the prompts**:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: resume-website (or your preferred name)
   - Directory: ./
   - Override settings: No

5. **Production deployment**:
```bash
vercel --prod
```

### Deploy to Vercel via GitHub

1. **Push code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure project (use default settings)
   - Click "Deploy"

### Alternative Deployment Options

#### Netlify
```bash
npm run build
# Deploy the 'out' folder to Netlify
```

#### Custom Server
```bash
npm run build
npm start
# Use PM2 or similar for production
```

## 🎨 Customization

### Update Personal Information

1. **Resume Content**: Edit content in each page file (`app/*/page.js`)
2. **Metadata**: Update SEO metadata in each page's metadata export
3. **Domain**: Current domain is configured as `https://www.sauravx.com` in:
   - `app/layout.js`
   - `app/sitemap.js`
   - `app/robots.js`
   - All page metadata files

### Styling
- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-level: Inline Tailwind classes

## 🔍 SEO Checklist

- ✅ All pages have unique titles and descriptions
- ✅ JSON-LD structured data on all pages
- ✅ Semantic HTML throughout
- ✅ Clean URL structure
- ✅ Internal linking implemented
- ✅ sitemap.xml generated
- ✅ robots.txt configured
- ✅ OpenGraph and Twitter cards
- ✅ Mobile responsive
- ✅ Fast loading times

## 📊 Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100

## 🔗 Important Links

- **Production URL**: `https://www.sauravx.com`
- **GitHub**: https://github.com/saurava69/
- **LinkedIn**: https://www.linkedin.com/in/sauravkumar25

## 📝 Post-Deployment Steps

1. **Update Domain**:
   - Configure custom domain in Vercel
   - Update all URLs in the codebase

2. **Google Search Console**:
   - Add property for your domain
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Request indexing for key pages

3. **Analytics** (Optional):
   - Add Google Analytics
   - Add Vercel Analytics

4. **Social Media**:
   - Test OpenGraph preview on LinkedIn, Twitter
   - Share website link

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### ESLint Issues
```bash
npm run lint
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

**Saurav Kumar**
- Email: sauravx25@gmail.com
- LinkedIn: https://www.linkedin.com/in/sauravkumar25
- GitHub: https://github.com/saurava69/

---

Built with ❤️ using Next.js 14 and Tailwind CSS
