import "./App.css"
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";
import { useState,useEffect } from "react";
function App() {
 const[selectedpokemon,setselectedpokemon]=useState(true);
 const[pokemon,setpokemon]=useState([]);
 const[loading,setloading]=useState(true);
 const[error,seterror]=useState(null);
 useEffect(()=>{
  async function fetchpokemon(){
    try{
      setloading(true);
      const response=await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const data=await response.json();
      const detailedpokemon=await Promise.all(
        data.results.map(async(poke,index)=>{
          const res=await fetch(poke.url);
          const details=await res.json();
          return{
            id:details.id,
            name:details.name,
            image:details.sprites.front_default
         
          };
          
        })
      );
      console.log("fetched pokemon",detailedpokemon);
      setpokemon(detailedpokemon);
    }
    catch(err){
      seterror("failed to load pokemon");
    } finally{
      setloading(false);
    }
  }
  fetchpokemon();
},[]);

  return(
  <div className="app">
    <Header />
    <main className="content">
    {loading && <p>Loading Pokémon...</p>}
    {error && <p>{error}</p>}
      <div className="pokemon-grid">
       { pokemon.map((p) => (
        <PokemonCard
        key={p.id}
        name={p.name}
        image={p.image}
        onClick={()=>setselectedpokemon(p)}
        />
      ))}
      </div>
      <PokemonModal
      pokemon={selectedpokemon}
      onClose={()=>setselectedpokemon(null)}
      />
    </main>
  </div>
  );
}
export default App;