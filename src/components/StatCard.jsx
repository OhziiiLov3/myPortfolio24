const StatCard = ({ num, label }) => (
  <div className="stat-card">
    <p className="stat-card__num">{num}</p>
    <p className="stat-card__label">{label}</p>
  </div>
);

export default StatCard;
