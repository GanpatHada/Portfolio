import './Home.css';
import About from './components/about/About';
import Hero from './components/intro/Hero';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <hr className="main-saperator" />
      <About />
      <hr className="main-saperator" />
      <Skills />
      <hr className="main-saperator" />
      <Projects />
      <hr className="main-saperator" />
      <Contact />
    </div>
  );
};

export default Home;
