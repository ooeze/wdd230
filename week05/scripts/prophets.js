// Declare the URL of the JSON resource
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the HTML div element with the id "cards"
const cards = document.querySelector('#cards');

// Define an async function to fetch data from the JSON source
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // Check the data response in the console

    // Comment out the console line and call displayProphets
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

// Define a function expression to display prophets
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create a section element for the card
        const card = document.createElement('section');
        card.classList.add('card');

        // Create an h2 element for the full name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create additional elements for more information
        const birthdate = document.createElement('p');
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;

        const birthplace = document.createElement('p');
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        const children = document.createElement('p');
        children.textContent = `Number of Children: ${prophet.numofchildren}`;

        const lengthOfService = document.createElement('p');
        lengthOfService.textContent = `Length of Service: ${prophet.length}`;

        // Create an img element for the portrait
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200'); // Example width
        portrait.setAttribute('height', '250'); // Example height

        // Append all elements to the card
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(children);
        card.appendChild(lengthOfService);
        card.appendChild(portrait);

        // Append the card to the cards div
        cards.appendChild(card);
    });
}

// Call the function to fetch and display prophet data
getProphetData();
