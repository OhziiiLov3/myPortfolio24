

const ProjectItem = ({img, title, project, href}) => {
  return (
    <div className="project-img-container">
      <img
        src={img}
        alt="project images..."
        title={title}
        className="project-img"
      />
      <div className="project-card">
        <h3 className="project-card-title">{title}</h3>
        <p>{project}</p>
        <a href={href}>
            <p className="moreInfo-btn">More Info</p>
        </a>
      </div>
    </div>
  );
}

export default ProjectItem