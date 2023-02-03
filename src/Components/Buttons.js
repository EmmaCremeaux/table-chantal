import {React, useContext} from 'react'
import './Buttons.css'
import { monContext } from '../Context/MenusContext';

function Buttons() {

    const {changeButton} = useContext(monContext);
  return (
    <div className="containerButtons">
        <button onClick={() => changeButton("ENTREE")}>Entrées</button>
        <button onClick={() => changeButton("PLAT")}>Plats</button>
        <button onClick={() => changeButton("DESSERT")}>Desserts</button>
    </div>
  )
}

export default Buttons
