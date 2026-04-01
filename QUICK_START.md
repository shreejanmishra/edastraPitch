# Quick Start Guide

## Your PDF has been extracted! 🎉

All 19 pages are now available as images in `public/images/`

## What to do next:

### Option 1: View PDF Pages First (Recommended)
```bash
npm install
npm run preview-pdf
npm run dev
```
Opens at http://localhost:5173 - Browse all 19 pages with navigation

### Option 2: Start with Website
```bash
npm install
npm run preview-website
npm run dev
```
Opens at http://localhost:5173 - See the website with placeholder content

## Filling in Your Content

### Easy Method: Use the Template
1. Open `CONTENT_TEMPLATE.md`
2. View images in `public/images/` folder
3. Fill in the template with content from each page
4. Copy content to React components

### Direct Method: Edit Components
Edit files in `src/components/`:
- `Hero.jsx` - Page 1 (Cover)
- `Problem.jsx` - Page 2 (Problems)
- `Solution.jsx` - Page 3 (Solution)
- `Market.jsx` - Page 4, 15 (Market, Competition)
- `Product.jsx` - Pages 5-6 (Features)
- `BusinessModel.jsx` - Pages 7-8 (Revenue, Pricing)
- `Traction.jsx` - Pages 9-10, 17 (Metrics, Roadmap)
- `Team.jsx` - Pages 11-12 (Team)
- `Financials.jsx` - Pages 13-14 (Projections)
- `Contact.jsx` - Pages 18-19 (Contact, Ask)

## Example: Updating Hero Component

1. Open `public/images/page_1_img_1.png` to see your cover slide
2. Note the company name, tagline, and main message
3. Open `src/components/Hero.jsx`
4. Replace this:
```jsx
<h1 className="text-5xl md:text-6xl font-bold mb-6">
  Welcome to Our Vision
</h1>
```

With your actual content:
```jsx
<h1 className="text-5xl md:text-6xl font-bold mb-6">
  Your Company Name
</h1>
```

## Switching Between Modes

### Preview PDF Pages:
```bash
npm run preview-pdf
npm run dev
```

### View Website:
```bash
npm run preview-website
npm run dev
```

Or use the switch command directly:
```bash
node switch-mode.js preview
npm run dev
```

## Tips

1. **Start with Hero** - Get the cover page done first
2. **One page at a time** - Don't try to do everything at once
3. **Test frequently** - Run `npm run dev` to see changes live
4. **Use the images** - Keep `public/images/` open while editing
5. **Split dense content** - If a page has too much info, split it across multiple cards

## Need Help?

- Check `CONTENT_TEMPLATE.md` for structure
- Check `CONTENT_EXTRACTION_GUIDE.md` for detailed instructions
- Check `README.md` for full documentation

## Deploy When Ready

```bash
npm run build
```

Then deploy the `dist/` folder to:
- Netlify (drag & drop)
- Vercel (`vercel --prod`)
- GitHub Pages
- Any static hosting service
