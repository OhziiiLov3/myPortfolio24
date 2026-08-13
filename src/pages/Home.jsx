import portrait from '../assets/images/portrait.jpg';
import Hero from '../components/Hero';
import SectionLabel from '../components/SectionLabel';
import ProjectRow from '../components/ProjectRow';
import ExperienceItem from '../components/ExperienceItem';
import StatCard from '../components/StatCard';
import StackGrid from '../components/StackGrid';
import { projects } from '../data/projects';
import {
  profile,
  contact,
  roles,
  stats,
  education,
  certifications,
} from '../data/resume';

const MetaList = ({ title, entries }) => (
  <div>
    <h3 className="label">{title}</h3>
    <ul className="about__meta-list">
      {entries.map((entry) => (
        <li key={entry.title}>
          <p className="about__meta-title">
            {entry.href ? (
              <a href={entry.href} target="_blank" rel="noreferrer">
                {entry.title}
              </a>
            ) : (
              entry.title
            )}
          </p>
          <p className="about__meta-detail">{entry.detail}</p>
          {entry.note && <p className="about__meta-note">{entry.note}</p>}
        </li>
      ))}
    </ul>
  </div>
);

const Home = () => (
  <>
    <Hero />

    {/* Selected work */}
    <section className="section" id="work" aria-labelledby="work-label">
      <div className="wrap">
        <SectionLabel id="work-label" meta="2024 — 2026">
          Selected work
        </SectionLabel>

        <div className="work__list">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Experience */}
    <section className="section" id="experience" aria-labelledby="experience-label">
      <div className="wrap">
        <SectionLabel id="experience-label">Experience</SectionLabel>

        {roles.map((role) => (
          <ExperienceItem key={role.title} {...role} />
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="section section--stats" aria-label="Impact by the numbers">
      <div className="wrap">
        <div className="stats__grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="section" id="about" aria-labelledby="about-label">
      <div className="wrap">
        <SectionLabel id="about-label">About</SectionLabel>

        <div className="about__grid">
          <img
            className="about__portrait"
            src={portrait}
            alt="Keith L. Baskerville Jr."
            width="320"
            height="400"
            loading="lazy"
          />

          <div>
            <p className="about__lede">{profile.aboutLede}</p>
            <p className="about__sub">{profile.aboutBody}</p>

            <div className="about__meta">
              <MetaList title="Education" entries={education} />
              <MetaList title="Certifications" entries={certifications} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stack */}
    <section className="section" id="stack" aria-labelledby="stack-label">
      <div className="wrap">
        <SectionLabel id="stack-label">Stack</SectionLabel>
        <StackGrid />
      </div>
    </section>

    {/* Contact */}
    <section className="section" id="contact" aria-labelledby="contact-label">
      <div className="wrap">
        <SectionLabel id="contact-label">Contact</SectionLabel>

        <a className="contact__email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>

        <div className="pill-row">
          <a className="pill" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="pill" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="pill" href={contact.resume} download>
            Download résumé
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Home;
