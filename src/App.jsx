import './App.css';
import Alert from './components/alert/Alert';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Spotify from './pages/spotify/Spotify';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const ProgressBar = ({ progress }) => {
  return (
    <div id="scroll-progress-track">
      <span id="scroll-progress" style={{ width: `${progress}%` }} />
    </div>
  );
};

const App = () => {
  const [progress, setProgress] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const totalHeight = scrollHeight - clientHeight;
    if (totalHeight > 0) {
      const progress = (scrollTop / totalHeight) * 100;
      setProgress(progress);
    } else {
      setProgress(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main id="app">
      <Alert />
      <ProgressBar progress={progress} />
      <Header />
      <div id="content">
        <Routes>
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};

export default App;
