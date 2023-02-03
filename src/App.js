import './App.css';
import Buttons from './Components/Buttons';
import Menus from './Components/Menus';
import MenusContext from './Context/MenusContext';

function App() {
  
  return (

    <div className="App">
    <h2 className="titrePageMenus">Menus</h2>
    <MenusContext>
      <Buttons/>
      <Menus/>
    </MenusContext>

    </div>
  );
}

export default App;
