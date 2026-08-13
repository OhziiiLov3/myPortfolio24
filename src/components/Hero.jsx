import { profile } from '../data/resume';

const Hero = () => (
  <section className="section section--hero">
    <div className="wrap">
      <span className="eyebrow hero__eyebrow">{profile.eyebrow}</span>

      <h1 className="hero__name">
        {profile.name[0]}
        <br />
        {profile.name[1]}
      </h1>

      <p className="hero__lede">{profile.lede}</p>

      <div className="pill-row">
        <a className="pill pill--filled" href="#work">Selected work ↓</a>
        <a className="pill" href="#contact">Get in touch</a>
      </div>
    </div>
  </section>
);

export default Hero;
