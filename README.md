# Aravind R — Personal Portfolio & Engineering Showcase

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify)](https://aravindr.netlify.app)

**A high-performance, modern, and interactive portfolio designed for an Aspiring AI/ML Engineer and Full-Stack Developer.**

[🌐 Live Production Website](https://aravindr.netlify.app) • [💼 GitHub Repository](https://github.com/Aravindr017/aravind-portfolio)

</div>

---

## 📌 Overview

This repository houses the personal portfolio and technical showcase of **Aravind R**. Built from the ground up using **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**, the site provides a smooth, cinematic, and responsive browsing experience highlighting engineering projects, IEEE leadership milestones, competitive programming ranks, and technical proficiencies.

---

## ✨ Key Features

- **Cinematic Hero Section:** Dynamic parallax image layout with focal centering, glassmorphic status indicators, and rapid access to key highlights (IEEE Xtreme Global Rank #83, 1st Prize awards).
- **Floating Dynamic Island Navbar:** Sleek, glass-blurred floating navigation bar that appears dynamically on scroll with quick section navigation, resume access, and theme switching.
- **Dark & Light Mode Support:** Seamless toggle powered by `next-themes` with custom SVG theme icons, tailored HSL color palettes, and persistent user preferences.
- **Technical Skill Matrix (Bento Grid):** Organized into 7 comprehensive categories (AI/ML & Data Science, Languages, Web & Frameworks, Databases & DevOps, Embedded & IoT, Core CS, and Tools & Platforms) with micro-animations and tag counters.
- **Infinite Project Marquee:** Smooth horizontal card marquee featuring embedded projects, modal document previews, live demo links, and GitHub repositories.
- **Leadership & Career Timeline:** Chronological timeline detailing intern roles, IEEE PES Kerala Chapter leadership, and collegiate milestones.
- **Interactive AI Assistant (Chatbot):** Floating responsive assistant providing instant answers about projects, achievements, background, and contact information.
- **Validated Contact Form:** Direct outreach integration powered by **EmailJS** with real-time field validation and notification feedback.
- **Responsive & Accessible Design:** Fully optimized for mobile, tablet, and wide desktop screens with zero horizontal overflow.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict mode) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), CSS Modules, Glassmorphism |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [Lenis Smooth Scroll](https://lenis.darkroom.engineering/) |
| **Theme System** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Email Service** | [@emailjs/browser](https://www.emailjs.com/) |
| **Hosting & CI/CD** | [Netlify](https://www.netlify.com/) (`@netlify/plugin-nextjs`) |

---

## 📂 Project Directory Structure

```text
aravind-portfolio/
├── netlify.toml                # Netlify build configuration & Next.js plugin
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS plugins
├── tailwind.config.ts          # Tailwind CSS theme configuration
├── tsconfig.json               # TypeScript compiler settings
├── public/
│   ├── documents/              # Downloadable resume & documentation
│   └── images/                 # Project screenshots, portraits, and certificates
└── src/
    ├── app/
    │   ├── globals.css         # Global Tailwind layers & custom utility classes
    │   ├── layout.tsx          # Root HTML layout & ThemeProvider wrapper
    │   └── page.tsx            # Main single-page application & section orchestrator
    └── components/
        ├── AchievementsSection.tsx  # Award cards & certificate viewer modals
        ├── BackToTop.tsx            # Smooth return-to-top floating control
        ├── Chatbot.tsx              # Virtual portfolio assistant
        ├── ContactSection.tsx       # Contact form & social media links
        ├── Footer.tsx               # Footer with links and copyright
        ├── HorizontalMarquee.tsx    # Interactive marquee for technical projects
        ├── ImageSequenceHero.tsx    # Subject-centered parallax hero component
        ├── ThemeProvider.tsx        # Next-themes client provider
        ├── ThemeToggle.tsx          # Light/Dark mode animated switcher
        └── WelcomeScreen.tsx        # Multi-lingual introduction splash screen
```

---

## 🚀 Local Development Setup

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aravindr017/aravind-portfolio.git
   cd aravind-portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in your browser:**
   Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

### Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches local Next.js development server with hot-reloading |
| `npm run build` | Compiles an optimized static production bundle |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Runs ESLint checks across TypeScript files |

---

## ☁️ Deploying to Netlify via CLI

The project is configured for automated builds using the `@netlify/plugin-nextjs` runtime specified in `netlify.toml`.

### 1. Install the Netlify CLI

Install the official CLI globally using npm:

```bash
npm install -g netlify-cli
```

Verify installation:
```bash
netlify --version
```

---

### 2. Authenticate Your Account

Log in to your Netlify account via browser authentication:

```bash
netlify login
```

---

### 3. Link the Project to Your Netlify Site

If you already have a site created on Netlify (e.g. `aravindr.netlify.app`), link the local directory to the remote site:

```bash
netlify link
```

You can choose to link via:
- **Site Name / Subdomain**: Type `aravindr`
- **Site ID**: Enter your Netlify project UUID (found in site settings)
- **Git Remote**: Automatically detect from GitHub repository

Check the link status anytime:
```bash
netlify status
```

---

### 4. Configuration File (`netlify.toml`)

Ensure `netlify.toml` is present in the project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### 5. Deploying Changes

#### A. Draft / Preview Deploy
Deploy a preview version to test changes without updating the production URL:
```bash
netlify deploy --build
```
This generates a unique test preview URL (e.g., `https://6xxxx--aravindr.netlify.app`).

#### B. Production Deploy
Build and deploy directly to the primary live domain (`https://aravindr.netlify.app`):
```bash
netlify deploy --build --prod
```

> **Pro-Tip for Local Development:**
> If you run a local `npm run build` or `netlify deploy --build` on your machine, Next.js will overwrite the development cache in `.next/`. If your `npm run dev` server is still running in the background, restart it with `rm -rf .next && npm run dev` to prevent CSS bundle cache mismatches.

---

## 🔄 Git & Continuous Deployment Workflow

When linked with GitHub, pushing to the `main` branch triggers an automatic production build on Netlify:

```bash
# 1. Check changed files
git status

# 2. Stage changes
git add .

# 3. Commit changes with a descriptive message
git commit -m "feat: update technical skills matrix and project showcase"

# 4. Push to remote main branch
git push origin main
```

Netlify automatically detects the push, runs the build command, and publishes the new release live within seconds.

---

## 📬 Contact & Connect

- **Name:** Aravind R
- **Email:** [ar986153@gmail.com](mailto:ar986153@gmail.com)
- **LinkedIn:** [linkedin.com/in/aravindr017](https://www.linkedin.com/in/aravindr017)
- **GitHub:** [@Aravindr017](https://github.com/Aravindr017)
- **Twitter / X:** [@aravindr_](https://x.com/aravindr_)
- **Live Portfolio:** [https://aravindr.netlify.app](https://aravindr.netlify.app)

---

<div align="center">
  <sub>Designed & Developed by Aravind R. © 2026 All Rights Reserved.</sub>
</div>
