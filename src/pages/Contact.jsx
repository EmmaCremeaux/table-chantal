import React from 'react';
import '../App.css';
import '../Components/Contact.css'

function Contact() {
return (
    <><form className="formulaire">

    <label>
      Nom :
      <div>
        <input type="text" name="name" size="30" />
      </div>
    </label>

    <label>
      Email :
      <div>
        <input type="text" name="email" size="30" />
      </div>
    </label>

    <label>
      Sujet du message :
      <div>
        <input type="text" name="sujet" size="30" />
      </div>
    </label>

    <label>
      Messages :
      <div>
        <textarea type="text" name="message" maxlength="2000" rows="10" cols="30" />
      </div>
    </label>

    <input className="btn" type="submit" value="Envoyer" />
  </form>

<div className="contact">
  <h3>Adresse du restaurant : </h3>
  <p>297 Chau. Fernand Forest, 59200 Tourcoing</p>

  <h3>Numero de téléphone : </h3>
  <p>0320238465</p>
</div>



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.1308578019166!2d3.147439815887211!3d50.73606177951575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32edc87b2b5ad%3A0xa2d9eec091e57342!2sLa%20table%20de%20Chantal!5e0!3m2!1sfr!2sfr!4v1675350240366!5m2!1sfr!2sfr" 
title="map"
width="100%" 
height="400" 
allowfullscreen="" 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade">

</iframe>
  </>

)
}

export default Contact;


//une page de contact contenant : 
//un formulaire pour les contacter (nom, email, sujet, contenu) 
//l'adresse du restaurant, téléphone + google map