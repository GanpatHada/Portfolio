import { useState } from "react";
import { toast } from "react-toastify";
import { FaRegCircleCheck, FaRegCopy } from "react-icons/fa6";
import "./Hero.css";

const OpenToWork = () => {
  return (
    <section id="open-to-work">
      <span id="green-light"></span>
      <span id="open-to-work-text">Available for opportunities</span>
    </section>
  );
};

const LinkedInButton = () => {
  return (
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ganpathada/"
        id="linkedin-button"
      >
        Linkedin
      </a>
  );
};

const GithubButton = () => {
  return (
      <a
        target="_blank"
        href="https://github.com/GanpatHada"
        id="github-button"
      >
        Github
      </a>
  );
};

const NpxButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npx ganpat_hada");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };
  return (
    <button id="npx-button"  onClick={handleCopy}>
      npx ganpat_hada{" "}
      <span>{isCopied ? <FaRegCircleCheck /> : <FaRegCopy />}</span>
    </button>
  );
};

const Intro = () => {
  return (
    <section id="intro">
      <p id="short-intro">
        I am <span>Ganpat Hada,</span> <br /> A full stack web developer
      </p>
      <p id="long-intro">
        With hands-on experience in the MERN stack, I craft seamless user
        experiences and efficient server-side solutions. Open to learning
        new technologies and tackling challenging projects.
      </p>
    </section>
  );
};

const Actions = () => {
  return (
    <div className="hero-actions">
      <LinkedInButton />
      <GithubButton />
      <NpxButton />
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero">
      <OpenToWork />
      <Intro />
      <Actions />
    </section>
  );
};

export default Hero;
