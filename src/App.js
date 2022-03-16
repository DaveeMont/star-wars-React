import './App.css';
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Characters from './components/Characters';
import {fetchCharacters} from "./swapi/swapi"; 
// 
import image1 from '../assets/luke.jpg'
import image2 from '../../assets/c-3PO.jpg'



function App() {
  let imagenes = ['luke.jpg', 'c-3PO.jpg', 'R2-D2.jpg', 'Darth Vsder.jpg', 'Leia Organa.jpg', 'Owen Lars.jpg', 'Beru Whitesun lars2.jpg', 'R5d4.jpg', 'Biggs Darklighter.jpg', 'Obi-Wan-Kenobi' ];
  for(var i=0;i< fetchCharacters; i++){
    console.log(imagenes);
  }
  //4 obtenemos el valor de response
  const [response, setResponse] = useState([]);
  //1 se ejecuta effect
  useEffect(async ()=> {
    //2 traemos data con fetch
    const res = await fetchCharacters();
    //3 guardamos en el state
    setResponse(res.results);
  },[]);
  
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">Hello World</Button>
        {/*5 Ocupamos la data 
        {
          name:'Luke skywalker'

        },
        {
          name:'cp0'

        }]


        */}
        {response.map(item => {
          return <Characters nombre={item.name} height={item.height} mass={item.mass} birth_year={item.birth_year}/>
        })}
      </header>
    </div>
  );
}

export default App;
