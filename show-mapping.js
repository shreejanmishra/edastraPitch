#!/usr/bin/env node

console.log('\n📄 PDF Page to Component Mapping\n');
console.log('=' .repeat(80));

const mapping = [
  { page: 1, image: 'page_1_img_1.png', component: 'Hero.jsx', section: 'Cover/Title Slide' },
  { page: 2, image: 'page_2_img_1.png', component: 'Problem.jsx', section: 'Problem Statement' },
  { page: 3, image: 'page_3_img_1.png', component: 'Solution.jsx', section: 'Solution Overview' },
  { page: 4, image: 'page_4_img_1.png', component: 'Market.jsx', section: 'Market Opportunity' },
  { page: 5, image: 'page_5_img_1.png', component: 'Product.jsx', section: 'Product Features (1/2)' },
  { page: 6, image: 'page_6_img_1.png', component: 'Product.jsx', section: 'Product Features (2/2)' },
  { page: 7, image: 'page_7_img_1.png', component: 'BusinessModel.jsx', section: 'Business Model' },
  { page: 8, image: 'page_8_img_1.png', component: 'BusinessModel.jsx', section: 'Pricing Strategy' },
  { page: 9, image: 'page_9_img_1.png', component: 'Traction.jsx', section: 'Traction & Metrics' },
  { page: 10, image: 'page_10_img_1.png', component: 'Traction.jsx', section: 'Key Milestones' },
  { page: 11, image: 'page_11_img_1.png', component: 'Team.jsx', section: 'Team Members' },
  { page: 12, image: 'page_12_img_1.png', component: 'Team.jsx', section: 'Advisors/Extended Team' },
  { page: 13, image: 'page_13_img_1.png', component: 'Financials.jsx', section: 'Financial Projections' },
  { page: 14, image: 'page_14_img_1.png', component: 'Financials.jsx', section: 'Revenue Model' },
  { page: 15, image: 'page_15_img_1.png', component: 'Market.jsx', section: 'Competition Analysis' },
  { page: 16, image: 'page_16_img_1.png', component: 'Solution.jsx', section: 'Technology Stack' },
  { page: 17, image: 'page_17_img_1.png', component: 'Traction.jsx', section: 'Roadmap' },
  { page: 18, image: 'page_18_img_1.png', component: 'Contact.jsx', section: 'The Ask' },
  { page: 19, image: 'page_19_img_1.png', component: 'Contact.jsx', section: 'Contact Information' },
];

mapping.forEach(item => {
  console.log(`\nPage ${item.page.toString().padStart(2, ' ')}: ${item.section}`);
  console.log(`  📁 Image:     public/images/${item.image}`);
  console.log(`  ⚛️  Component: src/components/${item.component}`);
});

console.log('\n' + '='.repeat(80));
console.log('\n💡 Tips:');
console.log('  1. Open images in public/images/ to view content');
console.log('  2. Edit corresponding component files in src/components/');
console.log('  3. Run "npm run preview-pdf" to view all pages in browser');
console.log('  4. Run "npm run dev" to see website with your changes\n');
