const url = " https://pokeapi.co/api/v2/pokemon/"

const card = document.getElementById("card")
const btn = document.getElementById("btn")


let getPokeData = () => {
    // Generate random number to get pokemon
    let id = Math.floor(Math.random() * 150) + 1 
    //combine url and pokemon id
    const finalUrl = url + id 
    //fetch
    fetch(finalUrl).then((response) => response.json())
    .then((data) => {
        generateCard(data)
    })
}

//generate card
let generateCard = (data) => {
    //get necessary data and assign to variables
    const hp = data.stats[0].base_stat
    const imgSrc = data.sprites.other.dream_world.front_default
    const pokeName = data.name 
    const statAttack = data.stats[1].base_stat
    const statDefense = data.stats[2].base_stat
    const statSpeed = data.stats[5].base_stat

    card.innerHTML = `
        <p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src="${imgSrc}" alt="">
            <h2 class="poke-name">${pokeName}</h2>
            <div class="types">
                <span>type 1</span>
                <span>type 2</span>
            </div>
            <div class="stats">
                <div>
                    <h3>${statAttack}</h3>
                    <h3>Attack</h3>
                </div>
                <div>
                    <h3>${statDefense}</h3>
                    <h3>Defense</h3>
                </div>
                <div>
                    <h3>${statSpeed}</h3>
                    <h3>Speed</h3>
                </div>
            </div>
        </div>
    
    
    `
}

btn.addEventListener("click", getPokeData)
window.addEventListener("load", getPokeData)

