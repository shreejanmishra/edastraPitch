# Pitch Deck Website - React + Vite + Tailwind CSS

A modern, multi-page website built from your 19-page pitch deck PDF using React Router.

## ✅ What's Done

- ✅ Extracted all 19 pages from PDF to `public/images/`
- ✅ Created 10 separate page routes with React Router
- ✅ Each page displays the corresponding PDF slide image(s)
- ✅ Added navigation between pages (Previous/Next buttons)
- ✅ Responsive design with Tailwind CSS
- ✅ Fixed navbar with active page highlighting

## 🗺️ Website Structure

Each component is now a separate page with its own route:

| Route | Page | PDF Pages | Description |
|-------|------|-----------|-------------|
| `/` | Hero | 1 | Landing page / Cover slide |
| `/problem` | Problem | 2 | Problem statement |
| `/solution` | Solution | 3, 16 | Solution & tech stack |
| `/market` | Market | 4, 15 | Market size & competition |
| `/product` | Product | 5-6 | Product features |
| `/business-model` | BusinessModel | 7-8 | Revenue & pricing |
| `/traction` | Traction | 9-10, 17 | Metrics & roadmap |
| `/team` | Team | 11-12 | Team & advisors |
| `/financials` | Financials | 13-14 | Financial projections |
| `/contact` | Contact | 18-19 | The ask & contact info |

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Opens at http://localhost:5173

### 3. Navigate the Website
- Click navigation links in the header
- Use Previous/Next buttons at the bottom of each page
- Each page shows the actual PDF slide images

## 📝 Customizing Content

### Update Text Content
Edit the page files in `src/pages/`:
- `Hero.jsx` - Landing page
- `Problem.jsx` - Problem statement
- `Solution.jsx` - Solution overview
- `Market.jsx` - Market opportunity
- `Product.jsx` - Product features
- `BusinessModel.jsx` - Business model
- `Traction.jsx` - Traction metrics
- `Team.jsx` - Team members
- `Financials.jsx` - Financial projections
- `Contact.jsx` - Contact information

### Update Company Name
Edit these files:
- `src/components/Navbar.jsx` - Line 28
- `src/components/Footer.jsx`
- `index.html` - Page title

### Customize Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#2563eb',  // Your brand color
    dark: '#1e40af',
  },
}
```

## 📁 Project Structure

```
├── public/
│   └── images/              # 19 extracted PDF pages
│       ├── page_1_img_1.png
│       ├── page_2_img_1.png
│       └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed navigation bar
│   │   └── Footer.jsx       # Footer component
│   ├── pages/               # 10 page components (routes)
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── Solution.jsx
│   │   ├── Market.jsx
│   │   ├── Product.jsx
│   │   ├── BusinessModel.jsx
│   │   ├── Traction.jsx
│   │   ├── Team.jsx
│   │   ├── Financials.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Router configuration
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Features

- Multi-page navigation with React Router
- Responsive design (mobile, tablet, desktop)
- Fixed navigation bar with active page highlighting
- Previous/Next navigation on each page
- PDF slide images displayed on each page
- Modern, professional styling
- Fast development with Vite HMR

## 🔧 Development

### View Page Mapping
```bash
npm run show-mapping
```
Shows which PDF page corresponds to which route.

### Build for Production
```bash
npm run build
```
Creates optimized build in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🚀 Deployment

### Netlify
1. `npm run build`
2. Drag `dist/` folder to netlify.com/drop

### Vercel
```bash
npm run build
npx vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 💡 Tips

1. **Each page is independent** - Edit one page at a time
2. **Images are already embedded** - All PDF slides are displayed
3. **Navigation is automatic** - Previous/Next buttons work out of the box
4. **Test on mobile** - Design is responsive
5. **Customize gradually** - Start with Hero page, then move through each page

## 📖 Next Steps

1. ✅ Dependencies installed
2. ✅ Website structure created
3. ⬜ Customize text content in each page
4. ⬜ Update company name and branding
5. ⬜ Adjust colors in Tailwind config
6. ⬜ Test on different devices
7. ⬜ Build and deploy

---

**Ready to use!** Run `npm install` then `npm run dev` to start! 🎉
