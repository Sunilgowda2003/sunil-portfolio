import { existsSync } from 'node:fs';

if (!existsSync(new URL('../public/resume.pdf', import.meta.url))) {
  console.warn('\n  WARNING: public/resume.pdf is missing.');
  console.warn('  The "Download Resume" buttons will not work until you add your resume at public/resume.pdf.\n');
}
