import { CuisineCard } from "../components/cuisine.js";

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

const getCuisine = async () => {
    if (!id || isNaN(id)) {
        window.location.href = '/404'
        return
    }

    console.log(`${import.meta.env.VITE_API_URL}/cuisines/${id}`);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cuisines/${id}`);

    if (!response.ok) {
        window.location.href = '/404'
        return
    }
    const data = await response.json();
    return data;
}

const container = document.querySelector('#cuisineDetail');
const init = async () => {
    console.log("Do we get here");
    const cuisine = await getCuisine();
    const card = CuisineCard(cuisine, true)
    container.appendChild(card);
}

init();