const searchInput = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-btn");
const loader = document.querySelector(".loader-container");
const pokemonGrid = document.querySelector(".pokemon-grid");
const modal = document.querySelector(".pokemon-modal");
const modalBody = document.querySelector(".modal-body");
const closeBtn = document.querySelector(".close-btn");

async function getPokemon(name) {

    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (!response.ok) {
            throw new Error("Pokemon not found");
        }

        const data = await response.json();

        createPokemonCard(data);

        pokemonGrid.innerHTML = `
        <div class="card ${data.types[0].type.name}">

            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">

            <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>

            <p class="pokemon-id">
                #${String(data.id).padStart(3, "0")}
            </p>

            <div class="badges">
                ${data.types.map(type => `
                    <span class="badge ${type.type.name}">
                        ${type.type.name}
                    </span>
                `).join("")}
            </div>

            <div class="stats">

                <p>
                    <strong>Height</strong>
                    ${data.height / 10} m
                </p>

                <p>
                    <strong>Weight</strong>
                    ${data.weight / 10} kg
                 </p>

            </div>

            <button class="details-btn">
                View Details
            </button>

        </div>
`;

    }

    catch (error) {

        alert("Pokémon not found!");

    }

}

function createPokemonCard(data){

    pokemonGrid.innerHTML = `
    
        <div class="card">

            <img src="${data.sprites.other["official-artwork"].front_default}">

            <h2>${data.name}</h2>

            <p>#${String(data.id).padStart(3,"0")}
            
            </p>

            <div class="badges">

                ${data.types.map(type => `
                    <span class="badge ${type.type.name}">
                        ${type.type.name}
                     </span>
                `).join("")}

            </div>

            <button class="details-btn" id="details-btn">
                View Details
            </button>


        </div>

    `;

    const detailsBtn = document.querySelector("#details-btn");

    detailsBtn.addEventListener("click", () => {

        showPokemonDetails(data);

    });

}

function showPokemonDetails(data){

    modal.style.display = "flex";

}





console.log(searchInput);
console.log(searchButton);
console.log(loader);
console.log(pokemonGrid);



searchButton.addEventListener("click", () => {

    const pokemonName = searchInput.value.toLowerCase().trim();

    getPokemon(pokemonName);

});


closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});
