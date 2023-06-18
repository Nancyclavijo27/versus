import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import List from "./List.jsx";
import { useState } from "react";
import "./Home.css";

function Home({allCharacters}) {//de esta manera como se paso por parametro y destructurin y llego la info ygial se puede hacer en cualquier componente

  //console.log(allCharacters)//es para verificar que los characters esten llegando al home

  const [chars, setChars] = useState({
    cardLeft: {},
    cardRight: {},
  });

  const [listC, setList] = useState([]);

  const search = function (name, cardLocation) {//name busqueda por nombre  y cardLocation cual car se va a utilizar izq o der 
    const findCharacter = allCharacters.find((c) => c.name === name);//esto hace la busqueda por nombre
    if (cardLocation === "left") {
      setChars({ ...chars, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setChars({ ...chars, cardRight: findCharacter });
    }
     console.log(chars)//este es para ver si hace la busqueda
  };

  const addList = function () {//si lalista esta vacia los agrega no necesita parametros 
    if(listC.length === 0){
        setList(allCharacters)
    } else {
        setList([])
    }
  };
  const random = function (cardLocation) {//randon funcion es para tomar un numero de forma aleatoria
    function getNumRandom(max) {
      return Math.floor(Math.random() * max);
    }
    const idRandom = getNumRandom(87) + 1;//por temas de array ya que comienza con 0
    const findCharacter = allCharacters.find((c) => c.id === idRandom);//en este caso enves de name es por id
    if (cardLocation === "left") {
      setChars({ ...chars, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setChars({ ...chars, cardRight: findCharacter });
    }
  };

  

  //el chars del estado se lo paso como propiedad a Cards siempre recordar que lo primero es el nombre del objeto y lo mismo con list
  return (
    <div className="home">
       
     <NavBar search={search} addList={addList} random={random} />
     <h3> Versus Star Wars Battle!!!</h3>
     <Cards characters={chars}/>
     <div className="list">
     <List  lista={listC}/>
     </div>
    </div>
  );
}

export default Home;
