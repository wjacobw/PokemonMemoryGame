import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon/");
      result.json().then((json) => {
        setData(
          json.results.map((pokemon, id) => {
            return {
              name: pokemon.name,
              id: id,
              url: pokemon.url,
              img:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                (id + 1) +
                ".png",
            };
          })
        );
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((pokemon) => (
        <img key={pokemon.name} src={pokemon.img}></img>
      ))}
    </div>
  );
}

export default App;
