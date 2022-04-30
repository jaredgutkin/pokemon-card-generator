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
    console.log(hp)
}

btn.addEventListener("click", getPokeData)
window.addEventListener("load", getPokeData)

