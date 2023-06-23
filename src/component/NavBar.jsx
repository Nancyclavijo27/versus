import React from 'react'
import Search from "./Search";
import Random from "./Random";
import Button from "@mui/material/Button";
import "./NavBar.css";


export default function NavBar({search,addList,random}) {//paso el destructurin las propiedades que voy a mostrar en los componentes que estan dentro del nav
  
  //el boton onclik ejecuta la funcion addList que biene del home 
  return (
    <div className="navBar">
    <Search search={search} cardLocation="left"/>
    <Random random={random} cardLocation="left"/>

    <Button variant="contained" color="secondary" onClick={addList}>All Characters</Button>

    <Search search={search} cardLocation="right"/>
    <Random random={random} cardLocation="right"/>
  </div>
  )
}
