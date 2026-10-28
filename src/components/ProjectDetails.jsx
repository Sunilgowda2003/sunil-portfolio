import { useEffect, useRef } from 'react';

function Block({ title, children }) {
  if (!children || (Array.isArray(children) && !children.length)) return null;
  return (<><h3 className="detail-h">{title}</h3>{children}</>);
}

export default function ProjectDetails({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (project && d && !d.open) d.showModal();
    if (!project && d?.open) d.close();
  }, [project]);

  return (
    <dialog ref={ref} className="detail" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()} aria-labelledby="detail-title">
      {project && (
        <div className="detail-body">
          <div className="detail-top">
            <h2 id="detail-title">{project.name}</h2>
            <button className="btn btn-outline btn-sm" onClick={onClose}>Close</button>
          </div>
          {project.image && <img className="detail-img" src={project.image} alt={project.imageAlt} width="960" height="429" loading="lazy" />}
          <Block title="Project Overview">{project.overview && <p>{project.overview}</p>}</Block>
          <Block title="Problem">{project.problem && <p>{project.problem}</p>}</Block>
          <Block title="Solution">{project.solution && <p>{project.solution}</p>}</Block>
          <Block title="Key Features"><ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul></Block>
          <Block title="Technology Stack"><ul className="chips">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul></Block>
          <Block title="Architecture">{project.architecture && <p>{project.architecture}</p>}</Block>
          <Block title="My Contribution">{project.contribution && <p>{project.contribution}</p>}</Block>
          <div className="project-actions mt-4">
            {project.github && <a className="btn btn-accent btn-sm" href={project.github} target="_blank" rel="noreferrer">GitHub Repository</a>}
            {project.demo && <a className="btn btn-outline btn-sm" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
          </div>
        </div>
      )}
    </dialog>
  );
}
