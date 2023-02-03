import {React, useContext} from 'react';
import './Menus.css';
import {menuContaint} from './DataMenus';
import { monContext } from '../Context/MenusContext';

function Menus() {

    let {choiceMenu} = useContext(monContext)

    if (typeof choiceMenu !== "string") {
        choiceMenu = "ENTREE"
    }
    
  return ( 

    <div className='all'>
    <div className="first">
    <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo1} alt="" />
            <div className="nom-prix">
                <h4>{menuContaint[choiceMenu].nom1}</h4>
                <p>{menuContaint[choiceMenu].prix1}</p>
            </div>
        </div>

      <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo2} alt="" />
            <div className="nom-prix">
                <h4>{menuContaint[choiceMenu].nom2}</h4>
                <p>{menuContaint[choiceMenu].prix2}</p>
            </div>
          </div>

        <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo3} alt="" />
            <div className="nom-prix">
                  <h4>{menuContaint[choiceMenu].nom3}</h4>
                  <p>{menuContaint[choiceMenu].prix3}</p>
            </div>
        </div>
    </div>

    <div className="second">
    <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo4} alt="" />
            <div className="nom-prix">
                  <h4>{menuContaint[choiceMenu].nom4}</h4>
                  <p>{menuContaint[choiceMenu].prix4}</p>
            </div>
        </div>

        <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo5} alt="" />
            <div className="nom-prix">
                  <h4>{menuContaint[choiceMenu].nom5}</h4>
                  <p>{menuContaint[choiceMenu].prix5}</p>
            </div>
        </div>
    </div>
    </div>
  )
};

export default Menus;
