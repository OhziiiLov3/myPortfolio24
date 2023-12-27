import "../HeroImage/HeroImageStyles.css"
import heroImg from "../../assets/images/LandingPage-Pic.png"; 

const HeroImage = () => {
  return (
    <div className="heroImage-layout">
      <div className="heroImage-container">
        <div className="ellipse">
          <figure>
            <img className="heroImage" src={heroImg} alt="Hero Image" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;