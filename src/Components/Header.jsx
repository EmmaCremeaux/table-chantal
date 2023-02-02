import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Header() {
return (
  <><div>
    <h1 className="titre">La table de Chantal</h1>
  </div><div>
      <nav className="navigation">

        <div className="navMenu"><Link to="/">Acceuil</Link></div>
        <div className="navMenu"><Link to="/Menus">Menus</Link></div>
        <div className="navMenu"><Link to="/Boissons">Boissons</Link></div>
        <div className="navMenu"><Link to="/Contact">Contact</Link></div>
      </nav>
    </div></>
)
}
export default Header;