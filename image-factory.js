function imageFactory(imageUrl) {
    let pokemonImage = document.createElement('img');
    pokemonImage.src = imageUrl;
    return pokemonImage;
}

export default imageFactory;

