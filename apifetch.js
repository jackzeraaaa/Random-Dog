const img = document.querySelector("img")
const loadingCircle = document.querySelector(".loading-circle")

const generateDog = () => {
    loadingCircle.classList.remove("invisible");

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        img.src = data.message;
        loadingCircle.classList.add("invisible")
    })
}

const generateCat = () => {
    loadingCircle.classList.remove("invisible");

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        img.src = data[0].url;
        loadingCircle.classList.add("invisible")
    })
}