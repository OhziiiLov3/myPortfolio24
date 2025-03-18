import "../Footer/FooterStyles.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";




const Footer = ({theme, switchTheme}) => {
   const designedYear = new Date().getFullYear();
    
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


      <div className="footer-title">
        <p>
          Copyright &copy; {designedYear}; Designed by{" "}
          <span className="designer">Keith B.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer