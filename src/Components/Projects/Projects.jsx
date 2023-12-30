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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In minima sit architecto dignissimos est, commodi culpa expedita ea, at excepturi eos minus magni veritatis saepe!</p>
        <div className="project-item">
         <ProjectItem img={swiftImg} title={"SwiftStitch App"} project={"React & Django"}/>
         <ProjectItem img={JmoImg} title={"Consultation App"} project={"Reactjs"}/>
         <ProjectItem img={optimalImg} title={"Optimal Solutions App"} project={"Reactjs"} />
         <ProjectItem img={zootyImg}title={"ZootyWater App"} project={"Django"} />
        </div>
    </div>
  )
}

export default Projects