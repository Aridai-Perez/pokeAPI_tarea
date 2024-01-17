// Fetch
//
// POST

const BASE_URL = "https://pokeapi.co/api/v2/";
const IMAGE_CONTAINER = document.querySelector(".img-container");
const INFO_CONTAINER = document.querySelector(".info-container");

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        // const response = await fetch(`${BASE_URL} ${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        localStorage.setItem('currentPokeName', pokemon.name);
        localStorage.setItem('currentPokeWeight', pokemon.weight);      
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        const name = localStorage.getItem('currentPokeName');
        const id = localStorage.getItem('currentPokeId');
        const weight = localStorage.getItem('currentPokeWeight');
        imprimirDoom(id, name, weight, image);
        console.log(pokemon.name, pokemon.id, pokemon.weight);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const storedName = localStorage.getItem('currentPokeName');
    const storedWeight = localStorage.getItem('currentPokeWeight');
    const initialId = storedId ? parseInt(storedId) : 1;
    const initialName = storedName ? parseInt(storedName) : 1;
    const initialWeight = storedWeight ? parseInt(storedWeight) : 1;
    const pokemon = await fetchPokemon(initialId, initialName, initialWeight);
    console.log(pokemon.name, pokemon.id, pokemon.weight);
})



// // obtener el anterior
// document.getElementById('previous-btn')
//     .addEventListener('click', async () => {
//         const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
//         const newId = Math.max(1, currentPokeId - 1);
//         const pokemon = await fetchPokemon(newId);
//         console.log(pokemon.name);
//     })

// // obtener el siguiente
// document.getElementById('next-btn')
//     .addEventListener('click', async () => {
//         const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
//         const newId = currentPokeId + 1;
//         const pokemon = await fetchPokemon(newId);
//         console.log(pokemon);
//     })



////////////////// IMPRIMIR EN EL HTML

function imprimirDoom(id, name, weight, image) {
    const Pokemon = {
        id: id,
        name: name,
        weight: weight
    }
    const section = document.getElementById('names')

    const pokemon_image = document.createElement('img')
    const user_id = document.createElement('h3');
    const user_name = document.createElement('p')
    const user_weight = document.createElement('p')
    pokemon_image.src = image;
    user_id.innerHTML = `ID: ${Pokemon.id}`;
    user_name.innerHTML = `NAME: ${Pokemon.name}`;
    user_weight.innerHTML = `WEIGHT: ${Pokemon.weight}`;

    section.append(pokemon_image, user_id, user_name, user_weight)

}

/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
