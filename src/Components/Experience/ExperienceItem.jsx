import "../Experience/ExperienceStyles.css";



const ExperienceItem = ({year,title, company, duration, details}) => {
  return (
    <ol className="items-line">
      <li className="items">
        <div className="timeline-circle" />
        <p className="item-p">
          <span className="year-span">{year}</span>
          <span className="title-span">{title}</span>
          <span className="company-span">{company}</span>
          <span className="duration-span">{duration}</span>
        </p>
        <p className="details-p">
         {details}
        </p>
      </li>
    </ol>
  );
};

export default ExperienceItem;
