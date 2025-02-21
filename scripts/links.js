// Base URL for your GitHub Pages repository
const baseURL = "https://ooeze.github.io/wdd230/";

// URL to the JSON file containing the links
const linksURL = `${baseURL}data/links.json`;

// Asynchronous function to fetch JSON data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayLinks(data.weeks); // Call displayLinks with the weeks array
    } catch (error) {
        console.error("Error fetching the links:", error);
    }
}

// Function to display links dynamically
function displayLinks(weeks) {
    const activitiesContainer = document.getElementById("activities");

    // Ensure the container is empty before inserting new content
    activitiesContainer.innerHTML = "";

    weeks.forEach(week => {
        // Create a section for each week
        const weekSection = document.createElement("section");
        const weekTitle = document.createElement("h2");
        weekTitle.textContent = week.week;

        // Create an unordered list for the links
        const linkList = document.createElement("ul");

        week.links.forEach(activity => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");

            link.href = activity.url;  // Set link URL
            link.textContent = activity.title;  // Set link text
            link.target = "_blank"; // Open in a new tab

            listItem.appendChild(link);
            linkList.appendChild(listItem);
        });

        // Append the week title and list to the section
        weekSection.appendChild(weekTitle);
        weekSection.appendChild(linkList);

        // Append the section to the activities container
        activitiesContainer.appendChild(weekSection);
    });
}

// Call the function to fetch and display the links
getLinks();
