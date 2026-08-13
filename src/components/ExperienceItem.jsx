const ExperienceItem = ({ date, title, org, note, points }) => (
  <article className="experience__item">
    <span className="experience__date">{date}</span>

    <div>
      <h3 className="experience__role">{title}</h3>
      <span className="experience__org">{org}</span>

      {note && <p className="experience__note">{note}</p>}

      <ul className="experience__points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  </article>
);

export default ExperienceItem;
