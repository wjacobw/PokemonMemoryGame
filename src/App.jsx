import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [data, setData] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then((json) => {
        setData(json.results);
        console.log(json.results);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then((json) => {
        setPokemonImg()
      })
    }
  })

  return (
    <div>
      {data.map((pokemon) => {
        return (
          <div key = {pokemon.name}>
            <p key={pokemon.name}>{pokemon.name}</p>
            {pokemon.url}
            <img key = {pokemon.name}></img>
          </div>
        );
      })}
      <p>aaaaa</p>
    </div>
  );
}

export default App;
