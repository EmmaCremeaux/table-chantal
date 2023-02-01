import React from 'react';
import './App.css';


function App() {

  return (
    <>
    <header>
      <div>
        <h1 className="titre">La table de Chantal</h1>
      </div>
      <div>
        <nav className="navigation">
          <a className="navMenu" href="#">Acceuil</a>
          <a className="navMenu" href="#">Menus</a>
          <a className="navMenu" href="#">Boissons</a>
          <a className="navMenu" href="#">Contact</a>
        </nav>
      </div>
    </header>
    <body>
    <img src="../photos/salle.jpg" alt="" />
    </body>

    <footer>
    <div className="icons">
    <a className="navIcons" href="#"><i class="fa-brands fa-facebook"></i></a>
    <a className="navIcons" href="#"><i class="fa-brands fa-instagram"></i></a>
    </div>
    </footer>
    
    
    
    
    </>
  )


}

export default App;
