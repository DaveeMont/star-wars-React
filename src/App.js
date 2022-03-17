import './App.css';
import React, {useEffect, useState} from 'react';
import Characters from './components/Characters';
import {fetchCharacters} from "./swapi/swapi"; 

function App() {
  let imagenes = [ 
    // {
    //   name: 'Luke Skywalker',
    //   src: 'https://as01.epimg.net/meristation/imagenes/2021/05/25/noticias/1621938791_013232_1621939095_noticia_normal.jpg',
    //  }
    
      {
        name: 'Luke Skywalker',
        src: require('./assets/luke.jpg'),
       },
       {
        name: 'C-3PO',
        src: require('./assets/c-3PO.jpg'),
       },
       {
         name: 'R2-D2',
         src: require('./assets/R2-D2.jpg'),
       },
       {
         name: 'Darth Vader',
         src: require('./assets/Darth Vader.jpg'),
       },
       {
         name: 'Leia Organa',
         src: require('./assets/Leia Organa.jpg'),
       },
       {
         name: 'Owen Lars',
         src: require('./assets/Owen Lars.jpg'),
       },
       {
         name: 'Beru Whitesun lars',
         src: require('./assets/Beru Whitesun lars2.jpg'),
       },
       {
         name: 'R5-D4',
         src: require('./assets/R5d4.webp2.jpg'),
       },
       {
         name: 'Biggs Darklighter',
         src: require('./assets/Biggs Darklighter.jpg'),
       },
       {
         name: 'Obi-Wan Kenobi',
         src: require('./assets/Obi-Wan Kenobi.jpg'),
       }

  ];
 

  //4 obtenemos el valor de response
  const [response, setResponse] = useState([]);
  //1 se ejecuta effect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=> {
    //2 traemos data con fetch
    const res = await fetchCharacters();
    //3 guardamos en el state
    setResponse(res.results);
  },[]);
  
  return (
    <div className="App" background="black"
       style={{
            padding: 1,
            background: "yellow",
          }}>
      <header className="App-header" background="black">
        
        {response.map(item => {
          const comparador = imagenes.filter(image => image.name===item.name);
          if(comparador.length > 0){
            const image = comparador[0].src;
            return <Characters 
                      nombre={item.name}
                      height={item.height}
                      mass={item.mass} 
                      birth_year={item.birth_year} 
                      imagen={image}
                    />
          }
        })}
      </header>
    </div>
  );
}

export default App;