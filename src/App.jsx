import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import Projects from './screen/Projects';
import Skills from './screen/Skills';

/* --- 1. COMPONENT: CUSTOM CURSOR --- */
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.exp-item') || e.target.closest('.card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className="cursor" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
      }}
    ></div>
  );
};

/* --- 2. COMPONENT: NAVIGATION --- */
const Navigation = () => {
  return (
    <nav className="side-nav">
      <NavLink to="/" className="nav-item" data-tooltip="Home">
        <i className="ri-home-4-line"></i>
      </NavLink>
      <NavLink to="/projects" className="nav-item" data-tooltip="Projects">
        <i className="ri-folder-open-line"></i>
      </NavLink>
      <NavLink to="/skills" className="nav-item" data-tooltip="Skills">
        <i className="ri-cpu-line"></i>
      </NavLink>
    </nav>
  );
};

/* Home component moved to src/screen/Home.jsx */

/* Projects component moved to src/screen/Projects.jsx */

/* Skills component moved to src/screen/Skills.jsx */

/* --- MAIN APP --- */
function App() {
  return (
    <Router>
      <Cursor />
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;