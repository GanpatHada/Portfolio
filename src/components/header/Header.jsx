import "./Header.css";
import mainLogo from "../../assets/G-logo.png";
import { FiDownload } from "react-icons/fi";
import { FaEye, FaSpotify } from "react-icons/fa";

const Navs = () => {
  return (
    <nav id="main-nav">
      <ul className="nav-list">
        <li>
          <a href="/#about" className="nav-item all-centered">
            About
          </a>
        </li>

        <li>
          <a href="/#skills" className="nav-item all-centered">
            Skills
          </a>
        </li>

        <li>
          <a href="/#projects" className="nav-item all-centered">
            Projects
          </a>
        </li>

        

        <li>
          <a href="/#contact" className="nav-item all-centered">
            Contact
          </a>
        </li>

        <li>
          <a href="/spotify" className="nav-item all-centered">
            <span className="all-centered">
              <FaSpotify />
            </span>
            &nbsp;Spotify
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Logo = () => {
  return (
    <button id="main-logo">
      <a href="/#home">
        <img src={mainLogo} alt="" />
        <h4>Ganpat Hada</h4>
      </a>
    </button>
  );
};

const Resume = () => {
  return (
    <section className="resume">
      <span>Resume</span>

      {/* VIEW RESUME */}
      <a
        href="https://docs.google.com/document/d/1XsrsrbE2sSxMaozeFKrR1jUfQU6DpcuP15g2EjlbGBo/preview"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Resume"
      >
        <button className="resume-btn view">
          <FaEye />
        </button>
      </a>

      {/* DOWNLOAD RESUME */}
      <a
        href="https://docs.google.com/document/d/1XsrsrbE2sSxMaozeFKrR1jUfQU6DpcuP15g2EjlbGBo/export?format=pdf"
        rel="noopener noreferrer"
        aria-label="Download Resume"
      >
        <button className="resume-btn download">
          <FiDownload />
        </button>
      </a>
    </section>
  );
};

const Header = () => {
  return (
    <header id="main-header">
      <section>
        <Logo />
      </section>
      <section>
        <Navs />
        <Resume />
      </section>
    </header>
  );
};

export default Header;
