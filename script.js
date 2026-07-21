const searchInput = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-btn");
const loader = document.querySelector(".loader-container");
const pokemonGrid = document.querySelector(".pokemon-grid");
const modal = document.querySelector(".pokemon-modal");
const modalBody = document.querySelector(".modal-body");
const closeBtn = document.querySelector(".close-btn");
const typeButtons = document.querySelectorAll(".type")

typeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedType = button.dataset.type;
        getPokemonByType(selectedType);
    });
});

async function getPokemon(name) {

    try {

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

        for(const item of data.pokemon){

            console.log(item.pokemon.name);

        }

    }

    catch(error){

        console.log(error);

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




searchButton.addEventListener("click", () => {

    const pokemonName = searchInput.value.toLowerCase().trim();

    getPokemon(pokemonName);

});


closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});
