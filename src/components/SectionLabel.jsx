const SectionLabel = ({ children, meta, id }) => (
  <div className="section-head">
    <h2 className="label" id={id}>{children}</h2>
    {meta && <span className="label">{meta}</span>}
  </div>
);

export default SectionLabel;
