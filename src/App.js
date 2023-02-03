import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Boissons from './pages/Boissons';
import Menus from './pages/Menus';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <header>
        <Header/>
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
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;