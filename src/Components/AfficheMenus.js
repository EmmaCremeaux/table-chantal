import {React, useContext} from 'react';
import './Menus.css';
import {menuContaint} from './DataMenus';
import { monContext } from '../Context/MenusContext';

function AfficheMenus() {

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
                <h5 className="titreplat">{menuContaint[choiceMenu].nom1}</h5>
                <p>{menuContaint[choiceMenu].prix1}</p>
            </div>
        </div>

      <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo2} alt="" />
            <div className="nom-prix">
                <h5 className="titreplat">{menuContaint[choiceMenu].nom2}</h5>
                <p>{menuContaint[choiceMenu].prix2}</p>
            </div>
          </div>

        <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo3} alt="" />
            <div className="nom-prix">
                  <h5 className="titreplat">{menuContaint[choiceMenu].nom3}</h5>
                  <p>{menuContaint[choiceMenu].prix3}</p>
            </div>
        </div>
    </div>

    <div className="second">
    <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo4} alt="" />
            <div className="nom-prix">
                  <h5 className="titreplat">{menuContaint[choiceMenu].nom4}</h5>
                  <p>{menuContaint[choiceMenu].prix4}</p>
            </div>
        </div>

        <div className="block">
            <img className="imageMenu" src={menuContaint[choiceMenu].photo5} alt="" />
            <div className="nom-prix">
                  <h5 className="titreplat">{menuContaint[choiceMenu].nom5}</h5>
                  <p>{menuContaint[choiceMenu].prix5}</p>
            </div>
        </div>
    </div>
    </div>
  )
};

export default AfficheMenus;
