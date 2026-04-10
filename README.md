# Edastra Pitch Deck Website

A modern, interactive pitch deck website for Edastra - an edutainment platform designed to democratize high-quality education and family-safe entertainment.

## Overview

This is a React-based single-page application built with Vite, featuring multiple sections showcasing Edastra's vision, products, and business model.

## Tech Stack

- **React** 18.2.0 - UI library
- **React Router DOM** 6.21.0 - Client-side routing
- **Vite** 5.0.8 - Build tool and dev server
- **Tailwind CSS** 3.4.0 - Utility-first CSS framework
- **PostCSS** & **Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd edastraPitch
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run show-mapping` - Show component mapping

## Project Structure

```
edastraPitch/
├── public/
│   ├── images/          # Static images and icons
│   └── graphs/          # Interactive HTML graphs
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Key Features

- Interactive navigation with smooth scrolling
- Responsive design for all screen sizes
- Dynamic content sections with cards and icons
- Embedded interactive graphs and visualizations
- Auto-resizing iframes for graph content
- Sticky navigation and visual elements

## Sections

- **Home** - Landing page with hero section
- **Our Approach** - Problem, Solution, Ecosystem, Beta App, Traction
- **Product** - Prototype App, Preschool, 10th Board, Scholarships
- **VR Experience** - Virtual reality learning modules
- **Content Economics** - Business model and unit economics
- **Tech Architecture** - Technical infrastructure
- **Market** - Market analysis and opportunity
- **Financial Outlook** - Revenue projections and growth
- **Road Ahead** - Future plans and milestones
- **Team** - Founders and team members
- **Contact** - Get in touch

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## License

All rights reserved.
