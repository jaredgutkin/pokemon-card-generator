const url = " https://pokeapi.co/api/v2/pokemon/"

const card = document.getElementById("card")
const btn = document.getElementById("btn")


let getPokeData = () => {
    // Generate random number to get pokemon
    let id = Math.floor(Math.random() * 150) + 1 
    console.log(id)

    const finalUrl = url + id 
    console.log(finalUrl)
}

btn.addEventListener("click", getPokeData)

