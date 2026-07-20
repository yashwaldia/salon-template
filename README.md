# Maison de Beauté

An editorial-quality, luxury website template designed specifically for premium beauty salons, cosmetic studios, and wellness centers. Maison de Beauté combines elegant typography, fluid animations, and a minimalist aesthetic to create a digital experience that reflects the high standards of a modern luxury brand.

## Production Readiness & Future Architecture (Next.js)

While this repository currently runs as an optimized React SPA, it has been architecturally prepared for a seamless port to **Next.js (App Router)** for enterprise-grade production deployment.

### Current SEO & Performance Implementations
We have already integrated production-ready SEO practices into the React build:
- **`react-helmet-async`**: Dynamic `<head>` management for meta tags.
- **JSON-LD Structured Data**: LocalBusiness schema configured for local SEO.
- **Canonical URLs & Open Graph**: Pre-configured for proper social media unfurling and search indexing.
- **Semantic HTML5**: Strict adherence to heading hierarchies (H1-H6) and landmark elements.
- **`robots.txt` & `sitemap.xml`**: Included in the `public` directory.

### Next Phase: The Next.js Migration Strategy
To achieve 90-100 Lighthouse SEO scores and robust Server-Side Rendering (SSR), the planned production stack involves porting these components into Next.js:

| Layer | Target Production Tech | Why |
|-------|-----------------------|-----|
| **Framework** | **Next.js 14+ (App Router)** | SSR, SSG, React Server Components, faster initial page loads |
| **Styling** | **Tailwind CSS v4** | Retained for utility-first responsive styling |
| **SEO** | **Next.js Metadata API** | Will replace `react-helmet-async` for native server-side meta tags |
| **Image Optimization** | **`next/image`** | Automatic WebP/AVIF formatting and layout shift prevention |
| **Analytics** | **Google Analytics 4 / Vercel** | Out-of-the-box performance and event tracking |

## Current Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **SEO**: `react-helmet-async`
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: React Router DOM

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yashwaldia/salon-template.git
   cd salon-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:3000`).

## Project Structure

```text
├── src/
│   ├── components/      # Reusable UI components and page sections
│   │   ├── home/        # Specific sections for the landing page
│   │   └── seo/         # Dynamic metadata & JSON-LD injectors
│   ├── lib/             # Utility functions (e.g., tailwind class merging)
│   ├── index.css        # Global CSS, font imports, and Tailwind config
│   ├── main.tsx         # Application entry point
│   └── App.tsx          # Root component and layout structure
├── public/              # Static assets (robots.txt, sitemap.xml)
├── index.html           # HTML template
├── vite.config.ts       # Vite bundler configuration
└── package.json         # Dependencies and scripts
```

## Customization & Content Management

The sections are built to be highly modular. Textual content, image URLs, and service offerings are mapped from structured data arrays located at the top of their respective component files. This architecture will seamlessly translate into Server Components or CMS-driven data fetching in the Next.js migration phase.

## 📄 License

This project is licensed under the MIT License. Feel free to use it for your personal or commercial projects.
