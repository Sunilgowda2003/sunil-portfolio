import Section from './Section';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.org} className={`tl-item${e.current ? ' tl-current' : ''}`}>
            <div className="tl-head">
              <h3>{e.role}</h3>
              <span className="tl-period">{e.period}</span>
            </div>
            <p className="tl-org">{e.org} · {e.place}{e.note ? ` · ${e.note}` : ''}</p>
            <ul className="tl-points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <ul className="chips">{e.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
