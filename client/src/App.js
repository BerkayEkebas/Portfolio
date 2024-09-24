import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '20px', marginLeft: 240 }}>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/my-works" element={<MyWorks />} />
            <Route path="/contact" element={<Contact />} />
            {/* Default route or fallback */}
            <Route path="/" element={<AboutMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
