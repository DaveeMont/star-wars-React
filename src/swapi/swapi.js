const SWAPI_CHARACTERS_URL = "https://swapi.dev/api/people/"; //llamamos la api people

export async function fetchCharacters(){    //funcion para mandar a llamar los personajes 
    const data = await fetch(SWAPI_CHARACTERS_URL) 
    return await data.json();
}
