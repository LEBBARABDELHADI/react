import React from 'react'


const Films007 = () => {
  const [films, setFilms] = React.useState([]);
  //useEffect : Accepte une fonction qui contient du code impératif, pouvant éventuellement produire des effets.
  React.useEffect(() => {
    //const url="http://swapi.dev/api/people/"
    const url="https://sbrunet.fr/react/exemple/6-spa-react/2-react-router-app/jb.js"
    //const url="../jb.js"
    fetch(url)
      .then(response => response.json())
      .then(json => setFilms(json.en.items));
  }, []);// pour ne pas faire des appels fetch en boucle
  return (
    <div>
      <ol id="jb">
        {console.info(films)}
         {films.map((item, index) => (
           <li key={index}> "{item}"</li>
        ))}
      </ol>
    </div>
  );
};


export default Films007
