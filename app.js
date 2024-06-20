import imageFactory from "./image-factory.js";
import emptyPokemon from "./emptyelements.js";
import nameFactory from "./name-factory.js";
let result = document.querySelector('.result');
let randomPokemonButton =  document.querySelector('#randomPokemon');
async function logPokemon() {
    let randomPokemon = Math.floor(Math.random() * 1000);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`);
    const pokemon = await response.json();
    // console.log(pokemon.results);
    return pokemon;
}

// logPokemon().then((pokemon) => {

//     console.log(pokemon);
//     let pokemonImage = imageFactory(pokemon.sprites.front_default);
//     result.appendChild(pokemonImage);
// });

randomPokemonButton.addEventListener('click', () => {
    logPokemon().then((pokemon) => {
        emptyPokemon(result);
        // console.log(pokemon);
        let pokemonImage = imageFactory(pokemon.sprites.front_default);
        let pokemonName = nameFactory(pokemon.name);
        result.appendChild(pokemonName);
        result.appendChild(pokemonImage);
    });
})

