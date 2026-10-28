import Section from './Section';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" alt compact>
      <ul className="cert-list">
        {certifications.map((c) => (
          <li key={c.name} className="card-x">
            <strong>{c.name}</strong>
            <span>{c.issuer}{c.inProgress ? ' · In progress' : ''}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
