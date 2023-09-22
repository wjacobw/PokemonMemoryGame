import { useEffect } from "react";
import { useState } from "react";
import "./App.css";



function App() {
  const [data, setData] = useState([]);
  const [random, setRandom] = useState(Math.floor(Math.random() * data.length));
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);
  const [maxPoint, setMaxPoint] = useState(0);


  function checkName() {
    
    if (name === data[random]?.name) {
      setPoint(point + 1)
      setRandom(Math.floor(Math.floor(Math.random() * data.length)))
      if (point + 1 > maxPoint) {
        setMaxPoint(point + 1)
      }
    } else {
      setPoint(0)
      setRandom(Math.floor(Math.floor(Math.random() * data.length)))
    }
  }
  function handleInput(e) {
    setName(e.target.value);
   
  }


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
    <div className = "game">
      <div className = "score">
      <p>Current Score: {point}</p>
      <p>High Score: {maxPoint}</p>
      
      </div>
      <img src = {data[random]?.img }></img>
      <hr/>
      
      <input onChange = {handleInput} placeholder = "Pokemon Name"/>
      &nbsp;&nbsp;&nbsp;
      <button onClick = {checkName}>Confirm</button>
    </div>
  );
}

export default App;
