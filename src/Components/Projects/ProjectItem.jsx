

const ProjectItem = ({img, title, project,onMoreInfo}) => {
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
      <button className="moreInfo-btn" onClick={onMoreInfo}>More Info</button>
    </div>
  </div>
  );
}

export default ProjectItem