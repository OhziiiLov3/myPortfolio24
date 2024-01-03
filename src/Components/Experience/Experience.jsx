import "../Experience/ExperienceStyles.css";
import ExperienceItem from "../Experience/ExperienceItem";

const data = [
  {
    year: 2022,
    title: "Sr. Instructor Associate",
    company: "General Assembly",
    duration: "2 years",
    details:
      "As a Instructor Assoc., I work closely with Lead Instructors to guide students on a transformative journey towards their careers as Software Engineers. In addition, I deepen my own understanding and skill set as I empower driven enginners to build and depoly full stack appilcations.",
  },
  {
    year: 2022,
    title: "Web Developer",
    company: "Contract",
    duration: "6 Months",
    details:
      "As a Web Developer, I thrive on turning client visions into digital experiences! Through collaborative meetings, I transform innovative ideas into stunning designs and fully functional applications. My passion lies in crafting engaging and user-friendly solutions that exceed client expectations",
  },
  {
    year: 2021,
    title: "Technologist",
    company: "Strategio",
    duration: "3 Months",
    details:
      "In an 8-week immersive Enterprise Simulator, I honed skills for pivotal roles in DevOps, SRE, and SDET, focusing on cloud computing and utilizing AWS. This dynamic experience fueled my passion for cloud technologies and equipped me with versatile expertise to excel in these areas.",
  },
  {
    year: 2020,
    title: "Software Engineer",
    company: "General Assembly",
    duration: "3 Months",
    details:
      "Three-month, 500-hour full-time and full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies including: HTML, CSS, Javascript, PostgreSQL, MongoDB, NodeJS, ReactJS, Git, Github, and Agile/Scrum",
  },
];

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