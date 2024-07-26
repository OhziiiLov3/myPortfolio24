import { useState } from "react"
import "../Projects/ProjectsStyles.css"
import Modal from "../Modal/Modal"
import ProjectItem from "./ProjectItem"
import swiftImg from "../../assets/images/SwiftStitch.png" 
import swiftstitchDemo from "../../assets/videos/swiftstitchDemo.mp4"
import goFoodieImg from "../../assets/images/goFoodieImg.png"
import goFoodieDemo from "../../assets/videos/goFoodieDemo.mp4" 
import fivespaceImg from "../../assets/images/fivespace.png" 
import fivespaceVideo from "../../assets/videos/fivespaceDemo.mp4"
import JmoImg from "../../assets/images/JMO.png" 
import jmoDemo from "../../assets/videos/jmoDemo.mp4"

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      img: fivespaceImg,
      title: 'Fivespaces',
      project: 'PERN Stack',
      href: 'https://fivespaces.netlify.app/',
      videoUrl: fivespaceVideo,
      deployedUrl: 'https://fivespaces.netlify.app/',
      githubUrl: 'https://github.com/your_github_repo',
      description: 'Description of Fivespaces'
    },
    {
      img: swiftImg,
      title: 'SwiftStitch',
      project: 'React & Django',
      href: 'https://swiftstitch-bv13.onrender.com/',
      videoUrl: swiftstitchDemo,
      deployedUrl: 'https://swiftstitch-bv13.onrender.com/',
      githubUrl: 'https://github.com/your_github_repo',
      description: 'Description of SwiftStitch'
    },
    {
      img: JmoImg,
      title: 'JoinMyObession',
      project: 'Reactjs',
      href: 'https://joinmyobession.netlify.app/',
      videoUrl: jmoDemo,
      deployedUrl: 'https://joinmyobession.netlify.app/',
      githubUrl: 'https://github.com/your_github_repo',
      description: 'Description of JoinMyObession'
    },
    {
      img: goFoodieImg,
      title: 'GoFoodie',
      project: 'Html, CSS, & Js',
      href: 'https://gofoodieintl.netlify.app/',
      videoUrl: goFoodieDemo,
      deployedUrl: 'ttps://gofoodieintl.netlify.app/',
      githubUrl: 'https://github.com/OhziiiLov3/GoFoodie',
      description: 'Description of GoFooide'
    }
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };


  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <p>
        My portfolio showcases diverse projects, reflecting my skills as a
        frontend engineer with a focus on intuitive designs and
        functionality.
      </p>
      <div className="project-item">
      {projects.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            project={project.project}
            onMoreInfo={() => openModal(project)}
          />
        ))}
      </div>
      {currentProject && (
        <Modal
          show={modalOpen}
          onClose={closeModal}
          videoUrl={currentProject.videoUrl}
          deployedUrl={currentProject.deployedUrl}
          githubUrl={currentProject.githubUrl}
          description={currentProject.description}
        />
      )}
    </div>
  );
}

export default Projects