import Section from './Section';
import { coreSkills, exposure } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" alt>
      <h3 className="skills-sub">Core stack</h3>
      <div className="row g-4">
        {coreSkills.map((g, i) => (
          <div className="col-md-6 col-lg-4" key={g.group}>
            <div className={`card-x h-100 ${['c-blue', 'c-green', 'c-amber', 'c-teal', 'c-violet', 'c-rose'][i % 6]}`}>
              <h4 className="card-h">{g.group}</h4>
              <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
      <h3 className="skills-sub">Additional technical exposure</h3>
      <div className="card-x card-exposure">
        <p className="small-muted">Learned through training and practice. These support my core stack and are not my primary expertise.</p>
        <div className="row g-4">
          {exposure.map((g) => (
            <div className="col-md-4" key={g.label}>
              <h4 className="exposure-h">{g.label}</h4>
              <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
