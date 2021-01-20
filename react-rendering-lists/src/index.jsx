import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function RenderPokemon (props) {
  const pokedex = props.pokedex;
  const listPokedex = pokedex.map((pokemon) =>
    <li>
      {pokemon.name}
    </li>
  );
  return (
    <ul>
      {listPokedex}
    </ul>
  )
}

ReactDOM.render(
  <RenderPokemon pokedex={pokedex}/>,
  document.getElementById('root')
)
