import React, { useState, useEffect } from 'react';
import '../App.css';


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
    }, 2500);
    return () => clearInterval(timer);
  }, [photosToggle.length]);

  return (
    <>
      <div>
        <img className="slide" src={photosToggle[index].photo} alt={photosToggle[index].nom} />
      </div>
      <div className="text">
      <div className="presentation">
        <h2>Notre restaurant</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Neque tenetur labore reiciendis eligendi repudiandae saepe. 
          Fuga eum voluptatibus molestiae, enim modi ab laborum expedita? 
          Voluptatum dolores quod fugiat esse exercitationem!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Modi molestiae quisquam cum reprehenderit earum esse et architecto, 
          praesentium magni alias? 
          Consequuntur deserunt quae molestias repudiandae ipsa! Suscipit unde iusto debitis?
        </p>
      </div>
      <div className="presentation">
        <h2>Notre chef</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus provident nihil, cum recusandae iusto delectus officia
          quidem maxime eius quo veniam doloremque! Deleniti nostrum nesciunt,
          nisi voluptatibus maiores hic!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Natus incidunt saepe accusamus obcaecati nihil distinctio perferendis iure dolorum excepturi ad, 
          quas non ex maiores repellendus debitis sunt reprehenderit. Quod, ratione.
        </p>
      </div>
      </div>
    </>
  );
}

export default Accueil;