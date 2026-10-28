import { profile, heroStack } from '../data/profile';
import photo from '../assets/sunil.jpg';
import ResumeButton from './ResumeButton';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <img className="hero-photo" src={photo} width="640" height="640" fetchpriority="high" alt="Portrait of Sunil J S in a navy blazer" />
        <div className="hero-body">
          <p className="hero-hi">Hi, I'm {profile.name}</p>
          <h1 id="hero-title" className="hero-title">{profile.role}</h1>
          <p className="hero-text">Java Full Stack Developer focused on building scalable backend services, REST APIs, database-driven applications, and responsive web interfaces using Java, Spring Boot,JavaScript, and MySQL.</p>
          <ul className="chips chips-lg" aria-label="Core technologies">
            {heroStack.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="hero-actions">
            <a className="btn btn-accent" href="#projects">View Projects</a>
            <ResumeButton className="btn btn-outline" />
          </div>
          <p className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}
