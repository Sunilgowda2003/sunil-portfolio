import flightImg from '../assets/flight-schedule.jpg';
// Each project's `github` must be the exact repository URL. Use null when no public repository exists:
// the GitHub button is then hidden. `demo` is shown only when a real deployed app exists.
// Optional fields (problem, solution, architecture, contribution, image) are hidden when missing.
const REPO = 'https://github.com/Sunilgowda2003/';

export const projects = [
  {
    id: 'expense-tracker', category: 'Backend · REST API',
    name: 'Expense Tracker API',
    description: 'Spring Boot REST API for adding, filtering and totalling expenses, with validation and Swagger documentation.',
    stack: ['Java', 'Spring Boot', 'Maven', 'Spring Validation', 'Swagger / OpenAPI'],
    tags: ['Java', 'Spring Boot'],
    features: ['Add, view and delete expenses', 'Filter and total by category', 'Input validation', 'Global exception handling', 'Swagger API documentation'],
    overview: 'A REST API built with Java and Spring Boot. Data is currently held in memory (no database); MySQL/PostgreSQL storage, update endpoints and JWT security are listed as next steps in the repository.',
    problem: 'Tracking spending needs a simple API to record expenses and see totals per category.',
    solution: 'A layered Spring Boot service exposing REST endpoints, with request validation, a global exception handler and Swagger UI for testing.',
    architecture: 'Layered: controller, service, model and exception-handling packages.',
    github: REPO + 'expense-tracker',
  },
  {
    id: 'event-management', category: 'Full Stack · MVC',
    name: 'Event Management System',
    description: 'Spring Boot web application for managing events with search, CRUD and a MySQL-backed MVC design.',
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    tags: ['Java', 'Spring Boot', 'Full Stack'],
    features: ['CRUD operations', 'REST APIs', 'MVC architecture', 'Search functionality', 'MySQL database integration'],
    overview: 'A Java Spring Boot application for managing events, using MVC architecture, REST APIs, a MySQL database and a responsive Bootstrap interface.',
    architecture: 'MVC: Thymeleaf views, Spring controllers and services, JPA repositories backed by MySQL.',
    github: null,
  },
  {
    id: 'teacher-management', category: 'Full Stack · Internship',
    name: 'Teacher Management System',
    description: 'Internship project: CRUD-based teacher management with REST APIs and a relational database.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    tags: ['Java', 'Spring Boot', 'Full Stack'],
    features: ['CRUD operations', 'REST APIs', 'Backend integrated with MySQL', 'Responsive frontend'],
    overview: 'Built during a Java Full Stack internship at Colt Assist Private Limited (Oct–Nov 2023).',
    contribution: 'Developed the application, designed the REST APIs for CRUD operations and integrated the backend services with the database.',
    github: null,
  },
  {
    id: 'flight-schedule', category: 'Frontend · React',
    name: 'Backpack Flight Schedule',
    description: 'React app with an interactive calendar built from Skyscanner Backpack UI components and an automated test.',
    stack: ['React 17', 'JavaScript', 'Skyscanner Backpack', 'Jest', 'React Testing Library'],
    tags: ['React'],
    features: ['Interactive Backpack calendar', 'Date selection and month navigation', 'Automated test for the page'],
    overview: 'A small React application using the Skyscanner Backpack component library, with a Jest and React Testing Library test.',
    image: flightImg, imageAlt: 'Screenshot of the Backpack Flight Schedule React app showing a calendar with a Continue button',
    github: REPO + 'backpack-flight-schedule',
  },
  {
    id: 'agrimithra', category: 'Full Stack · Django',
    name: 'AgriMithra',
    description: 'Django-based agricultural platform offering crop advisory and an online store for farm inputs.',
    stack: ['Python', 'Django', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    tags: ['Full Stack', 'Other'],
    features: ['Crop advisory', 'Weather information', 'Pest management', 'Agricultural input purchasing', 'Responsive frontend'],
    overview: 'An agriculture-focused web platform combining advisory information with e-commerce, built with Django and a MySQL database.',
    github: REPO + 'AGRIMITHRA-PROJECT',
  },
];

// Only filters that actually contain projects are shown.
const order = ['Java', 'Spring Boot', 'React', 'Full Stack', 'Microservices', 'Other'];
export const filters = ['All', ...order.filter((f) => projects.some((p) => p.tags.includes(f)))];
