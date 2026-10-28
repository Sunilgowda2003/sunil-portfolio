import Section from './Section';
import { profile, featuredRepos, dsa } from '../data/profile';

export default function Github() {
  return (
    <Section id="github" title="GitHub & Coding Practice" subtitle="Explore my repositories, technical projects, Java practice, full-stack applications and continuous learning journey.">
      <div className="row g-4">
        <div className="col-lg-7">
          <h3 className="skills-sub">Selected repositories</h3>
          <ul className="repo-list">
            {featuredRepos.map((r) => (
              <li key={r.name}>
                <span className="repo-cat">{r.category}</span>
                <a href={`${profile.github}/${r.name}`} target="_blank" rel="noreferrer">{r.name}</a>
                <span>{r.description}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn-accent" href={profile.github} target="_blank" rel="noreferrer">View GitHub Profile</a>
        </div>
        <div className="col-lg-5">
          <h3 className="skills-sub">DSA practice in Java</h3>
          <div className="card-x c-amber">
            <p>Regular problem-solving practice covering:</p>
            <ul className="chips">{dsa.topics.map((t) => <li key={t}>{t}</li>)}</ul>
            <a className="btn btn-outline btn-sm" href={dsa.repo} target="_blank" rel="noreferrer">View DSA repository</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
