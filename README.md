# Sunil J S | Java Full Stack Developer Portfolio

A modern, responsive personal portfolio showcasing my technical skills, projects, training, education, and development journey as an aspiring Java Full Stack Developer.

Built with React and Vite, the portfolio is designed to help recruiters and hiring managers explore my technical background, practical experience, and software development projects.

**Live Portfolio:** [View My Portfolio](https://sunil-portfolio-three.vercel.app/)

**GitHub:** [Sunilgowda2003](https://github.com/Sunilgowda2003)  
**LinkedIn:** [Sunil J S](https://www.linkedin.com/in/sunil-j-s-7b5435286)

---

## About Me

I am Sunil J S, a Computer Science and Engineering graduate (2025) based in Bengaluru, Karnataka, India, focused on developing my career as a Java Full Stack Developer.

My technical interests include backend development, RESTful APIs, database-driven applications, and responsive frontend interfaces.

I enjoy building practical projects, strengthening my programming fundamentals, and continuously learning technologies used in modern software development.

## Tech Stack

### Frontend
- React 18
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap 5

### Backend Technologies
- Java
- Spring Framework
- Spring Boot
- Spring MVC
- Hibernate and JPA
- JDBC
- RESTful APIs

### Database
- MySQL

### Development Tools
- Git and GitHub
- npm
- Vite
- Visual Studio Code
- Vercel

## Features

- **Recruiter-focused design:** Clear presentation of profile, technical skills, experience, projects, education, certifications, and contact information.
- **Responsive interface:** Designed for desktop, tablet, and mobile screens.
- **Project showcase:** Featured projects with filtering and detailed project dialogs.
- **Dark and light themes:** Theme preference is saved in the browser.
- **Interactive navigation:** Sticky navbar, active-section highlighting, mobile menu, and scroll progress.
- **Recruiter snapshot:** Quick overview of technical strengths and professional profile.
- **GitHub and DSA section:** Highlights coding practice and development activity.
- **Resume download:** Provides access to the latest PDF resume.
- **Accessibility:** Semantic HTML, keyboard navigation, skip link, visible focus indicators, and reduced-motion support.
- **SEO support:** Meta tags, Open Graph metadata, Twitter cards, structured data, sitemap, and canonical URL support.
- **Reusable React components:** Portfolio sections are organized into separate components for maintainability.

## Project Structure

```text
sunil-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── resume.pdf
├── scripts/
│   └── check-resume.mjs
├── src/
│   ├── assets/
│   │   ├── flight-schedule.jpg
│   │   └── sunil.jpg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Backend.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Github.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Projects.jsx
│   │   ├── RecruiterSnapshot.jsx
│   │   ├── ResumeButton.jsx
│   │   ├── Section.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   ├── certifications.js
│   │   ├── experience.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   └── main.jsx
├── scripts/
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md
```

## Getting Started

Follow these instructions to run the portfolio locally.

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### 1. Clone the repository

```bash
git clone https://github.com/Sunilgowda2003/sunil-portfolio.git
```

### 2. Navigate to the project directory

```bash
cd sunil-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

The development server supports hot reloading, so supported changes appear in the browser as you edit your files.

## Customization

### Update Portfolio Content

Most portfolio content is maintained in the `src/data/` directory.

- `profile.js` — Personal profile and introductory information.
- `skills.js` — Technical skills.
- `projects.js` — Project descriptions, GitHub links, and demo links.
- `experience.js` — Training and experience information.
- `certifications.js` — Certifications and credentials.

Edit the relevant files to update your information.

### Add a New Project

Add a new project object to `src/data/projects.js`, following the existing structure.

- Include an accurate project title and description.
- List the technologies actually used.
- Set `github` to the exact repository URL, or `null` if unavailable.
- Add `demo` only when a working public demo exists.

### Update Your Profile Image

Replace the relevant image in `src/assets/` and update its import or reference if the filename changes.

### Update Your Resume

Place your latest PDF resume at:

```text
public/resume.pdf
```

Use this exact filename because the resume download buttons reference this path.

Verify that the PDF opens correctly before publishing your changes.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Vite generates the production files in the `dist/` directory.

## Deployment on Vercel

The portfolio is deployed using Vercel and integrated with GitHub for automatic deployments.

### Deployment Configuration

| Setting | Value |
|---|---|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |
| Production branch | `main` |

### Deployment Steps

1. Push the project to the GitHub repository.
2. Sign in to [Vercel](https://vercel.com/).
3. Import the `sunil-portfolio` repository.
4. Confirm the project build settings.
5. Click **Deploy**.

After deployment, Vercel provides a public website URL.

### Automatic Deployment

Once GitHub integration is configured, pushing changes to the connected production branch triggers a new deployment.

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel builds and publishes the changes when the deployment succeeds.

### Environment Variables

If the application supports `VITE_SITE_URL`, configure it in Vercel under **Project Settings → Environment Variables**.

Example:

```text
VITE_SITE_URL=https://your-portfolio.vercel.app
```

Replace the example with the actual production URL. Redeploy after changing environment variables.

This variable should only be configured if the project code uses it for canonical URLs, Open Graph metadata, or sitemap generation.

## Resume URL

After deployment, the resume should be accessible at:

```text
https://your-portfolio.vercel.app/resume.pdf
```

Replace the example domain with the actual Vercel URL and confirm that the PDF displays correctly.

## Future Improvements

Potential enhancements include:

- More full-stack projects using Spring Boot and MySQL.
- Project demonstrations with screenshots and architecture diagrams.
- Improved automated testing.
- Performance and accessibility audits.
- Additional backend and API documentation.

## Contact

**Sunil J S**  
Java Full Stack Developer

- GitHub: [github.com/Sunilgowda2003](https://github.com/Sunilgowda2003)
- LinkedIn: [linkedin.com/in/sunil-j-s-7b5435286](https://www.linkedin.com/in/sunil-j-s-7b5435286)

Thank you for visiting my portfolio!

If you are a recruiter, developer, or hiring manager interested in my work, feel free to connect with me through LinkedIn or GitHub.
