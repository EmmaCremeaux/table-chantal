import React from 'react';
import '../App.css';
import Buttons from '../Components/Buttons';
import AfficheMenus from '../Components/AfficheMenus';
import MenusContext from '../Context/MenusContext';

function Menus() {

return (
    <div className="pageMenu">
    <MenusContext>
      <Buttons/>
      <AfficheMenus/>
    </MenusContext>
    </div>
);
}

export default Menus;