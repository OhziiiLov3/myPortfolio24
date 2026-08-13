import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { getProject, getNextProject } from '../data/projects';
import { contact, profile } from '../data/resume';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const next = getNextProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.name} — ${profile.name.join(' ')}`;
    }
    return () => {
      document.title = `${profile.name.join(' ')} — Backend & Applied AI Engineer`;
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <article className="detail">
      <div className="wrap">
        <Link className="detail__back" to="/#work">
          <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" />
          Back to work
        </Link>

        <span className="eyebrow eyebrow--accent detail__tag">{project.tag}</span>
        <h1 className="detail__title">{project.name}</h1>
        <p className="detail__blurb">{project.blurb}</p>

        {project.award && (
          <div className="detail__notice">
            <span className="hairline-cell__label">Recognition</span>
            <p className="hairline-cell__value">{project.award}</p>
          </div>
        )}

        {project.shot && project.shotFit === 'contain' ? (
          /* Scroll container keeps the diagram legible once the column is
             narrower than the diagram needs to be readable. */
          <div className="detail__shot-scroll" tabIndex={0} role="group" aria-label={project.shotAlt}>
            <img
              className="detail__shot detail__shot--contain"
              src={project.shot}
              alt={project.shotAlt}
              loading="lazy"
            />
          </div>
        ) : project.shot ? (
          <img
            className="detail__shot"
            src={project.shot}
            alt={project.shotAlt}
            loading="lazy"
          />
        ) : (
          <div
            className="detail__shot detail__shot--placeholder"
            role="img"
            aria-label={`${project.shotAlt} — screenshot pending`}
          >
            {project.shotAlt} — screenshot pending
          </div>
        )}

        <div className="hairline-grid hairline-grid--meta detail__meta">
          {project.meta.map((cell) => (
            <div className="hairline-cell" key={cell.label}>
              <span className="hairline-cell__label">{cell.label}</span>
              <p className="hairline-cell__value">{cell.value}</p>
            </div>
          ))}
        </div>

        <div className="detail__built">
          <SectionLabel>What I built</SectionLabel>

          <ol className="detail__bullets">
            {project.bullets.map((bullet, i) => (
              <li className="detail__bullet" key={bullet.lead}>
                <span className="detail__bullet-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="detail__bullet-text">
                  <strong>{bullet.lead}</strong> — {bullet.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {(project.links.live || project.links.repo || project.links.demo) && (
          <div className="pill-row detail__links">
            {project.links.live && (
              <a className="pill" href={project.links.live} target="_blank" rel="noreferrer">
                Live site
              </a>
            )}
            {project.links.repo && (
              <a className="pill" href={project.links.repo} target="_blank" rel="noreferrer">
                Repository
              </a>
            )}
            {project.links.demo && (
              <a className="pill" href={project.links.demo} target="_blank" rel="noreferrer">
                Demo video
              </a>
            )}
          </div>
        )}

        <div className="pill-row detail__nav">
          {next && (
            <Link className="pill pill--filled" to={`/work/${next.slug}`}>
              Next project
              <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          )}
          <a
            className="pill"
            href={`mailto:${contact.email}?subject=${encodeURIComponent(
              `About ${project.name}`,
            )}`}
          >
            Talk about this work
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
