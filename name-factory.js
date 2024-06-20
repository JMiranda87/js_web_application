function nameFactory(name){
    let pokemonName = document.createElement('h1');
    pokemonName.textContent = name;
    return pokemonName;
}

export default nameFactory;