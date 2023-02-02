import React, { useState, useEffect } from 'react';
import './App.css';


function Accueil() {
  let photo1 = {
    photo: "/Photos/devanture.jpg",
    nom: "photo1"
  };
  let photo2 = {
    photo: "/Photos/salle.jpg",
    nom: "photo2"
  };
  let photo3 = {
    photo: "/Photos/cuisine.jpg",
    nom: "photo3"
  };

  const [index, setIndex] = useState(0);
  const photosToggle = [photo1, photo2, photo3];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % photosToggle.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [photosToggle.length]);

  return (
    <>
      <div>
        <img src={photosToggle[index].photo} alt={photosToggle[index].nom} />
      </div>
      <div className="presResto">
        <h2>notre restaurant</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus provident nihil, cum recusandae iusto delectus officia
          quidem maxime eius quo veniam doloremque! Deleniti nostrum nesciunt,
          nisi voluptatibus maiores hic!
        </p>
      </div>
      <div className="presChef">
        <h2>notre chef</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus provident nihil, cum recusandae iusto delectus officia
          quidem maxime eius quo veniam doloremque! Deleniti nostrum nesciunt,
          nisi voluptatibus maiores hic!
        </p>
      </div>
    </>
  );
}

export default Accueil;