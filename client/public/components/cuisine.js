export const CuisineCard = (cuisine, showDetails = false, showButton = false) => {
    const card = document.createElement('div');
    card.className = 'cuisine-card';

    const cuisineDetail = document.createElement('div');
    card.appendChild(cuisineDetail);

    const imageOverlay = document.createElement('img');
    imageOverlay.src = cuisine.image;
    card.append(imageOverlay);

    const nameHeader = document.createElement('h3');
    const cuisineName = document.createTextNode(cuisine.name);  
    nameHeader.appendChild(cuisineName);
    cuisineDetail.appendChild(nameHeader);

    const descriptionHeader = document.createElement('p');
    descriptionHeader.innerHTML = '<strong>' + cuisine.description + '</strong>';
    cuisineDetail.appendChild(descriptionHeader);

    // Only show details in the "Learn More" pages
    if (showDetails) {
        const signatureDishParagraph = document.createElement('p');
        signatureDishParagraph.innerHTML = '<strong>Signature Dish:</strong> ' + cuisine.signatureDish
        cuisineDetail.appendChild(signatureDishParagraph);

        const flavorProfileParagraph = document.createElement('p');
        flavorProfileParagraph.innerHTML = '<strong>Flavor Profile:</strong> ' + cuisine.flavorProfile
        cuisineDetail.appendChild(flavorProfileParagraph);

        const submittedByParagraph = document.createElement('p');
        submittedByParagraph.innerHTML = '<strong>Submitted By:</strong> ' + cuisine.submittedBy
        cuisineDetail.appendChild(submittedByParagraph);
    }

    // Add event listener to button to lead to details page
    if (showButton) {
        const learnMoreButton = document.createElement('button');
        learnMoreButton.textContent = 'Learn More';
        learnMoreButton.addEventListener('click', () => {
            window.location.href = `/cuisine.html?id=${cuisine.id}`
        })
        card.appendChild(learnMoreButton);
    }

    return card;
}