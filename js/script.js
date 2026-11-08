console.log("script.js loaded");


const apiKey = "7YsGGa75GkwVCsk7VvLA0DZsK5TlIR5H";



const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");


async function fetchGifs(searchTerm) {
    try {
        const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=8`;

        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error("Failed to fetch GIFs");
        }

        const data = await response.json();

        const images = data.data.map(gif => gif.images.original.url);

        console.log(images);

        return images;
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return [];
    }
}


fetchButton.addEventListener("click", async function() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        alert("Please enter something to search for!");
        return;
    }

    const images = await fetchGifs(searchTerm);

    gifContainer.innerHTML = "";

    for (let image of images) {
        gifContainer.innerHTML += `<img src="${image}" class="col-3 mb-3">`;
    }
});
