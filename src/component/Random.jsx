import React from 'react'
import Button from '@mui/material/Button';

export default function Random({random, cardLocation}) {
  //en este caso el onClick ejecuta mi funcion randon desde las propiedades traidas del narvar que biene del home
  return (
    <div>
        <Button variant="contained" color="error"
        onClick={()=>random(cardLocation)}>Random</Button>
    </div>
  )
}