import './App.css';
import ShowIdCard from './components/ShowIdCard';
import Greetings from './components/Greetings';
import Random from "./components/Random"
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <ShowIdCard />

      <Greetings lang="en" children="John" />
      <Greetings lang="fr" children="Jean" />
      <Greetings lang="es" children="Juan" />
      <Greetings lang="de" children="Hans" />
      <Greetings lang="ir" children="Eoin" />

      <Random min="0" max= "6"/>

      <BoxColor ired="0" igreen="0" iblue="255" />
    </div>
  );
}

export default App;
