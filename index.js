//Remove de cards
let section = document.getElementById("section");
section.remove();

const container = document.getElementById("container");

fetch("https://pokeapi.co/api/v2/pokemon").then((response) => {
    return response.json();
}).then((pokemons) => {

    pokemons.results.forEach((pokemon) => {
        const ul = document.createElement("ul");

        const li = document.createElement("li");
        li.innerText = pokemon.name

        ul.append(li);

        container.append(ul);
    });
});
