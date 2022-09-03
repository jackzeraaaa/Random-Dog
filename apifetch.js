const generateDog = () => {
    const img = document.querySelector("img")
    const loadingCircle = document.querySelector(".loading-circle")
    loadingCircle.classList.remove("invisible");

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        img.src = data.message;
        loadingCircle.classList.add("invisible")
    })
}