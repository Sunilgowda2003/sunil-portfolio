import { snapshot } from '../data/profile';

export default function RecruiterSnapshot() {
  return (
    <section className="snapshot" aria-labelledby="snapshot-title">
      <div className="container">
        <h2 id="snapshot-title" className="snapshot-title">Recruiter Snapshot</h2>
        <dl className="snapshot-grid">
          {snapshot.map((s) => (<div key={s.title}><dt>{s.title}</dt><dd>{s.text}</dd></div>))}
        </dl>
      </div>
    </section>
  );
}
