import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Header() {
return (
  <>
  <header><div>
    <h1 className="titre">La table de Chantal</h1>
  </div><div>
      <nav className="navigation">

        <div className="navMenu"><Link className = "a" to="/">Acceuil</Link></div>
        <div className="navMenu"><Link className = "a" to="/Menus">Menus</Link></div>
        <div className="navMenu"><Link className = "a" to="/Boissons">Boissons</Link></div>
        <div className="navMenu"><Link className = "a" to="/Contact">Contact</Link></div>
      </nav>
    </div>
    </header></>
)
}
export default Header;