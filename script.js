const searchInput = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-btn");
const loader = document.querySelector(".loader-container");
const pokemonGrid = document.querySelector(".pokemon-grid");
const modal = document.querySelector(".pokemon-modal");
const modalBody = document.querySelector(".modal-body");
const closeBtn = document.querySelector(".close-btn");
const typeButtons = document.querySelectorAll(".type");
const loadMoreBtn = document.querySelector(".load-more-btn");
const suggestionsBox = document.querySelector(".suggestions-box");
const searchBox = document.querySelector(".search-box");
loadMoreBtn.style.display = "none";
let currentPokemonList = [];
let currentIndex = 0;
let allPokemonNames = [];
const POKEMON_PER_LOAD = 20;



typeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedType = button.dataset.type;
        getPokemonByType(selectedType);
    });
});



async function getPokemon(name) {

    try {

        loader.style.display = "flex";

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (!response.ok) {
            throw new Error("Pokemon not found");
        }

        const data = await response.json();

        console.log(data.stats);

        createPokemonCard(data);

        

    }

    catch (error) {

        alert("Pokemon not found!");

    }

}

async function getPokemonByType(type){

    try{

        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

        const data = await response.json();

        pokemonGrid.innerHTML = "";

        
        
        currentPokemonList = data.pokemon;

        currentIndex = 0;

        loadMoreBtn.style.display = "block";

        await loadMorePokemon();

        loader.style.display = "none";

    }

    catch(error){

        loader.style.display = "none";

        console.log(error);

    }

}

async function loadMorePokemon(){

    const end = Math.min(
        currentIndex + POKEMON_PER_LOAD,
        currentPokemonList.length
    );

    for(let i = currentIndex; i < end; i++){

        const pokemonName = currentPokemonList[i].pokemon.name;

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

        );

        const pokemonData = await response.json();

        createPokemonCard(pokemonData);
    }

    currentIndex = end;

    if (currentIndex >= currentPokemonList.length) {

        loadMoreBtn.style.display = "none";

    }

}

function createPokemonCard(data){

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

        <img src="${data.sprites.other["official-artwork"].front_default}">

        <h2>${data.name}</h2>

        <p>#${String(data.id).padStart(3,"0")}</p>

        <div class = "badges">

            ${data.types.map(type => `
                <span class="badge ${type.type.name}"
                    ${type.type.name}
                </span>

            `).join("")}

        </div>

        <button class = "details-btn">
            View Details
        </button>

    `;

    const detailsBtn = card.querySelector(".details-btn");

    detailsBtn.addEventListener("click", () => {

        showPokemonDetails(data);
    });

    pokemonGrid.appendChild(card);

}

function showPokemonDetails(data) {

    modal.style.display = "flex";

    modalBody.innerHTML = `

        <img
            class="modal-image"
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="${data.name}"
        >

        <h2>${data.name.toUpperCase()}</h2>

        <p class="pokemon-id">
            #${String(data.id).padStart(3,"0")}
        </p>

        <div class = "modal-types">
            
            ${data.types.map(type => `
                <span class="badge ${type.type.name}">
                    ${type.type.name}
                </span>
            `).join("")}
        
        </div>

        <div class="modal-info">

            <p><strong>Height:</strong> ${data.height / 10} m</p>

            <p><strong>Weight:</strong> ${data.weight / 10} kg</p>

            <p><strong>Base Experience:</strong> ${data.base_experience}</p>

        </div>


        <h3>Abilities</h3>

        <div class="abilities">

            ${data.abilities.map(ability => `
                <span class="ability">
                    ${ability.ability.name}
                </span>
            `).join("")}

        </div>

        <h3>Base Stats</h3>

        <div class="stats-container">
            ${data.stats.map(stat =>  `
                <div class="stat">
                    <div class="stat-header">
                        <span>
                            ${
                                stat.stat.name === "hp" ? "HP":
                                stat.stat.name === "attack" ? "Attack":
                                stat.stat.name === "defense" ? "Defense":
                                stat.stat.name === "special-attack" ? "Sp.Attack":
                                stat.stat.name === "special-defense" ? "Sp.Defense":
                                stat.stat.name === "speed" ? "Speed":
                                stat.stat.name
                            }
                        </span>
                        <span>${stat.base_stat}</span>
                    </div>
                    <div class="stat-bar">
                        <div
                            class="stat-fill"
                            style="
                                width:${Math.min(stat.base_stat,150)/ 1.5}%;
                                background:${
                                    stat.base_stat >= 100
                                        ? '#22c55e'
                                        : stat.base_stat  >= 70
                                        ? '#facc15'
                                        : '#ef4444 '
                                };
                            "
                        ></div>
                    </div>
                </div>
            `).join("")}
        </div>

    `;

}





console.log(searchInput);
console.log(searchButton);
console.log(loader);
console.log(pokemonGrid);
console.log(modal);
console.log(modalBody);
console.log(closeBtn);
console.log(suggestionsBox);

async function loadAllPokemonNames(){

    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

    );

    const data = await response.json();
    allPokemonNames = data.results.map(pokemon => pokemon.name);

    console.log(allPokemonNames);
}


loadAllPokemonNames();

async function searchPokemon() {

    const pokemonName = searchInput.value.toLowerCase().trim();

    if (pokemonName === "") return;

    await getPokemon(pokemonName);

}




searchButton.addEventListener("click",searchPokemon);


closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

loadMoreBtn.addEventListener("click", async () => {

    await loadMorePokemon();

});

searchBox.addEventListener("input",() =>{

    const searchText = searchBox.value.toLowerCase();


    console.log(searchText);

    const matchedPokemon = allPokemonNames
        .filter(pokemon => pokemon.startsWith(searchText))
        .slice(0,10);

    suggestionsBox.innerHTML = "";

    if(searchText === ""){

        suggestionsBox.style.display = "none";

        return;

    }

    matchedPokemon.forEach(pokemon => {

    const suggestion = document.createElement("div");

    suggestion.textContent = pokemon;
    
    suggestion.addEventListener("click", async () => {

        searchBox.value = pokemon;

        suggestionsBox.innerHTML = "";

        suggestionsBox.style.display = "none";

        await searchPokemon();

    });
    suggestionsBox.appendChild(suggestion);

    });

    suggestionsBox.style.display = "block";



    
})
