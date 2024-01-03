import "../Projects/ProjectsStyles.css"
import ProjectItem from "./ProjectItem"
import swiftImg from "../../assets/images/SwiftStitch.png" 
import JmoImg from "../../assets/images/JMO.png" 
import optimalImg from "../../assets/images/optimalSolutions.png" 
import zootyImg from "../../assets/images/zootywater.png" 

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <p>
        My portfolio showcases diverse projects, reflecting my skills as a
        frontend engineer with a focus on intuitive designs and
        functionality.
      </p>
      <div className="project-item">
        <ProjectItem
          img={swiftImg}
          title={"SwiftStitch App"}
          project={"React & Django"}
          href={"https://ssupholstery.onrender.com"}
        />
        <ProjectItem
          img={JmoImg}
          title={"Consultation App"}
          project={"Reactjs"}
          href={"https://joinmyobession.netlify.app/"}
        />
        <ProjectItem
          img={optimalImg}
          title={"Optimal Solutions App"}
          project={"Reactjs"}
          href={"https://optimal-solutions.onrender.com/"}
        />
        <ProjectItem
          img={zootyImg}
          title={"ZootyWater App"}
          project={"Django"}
          href={"https://zootywater-app.onrender.com"}
        />
      </div>
    </div>
  );
}

export default Projects