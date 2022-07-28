const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const fetchPokemons = async() =>{
    for(let i = 1; i<=pokemons_number;i++){
        await getPokemon(i);
    }
}

const getPokemon = async (id) =>{
    const url = ' https://pokeapi.co/api/v2/pokemon/'+id.toString();
    const res = await fetch(url);
    const pokemon = await res.json()
    createPokemondCard(pokemon)
}

const createPokemondCard = (pokemon) => {
    const {name,types,sprites,id} = pokemon;
    const type = types[0].type.name
    const pokemonDiv= document.createElement('div');
    pokemonDiv.classList.add('pokemon');
    pokemonDiv.classList.add('grow');
    const pokemonInnerHtml = `
    <div class = 'img-container'>
    <img src ='${sprites.front_default}' alt='${name}'/>
    </div>
    <div class ='info'>
    <span class='number'>${id}</span>
    <h3 class = 'name'>${name}</h3>
    <small class='type'>${type}</small>
    </div>
    `;
    pokemonDiv.innerHTML = pokemonInnerHtml;
    poke_container.appendChild(pokemonDiv);

}


const toggle = document.getElementById("toggle");
        toggle.addEventListener("click", ()=>{
            toggle.classList.toggle("active");
            $('.menu_principal').toggle();
        })
fetchPokemons()