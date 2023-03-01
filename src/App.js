import './App.css';
import ShowIdCard from './components/ShowIdCard';
import Greetings from './components/Greetings';
import Random from "./components/Random"
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

const CardDetails = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: `${3}`,
    expirationYear: `${2021}`,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white"
 },
 {
  type: "Master Card",
  number: "0123456789010995",
  expirationMonth: `${3}`,
  expirationYear: `${2021}`,
  bank: "N26",
  owner: "Maxence Bouret",
  bgColor: "#eeeeee",
  color: "#222222"
},
{
  type: "Visa",
  number: "0123456789016984",
  expirationMonth: `${12}`,
  expirationYear: `${2019}`,
  bank: "Name of the Bank",
  owner: "Firstname Lastname",
  bgColor: "#ddbb55",
  color: "white"
}
];



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

      <BoxColor ired="255" igreen="0" iblue="0" />
      <BoxColor ired="128" igreen="255" iblue="0" />

      <CreditCard cardDetails={CardDetails} />
    </div>
  );
}

export default App;
