# Sunil J S — Java Full Stack Developer Portfolio

## About
Personal portfolio of Sunil J S, an entry-level Java Full Stack Developer (B.E. Computer Science Engineering, 2025) based in Bengaluru. It presents my skills, training, projects and contact details for recruiters and hiring managers.

## Tech Stack
React 18 · Vite 5 · JavaScript · Bootstrap 5 (grid and reboot) · custom CSS design tokens

## Features
- Recruiter-first layout: hero, recruiter snapshot, skills, experience, featured projects, backend overview, GitHub and DSA practice, education, certifications, contact
- Project filters and a details dialog (keyboard accessible, closes with Esc)
- Dark and light themes, saved in the browser and applied before first paint
- Sticky navbar with active-section highlight, mobile menu and scroll progress
- Accessible: semantic HTML, skip link, visible focus states, reduced-motion support
- SEO: meta tags, Open Graph, Twitter card, JSON-LD, sitemap and canonical URL (generated from your domain)

## Project Structure
```
public/            favicon.svg, og-image.png, robots.txt, resume.pdf (you add this)
scripts/           check-resume.mjs (warns at build time if the resume is missing)
src/
  components/      one file per section (Hero, Skills, Projects, ...)
  data/            all content: profile, skills, experience, projects, certifications
  assets/          images
  styles/main.css  design tokens and styles
```
To change content, edit the files in `src/data/`. To add a project, copy an object in `src/data/projects.js` (set `github` to the exact repository URL, or `null`; add `demo` only for a real deployment).

## Getting Started
```bash
npm install
npm run dev
```

## Resume
Place your PDF at `public/resume.pdf`. Every "Download Resume" button points to it, and `npm run build` prints a warning if it is missing.

## Production Build
```bash
npm run build
npm run preview
```

## Deployment (Vercel)
1. Push the project to a GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repository.
3. Vercel detects Vite (`vercel.json` sets build command `npm run build`, output `dist`). Click **Deploy**.
4. Optional: in **Settings → Environment Variables** add `VITE_SITE_URL` with your live URL (for example `https://your-name.vercel.app`) and redeploy. This adds the canonical URL, Open Graph image and `sitemap.xml`.

## Author
Sunil J S — [GitHub](https://github.com/Sunilgowda2003) · [LinkedIn](https://www.linkedin.com/in/sunil-j-s-7b5435286)
