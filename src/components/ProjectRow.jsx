import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectRow = ({ project, index }) => (
  <Link className="project-row" to={`/work/${project.slug}`}>
    <span className="project-row__num" aria-hidden="true">
      {String(index + 1).padStart(2, '0')}
    </span>

    <div>
      <h3 className="project-row__name">{project.name}</h3>
      <span className="project-row__tag">{project.tag}</span>
    </div>

    <p className="project-row__blurb">{project.blurb}</p>

    <span className="project-row__arrow" aria-hidden="true">
      <ArrowUpRight size={20} strokeWidth={1.5} />
    </span>
  </Link>
);

export default ProjectRow;
