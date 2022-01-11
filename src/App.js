import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeaderContainer } from './containers';
import { Home, Projects, Resume, Blog, Contact } from './pages';
import { Footer } from './components';
import './App.css';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CVresume" element={<Resume />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
