# Nine Studios

Premium video editing and content strategy portfolio website.

## Tech Stack

- **Next.js 16.1.1** - React framework with App Router and Turbopack
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS with custom design tokens
- **Framer Motion** - Animation library for scroll-triggered effects
- **Lenis** - Smooth scrolling
- **shadcn/ui** - Component library (Button, Card, Accordion, Dialog, Carousel)

## Project Overview

A conversion-focused single-page portfolio website showcasing video editing work and services. The site features:

- **Hero Section** - Introduction with primary CTA
- **Work Section** - YouTube video portfolio (short-form and long-form content)
- **Services Section** - Offered services breakdown
- **Testimonials Section** - Client feedback carousel
- **Pricing Section** - Three-tier pricing structure
- **FAQ Section** - Common questions accordion
- **Footer** - Final CTA and branding

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production Server

```bash
npm start
```

## Content Management

All website content (copy, links, video IDs) is centralized in `/lib/constants.ts`. Update this file to modify:
- Site name and tagline
- Hero headline and subheading
- Video portfolio IDs
- Service offerings
- Testimonials
- Pricing tiers
- FAQ questions and answers
- CTA links

## Design Tokens

Design system variables are defined in `/app/globals.css` using Tailwind's `@theme` directive. Update these values to modify:
- Spacing (section padding, grid gaps, heading margins)
- Typography (hero, subheading, and heading font sizes)
- Container widths (sm/md/lg breakpoints)

Custom utilities generated:
- `px-section`, `py-section-y` - Responsive section padding
- `text-hero`, `text-hero-sub`, `text-heading` - Typography scales
- `max-w-container-sm/md/lg` - Container widths
- `gap-grid`, `mb-heading` - Spacing utilities

## Project Structure

```
/app
  ├── globals.css          # Design tokens and custom utilities
  ├── layout.tsx           # Root layout with Lenis smooth scroll
  └── page.tsx             # Main page with all sections

/components
  ├── sections/            # Hero, Work, Services, Testimonials, Pricing, FAQ, Footer
  ├── YouTubeEmbed.tsx     # Custom video player component
  └── LenisProvider.tsx    # Smooth scroll wrapper

/lib
  └── constants.ts         # All website content data
```

## Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
```

The build output will be optimized for production with static generation where possible.
