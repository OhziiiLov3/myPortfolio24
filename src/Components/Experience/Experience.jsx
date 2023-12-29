import "../Experience/ExperienceStyles.css";
import ExperienceItem from "../Experience/ExperienceItem";

const data = [
    {
        year: 2022,
        title: "Sr. Instructor Associate",
        company: "General Assembly",
        duration: "2 years",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti consectetur ipsa minima expedita facilis quasi a soluta. Omnis, optio?"
    },   
    {
        year: 2022,
        title: "Web Developer",
        company: "Contract",
        duration: "6 Months",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti consectetur ipsa minima expedita facilis quasi a soluta. Omnis, optio?"
    },   
    {
        year: 2021,
        title: "Technologist",
        company: "Strategio",
        duration: "3 Months",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti consectetur ipsa minima expedita facilis quasi a soluta. Omnis, optio?"
    },   
    {
        year: 2020,
        title: "Software Engineer",
        company: "General Assembly",
        duration: "3 Months",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti consectetur ipsa minima expedita facilis quasi a soluta. Omnis, optio?"
    },   


]

const Experience = () => {
  return (
      <div className="experience" id="experience">
        <h1 className="experience-title">Experience</h1>
        <h3>My work</h3>
        {data.map((item,idx)=>(
        <ExperienceItem
        key={idx}
        year={item.year}
        title={item.title}
        company={item.company}
        duration={item.duration}
        details={item.details}
        />
      ))}
    </div>
  );
}

export default Experience