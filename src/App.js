import './App.css';
import Home from "./component/Home.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);//guardo todo en un estado traigo los characters y los guardo aqui

  async function getAllCharacters() {
    const allData = await axios.get(
      "https://akabab.github.io/starwars-api/api/all.json"
    );
     //console.log(allData);//esto es para ver que la info este llegando  se revisa en la consola antes de la siguiente linea o hay que comentarla para visualizarlo
    setCharacters(allData.data)//guarda la info data del allData
  }

  useEffect(() => {
    getAllCharacters();//quiero que cuando se monte se ejecute esta funcion el ciclo de vida de los componentes

     //le paso los characters como propiedad al home el allcharacters es un nombre que se leda este characters es el characters del estado 
     //el allcharacters se pasa al componente Home en destructurin y se valida con console si llega la info al componente
    }, []);
     return (
      <div className="App">
      <Home allCharacters={characters}/>
      </div>
  );
}

export default App;
