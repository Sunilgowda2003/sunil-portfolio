import Section from './Section';
import ResumeButton from './ResumeButton';
import { profile } from '../data/profile';

export default function Contact() {
  const items = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', value: 'linkedin.com/in/sunil-j-s-7b5435286', href: profile.linkedin, external: true },
    { label: 'GitHub', value: 'github.com/Sunilgowda2003', href: profile.github, external: true },
  ];
  return (
    <Section id="contact" title="Let's build something together." subtitle="I'm actively looking for entry-level Java Full Stack and Software Developer opportunities. The quickest way to reach me is email.">
      <ul className="contact-grid">
        {items.map((i) => (
          <li key={i.label} className="card-x">
            <span>{i.label}</span>
            <a href={i.href} {...(i.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{i.value}</a>
          </li>
        ))}
      </ul>
      <div className="hero-actions">
        <a className="btn btn-accent" href={`mailto:${profile.email}`}>Email Me</a>
        <ResumeButton className="btn btn-outline" />
      </div>
    </Section>
  );
}
