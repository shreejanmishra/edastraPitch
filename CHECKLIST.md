# ✅ Project Checklist

## Setup (Do Once)

- [ ] Run `npm install`
- [ ] Run `npm run show-mapping` to see page mappings
- [ ] Read `FINAL_INSTRUCTIONS.md`

## Content Population (Main Work)

### Phase 1: Review Content
- [ ] Run `npm run preview-pdf` then `npm run dev`
- [ ] Browse all 19 pages in browser
- [ ] Take notes on content from each page
- [ ] Fill in `CONTENT_TEMPLATE.md`

### Phase 2: Update Components (One by one)

#### Page 1 - Hero
- [ ] Open `public/images/page_1_img_1.png`
- [ ] Note company name, tagline, main message
- [ ] Edit `src/components/Hero.jsx`
- [ ] Test: `npm run preview-website` then `npm run dev`

#### Page 2 - Problem
- [ ] Open `public/images/page_2_img_1.png`
- [ ] Note 3-4 key problems
- [ ] Edit `src/components/Problem.jsx`
- [ ] Test changes

#### Pages 3, 16 - Solution
- [ ] Open `public/images/page_3_img_1.png` and `page_16_img_1.png`
- [ ] Note solution description and tech stack
- [ ] Edit `src/components/Solution.jsx`
- [ ] Test changes

#### Pages 4, 15 - Market
- [ ] Open `public/images/page_4_img_1.png` and `page_15_img_1.png`
- [ ] Note TAM/SAM/SOM and competition
- [ ] Edit `src/components/Market.jsx`
- [ ] Test changes

#### Pages 5-6 - Product
- [ ] Open `public/images/page_5_img_1.png` and `page_6_img_1.png`
- [ ] Note 4+ product features
- [ ] Edit `src/components/Product.jsx`
- [ ] Test changes

#### Pages 7-8 - Business Model
- [ ] Open `public/images/page_7_img_1.png` and `page_8_img_1.png`
- [ ] Note revenue streams and pricing
- [ ] Edit `src/components/BusinessModel.jsx`
- [ ] Test changes

#### Pages 9-10, 17 - Traction
- [ ] Open `public/images/page_9_img_1.png`, `page_10_img_1.png`, `page_17_img_1.png`
- [ ] Note metrics, milestones, roadmap
- [ ] Edit `src/components/Traction.jsx`
- [ ] Test changes

#### Pages 11-12 - Team
- [ ] Open `public/images/page_11_img_1.png` and `page_12_img_1.png`
- [ ] Note team members, roles, bios
- [ ] Edit `src/components/Team.jsx`
- [ ] Test changes

#### Pages 13-14 - Financials
- [ ] Open `public/images/page_13_img_1.png` and `page_14_img_1.png`
- [ ] Note financial projections
- [ ] Edit `src/components/Financials.jsx`
- [ ] Test changes

#### Pages 18-19 - Contact
- [ ] Open `public/images/page_18_img_1.png` and `page_19_img_1.png`
- [ ] Note the ask and contact info
- [ ] Edit `src/components/Contact.jsx`
- [ ] Test changes

### Phase 3: Customization

- [ ] Update company name in `src/components/Navbar.jsx`
- [ ] Update company name in `src/components/Footer.jsx`
- [ ] Update page title in `index.html`
- [ ] Customize colors in `tailwind.config.js`
- [ ] Add better images if available

### Phase 4: Testing

- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Check all sections display correctly
- [ ] Verify smooth scrolling works
- [ ] Check responsive design

### Phase 5: Deployment

- [ ] Run `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Deploy to hosting service:
  - [ ] Netlify, or
  - [ ] Vercel, or
  - [ ] GitHub Pages, or
  - [ ] Other hosting
- [ ] Test live website
- [ ] Share with team!

## Quick Commands Reference

```bash
# View PDF pages
npm run preview-pdf
npm run dev

# View website
npm run preview-website
npm run dev

# See page mapping
npm run show-mapping

# Build for production
npm run build

# Preview production build
npm run preview
```

## Progress Tracking

**Started:** ___________
**Completed:** ___________
**Deployed:** ___________

**Notes:**
_________________________________
_________________________________
_________________________________
