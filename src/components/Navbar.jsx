import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import ResumeButton from './ResumeButton';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  // The initial theme is applied before first paint by a small script in index.html.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* storage unavailable */ }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      h.style.setProperty('--progress', max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach((l) => { const el = document.getElementById(l.toLowerCase()); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); io.disconnect(); };
  }, []);

  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <header className="site-nav">
      <div className="scroll-progress" aria-hidden="true" />
      <nav className="container nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home">{profile.name}</a>
        <div className="nav-tools">
          <button className="theme-toggle" onClick={() => setTheme(next)} aria-label={`Switch to ${next} theme`}>{next === 'light' ? 'Light' : 'Dark'}</button>
          <button className="nav-toggle" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        </div>
        <ul id="nav-links" className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className={active === l.toLowerCase() ? 'active' : ''} aria-current={active === l.toLowerCase() ? 'true' : undefined} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
          <li><ResumeButton className="btn btn-accent btn-sm" /></li>
        </ul>
      </nav>
    </header>
  );
}
