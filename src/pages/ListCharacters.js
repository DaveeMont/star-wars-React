import React, {useEffect,useState} from 'react'
import { fetchCharacters } from '../swapi/swapi';
import Characters from '../components/Characters';
import { imagenes } from '../Imagenes'; 

export default function ListCharacters() {
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
