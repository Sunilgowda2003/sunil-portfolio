export default function Section({ id, title, subtitle, children, alt, compact }) {
  return (
    <section id={id} className={`section${alt ? ' section-alt' : ''}${compact ? ' section-compact' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
