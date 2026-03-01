const header = document.createElement('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const cuisineHeader = document.createElement('h1');
const cuisineTitle = document.createTextNode('Cuisines Around the World');  
cuisineHeader.appendChild(cuisineTitle);

const cuisineParagraph = document.createElement('h3');
const cuisineDescription = document.createTextNode('Explore the top 10 cuisines from around the world, submitted by our community.');  
cuisineParagraph.appendChild(cuisineDescription);

const allButton = document.createElement('button');
allButton.textContent = 'Browse All Cuisines';
allButton.addEventListener('click', () => {
    window.location.href = `/`
})

headerContainer.appendChild(cuisineHeader);
headerContainer.appendChild(cuisineParagraph);
headerContainer.appendChild(allButton);

header.appendChild(headerContainer);
document.body.prepend(header);