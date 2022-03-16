import './App.css';
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Characters from './components/Characters';
import {fetchCharacters} from "./swapi/swapi"; 
import { convertLength } from '@mui/material/styles/cssUtils';
// 
// import image1 from '../assets/luke.jpg'


function App() {
  let imagenes = [ 
    {
      name: 'Luke Skywalker',
      src: 'https://as01.epimg.net/meristation/imagenes/2021/05/25/noticias/1621938791_013232_1621939095_noticia_normal.jpg',
     },
     {
      name: 'C-3PO',
      src: 'https://as01.epimg.net/meristation/imagenes/2021/05/25/noticias/1621938791_013232_1621939095_noticia_normal.jpg',
     },
     {
       name: 'R2-D2',
       src: ''
     },
     {
       name: 'Darth Vader',
       src: ''
     },
     {
       name: 'Leia Organa',
       src: ''
     }
    
  ]
      

    //, 'c-3PO.jpg', 'R2-D2.jpg', 'Darth Vsder.jpg', 'Leia Organa.jpg', 'Owen Lars.jpg', 'Beru Whitesun lars2.jpg', 'R5d4.jpg', 'Biggs Darklighter.jpg', 'Obi-Wan-Kenobi' ];
  // for(var i=0;i< fetchCharacters; i++){
  //   console.log(imagenes);
  // }

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
        
        {response.map(item => {
          //  const image = "https://as01.epimg.net/meristation/imagenes/2021/05/25/noticias/1621938791_013232_1621939095_noticia_normal.jpg"
          const comparador = imagenes.filter(image => image.name===item.name) 
          const image = comparador[0].src;
          return <Characters nombre={item.name} height={item.height} mass={item.mass} birth_year={item.birth_year} imagen={image ? image : ''}/>
        })}
      </header>
    </div>
  );
}

export default App;
