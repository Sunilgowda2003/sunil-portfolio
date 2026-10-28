import Section from './Section';
import { education } from '../data/profile';

export default function Education() {
  return (
    <Section id="education" title="Education" compact>
      <div className="row g-3">
        {education.map((e, i) => (
          <div className={i === 0 ? 'col-lg-6' : 'col-sm-6 col-lg-3'} key={e.degree}>
            <div className="card-x h-100">
              <h3 className="card-h">{e.degree}</h3>
              <p className="mb-1">{e.school}</p>
              <p className="small-muted mb-0">{e.years} · {e.score}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
