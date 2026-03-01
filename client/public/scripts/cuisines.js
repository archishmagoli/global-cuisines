import { CuisineCard } from "../components/cuisine.js";

const getCuisines = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cuisines`);
    const data = await response.json();
    return data;
}

const container = document.querySelector('#cuisineContainer');

const init = async () => {
    const cuisineData = await getCuisines();
    cuisineData.forEach(cuisine => {
        const card = CuisineCard(cuisine, false, true)
        container.appendChild(card);
    })
}

init();