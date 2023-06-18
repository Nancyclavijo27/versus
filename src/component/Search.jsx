import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

export default function Search({ cardLocation, search }) {//Traigo la info del home donde esta la funcion search

  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input)//para ver si el input toma la info
  };

  // esta es una forma de pasar la data al search y hacer el filtro pero tambien se puede hacer como se paso la data al home 
  // async function search(name) {
  //     const allData = await axios.get(
  //       "https://akabab.github.io/starwars-api/api/all.json"
  //     );
  //     const character = allData.data.find((c)=>c.name ===name)
  //   }

  return (
    <div>
      <Input
        type="text"
        name="username"
        value={input.username}
        onChange={(e) => handleChange(e)}
      ></Input>
      <Button variant="contained" color="success" onClick={()=>search(input, cardLocation)}>
        Search
      </Button>
    </div>
  )
}
