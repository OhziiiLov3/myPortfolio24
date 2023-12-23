import "../HeroImage/HeroImageStyles.css"
import heroImg from "../../assets/images/LandingPage-Pic.png"; 

const HeroImage = () => {
  return (
    <div className="heroImage-container">
      <figure>
        <img className="heroImage" src={heroImg} alt="Hero Image" />
      </figure>
      <div className="ellipse"> </div>
    </div>
  );
}

export default HeroImage;