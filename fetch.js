// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

//GET de la url base, incluyendo el id o nombre de pokemon
const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}


// imprimir el pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.name);
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        const name = pokemon.name;
        const id = pokemon.id;
        const weight = pokemon.weight;
        imprimirDoom(id,name,weight,image);
        console.log(pokemon.name);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
})

// obtener el anterior
//
//
// obtener el siguiente

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
    })

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon);
    })



////////////////// POST
//


function imprimirDoom (id,name,weight,image) {   
    const Pokemon = {
        id: id,
        user_name: name,
        weight: weight
    }
    const section = document.getElementById('names')
    
    const pokemon_image = document.createElement('img')
    const user_id = document.createElement('h3');
    const user_name = document.createElement('p')
    const user_weight = document.createElement('p')
    pokemon_image.src = image;
    user_id.innerHTML = Pokemon.id;
    user_name.innerHTML = Pokemon.user_name;
    user_weight.innerHTML = Pokemon.weight;

    section.append(pokemon_image,user_id,user_name,user_weight)

}

// async function ejemplo(){
//     const data = await fetch('https://pokeapi.co/api/v2/pokemon/1');
//     //.then(res => res.json())
//     //.then(res => console.log(res.json()))
//     const parsedData = await data.json();
//     console.log(parsedData.id);
//     console.log(parsedData.name);
//     console.log(parsedData.weight);
//     console.log(parsedData.media)
// }

// console.log(ejemplo())

/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
