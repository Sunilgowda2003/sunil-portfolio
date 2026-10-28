import Section from './Section';

const layers = [
  { name: 'Client', note: 'React, Thymeleaf views or Postman' },
  { name: 'REST Controller', note: 'REST endpoints and request validation' },
  { name: 'Service Layer', note: 'Business logic' },
  { name: 'Repository / JPA', note: 'Spring Data JPA / Hibernate' },
  { name: 'MySQL Database', note: 'Relational storage in database-backed projects' },
];
const concepts = ['REST APIs', 'CRUD', 'Spring Boot', 'JPA / Hibernate', 'MVC', 'Database integration'];

export default function Backend() {
  return (
    <Section id="backend" title="Backend & API Development" subtitle="I build backend applications using layered architecture with Spring Boot, REST APIs, service-layer business logic, JPA/Hibernate persistence and MySQL.">
      <ol className="flow" aria-label="Request flow: client, controller, service, repository, MySQL">
        {layers.map((l) => (<li key={l.name}><strong>{l.name}</strong><span>{l.note}</span></li>))}
      </ol>
      <ul className="chips mb-3">{concepts.map((c) => <li key={c}>{c}</li>)}</ul>
      <p className="prose small-muted">
        In my <a href="https://github.com/Sunilgowda2003/expense-tracker" target="_blank" rel="noreferrer">Expense Tracker API</a> the controller, service, model and exception packages are separate, with input validation,
        global exception handling and Swagger documentation. That project stores data in memory for now; the database layer (JPA and MySQL) applies to my Event Management and Teacher Management projects.
      </p>
    </Section>
  );
}
