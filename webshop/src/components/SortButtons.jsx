import { Button } from '@mui/material'
import React from 'react'

function SortButtons(props) {
  const reset = () => {
    props.setProducts(props.dbProducts.slice())
  }

  const sortAZ = ()  => { 
    props.products.sort((a, b) => a.title.localeCompare(b.title));
    props.setProducts(props.products.slice());
  } 

  return (
    <div>
      <Button onClick={reset} variant="contained">Tooted reset</Button>
      <Button onClick={sortAZ} variant="outlined">Tooded A-Z</Button>
    </div>
  )
}

export default SortButtons