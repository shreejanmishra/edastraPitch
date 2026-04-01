# Quick Reference Guide

## 🚀 Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Show page mapping
npm run show-mapping
```

## 🗺️ Page Routes

| URL | Page | PDF Slides |
|-----|------|------------|
| http://localhost:5173/ | Hero | 1 |
| http://localhost:5173/problem | Problem | 2 |
| http://localhost:5173/solution | Solution | 3, 16 |
| http://localhost:5173/market | Market | 4, 15 |
| http://localhost:5173/product | Product | 5-6 |
| http://localhost:5173/business-model | Business Model | 7-8 |
| http://localhost:5173/traction | Traction | 9-10, 17 |
| http://localhost:5173/team | Team | 11-12 |
| http://localhost:5173/financials | Financials | 13-14 |
| http://localhost:5173/contact | Contact | 18-19 |

## 📁 Files to Edit

### Pages (Main Content)
- `src/pages/Hero.jsx` - Landing page
- `src/pages/Problem.jsx` - Problem statement
- `src/pages/Solution.jsx` - Solution overview
- `src/pages/Market.jsx` - Market opportunity
- `src/pages/Product.jsx` - Product features
- `src/pages/BusinessModel.jsx` - Business model
- `src/pages/Traction.jsx` - Traction metrics
- `src/pages/Team.jsx` - Team members
- `src/pages/Financials.jsx` - Financial projections
- `src/pages/Contact.jsx` - Contact information

### Components (Shared)
- `src/components/Navbar.jsx` - Navigation bar
- `src/components/Footer.jsx` - Footer

### Configuration
- `tailwind.config.js` - Colors and styling
- `index.html` - Page title

## 🎨 Common Edits

### Change Company Name
**File:** `src/components/Navbar.jsx` (line 28)
```jsx
<Link to="/" className="text-2xl font-bold text-primary">
  Your Company Name Here
</Link>
```

### Change Brand Color
**File:** `tailwind.config.js` (line 9)
```javascript
colors: {
  primary: {
    DEFAULT: '#2563eb',  // Change this hex code
    dark: '#1e40af',     // And this one
  },
}
```

### Change Page Title
**File:** `index.html` (line 6)
```html
<title>Your Company Name - Pitch Deck</title>
```

## 🖼️ Images

All PDF slides are in `public/images/`:
- `page_1_img_1.png` through `page_19_img_1.png`
- Referenced in pages as `/images/page_X_img_1.png`
- Already embedded in corresponding pages

## 🔧 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Changes not showing
1. Save the file
2. Check browser console for errors
3. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

## 📖 Documentation

- **SETUP_COMPLETE.md** - Complete setup guide
- **README.md** - Full documentation
- **show-mapping.js** - Run to see page mappings

## ✅ Quick Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:5173
- [ ] Click through all pages
- [ ] Test navigation (navbar + prev/next buttons)
- [ ] Edit company name in Navbar
- [ ] Customize colors in tailwind.config.js
- [ ] Update content in each page file
- [ ] Test on mobile device
- [ ] Build for production: `npm run build`
- [ ] Deploy!

---

**Need help?** Check SETUP_COMPLETE.md for detailed instructions!
