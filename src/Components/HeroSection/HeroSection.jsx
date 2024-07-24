import { Link } from "react-scroll";
import "../HeroSection/HeroSectionStyles.css"

const HeroSection = () => {
  return (
    <div className="section-container">
      <section>
        <h3>Hello,</h3>
        <h1 className="section-title"> I'm Keith.</h1>
        <h5>Software Engineer</h5>
        <p className="section-p">
          Hi , I am a passionate Frontend Engineer that has the ability
          to turn designs into seamless full stack applications
        </p>
        <button className="hire-btn">
          <Link 
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            to="contact"
          >
            Hire Me
          </Link>
        </button>
      </section>
    </div>
  );
}

export default HeroSection