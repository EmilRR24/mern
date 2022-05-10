import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


const Example = (props) => {
  // ----- VANILLA STATE ---------------//
  // const [pokemon, setPokemon] = useState([]);

  const [pokemon, setPokemon] = useState();

  const pokemonHandler = () => {
    // --------------VANILLA JS METHOD (FETCH)-----------//
    // fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      // SUCCESSFUL RESPONSE
      // .then(response => response.json())
      // .then(response => setPokemon(response.results))
      // UNSUCCESSFUL RESPONSE
      // .catch(err => console.error("ERROR", err))

    // -------------AXIOS----------------------------//
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      // SUCCESSFUL RESPONSE
      .then(response => {
        console.log("SUCCESS", response.data) 
        setPokemon(response.data)
      })
      // UNSUCCESSFUL RESPONSE
      .catch(err => console.error("ERROR", err)) 
  };



  return (
    <fieldset style={{textAlign:'center'}}>
      <div>
        {/* <legend>App.js</legend> */}
        <button onClick={pokemonHandler}>Fetch Pokemon</button>
        {
        // ----- VANILLA FUNCTION TO DISPLAY DATA ----------------------//
        /* {pokemon.length > 0 && pokemon.map((poke, index)=>{
          return (<li key={index}>{index}: {poke.name}</li>)
        })} */

        pokemon &&
        pokemon.length > 0 && pokemon.map((poke, index)=>{
          return (<li key={index}>{poke.name}</li>)})
          
        }
      </div>
    </fieldset>
  );
}
export default Example;


