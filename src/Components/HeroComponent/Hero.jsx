import "../HeroComponent/HeroStyles.css"
import HeroImage from '../HeroImage/HeroImage'
import HeroSection from '../HeroSection/HeroSection'

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="container">
        <div className="content">
          {/* Col-1 */}
          <div className="col-1">
            <HeroSection />
          </div>
          {/* Col-2 */}
          <div className="col-2">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero