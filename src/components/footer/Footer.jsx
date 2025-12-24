import React from "react";
import "./Footer.css";
import { FaSpotify } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineContactSupport } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="main-footer">
      <ul>
        <li>
          <HashLink smooth to="/#about" className="all-centered">
            <i className="icon">
              <IoIosInformationCircleOutline />
            </i>
            About
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#skills" className="all-centered">
            <i className="icon">
              <GrTechnology />
            </i>
            Skills
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#projects" className="all-centered">
            <i className="icon">
              <GoProjectSymlink />
            </i>
            Projects
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#contact" className="all-centered">
            <i className="icon">
              <MdOutlineContactSupport />
            </i>
            Contact
          </HashLink>
        </li>

        <li>
          <HashLink to="/spotify" className="all-centered">
            <i className="icon">
              <FaSpotify />
            </i>
            Spotify
          </HashLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
