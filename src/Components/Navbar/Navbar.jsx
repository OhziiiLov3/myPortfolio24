import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../Navbar/NavbarStyles.css";

const Navbar = () => {

const [sideNav, setSideNav] = useState(false);

const handleClick = () => setSideNav(!sideNav);
const closeMenu = () => setSideNav(false);

  return (
    <header>
      <nav className="navbar">
        <h1 className="title">Keith Baskerville Jr.</h1>
        <ul className={sideNav ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link
              className="nav-link"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {sideNav ? (
            <FaTimes size={20} style={{ color: "#181818" }} />
          ) : (
            <FaBars size={20} style={{ color: "#181818" }} />
          )}
        </div>
        <a className="resume-btn" href="">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
