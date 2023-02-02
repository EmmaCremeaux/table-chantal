import React from 'react';


function Contact() {
return (
    <form className="formulaire">

  <label>
    Nom :
    <div>
    <input type="text" name="name" size="30"/>
    </div>
  </label>

  <label>
    Email :
    <div>
    <input type="text" name="email" size="30"/>
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
    <textarea type="text" name="message" maxlength="2000" rows="10" cols="30"/>
    </div>
  </label>
  
  <input className="btn" type="submit" value="Envoyer" />
</form>
)
}

export default Contact;


//une page de contact contenant : 
//un formulaire pour les contacter (nom, email, sujet, contenu) 
//l'adresse du restaurant, téléphone + google map