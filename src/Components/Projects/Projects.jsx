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
      githubUrl: 'https://github.com/OhziiiLov3/kudos-board',
      description: 'Fivespace - Social Club is a dynamic platform where users can create and manage boards filled with interactive cards featuring GIFs from the Giphy API. The app offers a user-friendly interface for browsing, filtering, and searching boards, as well as creating, upvoting, and deleting cards. With robust user authentication and comment functionality, Fivespace ensures an engaging experience, all hosted with a React frontend and a backend powered by Express, Node, PostgreSQL, and Prisma.'
    },
    {
      img: swiftImg,
      title: 'SwiftStitch',
      project: 'React & Django',
      href: 'https://swiftstitch-bv13.onrender.com/',
      videoUrl: swiftstitchDemo,
      deployedUrl: 'https://swiftstitch-bv13.onrender.com/',
      githubUrl: 'https://github.com/OhziiiLov3/SwiftStitchUpholstery_Live',
      description: 'SwiftStitch is a comprehensive ecommerce solution tailored for an upholstery business, built with React, Django, and Redux. The application streamlines operations with efficient state management and seamless PayPal integration, offering an intuitive admin panel for managing orders, inventory, and customer interactions. It provides users with a smooth experience for placing orders and completing transactions, while admins benefit from robust tools for managing users and tracking orders.'
    },
    {
      img: JmoImg,
      title: 'JoinMyObession',
      project: 'Reactjs',
      href: 'https://joinmyobession.netlify.app/',
      videoUrl: jmoDemo,
      deployedUrl: 'https://joinmyobession.netlify.app/',
      githubUrl: 'https://github.com/OhziiiLov3/jmo-website-v2',
      description: 'JoinMyObsession is a fitness scheduling website designed for personalized exercise consultations. Built with React, Calendly API, and EmailJS, the app allows users to view availability and book appointments seamlessly while also providing a contact feature for inquiries. With a focus on minimal design and efficient scheduling, the application aims to enhance user experience by offering easy appointment management and communication with the client.'
    },
    {
      img: goFoodieImg,
      title: 'GoFoodie',
      project: 'Html, CSS, & Js',
      href: 'https://gofoodieintl.netlify.app/',
      videoUrl: goFoodieDemo,
      deployedUrl: 'ttps://gofoodieintl.netlify.app/',
      githubUrl: 'https://github.com/OhziiiLov3/GoFoodie',
      description: 'GoFoodie is a dynamic travel guide website designed to inspire and inform users about any global destination. It features a user-friendly layout that showcases top attractions, local cuisine, accommodations, and events, all presented with engaging Flexbox and responsive design. With additional features like a photo gallery and interactive navigation, GoFoodie offers an immersive virtual tour tailored to travelers interests using OpenStreetMap API'
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