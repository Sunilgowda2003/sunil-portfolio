import { useMemo, useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import { projects, filters } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const visible = useMemo(() => projects.filter((p) => filter === 'All' || p.tags.includes(filter)), [filter]);

  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of applications and technical projects demonstrating my full-stack development skills." alt>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f} className={`filter${f === filter ? ' on' : ''}`} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="row g-4">
        {visible.map((p) => (<div className="col-md-6 col-lg-4" key={p.id}><ProjectCard project={p} onOpen={setActive} /></div>))}
      </div>
      <ProjectDetails project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
