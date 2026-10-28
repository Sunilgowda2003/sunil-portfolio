export default function ProjectCard({ project, onOpen }) {
  const color = project.tags.includes('Spring Boot') ? 'c-green' : project.tags.includes('React') ? 'c-blue' : 'c-violet';
  return (
    <article className={`card-x project h-100 ${color}`}>
      <p className="project-cat">{project.category}</p>
      <h3 className="card-h">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <ul className="chips" aria-label="Technology stack">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      <ul className="features">{project.features.slice(0, 5).map((f) => <li key={f}>{f}</li>)}</ul>
      <div className="project-actions">
        <button className="btn btn-accent btn-sm" onClick={() => onOpen(project)} aria-label={`View details: ${project.name}`}>View Details</button>
        {project.github && <a className="btn btn-outline btn-sm" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>GitHub</a>}
        {project.demo && <a className="btn btn-outline btn-sm" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
      </div>
    </article>
  );
}
