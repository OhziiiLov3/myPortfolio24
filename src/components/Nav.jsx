import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { profile, contact } from '../data/resume';

const links = [
  { href: '/#work', label: 'work' },
  { href: '/#experience', label: 'experience' },
  { href: '/#about', label: 'about' },
  { href: '/#contact', label: 'contact' },
];

const Nav = () => (
  <header className="nav">
    <div className="wrap nav__inner">
      <Link to="/" className="nav__monogram">{profile.monogram}</Link>

      <nav aria-label="Primary">
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a className="nav__link" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav__right">
        <a className="nav__link nav__link--contact" href={`mailto:${contact.email}`}>
          contact
        </a>
        <ThemeToggle />
      </div>
    </div>
  </header>
);

export default Nav;
