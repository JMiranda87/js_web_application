import imageFactory from "./image-factory.js";
import emptyPokemon from "./emptyelements.js";
import nameFactory from "./name-factory.js";
let result = document.querySelector('.result');
let result2 = document.querySelector('.result2');
let userSearch = document.querySelector('#search');
let randomPokemonButton =  document.querySelector('#randomPokemon');
let searchPokemonButton =  document.querySelector('.search-btn');
let allPokemon;
async function logPokemon() {
    let randomPokemon = Math.floor(Math.random() * 1000);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`);
    const pokemon = await response.json();
    // console.log(pokemon.results);
    return pokemon;
}

async function getAllPokemon() {;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    const pokemon = await response.json();
    // console.log(pokemon.results);
    return pokemon;
}

async function getOnePokemon(url) {;
    const response = await fetch(url);
    const pokemon = await response.json();
    // console.log(pokemon.results);
    return pokemon;
}


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

searchPokemonButton.addEventListener('click', (e) => {
    e.preventDefault();
    getAllPokemon().then((pokemon) => {
        // console.log(userSearch.value);
        allPokemon = pokemon

    let foundPokemonURL =  findSpecificPokemonURL(userSearch.value);
    getOnePokemon(foundPokemonURL).then((usersPokemon) => {
        // console.log(usersPokemon);
        emptyPokemon(result2);
        // console.log(pokemon);
        let pokemonImage = imageFactory(usersPokemon.sprites.front_default);
        let pokemonName = nameFactory(usersPokemon.name);
        result2.appendChild(pokemonName);
        result2.appendChild(pokemonImage);
        
    })
        
    })
})


function findSpecificPokemonURL (pokemon){
    for (let i = 0; i < allPokemon.results.length; i++) {
        if (allPokemon.results[i].name === pokemon) {
            // console.log(allPokemon.results[i].name);
            return allPokemon.results[i].url
        }
        
    }
    alert("Pokemon not found")
        return false
}




