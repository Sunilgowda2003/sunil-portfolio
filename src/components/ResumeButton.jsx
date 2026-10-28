import { profile } from '../data/profile';

export default function ResumeButton({ label = 'Download Resume', className = 'btn btn-accent' }) {
  return <a className={className} href={profile.resume} download="Sunil_J_S_Resume.pdf">{label}</a>;
}
