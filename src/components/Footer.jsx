import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-name">{profile.name}</p>
        <p>{profile.role}</p>
        <p className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </p>
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
