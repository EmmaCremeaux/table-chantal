import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Boissons from './Boissons';
import Menus from './Menus';
import Contact from './Contact';



function App() {
  return (
    <Router>
      <header>
        <div>
          <h1 className="titre">La table de Chantal</h1>
        </div>
        <div>
          <nav className="navigation">
            
            <div className="navMenu"><Link to="/">Acceuil</Link></div>
            <div className="navMenu"><Link to="/Menus">Menus</Link></div>
            <div className="navMenu"><Link to="/Boissons">Boissons</Link></div>
            <div className="navMenu"><Link to="/Contact">Contact</Link></div>
          </nav>
        </div>

      </header>
      <body>
      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route exact path="/Menus" element={<Menus/>} />
        <Route exact path="/Boissons" element={<Boissons/>} />
        <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
      </body>
      
      <footer>
        <div className="icons">
          <a className="navIcons" href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="navIcons" href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </Router>
  );
}

export default App;