import React, {createContext, useState} from "react";

export const monContext = createContext();

function MenusContext(props) {

    const menuOption = ["ENTREE", "PLAT", "DESSERT"]

    const [choiceMenu, setChoiceMenu] = useState(menuOption);

    const changeButton = (newButton) => {
        setChoiceMenu(newButton)   
      }

      return (
        <monContext.Provider value={{choiceMenu, changeButton}}>
            {props.children}
        </monContext.Provider>
      )
}

export default MenusContext