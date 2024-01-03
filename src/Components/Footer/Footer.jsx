import "../Footer/FooterStyles.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";




const Footer = ({theme, switchTheme}) => {

    
  return (
    <footer>
      <div className="footer-container">
        <div className="social-links-container">
          <a href="https://www.linkedin.com/in/keithlbaskervillejr/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/OhziiiLov3">
            <FaGithub />
          </a>
          <a href="https://medium.com/@keith.baskerville ">
            <FaMedium />
          </a>
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Next Steps:
         Add Dark mode/Toggle*/}

      {/* <div className="light-toggle">
        <h3>Light Mode</h3>
        <i onClick={switchTheme}>
          <FaToggleOn />
        </i>
      </div> */}

      <div className="footer-title">
        <p>
          Copyright &copy; 2024; Designed by{" "}
          <span className="designer">Keith B.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer