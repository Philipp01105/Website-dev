# I.R.I.S. Website - React Frontend

Modern, completely redesigned frontend for the I.R.I.S. Star Citizen organization website.

## 🎨 Complete Redesign

This is a **total visual overhaul** featuring:
- **Bold, modern layout** completely different from the original
- **Fullscreen hero sections** with immersive background images
- **Card-based masonry grids** for dynamic, Pinterest-style layouts
- **Professional animations** and smooth transitions
- **Dark theme by default** with organization colors (Crimson Red & Black)
- **Fixed navigation header** with blur effects
- **Self-contained architecture** - all assets in frontend directory

## 📁 Self-Contained Structure

```
frontend-react/
├── public/
│   └── Pictures/          # All organization images
├── src/
│   ├── components/ui/     # Shadcn UI components
│   ├── pages/             # All page components
│   └── App.jsx            # Main layout
├── dist/                  # Build output
└── vite.config.js         # Configuration
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev
# http://localhost:3000

# Production build
npm run build
# Output in ./dist/
```

## 🎯 Key Features

### Home Page
- Fullscreen hero with animated logo
- Statistics showcase
- Feature cards with icons
- Full-width capability sections
- Bold CTA

### Blog Page
- Masonry grid layout
- Variable card sizes
- Modal view
- Hover effects

### Contact Page
- Split layout
- Discord card
- Large form
- Animations

## 📦 Deployment

**Self-contained frontend:**
1. Standalone: Deploy `dist/` to Vercel/Netlify
2. With Spring Boot: Copy `dist/` to `static/`
3. Separate: Frontend CDN + Backend API

## 🛠️ Tech Stack

- React 19 + Vite 7
- Tailwind CSS 3
- Shadcn UI
- Lucide Icons
- React Router
