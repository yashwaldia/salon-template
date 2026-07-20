# Maison de Beauté – Premium Salon Web Experience

A high-end, responsive web application designed for luxury beauty salons, spas, and wellness clinics. This project provides a refined digital storefront that prioritizes user experience, fluid animations, and professional aesthetics.

## Overview

Maison de Beauté is built with modern web standards in mind, ensuring a seamless experience across all devices—from mobile phones to ultra-wide desktop monitors. It features a bilingual interface (English and German), a custom design system based on luxury branding principles, and fluid layouts. The architecture relies on Next.js for optimal performance, fast loading times, and a clean codebase.

## Key Features

- **Premium UI/UX:** A minimalist, elegant design system using tailored typography (Cormorant Garamond for headings, Inter for body text) and a curated "sand and gold" color palette.
- **Fully Responsive (Mobile-First):** Engineered to look and feel great on any screen size. Features a custom mobile drawer navigation, fluid typography, and touch-friendly interaction targets (minimum 44x44px).
- **Bilingual Interface:** Built-in internationalization context supporting seamless switching between English (EN) and German (DE) without page reloads.
- **Smooth Animations:** Integrated with Motion for sophisticated, 60fps scroll animations, staggered reveals, and page transitions that respect users' reduced-motion preferences.
- **Modern Architecture:** Utilizing the Next.js App Router and Tailwind CSS v4 for clean, maintainable, and highly performant code.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## Getting Started

To run this project locally, ensure you have Node.js installed, then follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js App Router pages, routing configuration, and global layouts.
- `/src/components` - Reusable UI components organized by domain (`home`, `layout`, etc.).
- `/src/views` - High-level page components separating the routing from the UI view logic.
- `/src/contexts` - React Context providers (e.g., `LanguageContext` for i18n translations).
- `/src/lib` - Shared utility functions and helpers.

## Design & Accessibility Guidelines

This project was built adhering to strict agency-level engineering standards:
- **Accessibility (WCAG 2.2 AA):** Semantic HTML, sufficient color contrast, and functional focus states.
- **Responsive Design:** Extensive use of CSS Flexbox and Grid. Avoids rigid fixed positioning to ensure layouts resize naturally without horizontal scrolling.
- **Performance (Core Web Vitals):** Prioritizes fast Largest Contentful Paint (LCP) and minimal Cumulative Layout Shift (CLS).
