import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import resume from "../../assets/resume.pdf";
import "../Navbar/NavbarStyles.css";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  const handleClick = () => setSideNav(!sideNav);
  const closeMenu = () => setSideNav(false);

  return (
    <header>
      <nav className="navbar">
        {/* Title */}
        <h1 className="title">Keith L. Baskerville Jr.</h1>

        {/* Navigation links */}
        <ul className={sideNav ? "nav-menu active" : "nav-menu"}>
          {["home", "experience", "projects", "contact"].map((section) => (
            <li key={section} className="nav-item">
              <Link
                className="nav-link"
                to={section}
                spy={true}
                smooth={true}
                offset={section === "contact" ? 100 : -100}
                duration={500}
                onClick={closeMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={handleClick}>
          {sideNav ? (
            <FaTimes size={20} style={{ color: "#181818" }} />
          ) : (
            <FaBars size={20} style={{ color: "#181818" }} />
          )}
        </div>

        {/* Resume Button */}
        <button className="resume-btn">
          <a href={resume} download="resume">
            Resume
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
