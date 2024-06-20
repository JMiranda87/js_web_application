function emptyPokemon(container){
    if(container.children.length){
        container.removeChild(container.children[0]);
        container.removeChild(container.children[0]);
    }
}

export default emptyPokemon;