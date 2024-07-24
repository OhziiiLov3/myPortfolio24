import "../Projects/ProjectsStyles.css"
import ProjectItem from "./ProjectItem"
import swiftImg from "../../assets/images/SwiftStitch.png" 
import JmoImg from "../../assets/images/JMO.png" 
import optimalImg from "../../assets/images/optimalSolutions.png" 
import fivespaceImg from "../../assets/images/fivespace.png" 

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
          img={fivespaceImg}
          title={"Fivespaces"}
          project={"PERN App"}
          href={"https://fivespaces.netlify.app/"}
        />
        <ProjectItem
          img={swiftImg}
          title={"SwiftStitch"}
          project={"React & Django"}
          href={"https://ssupholstery.onrender.com"}
        />
        <ProjectItem
          img={JmoImg}
          title={"JoinMyObession"}
          project={"Reactjs"}
          href={"https://joinmyobession.netlify.app/"}
        />
        <ProjectItem
          img={optimalImg}
          title={"Optimal Solutions"}
          project={"Reactjs"}
          href={"https://optimal-solutions.onrender.com/"}
        />
      </div>
    </div>
  );
}

export default Projects