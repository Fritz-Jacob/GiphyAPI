console.log("script.js loaded");


const apiKey = "7YsGGa75GkwVCsk7VvLA0DZsK5TlIR5H";

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=batman&limit=8`;

async function fetchGifs() {
    try {
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

fetchGifs();
