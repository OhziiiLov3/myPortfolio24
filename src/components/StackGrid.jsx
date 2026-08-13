import { stackGroups } from '../data/resume';

const StackGrid = () => (
  <div className="hairline-grid hairline-grid--stack">
    {stackGroups.map((group) => (
      <div className="hairline-cell" key={group.label}>
        <span className="hairline-cell__label">{group.label}</span>
        <p className="hairline-cell__body">{group.items}</p>
      </div>
    ))}
  </div>
);

export default StackGrid;
