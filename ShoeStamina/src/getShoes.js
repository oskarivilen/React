import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Listing from './Listing';

const url = 'http://localhost:8080';

function getShoes () {

 const [shoes, setShoes] = useState([]);
 const [virhe, setVirhe] = useState('Haetaan');

 const getallShoes = async () => {
  try {
    const response = await fetch(url + '/shoe/all');
    const json = await response.json();
    setShoes(json);
    setVirhe('');
  } catch (error) {
    setShoes([]);
    setVirhe('Tietojen haku ei onnistunut');
  }
 }

 useEffect( () => {
    getallShoes();
 }, [])

 if (virhe.length > 0) {
   return ( <Typography>{ virhe }</Typography> );
 }

 else if (shoes.length > 0) {
   return ( <Listing shoes={ shoes } /> );
 }

 return ( <Typography>Yhtään kenkää ei ole</Typography> );
}

export default getShoes;
